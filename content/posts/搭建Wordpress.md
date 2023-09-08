+++
title = '搭建Wordpress'
date = 2023-01-30T20:00:00+08:00
draft = false
comments = true
math = true
+++

## 介绍

由于想给网站开启 Markdown 输入，安装 Jetpack 插件，网站报错 E_ERROR，Error message: Uncaught Exception: No filesystem available，无法解决。
这个插件是很常用的插件，故猜测是之前乱改文件权限导致的，而 WordPress 又是对文件权限要求很严的一个系统。既然解决不了，索性直接重开，顺便记录一下流程。

## 服务器系统重装及环境和安全配置

### 系统重装

一般来说服务器厂商都会提供重装系统的选项，这里选择 Ubuntu 系统，因为 Ubuntu 可以通过添加 PPA 来安装程序，方便管理和一键安装。

### SSH 连接

通过服务器厂商提供的密码来 SSH 连接，建议用 tmux 进行连接，以达到持续连接。
macOS iTerm2 终端可以使用 tmux 集成：

```shell
ssh -t root@example.com 'tmux -CC new -A -s main'
```

example.com 换成自己服务器的域名或 IP；非 iTerm2 终端 删掉 -CC 就行。
第一次连接服务器会需要添加服务器指纹，输入 yes 即可。
![[CleanShot 2023-02-13 at 23.22.34@2x.png]]

为提高服务器的安全性，建议通过 SSH 密钥登陆，如果本机上已有 SSH 密钥，可以将公钥添加到服务器上：

```shell
ssh-copy-id root@example.com
```

之后就不需要再输入密码连接了。
如果没有 SSH 密钥，可以自行生成，我是用[1Password](https://developer.1password.com/docs/ssh/)管理 SSH 密钥的。

### 系统更新

由于我个人的 dotfile 需要安装的 exa，对 Ubuntu 的版本要求是 20.10 以上，而目前 20.04 的系统还是占大多数的，所以需要更新系统。

```shell
apt update
apt upgrade
apt install update-manager-core
do-release-upgrade
```

这时候 tmux 连接就派上用场了，因为普通的 SSH 连接更新系统很容易失败。
更新完成后重启即可。

### 环境配置

我个人的 dotfiles 是通过 chezmoi 管理的，dotfile 仓库存储在 Github 上。
该仓库 linux 操作系统会自动安装 Neovim，zsh，Oh My Zsh，Powerlevel10k，The Fuck，Python，Node.js，build-essential 等最常用的命令行程序，如有需要可以直接用我的 dotfiles。
首先需要安装 chezmoi，这里采取两种方式：

1. sh 脚本安装
   仓库中有一个 install.sh 脚本，可以直接安装最新的 chezmoi 和我的 dotfiles:
   ```shell
   git clone https://github.com/HuaDeity/dotfiles.git
   cd dotfiles
   sh ./install.sh
   ```
2. snap 安装
   由于 chezmoi 没有提供 apt 安装，虽然 snap 恶评如潮，但也是一种安装方式。
   `shell
apt install snapd
snap install core
snap refresh core
snap install chezmoi --classic
/snap/bin/chezmoi init --apply HuaDeity`
   这里可以看到/snap/bin 并不在环境路径中，但我的 dotfiles 加入了该路径，安装完 dotfiles 后就不再需要/snap/bin 了。

exit 退出，之后重新 SSH 登陆，使 zsh 生效。重新登录后，nvim 初始化 neovim 配置。
至此，一个便于使用的命令行环境就配好了。

### 安全配置

服务器的安全至关重要，如果被他人盗用，个人信息，服务器资源以及财产安全都会面临风险。这里对服务器安全进行初步配置。

#### 禁用 SSH 密码登陆

前面已经提到通过 SSH 密钥登陆，既方便又安全，禁用密码登陆，这样只有有 SSH 私钥才能登陆服务器。

```shell
nvim /etc/ssh/sshd_config
```

找到 PasswordAuthtication，取消注释，并将 yes 改为 no。重启 ssh 服务:

```shell
systemctl restart ssh.service
```

一定要用密钥登陆，如果用密码登陆，这里会被强制登出。

#### Fail2Ban 配置

Fail2Ban 通常用于更新防火墙规则，以便在指定时间内拒绝 IP 地址。

安装 Fail2Ban，编辑 Fail2ban 规则:

```shell
apt install fail2ban
nvim /etc/fail2ban/jail.local
```

写入，该服务会监视 ssh 端口，出现问题则发邮件到 destemail：

```editorconfig
[DEFAULT]
destemail = your@email.here
sendername = Fail2Ban

[sshd]
enabled = true
port = 22

[sshd-ddos]
enabled = true
port = 22
```

更改 Fail2Ban 后端：

```shell
vim /etc/fail2ban/jail.conf
```

改为 backend = systemd。

重启 Fail2ban 服务:

```shell
systemctl restart fail2ban
```

#### 防火墙配置

使用 iptables-persistent 永久保存 iptables 规则。

```shell
apt install -y iptables-persistent
```

之后分别编辑/etc/iptables/rules.v4 和/etc/iptables/rules.v6 文件

```editorconfig
*filter

#  Allow all loopback (lo0) traffic and drop all traffic to 127/8 that doesn't use lo0
-A INPUT -i lo -j ACCEPT
-A INPUT ! -i lo -d 127.0.0.0/8 -j REJECT

#  Accept all established inbound connections
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

#  Allow all outbound traffic - you can modify this to only allow certain traffic
-A OUTPUT -j ACCEPT

#  Allow HTTP and HTTPS connections from anywhere (the normal ports for websites and SSL).
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -p tcp --dport 443 -j ACCEPT

#  Allow SSH connections
#  The -dport number should be the same port number you set in sshd_config
-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT

#  Allow ping
-A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT

# Allow destination unreachable messages, especially code 4 (fragmentation required) is required or PMTUD breaks
-A INPUT -p icmp -m icmp --icmp-type 3 -j ACCEPT

#  Log iptables denied calls
-A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables denied: " --log-level 7

#  Reject all other inbound - default deny unless explicitly allowed policy
-A INPUT -j REJECT
-A FORWARD -j REJECT

COMMIT
```

iptables-persistent 会在启动时自动加载，这里不重启就需要手动加载:

```shell
iptables-restore < /etc/iptables/rules.v4
```

ipv6 同样:

```editorconfig
*filter

#  Allow all loopback (lo0) traffic and drop all traffic to 127/8 that doesn't use lo0
-A INPUT -i lo -j ACCEPT
-A INPUT ! -i lo -d ::1/128 -j REJECT

#  Accept all established inbound connections
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

#  Allow all outbound traffic - you can modify this to only allow certain traffic
-A OUTPUT -j ACCEPT

#  Allow HTTP and HTTPS connections from anywhere (the normal ports for websites and SSL).
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -p tcp --dport 443 -j ACCEPT

#  Allow SSH connections
#  The -dport number should be the same port number you set in sshd_config
-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT

#  Allow ping
-A INPUT -p icmpv6 -j ACCEPT

#  Log iptables denied calls
-A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables denied: " --log-level 7

#  Reject all other inbound - default deny unless explicitly allowed policy
-A INPUT -j REJECT
-A FORWARD -j REJECT

COMMIT
```

加载:

```shell
ip6tables-restore < /etc/iptables/rules.v6
```

该配置只允许 ssh 和 http，https 连接，如需其他配置，按需添加端口即可。

## WordPress 安装

### 安装 NGINX

添加 NGINX 官方源

```shell
nvim /etc/apt/sources.list.d/nginx.list
```

写入:

```editorconfig
## Replace $release with your corresponding Ubuntu release.
deb https://nginx.org/packages/ubuntu/ $release nginx
deb-src https://nginx.org/packages/ubuntu/ $release nginx
```

安装:

```shell
apt update
apt install nginx
```

这时候可能会报错：The following signatures couldn'tbe verified because the public key is not available: NO_PUBKEY $key
表示缺失公钥，就需要安装公钥，重新安装即可

```shell
## Replace $key with the corresponding $key from your GPG error.
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $key
apt update
apt install nginx
```

### 安装配置 PHP

```shell
apt install php php-fpm php-mysql php-curl php-xml php-imagick php-gd php-mbstring php-zip php-intl php-redis
nvim /etc/php/x.x/fpm/php.ini
```

更改 upload_max_filesize = 20M；post_max_size = 20M；cgi.fix_pathinfo=1。
启动与开机启动

```shell
systemctl start phpx.x-fpm
systemctl enable phpx.x-fpm
```

### 配置 NGINX

```shell
nvim /etc/nginx/nginx.conf
```

更改 user 为 www-data

```shell
nvim /etc/nginx/conf.d/default.conf
```

将其内容改为:

```editorconfig
server {
    listen 80;
    listen [::]:80;
    server_name  example.com;
    root /var/www/wordpress;
    index index.php index.html index.htm;
    location / { return 301 https://$host$request_uri; }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name  example.com;
    index index.php index.html index.htm;
    root /var/www/wordpress;

    add_header Strict-Transport-Security "includeSubDomains; preload; max-age=63072000";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "0";
    add_header Content-Security-Policy "upgrade-insecure-requests";
    add_header Permissions-Policy "camara=('self')";

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!MEDIUM:!LOW:!aNULL:!NULL:!SHA;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    location = /favicon.ico {
      log_not_found off;
      access_log off;
    }

    location = /robots.txt {
      allow all;
      log_not_found off;
      access_log off;
    }

	location ~ ^/wp-json/ {
	  rewrite ^/wp-json/(.*?)$ /?rest_route=/$1 last;
	}

	location ~* /uploads/.*\.php$ {
      return 503;
    }

    location / {
      try_files $uri $uri/ /index.php$args;
    }

    location ~ \.php$ {
      include fastcgi_params;
      fastcgi_intercept_errors on;
      fastcgi_pass unix:/run/php/php8.1-fpm.sock;
      fastcgi_index index.php;
      # fastcgi_connect_timeout 3000;
      # fastcgi_send_timeout 3000;
      # fastcgi_read_timeout 3000;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
      expires max;
      log_not_found off;
    }

	location ~ \.user\.ini$ {
	  deny all;
	}
}
```

### 安装 WordPress

```shell
mkdir /var/www
cd /var/www
wget https://wordpress.org/latest.tar.gz
tar -xzvf latest.tar.gz
cd
```

### 安装证书

如果用我的仓库安装，则默认已安装 certbot
若不是，则安装 certbot

```shell
snap install certbot --classic
```

由于可能有多个域名指向该服务器，则通过 DNS 安装泛域名证书。
我的域名托管在 Cloudflare 下，所以下面以 Cloudflare 举例。
安装相应的 DNS 插件:

```shell
snap set certbot trust-plugin-with-root=ok
snap install certbot-dns-cloudflare
```

在 Cloudflare 仪表盘处获取 API Token，以编辑区域 DNS 创建模版，选取当前域名即可。
获取到$Token 后，创建~/.secrets/certbot/cloudflare.ini 文件，写入:

```
# Cloudflare API token used by Certbot
dns_cloudflare_api_token = $Token
```

更改 Token 文件权限:

```shell
chmod 600 ~/.secrets/certbot/cloudflare.ini
```

然后获取证书（需在 bash 下运行，zsh 下报错）:

```shell
certbot certonly \
--dns-cloudflare \
--dns-cloudflare-credentials ~/.secrets/certbot/cloudflare.ini \
-d example.com \
-d *.example.com
```

开启与开机启动 NGINX

```shell
systemctl start nginx
systemctl enable nginx
```

### 安装配置 MySQL

```shell
wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb
dpkg -i mysql-apt-config_0.8.24-1_all.deb
```

默认选项即可

```shell
apt update
apt install mysql-server
```

安装好后进行配置

```shell
mysql_secure_installation
```

根据需求配置密码即可

```shell
mysql -u root -p
```

进入 mysql

```sql
CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'%' IDENTIFIED BY 'YOURPASSWORD'
GRANT ALL PRIVILEGES ON *.* to 'wordpress'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
```

记住这里的用户名和密码。

开启与开机启动 NGINX

```shell
systemctl start mysql
systemctl enable mysql
```

### 配置 WordPress

```shell
cd /var/www/wordpress
cp wp-config-sample.php wp-config.php
nvim wp-config.php
```

更改 DB_NAME 和 DB_USER 为 wordpress，DB_PASSWORD 为刚才创建的密码

从[网页](https://api.wordpress.org/secret-key/1.1/salt/)获取安全密钥，替换相应字段

配置 WordPress SFTP 连接
下载插件[SSH SFTP Updater Support](https://downloads.wordpress.org/plugin/ssh-sftp-updater-support.0.8.5.zip)，通过 SFTP（可用软件[Transmit](https://panic.com/transmit/)，[Cyberduck](https://cyberduck.io)，[FileZilla](https://filezilla-project.org)，[ForkLift](https://binarynights.com)）上载到/var/www/wordpress/wp-content/plugins/ssh-sftp-updater-support
同样，通过 SFTP 将 SSH 密钥上载到服务器~/.ssh 下

在 wp-config.php 文件中自定义变量端添加:

```php
define('FS_METHOD','ssh2');
define('FTP_BASE','/var/www/wordpress/');
define('FTP_CONTENT_DIR','/var/www/wordpress/wp-content/');
define('FTP_PLUGIN_DIR','/var/www/wordpress/wp-content/plugins/');
define('FTP_PUBKEY','~/.ssh/id_ed25519.pub');
define('FTP_PRIKEY','~/.ssh/id_ed25519');
define('FTP_USER','root');
define('FTP_PASS','password');
define('FTP_HOST','localhost');
define('FTP_SSL',true);
```

Tip：
该插件目前有 BUG，无法通过 SSH KEY 连接，只能通过密码。
所以前文中的禁用 SSH 密码登陆在这里需要重新启用。

至此，服务器端配置结束。

## WordPress Admin 配置

### 登陆 Admin

前往网页http://example.com/wp-admin/install.php
![[CleanShot 2023-02-14 at 05.27.24@2x.png]]
站点标题，用户名，密码自定义。需记住用户名，密码，后续登陆管理员账户。
邮箱与[Gravatar](https://en.gravatar.com)保持一致，以此更换头像。

进入管理界面后，需在插件页面启用 SSH SFTP Updater Support 插件。
之后可正常更新，安装插件。

### 基础配置

#### 站点健康

工具 -> 站点健康，先把出现的问题解决，例如时区问题，删除不用的插件、主题，缓存问题可安装后文提到的插件。

#### 永久链接

选择博文名

### 插件安装

安装插件时可临时修改 wp-content 文件夹权限，因为部分插件安装时会写入文件

```shell
chmod 777 /var/www/wordpress/wp-content
```

安装完成后再恢复 755 权限即可

#### W3 TOTAL CACHE

安装时需额外修改文件权限

```shell
chmod 777 /var/www/wordpress/wp-content/cache
chmod 777 /var/www/wordpress/wp-content/w3tc-config
```

并更改 nginx 配置，因为该插件通过 nginx 提供缓存
在/etc/nginx/conf.c/wordpress.conf 中加入

```editorconfig
include /var/www/wordpress/nginx.conf;
```

建议搭配 Redis 或 Memcached 使用
接下来以 Redis 安装为例:

```shell
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
apt update
apt install redis
```

配置 Redis，编辑/etc/redis/redis.conf 文件
更改 maxmemory 为内存的一半(例如:512mb)，maxmemory-policy 为 allkeys-lru
开启与开机启动 Redis

```shell
systemctl start redis-server
systemctl enable redis-server
```

Tips:该插件的基础配置向导可能会出现错误，这种情况下直接跳过，然后在一般设置中设置页面缓存为 Disk:Enhanced 或 Redis 即可，设置好后，重新进入配置向导就可继续配置。

除了 Minify 选 Disk 之外，其他都选 Redis 即可。

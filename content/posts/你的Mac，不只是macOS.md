---
slug: mac-can-be-more
title: 你的Mac，不只是macOS
date: 2023-03-17T20:00:00+08:00
draft: false
comments: true
math: true
---

## 介绍

在 Apple 宣发 iPad Pro 2020 时，打出了标语[“你的下一台电脑，何必是电脑“](https://www.digitaling.com/projects/105860.html)。  
如今已经时隔三年，iPad Pro 2022 也用上了 M2 处理器，硬件水平上早已经与电脑持平，但从平板的软件生态上来看，“你的下一台电脑，还得是电脑”。

[Apple Silicon](https://www.apple.com.cn/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/)的推出，使得电脑的能耗比达到了一个新的高度。Apple 也为了 Apple Silicon 的软件生态，推出了[Rosetta2](https://support.apple.com/zh-cn/HT211861)，而且支持安装 iOS/iPadOS 软件。  
[Windows 11](https://www.microsoft.com/zh-cn/windows/windows-11)的推出，带来了[Windows Subsystem for Android](https://learn.microsoft.com/en-us/windows/android/wsa/)，使得 Windows 支持安装 Android 软件。

也就是在 Windows 11 推出的时候，我就有一个想法，用一台 Mac 是不是就能体验全平台的生态。  
随着近日 macOS 最好用的虚拟机软件[Parallels](https://www.parallels.com)与 Microsoft 达成[商业合作](https://www.alludo.com/en/newsroom/press-releases/20230216-parallels-desktop-windows-11-apple-silicon/)，使得在 Apple Silicon 系统上安装 Windows 获得[正式许可](https://www.parallels.com/windows-11-arm-apple-m-series/)，得到 Microsoft[官方支持](https://support.microsoft.com/en-gb/windows/options-for-using-windows-11-with-mac-computers-with-apple-m1-and-m2-chips-cd15fd62-9b34-4b78-b0bc-121baa3c568c)。那么在 Mac 上使用全平台就可以开始正式开始探索。

## macOS

Apple Silicon 的推出，至今已经近 3 年。macOS 下的 Arm(即 Apple Silicon)生态已经基本完善。大部分软件都已经对 Apple Silicon 进行适配，有通用(Universal)版本或 Apple 芯片(Apple Silicon)版本。甚至机器学习框架[Tensorflow](https://developer.apple.com/metal/tensorflow-plugin/)和[Pytorch](https://developer.apple.com/metal/pytorch/)也已经适配(64 核的 GPU 和 128G 的统一内存有了用武之地)。

就我个人使用方面，仅[EasyConnect](https://www.sangfor.com.cn/product-and-solution/sangfor-security/ssl-vpn)(学校 VPN)和[Zotero6](https://www.zotero.org)(Zotero7 将提供[原生 Apple Silicon 支持](https://www.zotero.org/support/dev/zotero_7_for_developers))，以及一些游戏([Steam 商城](https://store.steampowered.com)和[League of Legends](https://www.leagueoflegends.com))没有进行适配。对于没有适配的一部分，Rosetta2 的兼容性还是很强大的。例如，League of Legends 在[Metal](https://developer.apple.com/metal/)的加持下，甚至可以达到 200 帧。

随着 Apple 对 Metal 的推广，macOS 下的游戏生态也会逐渐改善。3D 游戏[生化危机：村庄](https://www.residentevil.com/village/us/mac/)就已经提供原生 Apple Silicon 支持。而且 Steam 商场虽然还是 Intel 版本，但其中的部分游戏已经是原生支持的。关于游戏的更多详情可参考[AppleGamingWiki](https://www.applegamingwiki.com/wiki/Home)。

如上所述，实际上 macOS 已经可以满足绝大部分需求，但是为什么还要去安装其他平台呢，这里引用隐藏 APP 软件[Cloak](https://getcloak.app)开发者[ezzz](https://mastodon.social/@ezzz@ezzz.au)的一句话[“geek 表示产出内容哪有折腾服务器有意思“](https://ezzz.au/@ezzz/109763914525294578)，以及 Newsletter[林中来信](https://laixin.one)的出品人[郝海龙](https://haohailong.net)的回复[“折腾服务器和产出内容在 Geek 这里是等价的“](https://mastodon.social/@haohailong/109763976060460181)。是的，纯属折腾（我是不会承认是为了用 Windows 玩英雄联盟的事实的）。  
此外，还有一个对一些人很重要的软件——[原神](https://ys.mihoyo.com)，是没有 macOS 版本的。

## iOS/iPadOS

Apple Silicon 是官方支持安装 iOS/iPadOS 软件的，在 App Store 中搜索即可。

通过官方提供的这种方式，可以安装一些好用的 iOS/iPadOS 软件，但是暂时没有提供 macOS 版本的，例如游戏[阴阳师](https://yys.163.com)，博客客户端[Overcast](https://overcast.fm/podcasts)和 Reddit 第三方客户端[Apollo](https://apolloapp.io)，而且这几个软件是我已知的虽然不提供 macOS 版本，但是会对 macOS 进行适配的 iOS/iPadOS 软件。  
是的，虽然可以安装，但是很多软件并不会对这种情况专门适配，所以体验上并不比 macOS 原生软件或者 WEB 端好。

在 Apple Silicon 刚推出的时候，是可以随意安装 iOS/iPadOS 软件的，但后来 Apple 添加了限制，这就需要安装额外的软件才能安装未上架 App Store 的 iOS/iPadOS 软件（据说上架 Mac Apple Store 只需要开发者提交软件时选择 Mac 平台即可，但不上架也可以理解，减少维护成本）。

### PlayCover

为了安装未上架的软件，例如前面提到的原神，需要安装[PlayCover](https://playcover.io)，并在[Decrypt IPA Store](https://decrypt.day)下载所需 iOS/iPadOS 软件的 IPA 即可，也可添加 IPA 源，以便直接在 PlayCover 中进行下载安装。详细使用方法参考[官方文档](https://docs.playcover.io/Introduction)。

这样，macOS 使用 iOS/iPadOS 生态已经完全覆盖，如需要 iOS/iPadOS 桌面体验，macOS 上的 AirPods 及蓝牙设备电量管理软件[AirBuddy](https://v2.airbuddy.app)开发者[Guilherme Rambo](https://rambo.codes)近期正在[研究在 Mac 上利用 Virtualization.framework 运行 iOS 16 VM](https://mastodon.social/@_inside/109953573784264208)，可以关注一下后续。更简单的方法是用[Xcode](https://developer.apple.com/xcode/)中的模拟器。

## Linux

在 Apple Silicon 上运行 Linux 从推出以来就一直在研究，[Linux 6.2 已经官方支持 M1 Mac](https://www.zdnet.com/article/linux-6-2-the-first-mainstream-linux-kernel-for-apple-m1-chips-arrives/)，但实际上，据在 Apple Silicon 上运行 Linux 的推动者[Asahi Linux](https://asahilinux.org)所称，[这只是最基本的支持，并无法正常运行任何 Linux 6.2 内核的标准发行版](https://social.treehouse.systems/@AsahiLinux/109931764533424795)。  
所以，运行 Linux 目前还是需要使用 Ashli Linux 项目，该项目底层使用 Arch Linux ARM，甚至已经支持 GPU 驱动。现在已经在 Alpha 测试阶段，安装流程可参考[官方博文](https://asahilinux.org/2022/03/asahi-linux-alpha-release/)。

除了原生运行 Linux 之外，还有一种方式是通过虚拟机。现在各种虚拟机都已成熟，例如[Parallels](https://www.parallels.com)，[VMware Fusion](https://www.vmware.com/products/fusion.html)，[UTM](https://getutm.app)，[Multipass](https://multipass.run)。其中体验最好的依然是 Parallels，如果只需要一个虚拟环境不需要桌面，可尝试 Multipass。

### Virtualization.Framework

但这些都不是主要介绍的，这里主要关注利用[Virtualization.Framework](https://developer.apple.com/documentation/virtualization)运行的虚拟机，这是 Apple 在 macOS 11 引入的一个新的虚拟化框架，并在 macOS 13 中添加了[运行 GUI Linux](https://developer.apple.com/documentation/virtualization/running_gui_linux_in_a_virtual_machine_on_a_mac)以及[在 Linux 中通过 Rosetta 运行 Intel 程序](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta)的支持，而且这是[在 Apple Silicon 下运行 macOS 虚拟机](https://developer.apple.com/documentation/virtualization/running_macos_in_a_virtual_machine_on_apple_silicon_macs)的唯一方式。

由于 Virtualization.Framework 推出时间短，各种适配上还有待提高，也不能提供一些已经成熟的虚拟化技术的高级功能，所以各大虚拟机软件目前在 Linux 上还没采用这个框架。我已知的用于个人的只有[Docker](https://www.docker.com)容器和[UTM](https://getutm.app)。  
Docker 容器处理方案就和虚拟机是两种方案了，所以这里不进行介绍，主要介绍 UTM。

#### UTM

UTM 是一个 macOS 上的一个开源虚拟机解决方案，为[QEMU](https://www.qemu.org)虚拟化及模拟进行包装以及提供 GUI 支持。与其他虚拟机软件不同，UTM 以 QEMU 提供支持，除了提供 ARM 虚拟化之外还提供 x64 及 x86 模拟，所以可以通过 UTM 安装 amd64 系统，在创建虚拟机时即可进行选择。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678977907/obsidian/pznw4s6rxxd7myqmifai.png)
而且 UTM 不止提供 Linux 的虚拟，还可安装 Windows 和 macOS，可以说是免费又强大。

在安装 Linux 时即可选择使用 Apple 虚拟化，以及启用 Rosetta。若不选择 Apple 虚拟化，则是用 QEMU 进行虚拟，两种后端能实现的功能也不太一样。对于 Rosetta 有需求的，还是选择 Apple 虚拟化。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678978073/obsidian/si9qrcppzjxhjavdzzue.png)
详细的安装流程可参考[官方文档](https://docs.getutm.app)。  
官方文档中对 Ubuntu Arm 的安装是安装服务器版本，再安装桌面。  
在实际操作中可直接下载[Daily Build 桌面版镜像](https://cdimage.ubuntu.com/jammy/daily-live/current/)。

#### UTM iOS/iPadOS

UTM 除了提供 macOS 程序以外，还提供 iOS/iPadOS 上的虚拟机 App，由于系统限制，无法直接在 App Store 上安装。  
对于已越狱的 iOS/iPadOS 设备，可通过 Cydia 安装（我相信越狱设备的肯定比我了解安装方法）。  
对于未越狱的 iOS/iPadOS 设备，满足[TrollStore](https://github.com/opa334/TrollStore)系统要求的（大概在 iOS/iPadOS 14.0 - 15.6 beta5），可通过 TrollStore 安装。不满足 TrollStore 要求的，则需要通过[AltStore](https://altstore.io)安装，并启用 JIT。  
不同安装方法可实现的功能有所不同，自上到下，功能限制增多。  
详情参考[官方文档](https://docs.getutm.app/installation/ios/)。  
安装后就可以在 iOS/iPadOS 上安装 Windows/Linux 了，iOS/iPadOS 只支持模拟，不支持虚拟化，所以不能安装 macOS。"你的下一台电脑，何必是电脑"，也可以是手机。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678979001/obsidian/znpjspuunomdpoxgjh9k.jpg)

## Windows

Windows 可以说应该是 Mac 上需求最高的平台，毕竟要玩英雄联盟(bushi)。  
从 Microsoft[官方文档](https://support.microsoft.com/en-gb/windows/options-for-using-windows-11-with-mac-computers-with-apple-m1-and-m2-chips-cd15fd62-9b34-4b78-b0bc-121baa3c568c)中介绍，在 Apple Silicon 设备上使用 Windows 有两种方式，[Windows 365](https://www.microsoft.com/en-us/windows-365)，Microsoft 提供的云电脑解决方案，适用于商业及企业；以及 Parallels 虚拟机。这是官方授权的方式。此外，还可使用前述的 UTM 或者 VMware Fusion 安装。  
在使用体验上，Parallels 可以说完全碾压其他方案，我接下来会一一介绍。

### Windows 下载

安装 Windows，由于 Microsoft 不提供 Windows on Arm 的 ISO 镜像，所以需要用其他方法获取：

- [Microsoft 官网](https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewarm64)下载。此方式下载的是 VHDX 文件，需要用 QEMU 转化为 ISO 文件。
- Parallels 一键安装。Parallels 提供了一键安装的方式，最方便快捷。  
  ![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678979583/obsidian/aeaur7lo2vomseu0nsl4.png)
- [UUP dump](https://uupdump.net)下载。UUP dump 通过脚本从 Microsoft 获取系统文件，并将其转化为 ISO。需要注意的是 Windows 11 22H2 或更高版本需要使用 Windows 10、版本 2004 或更高版本才能正确创建 ISO。macOS 的当前脚本将输出一个损坏的 ISO。如果您没有 Windows 计算机，您可以先安装旧版本的 Windows，然后使用它为新版本创建 ISO。
- [ITELLYOU](https://next.itellyou.cn/?3p7vc4jaxkblkzpy2ff3a4nwt4=5n4gj7blgbn7kk4gtejchtfzi4)下载。国内的一个很神奇的网站，提供各种镜像下载。

下载后在虚拟机软件中自行安装即可，不同的虚拟机可能在安装流程中无法提供网络导致无法安装的情况出现，具体解决方法可参考[UTM](https://docs.getutm.app/guides/windows/)和[VMware Fusion](https://docs.vmware.com/en/VMware-Fusion/13/fusion-13-user-guide.pdf)的文档。

### Windows 激活

Windows 建议使用 Pro 版本。如有美国支付方式，可在[美区商店](https://www.microsoft.com/en-us/d/windows-11-pro/dg7gmgf0d8h4)直接购买。如没有，可在[国区商店](https://www.microsoftstore.com.cn/windows/windows-11-home)购买 Home 版本，并在安装后的 Microsoft Store 中升级为 Pro 版本。如果已有许可证，可通过疑难解答转移许可证，详见[Parallels 文档](https://kb.parallels.com/114051)。需要注意的是，该转移有次数限制，在虚拟机中激活需谨慎。  
其他激活方式请各显神通，这里不作介绍。

### Parallels 配置及功能

Parallels 的配置中，有一个地方是我个人喜欢的配置，在显示这里的分辨率选择 Retina 显示最佳，这样子可以让 Windows 有类似原生系统的感觉，但因分辨率变高，未进行高分适配的 App 会变得模糊。其余配置可按自己喜好自行配置。
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678980569/obsidian/clzzp7wnpts3rvuwippi.png)
安装后全屏模式如下图。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678980817/obsidian/gdj3cpgu3fjpklquvlnl.png)
我只能说 Windows 有了 MacBook Pro 的屏幕素质，还是很好看的。

#### 共享

Parallels 可以在共享 Mac 和 Windows 文件，这个功能很实用。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985215/obsidian/g4gqytmodtllnvoirig0.png)
可以让 Mac 和 Windows 共用文档和下载等用户文件，这样 PowerShell 配置，Visual Studio 项目都会在 Mac 上出现，方便管理和备份，同样 Mac 上的也会在 Windows 上出现。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985343/obsidian/i7ix678hgx8qox9jz0tx.png)
在访达的网络与云存储一栏，会出现 Windows，可以访问 Windows 硬盘和 Onedrive 文件。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985430/obsidian/hveddkbprlattec8vrmc.png)
在 Windows 文件管理器中 iCloud 和 Mac 的用户文件夹及云存储会作为网络磁盘出现，当然也可以设置共享更多的文件。
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985500/obsidian/bk54lruxep8l0ekpkczf.png)

#### 应用程序

应用程序也是共享的，Mac 上可以访问一切 Windows 上安装的应用程序。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985699/obsidian/iryxgznvsuwlhhzygznc.png)
Windows 上也可以访问 Mac 上的应用程序。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678985823/obsidian/nwxtgxofce94vt9ra9ld.png)
甚至可以设置默认应用程序。

#### 融合模式

这个模式让 Windows 就像 Mac 的一个组件一样在 Mac 的 Dock 栏中。  
打开的 Windows 程序也像一个原生的 Mac 程序一样直接显示在 Mac 桌面。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678986373/obsidian/t9gp5erquymoxoaex4sy.png)

### Windows on Arm App

但 Windows on Arm 的 Arm 生态相比于 macOS 和 Linux 来说是真的很差，适配 Arm 版本的软件屈指可数：

- Microsoft 的软件基本已经全部适配，包括[Visual Studio](https://visualstudio.microsoft.com)和[Microsoft 365](https://www.microsoft.com/en-us/microsoft-365)
- [Firefox](https://www.mozilla.org/en-US/firefox/windows/)
- [Adobe](https://www.adobe.com)的[Photoshop](https://www.adobe.com/products/photoshop.html)和[Lightroom](https://www.adobe.com/products/photoshop-lightroom.html)
- [Spotify Beta](https://community.spotify.com/t5/Live-Ideas/Desktop-Developer-Spotify-for-Windows-on-Arm-Win32-Desktop-app/idi-p/4992167/page/4#M243280)
- [7-Zip](https://www.7-zip.org)，[Bandizip](https://www.bandisoft.com/bandizip/)
- [VLC](https://www.videolan.org/vlc/download-windows.html)
- [ZOOM](https://zoom.us/download#client_4meeting)
- [Rufus](https://rufus.ie/en/)
- [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg)
- [Obsidian](https://obsidian.md)
- 一些国外流媒体[Netflix](https://apps.microsoft.com/store/detail/netflix/9WZDNCRFJ3TJ?hl=en-us&gl=us)，[Disney+](https://apps.microsoft.com/store/detail/disney/9NXQXXLFST89?hl=en-us&gl=us&rtc=1)，[Prime Video](https://apps.microsoft.com/store/detail/prime-video-for-windows/9P6RC76MSMMJ)
- 一些通过 Edge [PWA](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/)实现的网络应用程序[Instagram](https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT?hl=en-us&gl=us)，[Twitter](https://apps.microsoft.com/store/detail/twitter/9WZDNCRFJ140?hl=en-us&gl=us)，[TikTok](https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4)等
- [Git for Windows Arm Fork](https://github.com/dennisameling/git)，[Python](https://www.python.org)，[Github Desktop](https://github.com/desktop/desktop)，[Notepad++](https://notepad-plus-plus.org)，[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)  
  大概也就这么多了，毕竟自 Windows on Arm 推出以来就说了多年的 Photoshop Arm 版是在 Apple Silicon 推出后才适配的，Microsoft 对比 Apple 的号召力显然易见。

那既然 Arm 生态这么差，Apple 又没有为 Windows 提供 Rosetta，Windows on Arm 是不是就不能用呢，实际上不是的，因为 Microsoft 的实力还是毋庸置疑的，Windows on Arm 本身就支持对 x64 和 x86 的模拟，对 Microsoft 365 的支持就有一部分是通过 x64 的模拟实现的，不然怎么玩英雄联盟呢(bushi)。

### WSL && WSA

正如前文所述，Windows Subsystem for Android 的推出让 Windows 可以运行 Android 程序，但可惜的是 Apple Silicon 芯片目前不支持嵌套虚拟化，WSA 和 WSL2 都是无法安装的。

但还是可以安装 WSL1 的，根据[官方文档](https://learn.microsoft.com/en-us/windows/wsl/)正常安装即可。  
需要注意的是，要先更改 wsl 版本

```PowerShell
wsl --set-default-version 1
```

这样就可以在 macOS 的虚拟机 Windows 中通过 WSL 开发 Linux 程序了，经典套娃。  
![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678983928/obsidian/x4yskmrvv9go5ncnpsda.png)

### Windows Tips

对于 Windows 的使用有一些小 Tips：

- 个人体验上来说 Microsoft Store 的体验并不好，除了一些只能通过 Microsoft Store 安装的软件，例如国外流媒体以及 PWA 网络应用程序之外，尽量通过包管理器安装软件（当然不会用命令行的还是用 Microsoft Store 吧）。Windows 自带了[winget](https://learn.microsoft.com/en-us/windows/package-manager/)，可以用来安装绝大多数软件了，而且有 Arm 支持，此外还有[Scoop](https://scoop.sh)（Arm 支持），[Chocolatey](https://chocolatey.org)(目前不支持 Arm)。
- 日常使用的程序还是用 macOS 原生应用，毕竟 Windows 需要虚拟化之后再进行一次 x64 模拟，性能损耗过大，英雄联盟帧率只有 40-50。
  - 这里列举一下除了系统自带软件之外，我安装的软件：
    - [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg)，仅用于测试 Clash 配置
    - [Cherry 实用软件](https://cherry.cn/#/software/drive)，配置机械键盘
    - [Netflix](https://apps.microsoft.com/store/detail/netflix/9WZDNCRFJ3TJ?hl=en-us&gl=us)，[Disney+](https://apps.microsoft.com/store/detail/disney/9NXQXXLFST89?hl=en-us&gl=us&rtc=1)，[Prime Video](https://apps.microsoft.com/store/detail/prime-video-for-windows/9P6RC76MSMMJ)
    - [Git for Windows Arm Fork](https://github.com/dennisameling/git)，[Visual Studio 2022 Preview](https://visualstudio.microsoft.com/vs/preview/)，[Visual Studio Code Insiders](https://code.visualstudio.com/insiders/)
    - [Microsoft 365 Insider](https://insider.office.com/en-us/)
    - [Microsoft Edge Dev](https://www.microsoftedgeinsider.com/en-us/)
    - [Windows Terminal Preview](https://apps.microsoft.com/store/detail/windows-terminal-preview/9N8G5RFZ9XK3?hl=en-us&gl=us)，[PowerShell Preview](https://apps.microsoft.com/store/detail/powershell-preview/9P95ZZKTNRN4?hl=en-us&gl=us)，[Oh My Posh](https://ohmyposh.dev)，[posh-git](https://github.com/dahlbyk/posh-git)，[Terminal-Icons](https://github.com/devblackops/Terminal-Icons)
    - [Obsidian](https://obsidian.md)
    - [Microsoft PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
    - [Rufus](https://rufus.ie/en/)
    - [英雄联盟](https://lol.qq.com/)
  - 可以看出，大多数都是 Microsoft 的软件，且都是 Insider 或者 Preview 版本，因为用 Windows 主要是体验一下 Microsoft 的新产品，新功能，而且 Microsoft 的很多产品多是 Insider 版本才有的，比如[Phone Link](https://www.microsoft.com/en-us/windows/sync-across-your-devices) iPhone 支持，全新的[Onedrive](https://onedrive.live.com)设置，全新的[Outlook for Windows](https://support.microsoft.com/en-us/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627)。
  - 而且现在[Windows Insider Canary 频道送 U 盘](https://www.ithome.com/0/679/916.htm)，**快去领**。
- 非 Unicode 程序的语言需设置为简体中文并不启用 Unicode UTF-8（不然打不开英雄联盟）。设置->时间和语言->语言和地区->Administrative language settings->非 Unicode 程序语言设置。  
  ![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678983100/obsidian/oglvozkjwyfa8og2d66c.png)

## Android

由于 WSA 不能使用，运行 Android 程序的想法破灭了。  
而且目前也没有什么可用的 Android 模拟器，但是不要忘了最基础的方法。  
[Android Studio](https://developer.android.com/studio/)开发软件自带 Android 模拟器，用来装一些 Android 软件体验一下还是不成问题的。

## Tips

- 虚拟机中的网络连接不需要在虚拟机中重新安装代理软件。虚拟机安装时会创建一个虚拟网卡，也会有一个路由 IP，只需要设置虚拟机内的操作系统的代理指向这个路由 IP 即可使用主机的代理软件上网；如果开启了 Surge 或 Clash 的增强模式，则不需要额外配置即可上网。详见[scomper](https://twitter.com/scomper)的博客[壹页单章](https://pepcn.com)的博文[PARALLELS DESKTOP 的网络设置](https://pepcn.com/virtual/parallels-desktop-network)。UTM 也可进行配置，我这里 UTM 分配的路由 IP 是 192.168.64.1。
- 运行 Parallels 时连接的有线设备，蓝牙设备可以选择是连接到主机还是虚拟机，以此可以使用一些只能 Windows 使用的设备。

## 总结

一台 Apple Silicon Mac，可以运行 iOS/iPadOS，Android 软件，运行 x64 和 Arm 两个架构下的 macOS，Linux 和 Windows 软件。“你的 Mac，不只是 macOS”。  
有 UTM 加持下的 iPhone/iPad，可以模拟运行 Linux 和 Windows 虚拟机。”你的下一台电脑，何必是电脑“。

+++
title = 'Twitter被收购导致的去中心化兴起——Mastodon'
date = 2023-03-10T20:00:00+08:00
draft = false
comments = true
math = true
+++

## 介绍

2022 年 10 月，埃隆马斯克正式收购 Twitter，并开始解雇工人、破坏系统、阻止第三方 Twitter 客户端以及恢复因各种反社会、法西斯和反民主行为而被暂停的账户。Twitter 成了马斯克一个人的游乐场。不少的国外开发者以及企业都在寻求 Twitter 的替代品，以免意外发生，导致数字资产消失。这就使得一个去中心化平台兴起——[Mastodon](https://joinmastodon.org/)。

## 马斯克的一系列操作

马斯克在收购 Twitter 之后，力求将 Twitter 打造成微信。在 Twitter 上禁止外链，随意封禁用户，引入会员订阅机制 Twitter Blue，封杀第三方客户端，取消 API 免费层，通过修改代码使自己的时间线优先显示等等。

他的封杀第三方客户端，取消 API 免费层的决定更是惹恼了一众开发人员。  
因为 Twitter 之所以兴起，正是因为 00 年代一众开发人员开发的 Twitter 第三方客户端为 Twitter 带来的良好的使用体验推动了 Twitter 的发展。  
Twitter 现在知名的小蓝鸟的图标正是 Apple 生态知名开发商[iconfactory](https://apps.iconfactory.com)于 2007 年开发的[Twitterrific](https://twitterrific.com/beyond)，Twitter 第一款桌面端及移动端客户端启发的。2011 年由另一知名开发商[Tapbots](https://tapbots.com)开发的[Tweetbot](https://tapbots.com/tweetbot/)更是将 Twitter 的体验推向了顶峰。  
而马斯克毫无预兆的封杀第三方客户端，取消 API 免费层，使得这些客户端的开发商开发的产品直接无法使用，不止使开发商的产品化为无有，还严重影响了用户和开发商之间的信任，甚至开发商还需要承担退款的经济支出。

在国外的平台，第三方客户端实际上使用人数众多，Twitter，Reddit，Youtube，Discord，包括之后提到的 Mastodon，都有着众多的第三方客户端使用者，甚至超过官方客户端。

这一系列操作，导致众多开发者直接退出 Twitter 平台，纷纷涌向一个去中心化平台——Mastodon。

这样的操作在国外引起如此的轩然大波，但类似的操作在国内实际上早已屡见不鲜。微信对淘宝、抖音等外链的屏蔽，就让微信聊天中出现了一系列莫名其妙的口令。封禁用户，封禁文章更是不用多说。对于第三方客户端，微博更是直接通过法律手段，VVebo 要求开发者赔偿 1000w，Share 因不可抗力直接下架。

所以说马斯克在学习微信。没想到世界最大的资本家要向国内资本市场学习。

## Mastodon 介绍

Mastodon 是一个开源项目，是一个微博网络，该网络是[Fediverse](<[https://www.fediverse.to](https://fediverse.party/en/fediverse/)>)的一部分。  
Fediverse 就是联邦宇宙，是一套开源协议，管理服务器上的用户活动，以及用户在其他独立操作的服务器上的信息交换，使用最广泛的协议是[ActivityPub](https://www.w3.org/TR/activitypub/)。  
Fediverse 就是一个去中心化的网络。Twitter 是集中式的，服务器、数据、协议都是由 Twitter 公司所掌控，所以马斯克的收购才能对 Twitter 产生这么大的影响。  
而 Fediverse，以 Twitter 的替代品 Mastodon 为例，使用 Mastodon，并不是在使用一家巨大的、不露面的公司产品，或者是和一个经常做出无法理解的决定的 CEO 打交道。而是由您自行选择加入由个人、公司或足者运行的 Mastodon 服务器（即实例）。每个实例都与其他实例交换信息或组合。实例根据用户订阅其他用户帖子的社交图谱在每个服务器之间传递内容。没有中央数据库，Mastodon 完全由一个个实例组成。个人信息也可以在实例之间迁移。  
此外，联邦宇宙还有一些其他网络，例如[Pixelfed](https://pixelfed.org)可以替代 Instagram，[Micro.blog](https://micro.blog)是一个博客平台，[Matrix](https://matrix.org)私人聊天室等等。  
这些网络之间甚至可以互相关注，比如在 Mastodon 上关注 Pixelfed 账号。

## 使用 Mastodon

使用 Mastodon 需要先根据个人喜好选择一个实例。  
实例列表可在[官方网站](https://joinmastodon.org/servers)上查看或者一个[实例选择项目](https://instances.social)进行搜索。  
选择好实例后，用邮箱即可注册。

Tips:  
一些实例推荐：  
[闭社](https://closed.social) —— 国内高校联盟  
[闭社-西工大站](https://nwpu.closed.social)  
[mastodon.social](https://mastodon.social) —— 官方管理的实例，用户最多的实例  
[长毛象中文站](https://m.cmx.im/) —— 中文用户最多的实例

**客户端**  
注册是在网页上注册的，但日常通过网页访问并不方便，所以最好是使用客户端。  
官方客户端： [iOS/iPadOS](https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974) [Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&pli=1)

第三方客户端：  
Ivory [iOS/iPadOS](https://tapbots.com/ivory/) [macOS](https://tapbots.com/ivory/mac/) (Tweetbot 开发商 Tapbots 产品)  
Mona [iOS/iPadOS](https://testflight.apple.com/join/xNdgUbh6) [macOS](https://github.com/JunyuKuang/Spring-for-Twitter/releases/download/MonaBeta/MonaBeta.zip) (国产 Twitter 客户端[Spring](https://twitter.com/theSpringApp)开发者产品)  
Elk [Web](https://elk.zone/) (网页端替代)  
Ice Cubes [iOS/iPadOS](https://github.com/Dimillian/IceCubesApp) (开源)  
Toot! [iOS/iPadOS](https://apps.apple.com/app/toot/id1229021451?ls=1) (老牌)  
Mammoth [iOS/iPadOS](https://getmammoth.app/)  
Tusky [Android](https://play.google.com/store/apps/details?id=com.keylesspalace.tusky)

## 闭社

[闭社](https://closed.social/)就是一系列 Mastodon 实例，是一个分布式的高校社交平台联盟，一套可快速部署的封闭社交平台解决方案。  
清华站是闭社的第一个站点，也是很长时间内闭社宇宙唯一的站点。  
随着 Mastodon 去中心化网络的兴起，闭社宇宙成员也逐渐扩展。

[西工大站](https://nwpu.closed.social)也于近日投入运行，本站是西工大学子用于交流，一人一号的交流社区，秉持 “人人平等，互相尊重” 的原则运行。  
本站仅支持 @mail.nwpu.edu.cn 和 @nwpu.edu.cn [邮箱注册](https://it.nwpu.edu.cn/npumailhelp/yxzc.htm)。  
注册用户名可以使用喜欢的 ID，不需要实名，用户间不显示注册信息，进入后可以修改昵称。  
跨站板块已接入[清华站](https://thu.closed.social/)、[清华校友站](https://tha.closed.social/)、[麻省站](https://umas.social/)、[福大站](https://fzu.closed.social/)、[闽科站](https://mku.social/)、[轻大站](https://zzuli.closed.social/)等高校站点，详见[闭社主页](https://closed.social/)。

![Cloudinary](https://res.cloudinary.com/kanekio/image/upload/v1678289067/obsidian/urngfzgplbusyjzikzvf.jpg)

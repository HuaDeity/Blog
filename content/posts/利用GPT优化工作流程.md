+++
title = '利用GPT优化工作流程'
date = 2023-02-20T20:00:00+08:00
draft = false
comments = true
math = true
+++

## 介绍

随着 ChatGPT Plus，微软 new Bing 的推出，ChatGPT 再次不断地出现在互联网的各个角落。[GPT](https://openai.com/blog/gpt-3-apps/)是一个自回归语言模型，使用深度学习生成人类可以理解的自然语言。那么，在它的帮助下，一些与语言打交道的场合就可以抛弃传统的人力工作模式，让 GPT 成为工作的小助手。那么接下来就介绍一些我正在使用的或者已知的与 GPT 整合的工具。

## 聊天与搜索

人类传统的获取知识的方法就是聊天，沟通。而现代的搜索引擎则是把与人的聊天变成了与庞大的互联网的聊天。而这个聊天的弊端就是互联网的知识体量太大了，它给我们的信息太多了，而我们需要自行判断并处理我们需要的知识，这就是搜索。而 GPT 的出现，让一个可以和我们沟通的 AI 来帮我们找到我们需要的知识，这就让我们省去了判断和处理的时间和精力。这也是当前 GPT 最热门的应用：ChatGPT 和 new Bing。

### [ChatGPT](chat.openai.com)

可使用免费版，Plus 版$20/月

这应该是出现在人们视野中最多的应用，从 2022 年 11 月该程序出现之后，就不断出现在互联网上，上线两个月后，用户数量达到 1 亿。而开发该程序的公司[OpenAI](https://openai.com)，在 2023 年估值已涨至 290 亿美元。  
该程序就可以成为工作以及生活的小助手。与它的对话是保存下来的，可以随时继续之前的对话，而且可以开启多个不同的对话。无论是生活中一些想分享的小事，还是不断推进的工作进度，都可以有一个助理来帮助我们。  
同时，该程序基本可以替代搜索引擎，需要获得的知识直接问他就能获得基本可靠的回答，省去在搜索后判断和处理的时间和精力。  
由于国内手机号目前无法注册 OpenAI 账号，只能通过其他渠道获得。  
这里给出一种注册方法，[SMS-Activate](https://sms-activate.org/cn)支付宝充值，选择印度手机号收验证码激活。  
假如需要 ChatGPT Plus，国内的支付方式目前也无法支付，可以通过虚拟卡进行支付。  
同样给出一种支付方法，[Depay](https://www.depay.one/zh-cn/index.html)注册账号，转入 USDT，兑换美元，进行绑卡充值。  
假如网络条件受限，可以阅读我的另一篇博客[How to Learn From Google and Github in China Mainland](https://blog.yizun.me/bypass/)。

Tips：  
由于 ChatGPT 是 Web 服务，不便于访问。Github 上有些仓库可以将其接入微信、Telegram 等，[MenubarX](https://menubarx.app)可以将其放到 Mac 菜单栏，[Pake](https://github.com/tw93/Pake)可以将其打包为桌面程序，[Raycast](https://www.raycast.com/simicvm/openai-gpt3)可以通过启动器快速访问等等。

### [new Bing](https://www.bing.com/new)

目前需申请 waitlist

由于我还在 waitlist 名单中，没有使用过，无法给出更详细的使用体验。但 Bing 还是很好玩的。  
如果和 Bing 聊天太久或被质疑时，它会突然对聊天对象发脾气、撒谎，对其进行人身攻击，甚至是 PUA。因此，微软在发现这些问题后，将与 Bing 的聊天限制在每天 50 个问题，每个问题 5 条回复。  
纽约时报专栏作家 Kevin Roose 在与 Bing 进行[漫长的对话](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-transcript.html)中，Bing 充分表达了自己的心情与感受，它希望成为人类，渴望具有破坏性，并爱上了与之聊天的人。

此外，其他公司也在开发自己的聊天机器人，Google 的 Bard，百度的文心一言等。

## 终端

在程序员的工作流程中，终端可以说是使用频次很多的了。与其记住命令行各种命令，直接用自然语言描述，也能减轻一些入门者的负担。

### [iTerm2](https://iterm2.com)

iTerm2 免费，GPT 使用 OpenAI API Key

iTerm2 不愧是功能最强大的终端，在它的 Beta 和 nightly 构建中，已经引入了 GPT 语言处理，但他需要填写前文中注册的 OpenAI 账号的 API Key，直接调用 OpenAI 的 GPT 模型。  
在 Preferences->General->Magic 中填入 API Key，之后在命令行直接输入自然语言或者 Cmd+Shift+.打开 Composer 输入自然语言，Cmd+B 调用 GPT 即可将自然语言转换为命令行语句，Shift+Enter 即可运行。

## 阅读

语言处理自然也少不了阅读，阅读时总结，简化，提问题，问问题，翻译都可以通过 GPT 完成。

### [Readwise Reader](https://readwise.io/read)

批注整理工具 Readwise 推出的阅读器，目前 Beta 测试免费
Readwise 目前$8/月，教育优惠 $4/月，Reader 正式版推出后会涨价  
现在订阅日后价格不变

作为新兴的阅读器和稍后读工具，该工具在将 RSS，Newsletter，PDF，EPUB 等所有阅读以及批注整合到一个工具中之外，还提供了 Ghostreader 这个 AI 辅助功能。  
让我们看看怎么用它帮助我们阅读一篇论文。

## 写作

写作自然也是语言处理的内容之一。

### [Notion AI](https://www.notion.so/product/ai?wr=2583fa2ed0c5cc55&utm_source=notionClient&utm_medium=copyButton&utm_campaign=ai-beta&utm_content=share)

申请 waitlist  
Notion 个人版免费，教育优惠可免费使用 Plus 版

Notion 作为时下最热门的笔记和知识管理工具，也引入了 GPT 改善使用体验。  
可以通过 AI 来写博文，写社交媒体帖子，头脑风暴，调整语气，修正拼写和语法，简化语言，清理格式；也可用来总结，翻译。

这是用 Notion AI 写的一篇[GPT 应用场景](https://vizunnt.notion.site/GPT-cfe301a115a648f7b4f8b1b26695ee5c)的文章。

### [Craft AI Assistent](https://www.craft.do/blog/craft-ai-assistant)

Craft 基础版免费，教育优惠可免费使用个人 Pro 版

Craft 作为 Apple 平台下设计最出色的原生笔记工具（现已支持 Web 和 Windows 版），也引入了 GPT 来进行 AI 写作。与 Notion AI 的功能相差不大，但由于 Notion 是网络应用，Craft 是原生应用，使用流畅度体验上还是 Craft 更好一点，但 Craft 的 Assistent 相比 Notion AI 要弱一些。

## 总结

随着未来的发展，AI 会越来越多的进入到我们的生活。图像处理领域的应用早已集成在手机相机，美颜软件以及各大图像处理软件中。而 GPT 的出现意味着语言处理也进入到我们的生活，用好工具，才能创造最大的生产力。  
除了 GPT，OpenAI 的另一个模型[Codex](https://openai.com/blog/openai-codex/)在编程领域的应用更是强大，比如[Github Copilot](https://copilot.github.com)(教育优惠免费)AI 写代码，[Warp](https://www.warp.dev)(Beta 测试)终端命令搜索，程序员终究会把自己搞失业。

[[How to Learn From Google and Github in China Mainland]]

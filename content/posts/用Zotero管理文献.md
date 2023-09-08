+++
title = '用Zotero管理文献'
date = 2023-02-15T20:00:00+08:00
draft = false
comments = true
math = true
+++

## 介绍

搞科研最重要的就是读论文了，传统的读论文方法大概是这样，打开知网，下载一个不知所云的 CAJ 文件，然后再用一个不知所云的全球学术快报的 APP 来读这个论文。
那么，知网除了提供这两个“专属”的学术文件还做了什么呢？

[起诉知网胜诉后作品遭下架，89 岁教授称将要求恢复被删除文章](https://www.ithome.com/0/593/723.htm)
[费用达千万级别！消息称中科院停用知网，前者负责人证实属实](https://www.ithome.com/0/613/543.htm)
[15 名作家联合起诉知网侵权：作品未经授权被任意收录，已递交起诉状](https://www.ithome.com/0/620/012.htm)
[学习通起诉知网侵权，获赔 12 万元](https://www.ithome.com/0/626/557.htm)
[罚款 8760 万元！市场监管总局依法对知网滥用市场支配地位行为作出行政处罚并责令其全面整改](https://www.ithome.com/0/663/608.htm)

国内的学术环境是什么样子，就仁者见仁智者见智吧。

当然这不是这篇文章的重点，这篇文章还是来讲 Zotero 的，它能做到什么呢？

- 从海外知网下载 PDF 文件(Bye Bye, CAJ)
- 全文搜索，标签索引，分类存储，获取文献相应信息（再也不怕找不到文献）
- 在 Microsoft Word，LibreOffice，Google Docs 中一键添加参考文献（不会还有人是手动写参考文献吧）
- PDF 文件标注，做笔记样样精通，配合插件可以导出到 Obsidian，Notion 等知识管理工具
- 免费，多平台同步（macOS,iOS,Windows,Linux,Android,Chromebook)
- ······

## Zotero，浏览器扩展安装及介绍，多设备同步设置

### Zotero 安装及介绍

[Zotero](https://www.zotero.org/download/) 桌面版本下载
[Zotero for Mobile](https://www.zotero.org/support/mobile) 移动版本下载

Tips:

1. macOS 用户可以通过 Homebrew 安装
   ```shell
   brew install --cask zotero
   ```
   Zotero6 暂只有 Intel 版本，也是我的 MacBook Pro 上除了 Steam 和 League of Legends 之外唯一的 Intel 应用程序。
   2023 年即将推出的 Zotero7 提供原生 Apple Silicon 支持
2. Debian/Ubuntu-based Distros 和 Chromebook 用户可以通过包管理器安装
   ```shell
   wget -qO- https://raw.githubusercontent.com/retorquere/zotero-deb/master/install.sh | sudo bash
   sudo apt update
   sudo apt install zotero
   ```
   详见[zotero-deb](https://github.com/retorquere/zotero-deb)

安装好了就来看一看主界面吧
![[CleanShot 2023-02-13 at 01.20.08@2x.png]]
这一篇就是从海外知网获取的 PDF 文件，可以看到右侧包含着引文 Key，条目类型，标题，作者，摘要，日期，URL 等信息，还有笔记，标签等栏目。左侧是文献库可以自行添加集合来进行分类，搜索结果也会出现在左侧文献库中，方便检索。中间则是文献库中的内容，这些文献就是通过 Zotero Connector 浏览器扩展一键获得的。

### 浏览器扩展安装及介绍

[Zotero Connector](https://www.zotero.org/download/connectors)
支持 Safari、Firefox、Chromium 系列浏览器。
不建议使用 Safari 版本，由于 Safari 浏览器扩展的独特性，其功能不完善。

接下来还是拿知网举例。
登陆海外知网：
[简体中文版](https://chn.oversea.cnki.net/index/) [英文版](https://oversea.cnki.net/index/)

![[CleanShot 2023-02-13 at 01.33.02-converted.mp4]]

登陆简体中文版海外知网，可以看到我右上角已经登陆学校账号，知网需要登陆才能获取相应信息，然后找到自己需要的文献，点击浏览器扩展图标，右上角会出现一个提示，等待片刻，PDF 和文献信息就保存到自己的文献库中。

Tips:
由于 Zotero 是通过 Translators 来获取网页信息和 PDF 的，即 js 脚本，有可能出现知网网页变化大，而 Zotero 官方仓库 Translators 更新不及时的情况，就有可能导致无法正常获取文献的情况出现。
如发生这种情况，可自行手动更新 Translators，参考[translators_CN](https://github.com/l0o0/translators_CN)。
这种手动更新方式操作复杂，也可通过安装插件[Jasminum](https://github.com/l0o0/jasminum)自动更新，详见后文。

### 多设备同步设置

Zotero 是通过数据库存储文献信息的，而 PDF 或网页快照等附件则是文件形式存储的。
假如有多设备同步需求，例如移动端平板上批注文献，Zotero 有以下几种同步方式：

#### Zotero 官方服务器同步

使用官方服务器同步是效率最高，可靠性最强，功能最多的方式，需要注册一个账号，并在桌面端登陆，同步设置中进行设置即可开启同步，同步后可在其他设备，甚至网页端浏览自己的文献库。但免费计划只提供 300MB 的存储空间，可订阅高级计划，2GB $20 每年，6GB $60 每年，无限空间 $120 每年，这还是价格不菲的。

#### WebDAV 服务器同步

如果自己有 WebDAV 服务器的话可以在 Zotero 中进行设置，需要服务器的 URL，用户名和密码。
这里 Zotero 官方也提供了已知的可以和 Zotero 正常工作的[WebDAV 提供商名单](https://www.zotero.org/support/kb/webdav_services)。
![[CleanShot 2023-02-13 at 02.04.17@2x.png]]
这是两种官方支持的同步方式，但对于又不想订阅，也没有 WebDAV 服务器的同学（我本人），官方也列出了其他的同步方式。

首先官方宣称：
“将 Zotero 数据目录直接存储在云存储文件夹中[极有可能损坏您的 Zotero 数据库](https://www.zotero.org/support/kb/data_directory_in_cloud_storage_folder)，因此不应这样做。“

如果要避免将任何数据同步到 Zotero 服务器：
您可以关闭 Zotero，手动将整个 Zotero 数据目录复制到一台计算机上的同步文件夹中，然后在另一台计算机上恢复它 - 再次关闭 Zotero，就像您正在执行数据的备份和还原一样。

这个方法也并不便捷，实际上占空间的是下载的 PDF 附件，而本身文献信息是不怎么占空间的，那么我推荐的同步方式是：用官方服务器同步文献信息，用外部服务同步附件。
Zotero 也提供了这个机制，称为[链接文件](https://www.zotero.org/support/attaching_files#stored_files_and_linked_files)。搭配插件[ZotFile](http://zotfile.com)可以达到很好的效果。

## Zotero 插件推荐

由于插件都在 Github 仓库中，国内访问可能会比较困难，文末会给出国内镜像地址。
而且插件只可安装在桌面端。

### [ZotFile](http://zotfile.com)

我推荐的多设备同步方式就是利用这个插件，接下来简要介绍一下。
首先，Zotero 中需要设置链接文件 Base 文件夹，我使用的云存储服务是[Dropbox](https://www.dropbox.com/)，其他可使用的云服务有[iCloud](https://www.icloud.com)，[OneDrive](https://onedrive.live.com/)，[Google Drive](https://drive.google.com/)，[坚果云](https://www.jianguoyun.com)。
将链接文件 Base 文件夹设为自己想要存储的文件夹位置即可。
![[CleanShot 2023-02-13 at 02.25.01@2x.png]]安装 Zotfile 插件，下载最新的 xpi 文件进行安装，安装方法：打开 Zotero -> 工具 -> 插件 -> 右上小齿轮图标 -> Install Add-on From File ... -> 选择下载好的 xpi 文件。
如果使用 Filefox 浏览器，需要右键点击下载链接，另存为···来进行下载，因为直接点击链接，xpi 文件会直接安装到 Firefox 中。

安装好后，在工具 -> ZotFile Preferences 中进行设置。
![[CleanShot 2023-02-13 at 02.41.56@2x.png]]
新附件的源文件夹一般为系统或浏览器的默认下载文件夹。
文件位置和链接文件 Base 文件夹同一位置即可。
至此，多设备同步就设置好了。可以登陆 Zotero 账号浏览文献信息，并在云存储服务中存储文献附件。

除此之外，ZotFile 插件还提供将附件发送到平板以及重命名功能，可根据需要自行设置。

### [Jasminum](https://github.com/l0o0/jasminum)

该插件特别优化了利用 Zotero 获取知网文献的使用体验。
实现了以下功能：

- 拆分或合并 Zotero 中条目作者姓和名
- 根据知网上下载的文献文件来抓取引用信息（就是根据文件名）
- 添加中文 PDF/CAJ 时，自动拉取知网数据，该功能默认关闭。需要到设置中开启，注意添加的文件名需要含有中文，全英文没有效果（还是根据文件名）
- 为知网的学位论文 PDF 添加书签
- 拉取文献引用次数，是否核心期刊
- 更新中文 translators
  ![[CleanShot 2023-02-13 at 13.22.06@2x.png]]

### [文字处理插件](https://www.zotero.org/support/word_processor_integration)

官方提供对于 Microsoft Word，LibreOffice 和 Google Docs 的支持。
第一次打开 Zotero 会根据电脑上安装的文字处理软件自动启用插件，Goodle Docs 通过 Zotero Connector 提供支持。
此外还有[第三方插件](https://www.zotero.org/support/plugins#word_processor_and_writing_integration)与 Obsidian，Notion，Logseq，VS Code，LaTeX 等程序集成。
这里以 Microsoft Word 进行演示：
![[CleanShot 2023-02-13 at 11.55.17.mp4]]
启用插件后，Microsoft Word 会出现 Zotero 标签，在自己需要添加参考文献的地方选择添加引文，会启用 Zotero 条目选择器，搜索自己要添加的文献，可以一次添加多个文献，添加后，会自动生成文献标号。
在论文完成后，在最后的参考文献部分添加 Bibliography 即可。

需要注意的是，添加文献之前，需要先在文档设置中更改引文样式，根据自己所学专业选择即可，由于我是工程类，这里选择了 IEEE 样式，也可以自行在 Zotero 中添加样式。
![[CleanShot 2023-02-13 at 12.02.57@2x.png]]

### 其他插件推荐

#### 我安装的插件：

[Better BibTex for Zotero](https://retorque.re/zotero-better-bibtex/):必备插件，是很多插件的基础。
[Zotilo](https://github.com/wshanks/Zutilo):提供一些额外的编辑功能。
[Del Item With Attachment](https://github.com/redleafnew/delitemwithatt):当删除条目时移除附件，搭配链接文件同步方式体验极好。
[ZoteroQuickLook](https://github.com/404neko/ZoteroQuickLookReload):使用 Mac 的朋友都应该熟悉 Space 键快速查看文件内容的机制，这个插件为 Zotero 中的文件提供了这种机制，Mac 下无需额外配置，Linux 和 Windows 用户需要额外配置。
[Zotero PDF Preview](https://github.com/windingwind/zotero-pdf-preview#readme):在文献库视图中预览 PDF 附件。
[Zotero PDF Translate](https://github.com/windingwind/zotero-pdf-translate#readme):自动翻译 PDF、批注、注释和项目标题。
[Zotero Reference](https://github.com/MuiseDestiny/zotero-reference#readme):侧边栏展示阅读文献的所有参考文献，多源浮窗，双向关联。
[Zotero Tag](https://github.com/windingwind/zotero-tag#readme):管理标签，添加规则。
[DOI Manager](https://github.com/bwiernik/zotero-shortdoi):检索和验证 DOI 和 shortDOI。
[Sci-Hub Plugin for Zotero](https://github.com/ethanwillis/zotero-scihub):自动通过 DOI 下载 PDF。
[scite Plugin for Zotero](https://github.com/scitedotai/scite-zotero-plugin):scite 官方插件，根据智能引文数据查看每篇论文的分类计数。
[Zotero Citation Counts Manager](https://github.com/eschnett/zotero-citationcounts):从各种来源自动获取引文计数。
[Tara](https://github.com/l0o0/tara):备份和恢复首选项，插件，Translators，样式以及在两台计算机之间同步。
[Night for Zotero](https://github.com/tefkah/zotero-night):Zotero UI 和 PDF 的夜间模式。
[Zotero Citation](https://github.com/muisedestiny/zotero-citation#readme):让 Zotero 与 Word 联动更方便。
[MarkDBConnect](https://github.com/daeh/zotero-markdb-connect):将 Markdown 数据库连接到 Zotero。直接从 Zotero 项目跳转到连接的 Markdown 文件。自动标记 Zotero 项目，以便可以轻松查看哪些论文做了笔记。
[Citation Picker for Zotero](https://marketplace.visualstudio.com/items?itemName=mblode.zotero):在 VS Code 中调出 Zotero 引文选择器。

#### 其他优秀的插件:

[Zotero Better Notes](https://github.com/windingwind/zotero-better-notes):关于笔记管理的一切。都在 Zotero。由于我的笔记软件是 Obsidian，且有移动端的需求，而且个人理念是各司其职，专业的事情交给专业的来做，所以未安装。
[Chartero](https://github.com/volatile-static/Chartero):阅读统计可视化。大版本更新中，等待 Zotero7 更新。
[Zotero Style](https://github.com/MuiseDestiny/zotero-style):为 Zotero 增添色彩。可能是 Intel 版本性能较差，且安装了较多的插件，会导致卡顿，等待 Zotero7 更新。
[Notero](https://github.com/dvanoni/notero):同步条目到 Notion。个人笔记软件是 Obsidian，不用 Notion。
[Logseq](https://docs.logseq.com/#/page/zotero):Logseq 官方集成。个人笔记软件是 Obsidian，不用 Logseq。

## 总结

由于我也是刚开始使用 Zotero，也刚开始写论文，所以只能进行一个入门的介绍，有进阶的使用场景和使用方式的朋友可以积极评论。其他的文献管理软件例如[Endnote](https://endnote.com)，[Mendeley](https://www.mendeley.com)，[Papers](https://www.papersapp.com)，[Bookends](https://www.sonnysoftware.com/bookends-for-mac)也有各自的优缺点，我个人的选择是 Zotero，日后会介绍我选择应用程序的一些方法和原则。

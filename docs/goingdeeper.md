

Getting started

I am running a FeedLand server at <a href="http://feedland.org/">feedland.org</a>. There's a small group of people that formed the start of the community. There's room for more, but over time I expect we'll encourage people to start their own communities. I expect the server software will ultimately be available with an open source license. 

How do I use it?

To get started, log in at <a href="http://feedland.org">feedland.org</a> with your Twitter account. We're just using it for identity, so we have a name for you that's different from everyone else's name.

Add some feeds to your list by browsing the hotlist, my subscription list, or choose the <i>Add a few feeds</i> command in the Tools menu. 

Once you've done that, let's focus on the heart of the app, your Feed List page. 

The Feed Info page

When you click on the title of a feed you are taken to the Feed Info page for that feed. Here's a screen shot. 

<div style="border: 1px solid silver; width: 650px; padding-top: 10px; padding-bottom: 10px; margin-bottom: 20px; text-align: center;"><img src="http://scripting.com/images/2022/10/19/feedInfoScreenShot.png">

When you click on the <i>Title, </i>you're taken to the home page of the site the feed is associated with, via the top-level &lt;link> element in the feed.

<i>Description</i> comes from the top-level &lt;description> element in the feed. 

The link to the <i>Feed</i> displays the contents of the feed on <a href="http://xmlviewer.scripting.com/?url=http%3A%2F%2Fscripting.com%2Frss.xml">xmlviewer.scripting.com</a>. If you need the actual URL of the feed, you can copy it from the text at the top of the xmlviewer page. I'm sorry it has to be like this, but most browsers screw with the display of feeds, and sometimes you need to actually see the source of the feed itself not a friendly rendering of the feed. 

<i>Categories</i> lists the categories you have assigned the feed to. If you click the (Edit) button you can change the category assignments in the <a href="http://scripting.com/images/2022/10/19/categoriesDialogScreen.png">dialog</a>. 

<i>When added</i> says when the feed was first added to the FeedLand database, and by whom. 

<i>When updated</i> says the last time we found a new item in the feed. We do recognize other changes in the feed, for example if the text of an item changes, but for us to flag a feed as updated there has to be a wholly new item.

<i>Items / Checks</i> says how many items we have from this feed in the database, and how many times it has been checked for new stuff. There's a button next to this item that tells the server to check the feed right now. 

<i>Last renew</i> says when the feed's associated <a href="http://home.rsscloud.co/">rssCloud</a> server has been last notified that FeedLand wants to be pinged when the feed updates. This protocol is part of the RSS 2.0 standard, and is widely supported on the web. However not all feeds support it. So if there is no date or time there, it means the feed doesn't have this support. In either case we check the feed manually periodically for new stuff. Feeds that support rssCloud should update instantly when they change. For feeds that support the protocol, we must renew within 25 hours or the subscription will be cancelled, but we try to do it within 23, because in this case it's better to be a little early. 

<i>Secs to read</i> says how long it took the FeedLand server to read the feed. It's usually pretty quick, well under a second, but if the number is higher, that could indicate a problem with the feed, or possibly with the FeedLand server. 

<i>Subscribers</i> tells you who is subscribed to this feed. If you click on a name you are taken to their Feed List, where you may get ideas for feeds you want to subscribe to. 

The <i>big blue button</i> at the bottom of the page says either Unsubscribe, if you're subscribed to the feed, or Subscribe if you're not. 

Reading feeds

FeedLand has two basic ways to read the content of feeds -- the river and mailbox views.  

Here's a simple way to compare them. First go to the <a href="http://feedland.org/?feedurl=http%3A%2F%2Fscripting.com%2Frss.xml">Feed Info page</a> for Scripting News, my blog. 

When you're viewing a Feed Info page a new menu appears, the View menu, with two choices enabled -- <i>View as river</i> and <i>View as mailbox.  </i>

I've included screen shots below to give an idea. There are benefits to each of the views. At this writing (October 2022) the mailbox view still could use a lot of features, I have focused on the river view. I hope to get some time to add the features soon. 

<div style="border: 1px solid silver; width: 650px; padding-top: 10px; margin-top: 20px; padding-bottom: 10px; margin-bottom: 20px; text-align: center;"><img src="http://scripting.com/images/2022/10/19/riverScreen.png">

<div style="border: 1px solid silver; width: 650px; padding-top: 10px; padding-bottom: 10px; margin-bottom: 20px; text-align: center;"><img src="http://scripting.com/images/2022/10/19/mailboxScreen.png">

Settings

The Settings command in the System menu opens a tabbed dialog box with settings. The System menu is in the top right corner of the screen.

The first panel configures <a href="http://docs.feedland.org/categories.opml">Categories</a>. 

The second panel is for <a href="http://docs.feedland.org/newsProducts.opml">News Products</a>. 

The third panel makes it possible to set the URL of the app you use for linkblogging. It's hooked up to the RT icon below each item in the river display. <a href="http://scripting.com/images/2022/10/20/recycleIconScreen.png">Screen shot</a>. By default the linker app is <a href="http://radio3.io/">Radio3</a>, but this setting is there so that you can change it. Any software used for that will hopefully tell you how to make this change.   

The fourth panel -- Misc -- allows you to change some random settings.

<i>News is the home page. </i>If you check this box, when you go to feedland.org you will be taken to your News page. If you uncheck it, you'll go to your Feed List page. Default is unchecked.

<i>Show news items in a small box at the top of the screen. </i>If checked, you will get a box through which news scrolls, one story at a time, in realtime. Default is unchecked. <a href="http://scripting.com/images/2022/10/20/newsbox.png">Screen shot</a>. 

<i>Block background updates for Feed List page.</i> If checked, the Feed List page won't change unless you reload the page. I needed this for debugging, but you may prefer not to be interrupted by changes, so I left it in. Default is unchecked.


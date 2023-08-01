# Your FeedLand feed 

FeedLand is designed to be a feed-based alternative to social media apps like Twitter, Bluesky, Mastodon. 

Like those products FeedLand is two-way, so in addition to reading, you can also write. 

This page explains how that works

### How to

Choose <i>My feed</i> from the first menu.  

A new page opens with an edit box at the top and a place for a feed of items below. 

Click in the box and type something like <i>Hello World</i> and click the Post button.

In a moment the message you typed <a href="http://scripting.com/images/2022/11/08/editboxwithitembelow.png">appears below</a> in the list of the feed's items. 

### Screen shot of the edit box

<img src="http://scripting.com/images/2023/04/05/editboxScreenShot.png">

### Editing text

To edit the text in an item, click on the text in the list. The text then appears in the edit box. Make changes, when you're ready to publish click the <i>Update</i> button. The text changes both in the feed and in the list. 

If you decide you don't want to save your changes, click the Cancel button. 

Here's a <a href="http://scripting.com/images/2022/11/08/editboxbeingusedtoedittext.png">screen shot</a> of the edit box being used to edit an existing item.

In this mode, the text is not saved to the server as you make changes. 

### Notes

If you want more info about the published feed, click the (Feed) link next to the feed title. It will take you to the Feed Info page, which includes the URL of your feed. 

If your username is bullmancuso, this is <a href="http://data.feedland.org/feeds/bullmancuso.xml">where</a> your feed would be. 

Here's the <a href="http://feedland.org/?feedurl=http%3A%2F%2Fdata.feedland.org%2Ffeeds%2Fbullmancuso.xml">Feed Info page</a> for bullmancuso.

If you want to change the title or description of your blog, choose Settings from the right-most menu, click on the Feed tab and you can edit it there. <a href="http://scripting.com/images/2022/11/08/settingsdialogscreen.png">Screen shot</a>.

### Markdown is just enough HTML

If you look at the <a href="http://data.feedland.org/feeds/bullmancuso.xml">feed</a>, you'll see that the text is saved in the feed in both HTML and Markdown. 

Here's a an example, an item that has a bit of markup, see how it appears in the description element as HTML and in the new source:markdown element in Markdown syntax. 

&lt;item>

&lt;description>Some &lt;em>italic&lt;/em> text.&lt;/description>

&lt;pubDate>Tue, 08 Nov 2022 17:59:11 GMT&lt;/pubDate>

&lt;guid isPermaLink="false">384060&lt;/guid>

&lt;source:markdown>Some _italic_ text.&lt;/source:markdown>

&lt;/item>

A reader app is free to use either one, and will get the same result. I want to see if other content makers and reader devs will join me in favoring Markdown source when it's available over HTML. There are good <a href="http://scripting.com/2022/08/25/210902.html?title=markdownIsJustEnoughHtml">reasons</a> why it's the way to go.

### The bookmarklet

Here's the bookmarklet. As usual, drag the <b>FL</b> text below from the web page into your browser's chrome. 

<a href="javascript:(function() {var params = " ";function="" addparam="" (name,="" val)="" {if="" (params.length=""> 0) {params += "&";}params += name + "=" + encodeURIComponent (val);}addparam ("linkblog", "true");addparam ("title", document.title);addparam ("description", window.getSelection ().toString ());addparam ("link", window.location.href);var callUrl = "https://feedland.org/?" + params;console.log (callUrl);window.open(callUrl, %27_blank%27);})();" style="font-size: 28px; font-weight: bold; color: black;" >fl<="" a=""></a>

comment. if the html above gets screwed up, you can find a fresh copy here. 

http://scripting.com/code/feedland/home/bookmarklet.txt

When you are on a web page that you want to link to from your feed, click the bookmarklet. FeedLand will open in a new tab with the title of the page in the editbox and a link to the page in the link field in the Title, Link & Enclosure section of the editbox. 

If you select text on the page before clicking the bookmarklet, that text will appear in the editbox, and the title of the page will appear in the Title element of the TLE section of the editbox.

### Linkblogging from inside FeedLand

When you're looking at a timeline, there's a <i class="fa fa-retweet"></i> icon that's used to post the item to a linkblog. 

By default that is Radio3, but if you want, you can replace that with FeedLand by replacing the URL in the <i>Linker</i> tab in Settings with this:

<code>https://feedland.org/?linkblog=true&</code>

Here's a <a href="http://scripting.com/images/2023/04/05/linkerScreenShot.png">screen shot</a>.

### Enclosures

You can link to a media file from the Enclosure element in the Title, Link & Enclosure section. 

When your feed is saved, FeedLand generates an RSS &lt;enclosure> element, including a link to the file, its type and size.


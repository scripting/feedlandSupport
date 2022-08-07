
# August 6

### How to create a News Product

FeedLand now has a News Products sub-menu of the Testing menu.

Each of the items in the menu is a list of feeds that form a river. 

Each of the feeds in a list must be subscribed to by someone who used FeedLand. 

If it's not, it's not actually a big deal -- but obviously none of its items can show up in the river if we aren't reading it periodically.

If you want to create a NP, great -- I want you to!

So this is how you do it with FeedLand and Drummer.

1. In Drummer, be sure you have the DW menu option checked in the Testing panel of the Settings command. 

2. Create a new file, it doesn't matter what you call it. You could name it myFirstRiver.opml.

3. In the DW menu, choose Get Subscription List from the HTTP menu. 

4. You will get an outline of all your subscriptions from FeedLand.

5. With the bar cursor on My Subscriptions, choose Promote from Reorg menu, and delete the My Subscriptions headline.

6. You should now have a list of all your subscriptions in the outline.

7. Edit the list, deleting the feeds that you don't want in your river.

8. Make the outline public, save the URL. Post a copy of the URL as a comment in <a href="https://github.com/scripting/feedlandSupport/issues/18">this thread</a>. We'll review the outline, and let you know if it looks okay and then we'll discuss the next steps. 

There is more to come in this <a href="http://scripting.com/davenet/2000/11/30/bootstrapping.html">bootstrap</a>. 😀


### The View menu

A new menu appears in the menu bar if one of three views is currently displayed:

1. A single-feed river.

2. A mailbox view of a feed.

3. The Feed viewer page for a feed.

It allows you to switch to one of the other views.

So if you want to know who subscribed to the feed, choose Feed info.

If you want to see all the items by scrolling choose River.

If you want to see the mailbox view, choose Mailbox.

Let's see if we use these commands. 

Questions, comments <a href="https://github.com/scripting/feedlandSupport/issues/17">here</a>.


### Developer toolkits and example source

I developed the <a href="https://github.com/scripting/feedlandSupport/tree/main/subscriptionListCleanup">subscriptionlistCleanup</a> utility in May, as part of my work on FeedLand. Yesterday I added it to the <a href="https://github.com/scripting/feedlandSupport">FeedlandSupport repo</a>, alongside the <a href="https://github.com/scripting/feedlandSupport/tree/main/rivershell">riverShell</a> utility. Both are Node apps.

I'm going to keep developing and releasing developer stuff, example code, utilities, debugging tools -- but if you're not a developer, you are not expected to get these things to work. Sometimes there's confusion about this. It's analogous to when you buy a new refrigerator and the docs include technical information for repairers. As a user, you put that away and out of your mind (at least I do). Same thing here. 

I'm doing this, where developers of other feed software don't, because I am trying to create interop, to extend the RSS platform after 20 years of inactivity. I want to do new things that are then incorporated into other products. So I want to make it as easy as possible for their developers to do so. Eventually the feedlandSupport repo will be public, and I want a full complement of technical tools, docs and example code to be there. And because there are developers in the test group, and I want them to be thinking about things they can develop around FeedLand.

I use Node, but if you prefer Ruby, Python, Java, whatever -- feel free to port any of this code and please make it public and let me know about it -- so I can add it to a list of compatible stuff. That's how we got RSS off the ground, with support in lots of environments. 


# August 4

### Checking in..

This is the first email update since August 1. 

I have been working, but most of the communication has been through messages on the <a href="https://github.com/scripting/feedlandSupport/issues/13">FeedLand Support</a> GitHub site. 


### "News Product"

I'd like to introduce a new term: "News Product."

In this context, <i>News</i> is what we squeeze out of a personal collection of feeds, and check regularly, several times a day. This is what people who use <i>Feed Readers</i> do, products like <a href="https://netnewswire.com/">NetNewsWire</a>, <a href="https://feedly.com/i/my">Feedly</a>, <a href="https://www.inoreader.com/">Inoreader</a>, <a href="https://github.com/scripting/river5">River5</a>, etc. I have to make a good list of them, because in a sense FeedLand is a partner of all of them. We make a product that fits in with all of them through interop with OPML.

The person who uses a Feed Reader is, in a sense, a programmer of news. They curate a set of feeds that meets their own needs. But this requires an investment, you have to learn how to find the feeds, and do the work of subscribing to them. What if all you want is news and don't want to do any of the work?

That's what <i>News Products</i> are for. 

Products made out of news. A person who loves news, and wants to share it with others, such as a reporter, publisher, blogger or just a fan, maintains a set of feeds, hooks it up to an aggregator like FeedLand, which churns over the list, and out the other end comes an always-updating and fresh collection of reverse-chronologic news. 

FeedLand aspires to be a tool for creating and running News Products.

Examples -- <a href="http://nbariver.com/">nbariver.com</a>, <a href="http://mlbriver.com/">mlbriver.com</a>, <a href="http://podcatch.com/">podcatch.com</a>, <a href="http://guardian.newsriver.org/">guardian.newsriver.org</a>, <a href="http://politics.newsriver.org/">politics.newsriver.org</a>.

Now, the problem with those examples is that setting them up is too much work, and there's too much replicated code, so bugs can't easily be fixed and new features can't easily be added. 

This time I want to make that work beautifully so there will be lots of great, easily maintained, News Products. 


### Progress

Yesterday got the server-side functionality working. 

Today I have a single News Product running inside FeedLand. 

1. Choose NYT River in the Testing menu

You'll see a river of NYT stories, generated from a list of feeds that I am subscribed to in FeedLand. 

<img src="http://scripting.com/images/2022/08/04/nytRiverCommand.png">

I'll have a set of followup steps in the coming days..

Questions/comments <a href="https://github.com/scripting/feedlandSupport/issues/15">here</a>. 


### Stay cool

If you're on the East Coast of the US, try to stay cool. 😎


# August 1

### Rivers

Today is a big day for new features in FeedLand.

<b>A new checkbox in Settings</b>

There's a new option in the Testing panel in the Settings command (in the System menu, at the right edge of the menu bar).

It's a checkbox that tells FeedLand to use the river-style reader in place of the maiblox-style reader.

If it's checked, when you click on the name of a feed in the feedlist, the items will open in a reverse-chronologic list of items. 

<b>Only deal-stopper bug reports for now</b>

Lots of never-seen-before features in rivers, and for the most -- they work. You will see bugs. This is 100 percent new software, never been used by anyone but me, but for now, try to ignore all the bugs that don't prevent you from using the system. Those I need to know about when you're ready to report. But otherwise, focus on exploring the functionality.

<b>A non-feed-specific river</b>

There's a new command in the menu, _VIew My News._ It opens a river of all your feeds in reverse-chronologic order. This is available even if you've chosen to use the mailbox-style reader. 

In the next section I'll list some of the features you should look out for. 

BTW, there's more to come. This is not the end of new features. :smile:

<b>Some of the new features</b>

* Rivers update in real time as new items are discovered by the FeedLand server.

* If an item is too long it's truncated, and a MORE element shows up. If you click it, you'll see the rest of the item, and a LESS element shows up.  

* There's a Like icon on each item. It works. It still needs some more features to be fully useful. 

* There is an enclosure icon for each item, it's enabled if the item actually has an enclosure.

* The Share icon is a placeholder, the functionality is not implemented at this time.

* The time in the lower right corner is also a permalink to the item on the source's website. 

I'm sure I forgot to list some important features. :-)


### Comments, questions

Here's a <a href="https://github.com/scripting/feedlandSupport/issues/10">thread</a> for today's new features. 


# July 30

### New feature: The hotlist

The 100 most-subscribed-to feeds.

This is the URL: <a href="http://feedland.scripting.com/?hotlist">http://feedland.scripting.com/?hotlist</a>

It's also in the menu.

Discussion <a href="https://github.com/scripting/feedlandSupport/issues/9">here</a>.


### Screen shot

<img src="http://scripting.com/images/2022/07/30/hotlistScreen.png">


# July 29

### New feature: The News Box

News items flow through the <i>News Box</i> at the top of the screen. 

<img src="http://scripting.com/images/2022/07/29/newsBoxScreenShot.png">

How to turn it on:

1. Choose Settings from the system menu, the one at the right edge of the menu bar.

2. In the Testing panel, click on the checkbox that says "Show news items in a small box at the top of the screen."

3. Click on OK.

A box should appear at the top of the screen. Note it might be empty. Wait a while something will show up.

The vertical wedges at the right move you up and down through the list.

You will only see news from feeds you are subscribed to.

The limit is 100 news items. After 100, it starts dropping off oldest items. It remembers the items between invocations of FeedLand.

This is an experiment. I'm not so much interested in first impressions as I am about the utility. Do you find it compelling? That's something that takes a bit of time to find out.

Of course if there are problems I want to know about those right away. But be sure to include the big 3 and try to reproduce it and simplify. The big 3 are: what you did, what happened, what you expected to happen.

This is the first news reading functionality outside the mailbox-style interface. There will be more.

The discussion starts <a href="https://github.com/scripting/feedlandSupport/issues/8">here</a>.


### Voicemail #2

<a href="http://scripting.com/2022/07/29/feedlandUsersVoicemail2.m4a">A second voicemail</a>. Basic point -- FeedLand is a canvas and a toolkit. Very much about community, modeled after BingeWorthy. Going to be trying out new ideas, and hopefully some of the early testers will too. It's a very ambitious product -- the goal is to restart innovation in rss.land. Lots of news flow out there. A billion ways to use it. 


### The first week

As we close out the first week of testing for FeedLand, all I can say is -- wow what a group! 

I totally look forward to working with all of you. 


# July 28

### No new features today

I had planned to have something ready for release today, but decided to put in another day's work before showing it off. 


### Bug fix

Fixed a bug in mailbox-style reader where item titles would wrap at 300px when there was much more room available.

This was due to a CSS collision. Fixed 


### When testing a feed

If you think there might be a problem with how FeedLand is reading a feed, a simple way to get an idea of what's happening is to run it through the Feeder app. It's just a simple web interface on the reallySimple package which is how the FeedLand server gets the contents of feeds. 

Here's an <a href="http://feeder.scripting.com/returnjson?feedurl=https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FTheater.xml">example</a> of its use for reading the NYT theater news feed.


### Comments, questions?

Here's the new <a href="https://github.com/scripting/feedlandSupport/issues/7">thread</a> for tomorrow.


# July 27

### Today's new feature

<img src="http://scripting.com/images/2022/07/27/subscriptionLogScreenShot.png">

It's a command in the Testing menu.

It's a reverse chronologic view of recent subscriptions.

So from this list I can see that davewiner sub'd to John's World Wide Wall Display, Real Python and Etsy-Shop für ZenspireDesigns.

And so on.

The checkboxes should work (that's where most of today's work went, into getting the checkboxes to live outside the feedlist).

The times should also update if you leave the display there.

No column titles yet.

It does not yet update in real time, so to see new subscriptions, reload the page.

You can test it out by clicking an unchecked checkbox and then reloading the page. Your new subscription should be the first on the list.


### More features tomorrow

In the meantime if you have comments or questions please <a href="https://github.com/scripting/feedlandSupport/issues/6">post them here</a>.

If you're new to this group, have a visit at the <a href="https://github.com/scripting/feedlandSupport">Support site</a>, esp the <a href="https://github.com/scripting/feedlandSupport/blob/main/docs/overview.md">Overview page</a>. 

Might want to listen to yesterday's <a href="http://scripting.com/2022/07/26/voicemailToFeedLandUsers.m4a">voicemail/podcast</a> to the group. 

Now it's time to say goodnight! :-)

DW


# July 26

### A long exciting day

After spending seven months working on a piece of software as the only user of it, it's quite a change to go to having actual users. It's always jarring, even though while you're working on it, the assumption is that other people will use it eventually, it's another thing when that day comes. 

I'm finding we need more tools to see what's going on in the little world we've created. So I added a new sub-menu to the testing menu, which allows you to quickly visit the subscription list of each other current users. I don't expect this will be maintained very long, rather I hope better tools for discovery will make the difference. Here's a <a href="http://scripting.com/images/2022/07/26/testersLists.png">screen shot</a> of the menu.

<img src="http://scripting.com/images/2022/07/26/testersLists.png">


### A voicemail

Here's a 12-minute <a href="http://scripting.com/2022/07/26/voicemailToFeedLandUsers.m4a">voicemail</a> to FeedLand testers, to give you an idea of what I'm thinking about as we start testing the software. 

The important point is this: You're not testing an almost-finished software product, as much as you're using some of the pieces that may go into the finished product. There are other pieces, but these are the ones I wanted you to see first.


### The Feed Viewer Page

In the voicemail I talk about the Feed Viewer Page, which you may not have seen yet because it's kind of buried in the user interface. 

So here's a <a href="http://scripting.com/images/2022/07/26/kenSmithFeedViewerPage.png">screen shot</a> of the page for Ken Smith's feed.  

<img src="http://scripting.com/images/2022/07/26/kenSmithFeedViewerPage.png">

In case it wasn't clear in the voicemail, to see this page, click on one of the green circle icons in a feedlist.

If you're a programmer, the Feed Viewer page reflects exactly what is returned by the <a href="https://github.com/scripting/reallysimple">reallySimple</a> feed reading package. Here's the <a href="http://feeder.scripting.com/returnjson?feedurl=http%3A%2F%2Foldschool.scripting.com%2FKenSmith%2Frss.xml">JSON of that structure</a> for Ken Smith's feed. That's what FeedLand gets when it reads the feed through the reallySimple package. 


### Check out Scripting News

A <a href="http://scripting.com/2022/07/26/170804.html?title=newsFlows">post</a> about news flow. 

I say for the record that this project has started without saying what it is. 

For now, please what you're reading here is for you only. Thanks. ;-)


### A sneak peak at the hotlist data

I put together the SQL query for the hotlist page. This is <a href="http://scripting.com/images/2022/07/26/hotlistdata.png">what I have</a> so far. 

I think it's really cool that Ken Smith's feed is ahead of mine. 

Hey Ken these people like you! 


### Questions, comments?

A <a href="https://github.com/scripting/feedlandSupport/issues/4">thread</a> for Day 2 of the great experiment! :-)

See yuz tomorrow with more observations and new features (knock wood, praise Murphy).


# July 25

### Welcome to FeedLand!

Thank you for being part of the initial FeedLand testing group. 😀

I've been working on this product full-time since January, but in a real way I've been working on it since 1999 when RSS first came out as a project between UserLand and Netscape and then the NY Times. RSS 2.0 shipped in Sept 2002 and as far as I know that was the last major event in the life of RSS. 

Early this year I got it in my head that with the 20th anniversary coming up, why not spend some time trying out some new ideas that I had been accumulating. So I cleared the decks and put my head down and started developing.

Now in late July the software is usable for its intended purpose, which is why I want to this group using it. I've asked eight people who I have worked with before in various capacities to help explore what we can do with the product. There's some new functionality at the core, combining feeds and people. It's a community of people who read feeds. I like to think of it as a "place to share and discover feeds." You'll be hearing that phrase a lot. :-)

This email is about getting the process started. You will get at most one email a day. In these emails I'll explain what's new in the product, things I want people to try out and think about, to ask questions and learn, and have fun -- all of us. Kind of like RSS was back in the day. 


### Getting started

A few things to try out -- 

Go to <a href="http://feedland.scripting.com/ ">feedland.scripting.com</a> and log in using your Twitter account. 

Next step, in the Testing menu, choose <i>Add a Few Feeds.</i> It will subscribe you to some feeds to get started, so you have something to explore with.

View <a href="http://feedland.scripting.com/?username=davewiner">my feedlist</a>.  If you see any feeds you're not subscribed to, you can do so by clicking the checkbox. This is called Checkbox News, something I <a href="http://scripting.com/stories/2007/04/23/tvNewsOfTheFuture.html">proposed</a> in 2007, but am just now implementing for the first time. ;-)

If you click one of the green icons in the right side of the feed list (I know this is kind of buried) it will take you to the info page for the feed, where you can see who else is subscribed to it. If you click on their name you'll see their feed list. This way you can walk a network of feeds and people. As the network grows you'll see more people and feeds. How will it grow? I do not know. I've never done this before. 

You can add some feeds of your own, but there's a limit of 100 feeds you can add. You can subscribe to as many as you like (via the checkboxes).

Review the <a href="https://github.com/scripting/feedlandSupport/blob/main/docs/overview.md">overview doc</a> on the support site. 

That's it for now. 


### Next email, tomorrow

There will be another email tomorrow and the  day after, as the initial process boots up.

Thanks for your help! I'm really looking forward to working with you on this. 


### Questions, comments?

If you have any questions, I've started a <a href="https://github.com/scripting/feedlandSupport/issues/3">thread</a> in the support site on GitHub. 


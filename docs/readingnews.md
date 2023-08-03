# Reading news in FeedLand

From reading earlier docs, you know how to manage feeds, subscribe and unsubscribe, and find a few recent items in the feed list. Now we get into reading news.  

In FeedLand we have timelines, which are also called rivers, that show you the latest from feeds you've subscribed to, in reverse-chronologic order, ie newest first.

These timesline work like the ones in social media apps. Each item has links that allow you to Like an item, or pass a link on to other readers through a feed, or directly to social media apps like Bluesky and Mastodon, view an item on its own page for easier reading, bookmark it, get technical info about an item, or if it has an enclosure, listen to it as a podcast. 

As with other pages in FeedLand, there are lots of useful tool tips and mouse clicks. 

<img src="https://imgs.scripting.com/2023/08/02/river1.png">

### The timeline

The items are newest-first, grouped by feed. 

The first two items in the list above come from the NYT Technology feed, followed by one from Theater, then two from Asia Pacific news. 

### Info about each feed

The top line for each feed shows an icon for the feed, its title, a couple of links and a date. 

<img src="https://imgs.scripting.com/2023/08/02/feedTopLine2.png">

First is a favicon for the feed, provided by a web service run by DuckDuckGo.

Next is the title of the feed, which is linked to the home page for the feed. 

Then comes the (Feed) link, which connect to the Feed Info page for the feed. 

The right corner of the top line shows the <i>pubDate</i> value from the feed. 

PS: A not-famous feature, if you click the icon, FeedLand will immediately check the feed for new items. 

### What's in an item?

<img src="https://imgs.scripting.com/2023/08/02/riveritem2.png"> 

The top line is the item's title. It links to the full article on the web.

Below that is the description for the item, provided in the feed.

The bottom line has several bits:

1. Thumb-up icon for Liking the item, followed by the count of Likes so far. When you like an item, the count goes up and it is added to the RSS feed of your likes and the feed of all likes for this FeedLand instance.

2. RT icon, connects to your linkblogging tool, by default the one built into FeedLand, which will, after editing, be added to your personal feed.  

3. The document icon, which allows you to read the item on its own page. This is useful for long items, where you want to focus your full attention on reading the story.  

4. The bookmark icon, which opens the Bookmarks editor with a link to this item already added. You can edit the text, or move it up or down in the list of bookmarked items.

5. The Code icon, which opens a dialog with all the data we got from the feed about this item. Useful for debugging, also learning how feeds work.

6. The Audio icon, which is enabled if the item had a podcast enclosure. You can listen to the podcast by clicking the icon. 

At the right edge of the bottom line it says how long its been since FeedLand discovered the item. It links to the full article on the web, which is useful if the item doesn't have a title, which would normally link to the item on the web. 

### How tall items work

To make a timeline easier to read, FeedLand imposes a maximum height of 150 pixels for the display of an item, but you can view the rest of the item, quickly, by clicking on the text or image in the item.

When you do this, the item expands to full height. Click it again to make it smaller. 

Here's an example of such an item, before and after expanding.

<img src="https://imgs.scripting.com/2023/08/03/beforeExpanding.png">

<img src="https://imgs.scripting.com/2023/08/03/afterExpanding.png">


# Your Feed List

At the center of your FeedLand world is the Feed List. 

You can get to it by choosing <i>My Feeds</i> in the first menu. 

All the feeds you subscribe to are listed. 

### Using the list

You can change the order in which feeds appear by clicking on the column titles. 

From the feed list, you can categorize feeds, read news, see which feeds have recently updated, see who else is subscribed to a feed, see the stats for each feed. There's a lot of functionality packed into this page.

Also you can read everyone else's feed lists, and subscribe to any of the feeds they're subscribed to. You can quickly see which ones you have already subscribed to with the checkbox next to the feed's title. 

### Screen shot of a feed list

<img src="https://imgs.scripting.com/2023/08/02/feedlist2.png">

### Sort order

You can control the order of the list by clicking on a column head. 

* Title sorts the list alphabetically by its title. 

* When sorts chronologically by when the feed was last updated. 

* Ct sorts on the number of subscribers. 

If you click a header again it reverses the order, so if you were viewing alphabetically, it would switch to reverse-alphabetic.

### Each feed has wedge

Each line starts with a wedge. If you click it, the feed expands to show the five most recent stories in the feed, with a link to the story. Click the wedge again to collapse. 

<img src="https://imgs.scripting.com/2023/08/02/expandedWedge.png">

If you hover over the link to the story, a description of the story pops up.

<img src="https://imgs.scripting.com/2023/08/02/wedgeExpandedTooltipVisible.png">

### Click a checkbox to subscribe

Each feed has a checkbox which indicates whether you are subscribed to the feed. 

In your own list all feeds are checked. If you're viewing <a href="https://imgs.scripting.com/2023/08/02/someoneElsesFeedList.png">someone else's list</a> you will probably see some unchecked boxes. 

When you check or uncheck a box the effect takes place immediately.   

### Click the title for info about the feed

The third column is the title of the feed. It links to the <i>Feed Info</i> page for the feed, where you can get detailed info about the feed. 

Many of the items have tool tips, for example the feed title has as its tool tip the description of the feed. It's good to have it there because sometimes the feed titles aren't that helpful. 

### Categorizing a feed

Immediately after the feed title is a tag icon that connects to the <i>categories dialog</i> for the feed. It will only be present if you're subscribed to the feed. It's dark if you've set some categories, light if you haven't, so you can quickly see which feeds you have still to assign to categories. 

Categories allow you to route items from feeds to different tabs when reading news. You define the categories in the Settings dialog, linked to the menu in the upper right corner of the screen.

### How fresh is a feed -- the When column

The next column, <i>When,</i> says how long it has been since the feed published a new item. When you sort your feed list this way (the default) it's basically a new kind of feed reader, one which I discovered kind of by accident after implementing the feature. It's makes the Feed List page 100 times more useful imho.

### How popular is a feed -- the Ct column

The <i>Ct</i>  column says how many people have subscribed to the feed. 

### The info popup

If you hover over the green Info icon you can quickly see basic stats about the feed. I found this useful for debugging and left it in, because we're always debugging. ;-)

<img src="https://imgs.scripting.com/2023/08/02/feedInfoPopup3.png">

### Other features of a Feed List page

The white on orange XML icon is present at the top of many of the pages in FeedLand. It always links to the XML representation of the data on the page you're viewing. In this case, it links to the OPML version of your subscription list. 

The + Feed button brings up a dialog that allows you to enter the URL of a feed to subscribe to. This button is a remnant of earlier versions of FeedLand. Now there's a command in the first menu that does this, and it's present everywhere, not just on the Feed List page. We left it here, because why not. 

The link at the top of the page where it says this is a list of the feeds that davewiner is subscribed to, links to the main news page for the user, where you can see the latest news items from all these feeds. 


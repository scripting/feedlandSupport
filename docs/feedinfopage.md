# Feed Info page

Each feed that FeedLand follows has a Feed Info page. 

It's linked to from the Feed List, and from the (feed) link in a River timeline. 

<img src="https://imgs.scripting.com/2023/08/02/feedInfoPage1.png">

### The title links to the feed home page

When you click on the <i>Title, </i>you're taken to the home page of the site the feed is associated with, via the top-level &lt;link> element in the feed.

### The description comes from the feed

<i>Description</i> comes from the top-level &lt;description> element in the feed. 

### Viewing the actual feed

Sometimes when troubleshooting a feed, you need to actually see the source of the feed itself, not a friendly rendering of the feed, as many browsers try to provide.

The link to the <i>Feed</i> displays the contents of the feed on <a href="http://xmlviewer.scripting.com/?url=http%3A%2F%2Fscripting.com%2Frss.xml">xmlviewer.scripting.com</a>. If you need the actual URL of the feed, you can copy it from the text at the top of the xmlviewer page.  

### View and edit categories

The <i>Categories</i> row lists the categories you have assigned to the feed. If you click the (Edit) button you can change the category assignments in the <a href="http://scripting.com/images/2022/10/19/categoriesDialogScreen.png">dialog</a>. 

### View as

You can view the contents of a feed either as a timeline (or river) or using a traditional mailbox view. 

These links are also available in the Views menu at the top of each page.

### When added

<i>When added</i> says when the feed was first added to the FeedLand database, and by whom. 

### When updated

<i>When updated</i> says the last time we found a new item in the feed. We do recognize other changes in the feed, for example if the text of an item changes, but for us to flag a feed as updated there has to be a wholly new item.

### Number of items and checks

<i>Items / Checks</i> says how many items we have from this feed in the database, and how many times it has been checked for new stuff. There's a button next to this item that tells the server to check the feed right now. 

### Is it a fast-updating feed?

<i>Last renew</i> says when the feed's associated <a href="http://home.rsscloud.co/">rssCloud</a> server has been last notified that FeedLand wants to be pinged when the feed updates. This protocol is part of the RSS 2.0 standard, and is widely supported on the web. However not all feeds support it. So if there is no date or time there, it means the feed doesn't have this support. In either case we check the feed manually periodically for new stuff. Feeds that support rssCloud should update instantly when they change. For feeds that support the protocol, we must renew within 25 hours or the subscription will be cancelled, but we try to do it within 23, because in this case it's better to be a little early. 

### How fast is the server?

<i>Secs to read</i> says how long it took the FeedLand server to read the feed. It's usually pretty quick, well under a second, but if the number is higher, that could indicate a problem with the feed, or possibly with the FeedLand server. 

### Who is subscribed

<i>Subscribers</i> tells you who is subscribed to this feed. If you click on a name you are taken to their Feed List, where you may get ideas for feeds you want to subscribe to. 

### Subscribing

The <i>big blue button</i> at the bottom of the page says either Unsubscribe, if you're subscribed to the feed, or Subscribe if you're not. 


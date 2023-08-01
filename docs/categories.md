# Categories in FeedLand

Categories allow you to customize the news in FeedLand.

### How it works

You can assign each feed you're subscribed to to one or more categories. You decide on the categories, and whether or not to display them as tabs on your main news page in FeedLand. 

### Deciding on your categories

First think about what categories you want to use initially. I recommend just using two or three, to get used to the concepts. You can change your mind later. Here's a suggestion of a list of categories to start with.

``All, Tech, Politics, NYT, Bloggers``

You would then assign feeds that are largely about tech to the Tech category. 

If you were following a tech blogger, you would assign them to both Tech and Bloggers. 

I recommend having an <i>All</i> category, and unless you feel strongly that a feed should not be in it, that all feeds are. 

### Setting the categories

When you've decided on a list of categories, open the Settings dialog. Click on the Categories tab. Enter the category names, separated by commas, in the first box. Leave the other boxes empty for now. When you're done click the OK button to save the categories.

<img src="https://imgs.scripting.com/2023/07/31/settingsDialogCategories2.png?nocache=1">

### Assigning feeds to categories

Choose <i>My feed list</i> in the first menu. These are all the feeds you're subscribed to. 

To the right of each name you'll see an icon that looks like a tag. If the tag is dark that means the feed has categories already set, if it's light, only <i>All</i> is checked. Here's what that looks like:  

<img src="https://imgs.scripting.com/2023/07/31/pointingToTheTabWedge.png">

When you click it a list of checkboxes for each of your categories appears. Only the <i>All</i> checkbox is checked. 

Click the categories that apply to this feed. The checkboxes are hot, they change in the database immediately when you click on them. 

The title of the feed appears at the top of the dialog. If you hover the mouse over the title you'll see a tooltip with the description of the feed, as provided in the feed itself. Not all feeds have descriptions, and some of them aren't informative. 

The arrows at the bottom of the dialog allow you to move between feeds in the Feed List without having to close and re-open the dialog. 

<img src="https://imgs.scripting.com/2023/07/31/settingCategoriesForAFeed.png">

### Adding tabs to your news page

After assigning categories to some of your feeds, go back to the Settings dialog, and fill in the second box with a few categories:

``All, Tech, Politics``

Click the OK button to save the new settings, then choose <i>My news</i> from the first menu. You should now see your news organized into three tabs. 

<img src="https://imgs.scripting.com/2023/07/31/newsPageWithTabs.png"> 

### Getting an OPML subscription list for a category

Suppose you want an OPML subscription list for my politics category. 

<a href="http://feedland.org/opml?screenname=davewiner&catname=politics">http://feedland.org/opml?screenname=davewiner&catname=politics</a>

You can create a link like that for any user's category.

Or you can click the orange XML icon in the upper right corner of any page, where you see it.

### Facts about categories

The names of categories are not case-sensitive.

You can specify the categories for your news page in any order, they don't have to be in the same order as they appear in the main category list. 

### What does "All" mean?

When you create a new subscription, it is in no categories. 

If you have no categories defined, ie you're a new user, if you open the Categories dialog for any feed you will have one choice, All. It will not be checked. It's just a suggestion.

Basically All is a default category for every user. If you don't include it in your list, however, it will not be one of the checkboxes.

Categories are low-tech, if you delete a category from your list, all subscriptions that you've categorized with that label will remain labeled. The values you put in that dialog control what's in the checkboxes and what's in the tabs on your News page. 


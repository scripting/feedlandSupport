# News products

A news product is a one-page website you create with FeedLand for people outside of FeedLand to read.    

### Example

An example of a news product is <a href="http://mlbriver.com/">mlbriver.com</a>. It's a constantly updated list of news stories about baseball. I created the template to be clean and simple. I could have put the news flow in the middle of a template with other information, or as part of a larger website. 

<img src="http://scripting.com/images/2022/09/19/newsProductScreenShot.png">

### My news product

Here's the <a href="http://my.feedland.org/davewiner/">news product</a> I created for people who read my blog.  

I wanted the page to be on my domain, you I pointed a <a href="https://en.wikipedia.org/wiki/CNAME_record">CNAME record</a> at the my.feedland page.

The news content is maintained automatically by FeedLand according the feeds you subscribe to and the categories they're assigned to. You define the categories. 

Think of FeedLand as a development system for news products. 

<img src="https://imgs.scripting.com/2023/08/03/myNewsProductScreenShot2.png">

### How to

This is how you can create your own News product.

1. In the FeedLand app, choose <i>Settings</i> from the System menu (at the right end of the screen). 

2. Click on the <i>Categories</i> tab. The third text box is where you define the categories for your news product. Enter a few categories, separated by commas. 

3. Click on the <i>News Products</i> tab. You can choose a title, description and image to appear at the top of your page. Leave any of these items blank if you don't want to use them.

4. You can enter some CSS styles or JavaScript code in the text boxes for CSS and Script. <a href="http://scripting.com/images/2022/09/28/newsProductsSettingsPanel.png">Screen shot</a>. 

5. When you're done, click OK to save the settings. 

6. To see what your news product looks like choose <i>My news product</i> from the menu. <a href="http://scripting.com/images/2022/09/28/myNewsProductMenuItem.png">Screen shot</a>.

7. When you're ready to share this, you can give the URL to people outside the FeedLand community. 

### Advanced forms of News Products

If all you want to do is one news product, and if your style and script needs are modest, you can stick with the method above. 

But if you need to do more than one, or you want to enter lots of CSS and script code, you can create your news product in an outline, using <a href="http://drummer.scripting.com/">Drummer</a>, or any outliner that can create OPML with attributes at the head and item levels. 

### Outline-based news products

Specify the news product in an OPML file. 

There are four three top-level sections -- tabs, script, style and html.

Under <i>tabs</i> you list the names of the tabs, and the attributes tell FeedLand how to generate your tabs. 

Under <i>script</i>, enter any JavaScript code you want to run as the news product page is opened. 

Under <i>style</i>, enter any CSS styles that customize the look of the elements that FeedLand puts in the page.  

The <i>html</i> section is a bit more complicated, so I explain it in a separate section below. 

Then feed the OPML file to a web app at products.scripting.com, where it generates the HTML source code for the app. You can iterate over the outline until you're ready to deploy. Then copy the HTML text to your web server, where you serve it as a normal HTML file. 

When I say to "feed" the OPML to the app, what I mean is enter this kind of url in a browser's address bar:

<code>http://products.scripting.com/?template=http://urloftemplatefile/</code>

### Demo

The best way to understand is to look at an example of a news product in an outline.

Here's an <a href="http://scripting.com/publicfolder/feedland/products/davesSetup.opml">OPML file</a> that specifies a news product. Open it in an outliner that understands OPML to use it as a starting point for your news product. 

Here's a <a href="http://product.scripting.com/?template=http://scripting.com/publicfolder/feedland/products/davesSetup.opml">link</a> to product.scripting.com that previews this news product. 

And here's the product as <a href="http://scripting.com/misc/feedlandDemo1.html">deployed</a> on scripting.com.

And a <a href="http://scripting.com/images/2022/10/06/demoScreenshot.png">screen shot</a> of what the demo should look like.

### Specifying tabs

A tab displays the news from a collection of feeds in reverse-chronogic order. They're kind of like blogs but with news from RSS feeds. We also call them rivers of news or just rivers.

There are three ways to specify the feeds whose items are displayed in the tab. 

As a category.

As a list of feeds in the outline.

As an outline include of an OPML subscription list.

We use all three approaches in the demo setup.

### The html section

In this section of the outline, you can completely re-design the part of the HTML file that products.scripting.com generates that contains the information on the page. You might want to do this if you are including the news product in a site, and have it look like it's part of that site. 

Here's an <a href="http://scripting.com/publicfolder/feedland/products/sideways.opml">example</a> of an outline file that has an html section. 

If you completely expand the html section, this is what <a href="http://scripting.com/images/2022/10/06/htmlSectionScreenShot.png">you'll see</a>. 

You can completely change the HTML here as long as the top element is of class <i>divNewsProduct. </i>

There are macros pre-defined that allow you to pick up values set elsewhere in the template. 

The news river will be inserted underneath the object whose id is <i>idRiverContent. </i>

### Notes

You should be subscribed to a feed in FeedLand for it to be referenced in a tab. If no one is subscribed to the feed, then no news items will appear for it, because FeedLand won't check it if no one is subscribed.  

You can create a header at the top of the page of your news product by setting the title, description, and image head-level attributes in the outline. <a href="https://user-images.githubusercontent.com/1686843/184154693-4155fc34-d0fe-4457-ab87-6e4d771ec605.png">Screen shot</a>. 

You can use includes in your outline.  

### Questions?

Here's a <a href="https://github.com/scripting/feedlandSupport/issues/108">thread</a> specifically for help with News Products. 


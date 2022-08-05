# subscriptionListCleanup

A Node app that reads an OPML subscription list, and loop over all the feeds and only pass on the ones that are reachable and parseable.

#### Who it's for

You have to be a JavaScript programmer to use it. 

#### How to use

Upload the subscription list somewhere, and change config.urlSource to point to the list.

Run the app. It'll create an OPML with the same name that contains only the feeds it was able to read and correctly parse as a feed. 

#### Why?

I had a lot of OPML subscription lists from previous feed reading apps, and I wanted to speed up the process of getting them into my FeedLand database, and keep the no longer functional ones out of the database. 

#### Possible mods

It could be modified to read a local file instead of reading it over the net. My files just happened to be in folders on a server, so this way was more convenient. 

It's probably a good idea to look at the OPML file it generates in Drummer, because some of the feeds, while they may be valid RSS, Atom or RDF, haven't been updated in a long time. Alternatively you could make this app smarter by checking the result from reallysimple.readFeed and seeing how long it' has been since there's been a new item, and not passing it of if it's been too long. 


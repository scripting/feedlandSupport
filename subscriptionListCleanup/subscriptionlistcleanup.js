const myVersion = "0.4.1", myProductName = "debugsubscriptionlist";  

const utils = require ("daveutils");
const fs = require ("fs");
const request = require ("request");
const opml = require ("opml");
const reallysimple = require ("reallysimple");

const config = {
	urlSource: "http://scripting.com/code/subscriptionlistcleanup/nba.opml",
	timeoutSecs: 5
	}

function httpRequest (url, callback) {
	var theRequest = {
		url, 
		timeout: config.timeoutSecs * 1000
		};
	request (theRequest, function (err, response, data) {
		if (err) {
			callback (err);
			}
		else {
			var code = response.statusCode;
			if ((code < 200) || (code > 299)) {
				const message = "The request returned a status code of " + response.statusCode + ".";
				callback ({message});
				}
			else {
				callback (undefined, data) 
				}
			}
		});
	}
function notComment (item) { //return true if the outline element is not a comment
	return (!utils.getBoolean (item.isComment));
	}
function writeOutline (theOutline) {
	var fname = utils.stringLastField (config.urlSource, "/");
	fs.writeFileSync (fname, opml.stringify (theOutline));
	}

httpRequest (config.urlSource, function (err, opmltext) {
	if (err) {
		console.log (err.message);
		}
	else {
		opml.parse (opmltext, function (err, theOutline) {
			if (!err) {
				opml.expandIncludes (theOutline, function (theNewOutline) {
					var createdVal = new Date ();
					var theGoodOutline = { //the outline with the good feeds
						opml: {
							head: theOutline.head,
							body: {
								subs: new Array ()
								}
							}
						};
					opml.visitAll (theNewOutline, function (theNode) {
						if (notComment (theNode)) {
							if (theNode.type == "rss") {
								if (theNode.xmlUrl !== undefined) {
									var whenstart = new Date ();
									reallysimple.readFeed (theNode.xmlUrl, function (err, theFeed) {
										var secs = ", " + utils.secondsSince (whenstart) + " secs"
										if (err) {
											}
										else {
											console.log (theFeed.title + secs);
											var created = (theNode.created === undefined) ? createdVal : theNode.created;
											createdVal = new Date (createdVal.getTime () + 1000); //make sure every node has a different created value
											theGoodOutline.opml.body.subs.push ({
												type: "rss",
												text: theFeed.title,
												xmlUrl: theNode.xmlUrl,
												htmlUrl: theFeed.link,
												created
												});
											writeOutline (theGoodOutline);
											}
										});
									}
								}
							}
						return (true); //keep visiting
						});
					});
				}
			});
		}
	});

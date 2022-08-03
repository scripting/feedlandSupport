const utils = require ("daveutils"); 
const opml = require ("opml");
const request = require ("request");
const fs = require ("fs");

var config = {
	urlOpmlFile: "http://drummer.scripting.com/davewiner/river1.opml",
	urlDefaultServer: "http://feedland.scripting.com/"
	};

function httpRequest (url, timeout, headers, callback) {
	request (url, function (err, response, data) {
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
function buildParamList (paramtable, flPrivate) { //8/10/14 by DW
	var s = "";
	if (flPrivate) {
		paramtable.flprivate = "true";
		}
	for (var x in paramtable) {
		if (s.length > 0) {
			s += "&";
			}
		s += x + "=" + encodeURIComponent (paramtable [x]);
		}
	return (s);
	}
function servercall (path, params, flAuthenticated, callback, urlServer=config.urlDefaultServer) {
	var whenstart = new Date ();
	if (params === undefined) {
		params = new Object ();
		}
	var url = urlServer + path + "?" + buildParamList (params, false);
	httpRequest (url, undefined, undefined, function (err, jsontext) {
		if (err) {
			callback (err);
			}
		else {
			callback (undefined, JSON.parse (jsontext));
			}
		});
	}
function getOutline (url, callback) {
	httpRequest (url, undefined, undefined, function (err, opmltext) {
		if (err) {
			callback (err);
			}
		else {
			opml.parse (opmltext, function (err, theOutline) {
				if (err) {
					callback (err);
					}
				else {
					callback (undefined, theOutline);
					}
				});
			}
		})
	}
function getRiverFromList (feedUrlList, callback) {
	var jsontext = JSON.stringify (feedUrlList);
	servercall ("getriverfromlist", {list: jsontext}, false, function (err, theRiver) {
		if (err) {
			callback (err);
			}
		else {
			callback (undefined, theRiver); 
			}
		});
	}

getOutline (config.urlOpmlFile, function (err, theOutline) {
	if (err) {
		console.log (err.message);
		}
	else {
		var feedUrlList = new Array ();
		theOutline.opml.body.subs.forEach (function (item) {
			if (item.xmlUrl !== undefined) {
				feedUrlList.push (item.xmlUrl);
				}
			});
		console.log (utils.jsonStringify (feedUrlList));
		getRiverFromList (feedUrlList, function (err, theRiver) {
			if (err) {
				console.log (err.message);
				}
			else {
				const jsontext = utils.jsonStringify (theRiver);
				console.log (jsontext);
				fs.writeFile ("river.json", jsontext, function (err) {
					if (err) {
						console.log (err.message);
						}
					});
				}
			});
		}
	});

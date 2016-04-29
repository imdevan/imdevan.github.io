---
layout: blog-article
title: Using Express and images for virtual page views
title-color: purple
author: Devan Huapaya
category: blog
style_mod: BASIC
---

Virtual pageviews can be collected when someone visits a website other than your
own by using images and Express middleware.

On your server listen to a route that includes middleware to see if they
have a `_ga` cookie associated with your site.

```js
var virtualAnalytics = require("./virtual-analytics");
var app = express();
app.get("/virtual/:page", virtualAnalytics);
```

Inside of virtual analytics make a request to a Google analytics page to collect
the request data and pass it to Google Analytics.

```js
var request = require("request"),
    url = require("url");

var api = function (req, res) {
    // Make request to google analytics page and pipe response gif
    request.get(api.getGoogleAnalyticsUrl(req)).pipe(res);
};

api.getClientId = function (req) {
    if (req && req.cookies && req.cookies._ga) {
        // regular expression to get google analitcs
        var regEx = /GA\d\.\d\.(\d+\.\d+)/,
            regExResponse = regEx.exec(req.cookies._ga);

        return regExResponse ? regExResponse[1] : "auto";
    }
    return "auto";
};

api.getGoogleAnalyticsUrl  = function (req) {
    // Create url to google analytics page
    var gaUrl = url.format({
        protocol: "https",
        host: "www.google-analytics.com/collect",
        query: {
            "v":"1",
            "tid": "UA-XXXXXXXX-X",
            "cid": api.getClientId(req),
            "t": "pageview",
            "dp": req.params.page
        }       
    });
    return gaUrl;
};

module.exports = api;
```

Now if someone uses an image such as

``` html
<img src="imdevan.com/virtual/virtual-page-to-collect-metrics"></img>
```

The image will be treated as visitors going to the page
`virtual/virtual-page-to-collect-metrics`

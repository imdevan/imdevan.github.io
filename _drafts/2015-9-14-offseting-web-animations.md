---
layout: blog_article
title: "Offsetting Animations On the Web"
author: Devan Huapaya
category: blog
style_mod: BASIC
---
## Known number of elements
### With SCSS

## Unknown number of elements
### With Javascript


{% highlight ruby %}
var t = response.results.collection1;
var i = 0;
// Loop function isn't a for loop, because we wanted to add an intentional delay
function myLoop () {
    setTimeout(function () {
        // Property from the api call to the article list
        loadItemOnThePage(varItem);
        
        //  increment the counter
        i++;
        // iterate the loop
        if (i < t.length) {
            // Loop!
            myLoop();
        }
    }, 50) // set the delay
}
myLoop();
{% endhighlight %}

---
layout: blog-article
title: "Working with Sound.js"
title-color: blue
author: Devan Huapaya
category: blog
style_mod: BASIC
---

I found working with sound.js to be a pretty delightful experience.
It took me a bit of time to find the write documentation to look at. If they
improved the readability and findability of their docs to be [just this one page](http://www.createjs.com/docs/soundjs/classes/Sound.html)
I think I would get just as much use out of them.

Overall, I love this thing and I wait to see what I make out of it. It has been
great for triggering `.wav` files in a web browser. [And its on npm!](https://www.npmjs.com/package/soundjs)

Once I was able to find the proper documentation it could be used with two basic
lines of code.

{% highlight ruby %}
// To register the sound
createjs.Sound.registerSound(_sound.path, _id);
// To play the sound
createjs.Sound.play(_id);
{% endhighlight %}

So far my work with this library has been this page:  
[http://prh.herokuapp.com/](http://prh.herokuapp.com/)

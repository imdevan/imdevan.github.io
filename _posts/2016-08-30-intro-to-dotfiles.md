---
layout: blog-article
title: "Intro to Dotfiles"
color: blue
author: Devan Huapaya
type: 💁
category: blog
hide-time: true
---

<iframe src="//slides.com/devanhuapaya/bash/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>{:.mw--80-45 .m--auto .mb--xl }

### The above talk is a work in progress, but check it out!

If you use your terminal a lot, the above slides are worth the read. I'm working
on making it better, but in the mean time [tweet me](http://twitter.com/devanipsum)
if you notice anything.

It's way easier to add things here, so stuff I'm adding or changing is below 👇🏼
{:.s}

## If Else
{% highlight bash %}
if [ 🍕 = 🍕 ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
{% endhighlight %}{:.s}

### In the wild
{% highlight bash %}
# Clone repository
function clone() {
    if [ $# -gt 1 ]; then
            git clone https://github.com/$2/$1.git
    else
        git clone https://github.com/imdevan/$1.git
    fi
}
{% endhighlight %}{:.s}

## Resources

- [Bash Intro](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-6.html)

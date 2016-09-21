---
layout: blog-article
title: "Design and Style"
color: salmon
author: Devan Huapaya
type: 📝
category: blog
style_mod: BASIC
---

This page is one part retrospective, one part living documentation.
{: .text--gray}

For my personal site, I thought it would be a good
idea to start with a basic style sheet because I really wanted
it to have a strong blogging component. I thought that if I could get down the
styling for the typography, as well as basic page layouts[^1], as they would live in blog articles, than I could derive a feel for non-article pages.

[^1]:
    Layouts in this context refer to a format for managing images,
    having text next to images in more than one fashion, and aligning text.  

My master plan didn't pan out quite as well as I would have liked, but I did notice that
creating this Style/Bare-bones-css[^2] guide, I learned some useful things for creating
blog posts that leveraged components of the functional css I'm using on the rest of my project.

[^2]: Styling just HTML tags (e.g. h1, p, img)

What you see following is an existing and always updating reference for how I'm styling
(at a minimum the typography, buttons, images, quotes, and code) the experience that is
this website. So far I think it's been useful for being documentation on how the site should
look and feel, and how to do anything in markdown.
{: .s}

## Some things I learned

### More classes
With [Jekyll](http://lmgtfy.com/?q=Jekyll) using
[Kramdown](http://lmgtfy.com/?q=kramdown) the way that you can add classes in
addition default tags that markdown generates by using the format
`{: .class-0 .class-1 .class-2}`.

You can also add classes and tags using the traditional HTML such as
`<strong class="text--purple">but</strong>`,
<strong class="text--purple">but</strong> you can't add HTML tags using this syntax though, so things like `{: strong}` won't work.
{: .s}

Here is an example of using this Kramdown feature.
{% highlight ruby %}
Spooky ghost!
{: .text--center .text--purple .text--lg}
{% endhighlight %}

👇
{: .text--center .text--lg }

👇
{: .text--center .text--lg }

👇
{: .text--center .text--lg }

Spooky ghost!
{: .text--center .text--purple .text--lg}

**Note:** I am using `{: .s}` for breaks in section gaps throughout this page.
And `{: .text--center}` for any centered text or images.
{: .s}

### Footnotes!?

I learned that footnotes[^3] are really easy to make using `[^<num>]` and can look
pretty cool. Although, I have yet to determine if they are useful.

[^3]: So far they seem useful, but also a chore to keep organized

{% highlight ruby %}
...layouts[^1].
<!-- Leave a blank line or double space after first line -->
[^1]: Layouts in this case refer to
{% endhighlight %}

I don't know if I have perfect use for it just yet, but it's a nice util to know.
[#UTT](https://twitter.com/hashtag/utt)
{: .s}

### Vertical alignment

At the time of write this, I am using `{: .s}` (for section)
for places where there is a gap between sections, such as the spacing between the footnotes section and here.

For reasons unknown to me, I `endhighlight` does
not like to be followed by a `{: .s}`, for those instances I
Have taken to using `{: .sa}` (for section--alt).

{% highlight css %}
.s { margin-bottom: 3em; }
.sa { margin-top: 3em; }

// In my Sass
.s {
    margin: margin(bottom, lg);
    &a {
        margin: margin(top, lg);
    }
}
{% endhighlight %}

The following is a living style guide for this blog.
{: .pt-10 .pb-2}

## Headers
{: .underline }

# H1

## H2

### H3

#### H4

##### H5

###### H6


paragraph
{: .s}

## Links
{: .underline }

[link](http://google.com)
{: .s}

## Lists
{: .underline }

### ul

- list
- list
- list

### ol

1. list
2. list
3. list
{: .s}


## Code
{: .underline }

{% highlight bash %}
echo "code"
{% endhighlight %}

`echo code`

**Note:** `{: .s}` doesn't work immediately following an `endhighlight`
 so I've had to make an exception to add

Also, apprently you can't put ruby tags inside of inline blocks :/
{: .s}

## Checkboxes
{: .underline }

<input type="checkbox">  checkbox  
<input type="checkbox" checked> checkedbox
{: .s}


## Quotes
{: .underline }

> Design guides are absolutely the illist  
{: .center }

John Ive
{: .s .text--highlight .text--center}

## Images
{: .underline }

![gras](/assets/images/cat.jpg)
{: .text--center}

Money cat
{: .text--center .text--gray .s}

## Buttons
{: .underline }

<button>call to action</button>
{: .text--center .s}

## Footnotes
{: .underline }

This is a text with a
footnote[^4].
{: .s}

[^4]: And here is the definition.

## List with links
{: .underline }

- [Reference](http://google.com)
- [Reference](http://google.com)
- [Reference](http://google.com)
- [Reference](http://google.com)

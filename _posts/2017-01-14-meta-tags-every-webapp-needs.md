---
layout: blog-article
title: "Meta Tags Every Website and Webapp Needs"
color: blue
author: Devan Huapaya
category: blog
type: 🖌
style_mod: BASIC
---


{% highlight html %}
<!-- Update your html tag to include the itemscope and itemtype attributes. -->
<html itemscope itemtype="http://schema.org/Product">

<!-- Place this data between the <head> tags of your website -->
<title>Page Title. Maximum length 60-70 characters</title>
<meta name="description" content="Page description. No longer than 155 characters." />

<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="The Name or Title Here">
<meta itemprop="description" content="This is the page description">
<meta itemprop="image" content="http://www.example.com/image.jpg">

<!-- Twitter Card data -->
<meta name="twitter:card" content="product">
<meta name="twitter:site" content="@publisher_handle">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description less than 200 characters">
<meta name="twitter:creator" content="@author_handle">
<meta name="twitter:image" content="http://www.example.com/image.jpg">
<meta name="twitter:data1" content="$3">
<meta name="twitter:label1" content="Price">
<meta name="twitter:data2" content="Black">
<meta name="twitter:label2" content="Color">

<!-- Open Graph data -->
<meta property="og:title" content="Title Here" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.example.com/" />
<meta property="og:image" content="http://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />
<meta property="og:price:amount" content="15.00" />
<meta property="og:price:currency" content="USD" />
{% endhighlight %}


With React

{% highlight html %}
<!-- Update your html tag to include the itemscope and itemtype attributes. -->
<html itemscope itemtype="http://schema.org/Product">

<!-- Place this data between the <head> tags of your website -->
<title>{page.title}</title>
<meta name="description" content={page.description} />

<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content={app.title}>
<meta itemprop="description" content={page.description}>
<meta itemprop="image" content={page.iamage}>

<!-- Twitter Card data -->
<meta name="twitter:card" content="product">
<meta name="twitter:site" content={page.author}>
<meta name="twitter:title" content={page.title}>
<meta name="twitter:description" content={page.description}>
<meta name="twitter:creator" content={page.author}>
<meta name="twitter:image" content={page.iamage}>
<meta name="twitter:data1" content="$3">
<meta name="twitter:label1" content="Price">
<meta name="twitter:data2" content="Black">
<meta name="twitter:label2" content="Color">

<!-- Open Graph data -->
<meta property="og:title" content={page.title} />
<meta property="og:type" content="article" />
<meta property="og:url" content={page.url} />
<meta property="og:image" content={page.image} />
<meta property="og:description" content={page.description} />
<meta property="og:site_name" content={app.title} />
{% endhighlight %}

## Tools for testing and approval

### A. Twitter Validation Tool

https://dev.twitter.com/docs/cards/validation/validator

Before your cards show on Twitter, you must first have your domain approved. Fortunately, it's a super-easy process. After you implement your cards, simply enter your sample URL into the validation tool. After checking your markup, select the "Submit for Approval" button.

### B. Facebook Debugger

https://developers.facebook.com/tools/debug

You don't need prior approval for your meta information to show on Facebook, but the debugging tool they offer gives you a wealth of information about all your tags and can also analyze your Twitter tags.

### C. Google Structured Data Testing Tool

http://www.google.com/webmasters/tools/richsnippets

Webmasters traditionally use the structured data testing tool to test authorship markup and preview how snippets will appear in search results, but you can also use see what other types of meta data Google is able to extract from each page.

### D. Pinterest Rich Pins Validator

http://developers.pinterest.com/rich_pins/validator/

Like Twitter, Pinterest requires an approval process to enable Rich Pin functionality. Use the Rich Pin Validator tool to test your data markup and apply for approval at the same time.

## Tips and best practices

### Optimizing for images

The image you link to in your social data does not actually have to be on the page, but it should represent your content well. The image allows you to controll what people see when they share your content, so it's important to use quality images.

Every social platform has different standards for sizing. Typically, it's easier to keep it simple and choose one image size that will work for all services.

Twitter thumbnail: 120x120px
Twitter large image: 280x150px
Facebook: Standards vary, but an image at least 200x200px works best. Facebook recommends large images up to 1200x630px wide.
In short, larger images offer you the most flexibility. When in doubt, test each page using the appropriate tool below to see exactly how your images will appear in snippits.

### The importance of Open Graph data

If you could choose only one type of meta data to include, your best bet is Open Graph. That's because all the platforms can use it as a fallback, including Twitter to a large degree.

### Facebook page insights

The meta property "fb:admins" requires that you enter your numeric Facebook id number, and gives you access to analytics about how your website content is shared on Facebook. Read more about Page Insights, including how to set it up and discover your numeric id.

## Resources

- https://moz.com/blog/meta-data-templates-123
- https://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit
- https://developers.facebook.com/docs/sharing/best-practices

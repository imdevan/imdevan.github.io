---
layout: blog-article
title: "Useful Heroku Commands"
color: purple
author: Devan Huapaya
type: 💻
category: blog
style_mod: BASIC
---

### Login to Heroku locally

You need to run this to do anything with the Heroku remote server.

{% highlight bash %}
heroku login
{% endhighlight %}

{: .st}
You don't need to login if you are trying to deploy and you have the Heroku app
listening to one of your git branches. More info [below](#deploying-to-heroku).

{: .st}
### Start your app locally

To locally start all of the process types that are defined in your Procfile
{% highlight bash %}
heroku local
{% endhighlight %}

To locally start web process
{% highlight bash %}
heroku local web
{% endhighlight %}

{: .st}
By default Heroku will run `npm install` and `npm start`, but if you want it to
run a different command you can modify your profile, which is a file named
`procfile` in the projects root directory. To contain *only* the process name
you want to modify (web is the default process for deploys).

{% highlight bash %}
# replace `gulp start` with whatever command you want to run
web: gulp start
{% endhighlight %}

{: .st}
### Setting Node environment variable

To locally start all of the process types that are defined in your Procfile
{% highlight bash %}
heroku config:set NODE_ENV=production
{% endhighlight %}

{: .st}
### Deploying to heroku

If you look at the images below the code, the way that I have my app set up on
Heroku, deploy is set to the master branch of my github repository for the
once this is set up, I can run git push up to the origin remote and Heroku will
automatically take care of deploying a new instances of the app

{% highlight bash %}
git push origin/master
{% endhighlight %}

{: .st}
**Or** if you want to deploy from the
command line w/o connecting Heroku to your app you can run.
{% highlight bash %}
# Create new Heroku remote
heroku create
# Push to Heroku remote
git push heroku master
{% endhighlight %}

{: .st}
## View Heroku logs

{% highlight bash %}
# View Heroku logs
heroku logs
{% endhighlight %}

{: .st}
## Reference

Heroku docs
{: .text--gray}

- [Heroku Local docs](https://devcenter.heroku.com/articles/heroku-local)
- [Deploying with Git](https://devcenter.heroku.com/articles/git)
- [Deploying Node](https://devcenter.heroku.com/articles/deploying-nodejs)

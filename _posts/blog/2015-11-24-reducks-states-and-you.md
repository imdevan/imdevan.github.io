---
layout: blog-article
title: "(re)Ducks States and You"
title-color: purple
author: Devan Huapaya
category: blog
style_mod: BASIC
---

## This post will not be a description of our tech stack

That will be handled in another post later on. ᵔᴥᵔ

## Files touched

* views/SignUp.js
* components/SignUpForm.js
* ducks/reducers.js
* ducks/SignUpForm.js

## Tech Used

[Ducks](https://github.com/erikras/ducks-modular-redux)  
[React](http://facebook.github.io)  

## In the view

views/SignUp.js

{% highlight ruby %}
import { /* functions that manipulate state */} from "../ducks/SignUpForm";
{% endhighlight %}

{% highlight ruby %}
{success ?
    <Banner headline="Good Job!">
        Go you!
    </Banner> :
    <Banner headline="Team Request">
        /* Default state */
    </Banner>
}
{% endhighlight %}

{% highlight ruby %}
SignUp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    /* ... */
};
{% endhighlight %}


## In The store

/ducks/signUpForm.js

---
layout: blog-article
title: "Building a usable CSS architecture"
color: green
author: Devan Huapaya
type: 🔑
category: blog
style_mod: BASIC
---

## Introduction

This month I rebuilt the site that you're reading. I wanted to be able to build
design guide first, and I also wanted to emphasis re-usable pieces that I could
use everywhere.

The result ended up being some modification of [bem](http://getbem.com/) style
naming with some augmentation.
{: .s}

## Naming convention

### Components

`.block__element--modifier-state`

`block` refers

This style is very similar to `bem`, the only variation that I have is that
I think there are various statest that must be considered. For example,
how do you handle a button that is different?

I have very few components, at time of writing I have 4 things in the components
directory of my sass styles. `blockquote, code, list, and markdown`.
{: .s}

### Utilities

`.utility--modifier-state`

Utilities are the bulk of my styles. Utilities are essentially functaional
styles that can be used anywhere to style anything. The intent behind utilities
is to be able to re-use styles in as many places as possible.

`utility` refers to the utility style that is being applied. The utilities I
use the most are `text`, `margin`, and `padding`.

For most of my utilities I refer to some kind of short hand, so that I can save
myself some typing. (e.g. `text`, `margin`, and `padding` become `t`, `m`, and
    `p`);

`state` depending on the utility `state` can refer either to a utility that has
a `hover` state or which screen size that states take effect `md, lg, xl, etc`
{: .s}

## Tee Shirt Sizes 👕

For places where sizing is needed (e.g. `margin--xs-md`) I use tee shirt sizes.
This is something that I picked up from
[@matthewcpaul](https://twitter.com/matthewcpaul), and find that it helps
drastically reduce the complexity of having to deal with different sized objects
and spacing on my web page.

This is my sass code using maps

{% highlight scss %}
$margin-sizes: (
  0: 0,
  sm: rem(1),
  md: rem(2),
  lg: rem(3),
  xl: rem(5),
  auto: auto
);
{% endhighlight %}

{: .st}
## Who's on first?

<strong>You're application doesn't have to be mobile first</strong>, but you
should pick a direction. If you decide to build desktop first that's fine.

I did however, build my style architecture to be mobile first in that the default
styles exist on the smallest viewports and if variations are needed for larger
viewports then I specify them.
{: .s}

## Build as needed

For my build practices when it comes to styles is to not build or generate them
unless they are needed. In the case of margins. There are also variations from
just the `margin` css property. There is also  `margin-top`,  `margin-bottom`,
`margin-left`,  and `margin-right`. I try to think of all of these as different
properties that share the same sizes. So my shorthand for each is different, but
they share the same `$margin-sizes` referenced above. Right now on my site I only
use `margin-top`, `margin-bottom`. So my `margins.scss` file looks like this.

{% highlight scss %}
$margin-namespace: "m" !default;

$margin-sizes: (
  0: 0,
  sm: rem(1),
  md: rem(2),
  lg: rem(3),
  xl: rem(5),
  auto: auto
);

$margin-directions: (
  top: "t",
  bottom: "b"
);

.#{$margin-namespace} {
  &--auto {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }

  @each $direction, $direction-namespace in $margin-directions {
    &#{$direction-namespace} {
      @each $size, $val in $margin-sizes {
        &--#{$size} {
          margin-#{$direction}: $val;
        }
      }
    }
  }
}
{% endhighlight %}

{: .st}
## Lean on Sass when possible
You can see that the above code doesn't look at all like traditional css. If
you're not using [Sass](http://sass-lang.com/), I HIGHLY recommend learning how
to do so. As it allows me to expand my styles easily while mataintaining
readability. For example in the above code you can see


{% highlight scss %}
$margin-namespace: "m" !default;

$margin-directions: (
  top: "t",
  bottom: "b"
);
{% endhighlight %}

{: .st}
Now you can see that if I needed to handle left or right margins I could do so
by adding left or right to the map.

{% highlight scss %}
$margin-namespace: "m" !default;

$margin-directions: (
  top: "t",
  bottom: "b",
  right: "r",
  left: "l"
);
{% endhighlight %}



{: .st}
## Future plans

Right now this isn't published as a library, but I will mostly do so once I have
my styles set up in a way that is perfect for me and is modular enough to
be consumed as needed. That way when I or whoever uses the styles don't have to
bring all of them in at once and bloat an otherwise lightweight webpage.
{: .s}

## References
- [Bem Official website](http://getbem.com/)
- [Immutable css](http://csswizardry.com/2015/03/immutable-css/)
- [Wealfront functional css](http://eng.wealthfront.com/2013/08/20/functional-css-fcss/)
- [Tachyons](http://tachyons.io/)
- [A blog by cole peters](https://blog.colepeters.com/building-and-shipping-functional-css/)
- [OOCSS](https://github.com/stubbornella/oocss)
- [SMACSS](https://smacss.com/)
- [Atomic css](http://acss.io/)
- [Atomic design - Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)
- [Pattern lab](http://patternlab.io/)
{: .s}
Thanks for reading. If you found this useful, or if you like cats 🐱, let me know
by tweeting it! ♥️

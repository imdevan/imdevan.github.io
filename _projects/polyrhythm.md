---
layout: blog-article
title: "PolyRhythm"
title-color: salmon
---
<img src="{{site.baseurl}}/img/polyrhythm.jpg"/>

<a href="http://prh.herokuapp.com/about">PolyRhythm</a> is a project started at the SXSW Music Hackathon in Austin, Texas. The purpose of the app is to create a way for people to generate visualizations for live performances and perform them in real time using instruments that they are already familiar with.

My role on the project was to set up the front-end architecture and create animations.

The app uses Two.js for shapes, Tween.js for animations, and Sound.js for audio.

The app uses chrome's midi api to pick up signals sent from instruments such as a keyboard or drum kit that are designed to be played through a software program like Ableton or Logic.

The app uses Socket.io to to pick up input from the performers phone or even another computer so that an artist has larger capacity to tweak performances or to add additional animations to their performances.

We are planning on finishing up the project and releasing it as a website or chrome web-app.

We are constantly adding improvements to the app, bellow is a clip of the app taking in input from Ableton itself, showcasing that this can also be programmed to work with dj sets and not just being triggered by a performer hitting a button.

<img src="{{site.baseurl}}/img/pr-ableton-gif.gif"/>

<div class="band--CENTERED">
    <a href="https://github.com/imdevan/polyrhythm" class="base--a">
        <span class="project--external-link">
            Checkout the project on github
        </span>
    </a>
</div>

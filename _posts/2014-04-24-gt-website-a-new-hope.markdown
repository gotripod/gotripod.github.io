---
layout: post
title: The Go Tripod Website - A New Hope
published: false
---

Change is good, or so they say. In our case, we wanted to do some spring cleaning and strip back our website into something a bit more *us*. A bit more *2014*.

So here it is. We took a variety of new approaches when compared to our old site, and in this post I'm going to walk through the ways in which we deployed our snazzy yet performant new site in just a couple of days.

## Stand On The Shoulders

Often we'll advocate a client starts a new website from a pre-built HTML template - it gets us up and running quickly and enables them to visualise what the final site's going to look like early on. It reduces cost for the client in a pragmatic way and gives us a solid HTML foundation to build on. There are downsides too, but more on that later.

With our template selected, we selected another strong foundation: Github Pages. This enables us to take advantage of the speed of Github's platform and keep our entire site in a git repository. Working with Jekyll makes life super-simple, much more so than our previous Wordpress platform, and all our blogposts are stored a simple markdown files.

We pulled apart our stock template and fitted Jekyll around it. With our freshly written content, we were already getting close to a beta version.

## Polish

Our new site began with one of those parallax scrolling effects which are currently in vogue, a bit like this one on the [skrollr demonstration page](http://prinzhorn.github.io/skrollr/). I've always had a problem with this effect, it seemed sticky when scrolling the page, so when I found the same issue with our site, I took a dive into the root cause.

A superb [HTML5 Rocks article](http://www.html5rocks.com/en/tutorials/speed/scrolling/) on the performance of scrolling along with this excellent advice on how [CSS affects painting performance](http://addyosmani.com/blog/devtools-visually-re-engineering-css-for-faster-paint-times/) by Addy Osmani gave me a couple of glaring candidates.

Our background images, which slipped past as you scrolled, were all set as background-attachment: fixed. Removing this gave us a slightly more "ordinary" feel but a much slicker experience - the browser no longer felt like it was struggling. Large fixed position elements and backgrounds are something which browsers are still struggling with in certain situations.

## Clean up

Next I looked at the stuff we had left from our original HTML template. Our particular template came with a load of extra JavaScript stuff (such as the rather excellent, but unnecessary [Isotope](http://isotope.metafizzy.co/)) which needed to be removed. The HTML needed to be tidied and the CSS needed to be minimised. I had a quick look at [Google's Pagespeed Insights](http://developers.google.com/speed/pagespeed/insights/) and [Pingdom's Website Speed Tests](http://tools.pingdom.com/).

<p style="text-align:center;"><img src="/assets/img/googlevspingdom.png" alt="Google and Pingdom" title="Google and Pingdom"></p>

Ok, but not great. Time to go to work.

### Remove the extra JS




### Optimise CSS


### Optimise our images

Now let's have a look.

Much better! Github Pages doesn't give us the fine control over some caching options that we might like but overall we're significantly faster than we were.

This is the sort of thing that every responsible developer should be looking at. 


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

<p style="text-align:center;"><img src="/assets/img/googlevspingdom.png" alt="Google and Pingdom Before" title="Google and Pingdom Before"></p>

Ok, but not great. Time to go to work.

### Remove the extra JS

Pretty straightforward this one - removed 422 lines of JavaScript, some of which wasn't being executed. I also want to minimise the number of HTTP downloads we're doing for JavaScript and try to minimise the payload for those HTTP requests. I knocked up a quick shell script to do this:

{% highlight sh %}
# Remove existing build artifacts
rm ./assets/js/build.*

# Combine all of our JS files into build.js, maintaining the include order
cat ./assets/js/jquery.js ./assets/js/jquery.sticky.js ./assets/js/jquery.quote.rotator.min.js ./assets/js/neatshow.js ./assets/js/common.js > ./assets/js/build.js

# Use yui compressor to make a mini version
java -jar ~/Downloads/yuicompressor-2.4.8.jar --verbose -o ./assets/js/build.min.js ./assets/js/build.js
{% endhighlight %}

With that, I now only include build.min.js from our master template and we've achieved our goal.

### Optimise CSS

I'm a fan of the SASS SCSS syntax for authoring CSS, and though the new site doesn't fully utilise it yet, I'd like to do so in the future. For now, we'll just use its ability to import other SCSS files and its compressor to produce a minified CSS file. So as well as our main site CSS, our styles.scss file includes some imports:

{% highlight css %}
@import "font-awesome";
@import "google-fonts";
@import "syntax";
{% endhighlight %}

Then I compile it into a compressed CSS file with:

{% highlight sh %}
sass assets/scss/style.scss assets/css/style.css  --style compressed
{% endhighlight %}

Again, we've got a single compressed file which we now include from our master template.

### Optimise our images

If you're a Mac user, take a look at [ImageOptim](http://imageoptim.com/) which bundles some great optimisation tools with a very simple UI to compress your image. By running our PNG and JPEG images through ImageOptim you get about a 10% saving on PNG images, so it's worth a try. 

Now let's have a look at what our changes have done for the site.

<p style="text-align:center;"><img src="/assets/img/blog/googlevspingdom-after.png" alt="Google and Pingdom After" title="Google and Pingdom After"></p>

Much better! 


## Conclusion

We're not hitting 100% on the scores above, there's a little bit more we could potentially do. Because we opted to host with Github pages, we're limited in our control of server-side caching options. In an ideal world we could tweak this to give repeat visitors better performance. However, I'm pleased that we've managed to polish our original template to the point where it's pretty shiny, and it gives us a great platform to take the website into the future!
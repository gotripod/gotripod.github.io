---
layout: post
status: publish
published: true
title: Sencha Touch - Deploying to Production
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
wordpress_id: 3913
wordpress_url: http://stage.gotripod.com/?p=3913
date: !binary |-
  MjAxMi0wNS0wMiAwODoyMjo1MiArMDIwMA==
date_gmt: !binary |-
  MjAxMi0wNS0wMiAwODoyMjo1MiArMDIwMA==
categories:
- Ext JS
tags: []
comments: []
---
<p>[I first posted this on my personal blog as <a href="http://colinramsay.co.uk/diary/2012/05/02/the-sencha-touch-2-microloader-sencha-command/">The Sencha Touch 2 Microloader &amp; Sencha Command</a>]</p>
<p>When examining how to build a new Sencha Touch 2 application for production, I wanted to make sure I wasn't reinventing the wheel. I'd heard of Sencha's commandline SDK tools but this gave me cause to look into it more. Now that I've done so, I'm impressed, but I think the documentation could be doing with a little more detail. I'm concentrating solely on deployment for now, though the tool supports other scenarios.</p>
<p>There were a few things we wanted to do:</p>
<ul>
<li>Build, concatenate and minimise our custom SASS theme</li>
<li>Resolve dependencies (in order!) for our JS, then concatenate and minimise</li>
<li>Work out how to incorporate those into our index.html with sensible versioning</li>
<li>Ensure all our caching policies were optimal</li>
</ul>
<p>With one exception, Sencha's tool helps us with that. I recommend getting an overview of how to install the <a href="http://docs.sencha.com/touch/2-0/#!/guide/command">SDK Tools at the Sencha Documentation pages</a> first. That guide also gives an overview of the various facilities the tool provides.</p>
<h2>Setup</h2>
<p>If you've used the sencha command to create a new application then you're good to go - you have all the files you need to get building. If not, I recommend you use it to create a new, empty application, and copy over the bits you need to get up and running, and to make sure you're adhering to the correct directory structure. The documentation does give a good overview of the directory structure which is required - take a look at the section "Understanding Your Application's Structure".</p>
<p>Once you're there, you'll have an app.json in the root of your project. It's important that you complete this correctly in order to be able to build your project successfully; the "js" section needs to have any extra JavaScript dependencies - such as third-party libraries - entered.</p>
<p>You don't need to add in all of the files you use in your application. The sencha command will resolve all of those dependencies automatically when you build. You do need to make sure you're using requires in your application to make the dependency tree clear, but hopefully you're doing that anyway.</p>
<p>Assuming you've got app.json ready to go, we can move on to making a build.</p>
<h2>Index.html</h2>
<p>Generally you'll access your project via http://localhost/index.html, or something similar. The app.json file will have asked you to specify this URL, and you should have a template index.html created for you if you used the sencha command to generate your new project. Your index.html should have the following line:</p>
<p>&nbsp;</p>
<p>This is a key part of the build process, so you need to leave it intact!</p>
<h2>Building</h2>
<p>The aspect we're interested in is run via the command:</p>
<p><code>sencha app build </code></p>
<p>If you run it without theparameter you'll see the following:</p>
<p><a href="http://www.gotripod.com/wp-content/uploads/2012/05/Screen-Shot-2012-05-02-at-19.19.48.png"><img class="aligncenter size-medium wp-image-2938" title="Screen Shot 2012-05-02 at 19.19.48" src="http://www.gotripod.com/wp-content/uploads/2012/05/Screen-Shot-2012-05-02-at-19.19.48-300x183.png" alt="" width="300" height="183" /></a></p>
<p>This gives you an idea of what's going to happen. Here's the way the build process works:</p>
<ol>
<li>Copies required resources</li>
<li>Resolves dependencies by firing up a headless web browser and running your app</li>
<li>Concatenates and minifies your JS in the correct order</li>
<li>Builds a HTML5 cache manifest</li>
<li>Generates delta files to minimise what changes get sent to the client</li>
<li>Generates a new version of your index.html</li>
</ol>
<p>There's lots happening here, and it depends on what environment you specify when you run the command. To be clear, you can always keep using http://localhost/index.html, and that's your development version.</p>
<h2>Testing Environment</h2>
<p>Testing creates a/build/testing/ directory, and you can access the build at http://localhost/build/testing/index.html. In the testing environment, JS gets concatenated but not minified. It doesn't do any of the caching/manifest stuff described above, but does resolve all your dependencies into the concatenated file.</p>
<h2>Production Environment</h2>
<p>In addition to the steps taken to build for the testing environment, production will also minimise your JS, create a cache manifest, and as the documentation says: "Storing all JavaScript and CSS assets inside Local Storage on first load, and patches them via delta updates between releases". The <a href="http://www.sencha.com/blog/behind-sencha-command-and-the-build-process/">Sencha blog post</a> goes into more detail on this subject.</p>
<h2>Issues</h2>
<p>We're yet to deploy our application to production, so this post is a work in progress. In particular the testing and production builds highlight code issues that aren't apparently on development - deprecation warnings become errors, and there are various issues with the order in which our code is included. I'm also a little concerned with the delta update mechanism - I need to do further testing to make sure updates are indeed pushed to clients as expected, as we always want to make sure that they have the very latest code.</p>
<p>You'll also notice that the sencha command doesn't do anything with SASS. Hopefully this will come in future, but it's a simple extra command to generate the theme CSS.</p>
<h2>Conclusion</h2>
<p>The sencha command has become an integrated part of our build process. I'd like to see more documentation, and the proof will be in our final deployment, but it looks like Sencha have provided another key part of the end-to-end development of a mobile application.</p>
<p>[I first posted this on my personal blog as <a href="http://colinramsay.co.uk/diary/2012/05/02/the-sencha-touch-2-microloader-sencha-command/">The Sencha Touch 2 Microloader &amp; Sencha Command</a>]</p>

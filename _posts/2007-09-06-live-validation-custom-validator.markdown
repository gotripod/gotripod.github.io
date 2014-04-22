---
layout: post
status: publish
published: true
title: Live Validation - Custom Validator
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 310
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/live-validation-custom-validator/
date: !binary |-
  MjAwNy0wOS0wNiAyMTo1MToyNyArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wOS0wNiAyMTo1MToyNyArMDIwMA==
categories:
- Javascript
tags:
- Ruby on Rails
- AJAX
- Javascript
- UI Design
- Web Design
comments:
- id: 20
  author: Gaursson
  author_email: gaursson@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wOSAxNjo1NTo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wOSAxNjo1NTo0NyArMDEwMA==
  content: You got better example ? Doesn't seem to work with me. I just alway get
    true, whatever my input is.
- id: 21
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0xMSAxMzozNDoyOSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0xMSAxMzozNDoyOSArMDEwMA==
  content: ! 'Hi Gaursson,


    My advice is to contact Alec directly. Visit his site http://www.livevalidation.com


    Jon'
- id: 22
  author: links for 2007-11-21 | xanders blog
  author_email: ''
  author_url: http://blog.elivingsystems.com/2007/11/20/links-for-2007-11-21/
  date: !binary |-
    MjAwNy0xMS0yMSAwNToyOTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0yMSAwNToyOTo0MyArMDEwMA==
  content: ! '[...] Live Validation - Custom Validator Clockwork Objects is a small
    web development / design studio based in Truro, Cornwall, UK. We create web sites
    and web applications built with web standards, as well as Software Development.
    (tags: tts development prototype validation) [...] '
---
<p><a href="http://www.gotripod.com/2007/9/6/live-validation-cross-platform-rails-style-validation-on-the-client">Following my article earlier today</a> on <a href="http://livevalidation.com">Live Validation</a>, I have had a response from Alec regarding how to create a custom validator to use with his <a href="http://livevalidation.com">Live Validation</a> framework.</p>
<p>Having asked if a custom Validator could be passed in the .Now() function Alec had the following to say:</p>
<p>In regards to passing a custom validation method into the .now method, it will not '91create'92 the validation method as such, but will accept one you have made, as long as your custom validation method takes a value as the first argument, and throws a Validate.Error exception when it fails (in order to pass on the failure message  made easier by using Validate.fail), and true if it passes. For example:</p>
<ol class="CodeRay">
<li>Validate.Example = <span class="r">function</span>(value, paramsObj){</li>
<li></li>
<li> <span class="c">// the following sets up default options and overides them with those passed in </span></li>
<li> <span class="r">var</span> params = <span class="pt">Object</span>.extend({</li>
<li> failureMessage: <span class="s"><span class="dl">"</span><span class="k">Default failre message goes in here!</span><span class="dl">"</span></span></li>
<li> }, paramsObj || {});</li>
<li></li>
<li> <span class="c">// here you would check the value you wish to validate (the one passed in), against some expected value </span></li>
<li> <span class="c">// if it fails then use the Validate.fail method will throw an exception containing the failure message</span></li>
<li> <span class="r">if</span>(value != <span class="s"><span class="dl">'</span><span class="k">My expected value</span><span class="dl">'</span></span>) Validate.fail(params.failureMessage);</li>
<li></li>
<li> <span class="c">// if the script reaches this far then no exception has been thrown, so the validation passed </span></li>
<li> <span class="r">return</span> <span class="pc">true</span>;</li>
<li> }</li>
</ol>
<p>Alec clarified: "...if you take a look at some of the included validation methods they contain calls to some of the other ones internally, as they will throw exceptions and halt proceedings if they fail, so act in much the same way as the simple one we have above. Validate.Email is a simple example of this and can be easily adapted to make a reusable postcode format validation for instance."</p>
<p>Following Alec's example above, you can easily then use the validator using the following:</p>
<ol class="CodeRay">
<li>Validate.now(Validate.Example(), value_to_validate, {options})</li>
</ol>
<p>Using a custom validator opens up many possibilities such as making an <span class="caps">AJAX</span> call to the server to check the uniqueness of a username or password.</p>
<p>For more information:</p>
<p><a href="http://www.livevalidation.com">Live Validation</a></p>
<p><a href="http://www.livevalidation.com/documentation#ValidateNow">Documentation for Validate.now()</a></p>
<p><img src="http://feeds.feedburner.com/~r/miletbaker/~4/153158057" height="1" width="1" /></p>

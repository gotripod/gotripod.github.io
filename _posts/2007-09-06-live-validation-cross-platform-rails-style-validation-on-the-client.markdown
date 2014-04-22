---
layout: post
status: publish
published: true
title: Live Validation - Cross Platform, Rails style validation on the client.
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'I came across a great new validation library the other day which I wanted
  to share with you all. <a href="http://livevalidation.com">Live Validation</a> by
  Alec Hill is a cross-platform client-side JavaScript validation framework which
  provides real-time feedback to the user as they type.

  <p class="contentbar_header">&nbsp;</p>

  <p align="center" class="contentbar_body"><img src="http://farm2.static.flickr.com/1390/1336403025_7aa7f1cbc7.jpg"
  alt="val2" /><br/><br/>

  <img src="http://farm2.static.flickr.com/1374/1337287656_d3d08ab65c.jpg" alt="val1"
  />

  <p class="contentbar_footer">LiveValidation in action</p>

'
wordpress_id: 15
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/live-validation-cross-platform-rails-style-validation-on-the-client/
date: !binary |-
  MjAwNy0wOS0wNiAxOTowMDozMCArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wOS0wNiAxOTowMDozMCArMDIwMA==
categories:
- Ruby on Rails
- Javascript
- Usability
tags:
- Ruby on Rails
- Javascript
- UI Design
- Web Design
- php
- web development
comments:
- id: 23
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo0NDoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo0NDoxNyArMDEwMA==
  content: I followed up my query regarding using a custom validator with Alec and
    have <a href="http://clockobj.co.uk/2007/9/6/live-validation-custom-validator"
    rel="nofollow">documented his response here.</a>
---
<p>I came across a great new validation library the other day which I wanted to share with you all. <a href="http://livevalidation.com">Live Validation</a> by Alec Hill is a cross-platform client-side JavaScript validation framework which provides real-time feedback to the user as they type.</p>
<p class="contentbar_header">&nbsp;</p>
<p align="center" class="contentbar_body"><img src="http://farm2.static.flickr.com/1390/1336403025_7aa7f1cbc7.jpg" alt="val2" /><br/><br/><br />
<img src="http://farm2.static.flickr.com/1374/1337287656_d3d08ab65c.jpg" alt="val1" /></p>
<p class="contentbar_footer">LiveValidation in action</p>
<p><a id="more"></a><a id="more-15"></a></p>
<p>As I am currently reading the highly recommended <a href="http://www.amazon.com/gp/product/032145345X?ie=UTF8&amp;tag=clockobjec-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=032145345X">Designing the Obvious: A Common Sense Approach to Web Application Design</a><img border="0" width="1" src="http://www.assoc-amazon.com/e/ir?t=clockobjec-20&amp;l=as2&amp;o=1&amp;a=032145345X" height="1" style="margin: 0px; border: medium none" /> which discusses the use of Poka Yoke (Japanese for “mistake proofing”) devices on the web. One of which is the use of real-time validation to provide feedback to users as they make the error, rather than waiting to submit the form (which could extend beyond the screen) and finding that they cannot proceed. Sometimes searching for where they have made an error can be a challenge in itself! This client side validation library fits the bill nicely. Hoekman may argue that actually Alec is a little aggressive in his technique of pouncing on errors before the user has had a chance to get it right but I feel it is nice that the user can see as they type whether the field is valid.</p>
<p>Although this library seems clearly aimed at Rails developers (which I will elaborate on next) the library is fully cross platform/cross browser compatible, It has <a href="http://www.livevalidation.com/support">been tested</a> across a large cross section of browsers on different platforms and can be used with any server side technology such as <span class="caps"><span class="caps">PHP</span></span>, Ruby on Rails, <span class="caps"><span class="caps">ASP</span></span>, Java, Python etc.</p>
<p>I mentioned the library is aimed at Rails developers and this is because the naming of validators for the JavaScript library closely match those built into the Rails Framework. There are the following validators build in:</p>
<ol>
<li>Presence</li>
<li>Format (using Regular Expressions)</li>
<li>Numericality</li>
<li>Length</li>
<li>Inclusion</li>
<li>Exclusion</li>
<li>Acceptance</li>
<li>Confirmation</li>
<li>Email</li>
</ol>
<p>It is not clear if you can validate against a custom function, for example allowing you to create a <span class="caps"><span class="caps">AJAX</span></span> request to the server to check Uniqueness of user names or email addresses on a registration form [I will contact Alec to clarify]. Validations can be combined together on a single field, so for example you can check if a field is required or not. Another nice feature is that you can check whether the whole form has validated, allowing you to prevent submission to the form as suggested by Alec, or use this to only enable the submit button once the form is valid as advocated by Hoekman.</p>
<p>Setting up validation on a field is easy, for example to Validate presence you would need the following code:</p>
<ol class="CodeRay">
<li><span class="r">var</span> f1 = new LiveValidation(<span class="s"><span class="dl">‘</span><span class="k">f1</span><span class="dl">‘</span></span>);</li>
<li>f1.add( Validate.Presence );</li>
</ol>
<p>The script is available as a standalone version or for integration with <a href="http://www.prototypejs.org/">Prototype</a> and is released under the <span class="caps"><span class="caps">MIT</span></span> licence.</p>
<p>For more information see: <a href="http://livevalidation.com/">livevalidation.com</a></p>

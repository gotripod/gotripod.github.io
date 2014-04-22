---
layout: post
status: publish
published: true
title: Flex Builder 2.0.1 (Win) Installing Subversion
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 322
wordpress_url: http://old.miletbaker.com/index.php/2007/09/18/flex-builder-201-win-installing-subversion/
date: !binary |-
  MjAwNy0wOS0xNyAxMzowMjo1MyArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wOS0xNyAxMzowMjo1MyArMDIwMA==
categories:
- Flex and Air
tags:
- Flex and Air
- subversion
comments:
- id: 51
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo0ODowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo0ODowNiArMDEwMA==
  content: Just to note.. *Mac Users:* Flex Builder 2 for Mac comes packages with
    Eclipse 3.2 so you can install the latest version of Subclipse (currently 1.2.x).
    Also note, for proxy configuration, your servers file is located in *~/.subversion/*
- id: 52
  author: yo
  author_email: yjadhav@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMi0yMiAwNjoyOToyOSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0yMiAwNjoyOToyOSArMDEwMA==
  content: ! 'thanx dude, u saved my day. This error was just screwing me up -

    Subclipse (1.2.0) requires plug-in org.eclipse.core.resources (3.2.0), or later
    version.'
- id: 53
  author: Ben
  author_email: bendekeersm@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0yNSAxNDowMzo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yNSAxNDowMzo0NyArMDEwMA==
  content: ! 'Finally a working sollution :)


    thanks'
- id: 54
  author: Oded Idan
  author_email: oded@atg.co.il
  author_url: http://www.shin1.co.il
  date: !binary |-
    MjAwOC0wNC0wNyAxNDo1Mzo0MiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wNyAxNDo1Mzo0MiArMDIwMA==
  content: Hey. I had the same problem (Subclipse (1.2.0) requires plug-in org.eclipse.core.resources
    (3.2.0), or later version) on Windows with Eclipse 3.3.1.1. and nothing seemed
    to work - until I ran a fresh installation of Eclipse 3.3.2 which solved this
    issue.
- id: 55
  author: erick
  author_email: aa@super.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNS0wNSAwNDo1MDoxNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0wNSAwNDo1MDoxNyArMDIwMA==
  content: very nice fix for a problem! thx
---
<p>I thought I would share a quick overview of using Subclipse on Windows and one particular step that took a lot of digging around to find that lets you install it. On Windows Flex Builder 2 uses the Eclipse 3.2.x platform which is not compatible with the latests release of Subversion. To install subversion, you need to install from the 1.x branch using the following url:</p>
<p><a href="http://subclipse.tigris.org/update_1.0.x">http://subclipse.tigris.org/update_1.0.x</a></p>
<p>In Flex Builder, select <strong>Software Updates</strong> -&gt; <strong>Find and Install</strong> from the <strong>Help Menu</strong>. You will need to add a new remote update site to install Subeclipse from, by clicking <strong>New Remote Site</strong>, giving it the name <em>Subeclipse</em> and entering the update <span class="caps">URL</span> above.</p>
<p>Click <strong>Finish</strong>, and after a little updating you will be asked to select what to install, on selecting Subeclipse you may get the following error:</p>
<p><strong>Subclipse (1.2.0) requires plug-in org.eclipse.core.resources (3.2.0), or later version.</strong><br />
The key here, is to unselect: <strong>Show the latest version of a feature only.</strong> as shown below:</p>
<p class="contentbar_header">&nbsp;</p>
<p class="contentbar_body"> <img src="http://farm2.static.flickr.com/1250/1395674155_0848a71735.jpg" /></p>
<p class="contentbar_footer">LiveValidation in action</p>
<p>With this done, you can select the latest 1.x version of subeclipse and it should install fine.</p>
<p>If you are behind a proxy, you will need to add the following lines to your <strong>servers</strong> file, located in <strong>C:\Document and Settings\&lt;username&gt;\Application Data\Subversion</strong> :</p>
<ol class="CodeRay">
<li>http-proxy-host = &lt;proxy server address&gt;</li>
<li>http-proxy-port = &lt;proxy server port&gt;</li>
<li>http-proxy-username = &lt;proxy username&gt;</li>
<li>http-proxy-password = &lt;proxy password&gt;</li>
</ol>
<p>You can now checkout a project by <strong>New</strong> -&gt; <strong>Other</strong> from the <strong>FIle</strong> menu and selecting <strong><span class="caps">SVN</span></strong> -&gt; <strong>Checkout Project from <span class="caps">SVN</span></strong></p>

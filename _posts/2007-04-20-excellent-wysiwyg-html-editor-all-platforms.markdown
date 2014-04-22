---
layout: post
status: publish
published: true
title: Excellent WYSIWYG HTML editor (all platforms)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'I have been trying out several <span class="caps">HTML</span> editors
  for <span class="caps">ASP</span>.Net and thought I would share this excellent find
  that works with several platforms, including <span class="caps">ASP</span>.Net,
  <span class="caps">ASP</span>, PHP, Java etc. Up until now I was using FreeTextBox,
  however this was giving me grief in Firefox so decided that I needed to find a new
  solution.


  <a href="http://www.fckeditor.net/">FCKeditor</a> is an excellent <span class="caps">HTML
  WYSIWYG</span> editor for <span class="caps">ASP</span>.Net as an <span class="caps">ASP</span>.Net
  control is available to use with the Javascript source files to allow you to interact
  (Get / Set text) etc programmatic ally as you can do with FreeTextBox. In addition
  to this, FCKEditor allows you to upload images and other files making adding images
  a breeze and also includes a spell-checker.


'
wordpress_id: 312
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/excellent-wysiwyg-html-editor-all-platforms/
date: !binary |-
  MjAwNy0wNC0yMCAxODoyOTo0MiArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wNC0yMCAxODoyOTo0MiArMDIwMA==
categories:
- Ruby on Rails
- Javascript
tags:
- dotnet
- component
- Misc..
comments:
- id: 28
  author: EvilInside
  author_email: ashish@hitechvalley.net
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0xOCAxMjoxMDoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xOCAxMjoxMDoxOCArMDEwMA==
  content: ! 'Plz help

    How can you configure for the image upload problem'
- id: 29
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMS0yOSAxOTowMjozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOSAxOTowMjozOSArMDEwMA==
  content: ! 'Hi Chuck,


    It is true FCKEditor is great for HTML based web applications but to use with
    flex you would have to make calls from Flex to JavaScript using External Interface
    or the new Flex Javascript Bridge which can work fine, but might not be ideal.
    Have a look at this http://www.judahfrangipane.com/blog/?p=132


    Jon'
- id: 30
  author: Chuck Frazier
  author_email: chuckfrazier@tx.rr.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0yOSAxODo1MTozMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOSAxODo1MTozMiArMDEwMA==
  content: ! 'I''m having a Flex 2 app with AMFPHP and MySQL written and need a WYSIWYG
    text editor.  I showed the FCKeditor to my developer and he said it would not
    be a good solution for Flex since it uses JavaScript.


    Can you confirm if that''s true?  I keep feeling they want to steer me towards
    developing something from scratch and I''d prefer to have something pre-developed.


    I appreciate any advice you can provide.


    Sincerely,

    Chuck'
- id: 31
  author: Dave Finnerty
  author_email: dave@youmethem.us
  author_url: http://themadadmin.com
  date: !binary |-
    MjAwOC0wMS0xOSAyMjowODozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0xOSAyMjowODozOCArMDEwMA==
  content: ! 'Have you looked at the HTML component for Flex where they embed FCKeditor
    in to a flash application?


    It fixes the Flex RTE lack of feature issue but I wonder how good it works.'
- id: 32
  author: Douglas
  author_email: dug@douglasmcgregor.co.uk
  author_url: http://www.douglasmcgregor.co.uk
  date: !binary |-
    MjAwOS0wMS0yNiAxNDo0NDozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0yNiAxNDo0NDozOCArMDEwMA==
  content: ! 'Hi there, just to say I came across this site as I was tryinig to do
    just what your article describes, and was a bit clueless about how to do it.  I''m
    going to try it as soon as I''ve finished uploading files.  I wanted to find a
    way to disable the font colour change, so as to have a consistant style throughout
    my site.  Things are always simpler than they seem!  Nice site btw!


    Douglas'
---
<p>I have been trying out several <span class="caps">HTML</span> editors for <span class="caps">ASP</span>.Net and thought I would share this excellent find that works with several platforms, including <span class="caps">ASP</span>.Net, <span class="caps">ASP</span>, PHP, Java etc. Up until now I was using FreeTextBox, however this was giving me grief in Firefox so decided that I needed to find a new solution.</p>
<p><a href="http://www.fckeditor.net/">FCKeditor</a> is an excellent <span class="caps">HTML WYSIWYG</span> editor for <span class="caps">ASP</span>.Net as an <span class="caps">ASP</span>.Net control is available to use with the Javascript source files to allow you to interact (Get / Set text) etc programmatic ally as you can do with FreeTextBox. In addition to this, FCKEditor allows you to upload images and other files making adding images a breeze and also includes a spell-checker.</p>
<p><a id="more"></a><a id="more-312"></a></p>
<p>Using FCKEditor is also a piece of cake. Simply download FCKEditor and extract the fckeditor directory, placing it the root of your <span class="caps"><span class="caps">ASP</span></span>.Net application.</p>
<p>In addition to this, to use the <span class="caps"><span class="caps">ASP</span></span>.Net control you need to ensure that the FredCK. FCKEditorV2.dll file is in your bin directory, you can then either add it to your tool bar, and drag-n-drop the control in, or add the following page directive to your <span class="caps"><span class="caps">ASPX</span></span> page:</p>
<pre lang="asp"><%@ Register Assembly="FredCK.FCKeditorV2" Namespace="FredCK.FCKeditorV2" TagPrefix="FCKeditorV2" %>;</pre>
<p>And then add the following control:</p>
<pre lang="asp">
<fckeditorv2:fckeditor id="FCKeditor1" runat="server" height="500px" skinpath="skins/office2003/" toolbarset="Pilot" customconfigurationspath="/fckeditor/fckconfig.js">
</fckeditorv2:fckeditor></pre>
<p>FCKEditor is highly configurable as it is opensource and you can very easily edit the fckconfig.js file to create a new custom toolbar. If you do this, you will need to specify the ToolbarSet property and also add the CustomConfigurationPath properties to your control. The FCKEditor also comes with 3 skins: default, office2003 and silver (a silver version of office 2003). These can be set using the SkinPath configuration above.</p>
<p>As the fckeditor javascript directory is generic for 9 languages, it needs trimming down before deploying live. There is a readme.txt supplied with the download, but basically it involves deleting the server-side code to handle the file-uploads for the languages you are not using and also deleting the skin files you are not using.</p>
<p>Finally if you want to be able to upload files, you need to create a directory in the root of you application called UserFiles. When the user inserts an image from a local file, it is uploaded to this directory.</p>
<p>FCKEditor is a feature rich, cross-browser compatible (Safari will also shortly be supported) <span class="caps"><span class="caps">WYSIWYG HTML</span></span> Editor for <span class="caps"><span class="caps">ASP</span></span>.Net which is highly configurable and easy to use.</p>

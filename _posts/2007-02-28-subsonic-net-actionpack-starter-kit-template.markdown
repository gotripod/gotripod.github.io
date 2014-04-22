---
layout: post
status: publish
published: true
title: SubSonic .Net ActionPack Starter Kit Template
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'Having used <a href="http://www.codeplex.com/Wiki/View.aspx?ProjectName=actionpack"
  title="SubSonic">SubSonic</a> recently and found it an invaluable resource, reducing
  not only my development time, but code complexity too, I have created two Visual
  Studio 2005 Project Templates based on the SubSonic starter kit. I apologize if
  something like this already exists but I couldn''92t find it in the official Starter
  Kit. I created these templates as I needed a quick way to create a new Web Site
  project in Visual Studio based on SubSonic with none of the example site content
  within.


'
wordpress_id: 318
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/subsonic-net-actionpack-starter-kit-template/
date: !binary |-
  MjAwNy0wMi0yOCAxODozNDo1MCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wMi0yOCAxNzozNDo1MCArMDEwMA==
categories:
- .Net
tags:
- web development
- .Net
comments:
- id: 44
  author: Luke
  author_email: hybrid.basis@gmail.com
  author_url: http://girasquid.com
  date: !binary |-
    MjAwNy0xMi0yMyAyMjo0OTo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0yMyAyMjo0OTo0MSArMDEwMA==
  content: It looks like the path to your downloadables is incorrect - both of them
    are throwing 404 errors for me.
- id: 45
  author: jashuva
  author_email: jashut@gmail.com
  author_url: http://webshepherds.co.nz
  date: !binary |-
    MjAwOC0wOC0xMCAwMzozMjowOSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0xMCAwMzozMjowOSArMDIwMA==
  content: can you please fix the links. I need starter kit template with membership
    and CMS. The latest version i downloaded at codeplex doesn't have vsi file at
    all
- id: 46
  author: Jon
  author_email: jon@vibrantapps.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOS0wNS0xNSAxOToyMzozMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xNSAxOToyMzozMiArMDIwMA==
  content: ! '@David


    I am really sorry about this. I have not actually done any .Net development for
    the last 2 years so I have lost touch with both .Net and this project as well
    as being based on a Mac now. Your best best would be to ask the Subsonic community
    to create a .vsi for this.


    My apologies,


    Jon'
- id: 47
  author: David Welford-Costelloe
  author_email: dwcostelloe2000@yahoo.com
  author_url: http://www.ldcreativedesigns.com
  date: !binary |-
    MjAwOS0wNS0xNSAxOTozOTowNCArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xNSAxOTozOTowNCArMDIwMA==
  content: ! 'Hi Jon,

    Not you fault, finding the right SubSonic web site is difficult so here are so
    links I hope will help:


    MVC SubSonic VS2008 Template: http://blog.wekeroad.com/subsonic/putting-the-ldquo-m-rdquo-back-in-mvc/


    SubSonic Project Site: http://subsonicproject.com/


    Subsonic Developers (I think):http://blog.wekeroad.com/category/subsonic


    SubSonic Google Group: http://groups.google.com/group/subsonicproject


    Hope this helps


    David..............

    http://www.welford-costelloe.com'
- id: 48
  author: David Welford-Costelloe
  author_email: dwcostelloe2000@yahoo.com
  author_url: http://www.ldcreativedesigns.com
  date: !binary |-
    MjAwOS0wNS0xNSAxOToyMDowMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xNSAxOToyMDowMiArMDIwMA==
  content: ! 'The more I search for thsi so called starter kit the more confusing
    it gets. A suggestion would be to have ONE location for the starter kit. This
    is the current ative link for the starter Kit: http://code.google.com/p/subsoniccms/


    Still looking for the lost 2008 Startkit subsonic template?'
---
<p>Having used <a href="http://www.codeplex.com/Wiki/View.aspx?ProjectName=actionpack" title="SubSonic">SubSonic</a> recently and found it an invaluable resource, reducing not only my development time, but code complexity too, I have created two Visual Studio 2005 Project Templates based on the SubSonic starter kit. I apologize if something like this already exists but I couldn'92t find it in the official Starter Kit. I created these templates as I needed a quick way to create a new Web Site project in Visual Studio based on SubSonic with none of the example site content within.</p>
<p><a id="more"></a><a id="more-318"></a></p>
<p><strong><em>Note, these templates are designed for running in Medium trust environments.</em></strong></p>
<p>The two templates contain the bare minimum to get started. And have the following directory</p>
<p>structure:</p>
<p>/App_Code (empty)<br />
/App_Data (empty)<br />
/Bin (SubSonic.dlls)<br />
/Dev (BatchClassGenerator, BatchScaffoldGenerator, VersionDB)<br />
Default.aspx (With instructions to get started)<br />
web.config</p>
<p>I have stripped out masterpages, themes etc, to keep the site as it would be if you created an ordinary website project. I have also modified the BatchClassGenerator to generate class files directly to the /App_Code directory and the BatchScaffoldGenerator to output to the /Dev directory by default.</p>
<h2><strong>Installation</strong></h2>
<p><strong>If you are new to SubSonic, I recommend you download SubSonic’s own starter kit, which includes examples of use etc.</strong></p>
<p><a href="http://www.codeplex.com/actionpack" title="http://www.codeplex.com/actionpack"><img src="http://www.codeplex.com/actionpack/Project/FileDownload.aspx?DownloadId=7398" alt="SubSonic" /> </a></p>
<p><a href="http://www.codeplex.com/actionpack" title="http://www.codeplex.com/actionpack">http://www.codeplex.com/actionpack</a></p>
<p>For the templates: Download one of the following files below:</p>
<p>C#: <a href="http://test.www.gotripod.com/wp-content/uploads/2007/10/subsonicquickstartstarterkitcsharp.zip" title="Subsonic Quick Starter Kit C#">Subsonic Quick Starter Kit C#</a> (Based on SubSonic build 1.0.6)<br />
VB: <a href="http://test.www.gotripod.com/wp-content/uploads/2007/10/subsonicquickstartstarterkitvb.zip" title="Subsonic Quick Starter Kit VB.Net">Subsonic Quick Starter Kit VB.Net</a> (Based on SubSonic build 1.0.6)</p>
<p><strong><em>Updated 03/03/07: I have split the two templates into separate .zip files as most developers will not need both VB and C# templates. This will save bandwidth.</em></strong></p>
<p>Unzip, then double-click the desired .vsi files to run the Visual Studio Installer. Please ignore the warning about the code not being signed.</p>
<p><strong><em>Note: I have not tested this with Visual Studio Express but I am pretty sure <span class="caps"><span class="caps">VSE</span></span> is compatible</em></strong> <strong><em>with third-party templates.</em></strong></p>
<h2><strong>Getting started</strong></h2>
<p>1. Open Visual Studio. On the Start Page select ‘Create Web Site’, under ‘My Templates’ you will see the Sub Sonic Quick Start Starter Kit.</p>
<p>2. Create a database either in the App_Data or on a external Database and enter the connection string into the connectionStrings section of the web.config file. Note: The web config is set-up to use <span class="caps"><span class="caps">MS SQL</span></span>, if you are using MySQL you will need to change the provider settings in the web.config file.</p>
<p>3. Build and Browse /Dev/BatchClassGenerator.aspx, select the desired table, click generate, et voila! You’re ready to reap the benefits of SubSonic in a medium trust environment.</p>
<p><strong><em>Note: Subsonic Team: Please feel free to do as you will with these templates.</em></strong></p>
<p>Regards,</p>
<p>Jon Milet Baker</p>

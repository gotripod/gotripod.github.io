---
layout: post
status: publish
published: true
title: Tim Shankarian&#039;s MS Ajax Autocomplete Patch (and how to use)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'Contrary to the advise I have received from several fellow developers
  (and never being one to miss a challenge), I have decided to ignore all advise and
  attempt to use the Microsoft Ajax framework with my current .Net project for TktIt.com.
  The MS Ajax Frawework is extended to provide functionality such as Autocomplete
  etc using the AjaxToolKit. Although a lot of these are excellent, (like the pop-up
  calendar control) the Autocomplete feature is poor compared to many others out there.
  However, thanks to <a href="http://tshak.net/cs/blogs/tshak/default.aspx">Tim Shankarian</a>,
  it has got a little better!


'
wordpress_id: 313
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/tim-shankarians-ms-ajax-autocomplete-patch-and-how-to-use/
date: !binary |-
  MjAwNy0wMy0yOSAxODozMTo0OSArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wMy0yOSAxNzozMTo0OSArMDIwMA==
categories:
- .Net
tags:
- AJAX
- Javascript
- .Net
- dotnet
comments: []
---
<p>Contrary to the advise I have received from several fellow developers (and never being one to miss a challenge), I have decided to ignore all advise and attempt to use the Microsoft Ajax framework with my current .Net project for TktIt.com. The MS Ajax Frawework is extended to provide functionality such as Autocomplete etc using the AjaxToolKit. Although a lot of these are excellent, (like the pop-up calendar control) the Autocomplete feature is poor compared to many others out there. However, thanks to <a href="http://tshak.net/cs/blogs/tshak/default.aspx">Tim Shankarian</a>, it has got a little better!</p>
<p><a id="more"></a><a id="more-313"></a></p>
<p>Tim’s site very briefly explains how to use the new updated control extender, with a link to the control source but does not cover how to install it. I thought I would quickly cover the steps below to help you.</p>
<ol>
<li>Firstly you will need to read <a href="http://tshak.net/cs/blogs/tshak/archive/2007/03/10/20.aspx">Tim’s blog entry</a> and download the patch . To actually use this, you are going to have to re-compile the AjaxControlToolkit.dll, so we will also need to download the latest <a href="http://www.codeplex.com/AtlasControlToolkit/Release/ProjectReleases.aspx?ReleaseId=1425">AjaxControlToolkit</a>, but we need to ensure we download the version <u><strong><span class="caps"><span class="caps">WITH</span></span> source code</strong></u>.</li>
<li>You then need to unzip all the contents into a folder named AjaxControlToolkit under your Visual Studio 2005/Projects (I use Visual Studio 2005 Pro, but I assume you can do this with Visual Web Developer too). Unzip Tim’s patch into the ..Projects/AjaxControlToolkit/AjaxControlToolkit/Autocomplete folder and overwrite the three existing files.</li>
<li>You can now recompile the AjaxControlKit Project. Open the full solution (or AjaxToolKit sub-project) in Visual Studio / Visual Web Develop, make sure the build configuration is set to ‘Release’ and build the project.</li>
<li>You can now find and use the AjaxControlToolKit.dll under the bin/release directory in the sub-project. You can either add this file to your tollbox (using ‘choose items’) and then drag and drop all controls (including the patched AutocompleteExtender) or simply copy this dll (and resource files) to your project /bin directory.</li>
<li>The patch adds an additional MultiWordSeparator attribute to the &lt;AjaxControlToolKit:AutoCompleteExtender&gt; control. If you set this for example to a "," (comma) you can then auto suggest based on a comma separated list. For example I have used this patched control to help auto-suggest comma separated tags (See picture).</li>
</ol>
<p>I believe the authors of the AjaxControlToolkit plan to release an official version that supports multiple words as well as a feature to pass back additional information. In the mean time thanks to Tim we have a workable solution.</p>

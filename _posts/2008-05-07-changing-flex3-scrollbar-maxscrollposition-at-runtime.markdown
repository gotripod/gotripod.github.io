---
layout: post
status: publish
published: true
title: Changing Flex3 ScrollBar maxScrollPosition at runtime
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 332
wordpress_url: http://clockobj.co.uk/?p=91
date: !binary |-
  MjAwOC0wNS0wNyAxODoxNjowNyArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNS0wNyAxODoxNjowNyArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- scrollbar
comments:
- id: 148
  author: Astuces Adobe Flex, Adobe Coldfusion, Papervision 3D | Matsiya
  author_email: ''
  author_url: http://www.matsiya.fr/blog/2008/05/09/astuces-adobe-flex-adobe-coldfusion-papervision-3d/
  date: !binary |-
    MjAwOC0wNS0wOSAwNzowMDo1OSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0wOSAwNzowMDo1OSArMDIwMA==
  content: ! '[...] '
- id: 149
  author: Karthik
  author_email: fermisoft@gmail.com
  author_url: http://www.yemkay.com/
  date: !binary |-
    MjAwOC0wOC0xNSAyMDowOTozMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0xNSAyMDowOTozMSArMDIwMA==
  content: Great. It worked for me. Thanks for posting the solution.
- id: 150
  author: Allen
  author_email: zaraza@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMC0zMCAxNDowNjo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0zMCAxNDowNjo1NSArMDEwMA==
  content: ! 'Great!!! It works!

    Thanx!

    You are GROSSO!!'
- id: 151
  author: sydd
  author_email: dddd@skgkg.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMS0xMCAwMjozMjozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xMCAwMjozMjozOSArMDEwMA==
  content: thanks, you saved me a lot of time :)
- id: 152
  author: Matt Wilson
  author_email: shadda@gmail.com
  author_url: http://webtunes.synful.us
  date: !binary |-
    MjAwOC0xMi0yNiAxNzo0MTo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yNiAxNzo0MTo0MCArMDEwMA==
  content: Excellent, was going nuts trying to figure this one out.
- id: 153
  author: Dipz
  author_email: dipankar.paul@gmail.com
  author_url: http://www.webvariations.com
  date: !binary |-
    MjAwOC0xMS0yNyAwOTo1ODozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNyAwOTo1ODozNyArMDEwMA==
  content: ! 'Great work. But somehow I am not being able to run this in my project.
    Can u gimme a detailed example? Or is it any FLEX SDK version specific? I have
    noticed that this bug is mentioned in Adobe''s site. Although they have said that
    this bug has been resolved in Flex 3.0.X version.

    Best regards

    Dipz

    ------------------

    www.webvariations.com'
- id: 154
  author: Marc Haemmerle
  author_email: mail@marchaemmerle.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMy0xMiAxMDoxMjowMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0xMiAxMDoxMjowMiArMDEwMA==
  content: Thanks, was going nuts too. And would be nice if you fix this, Adobe ..
- id: 155
  author: Brian
  author_email: bboyer@topdie.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0xNCAwNzo0MTowNyArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0xNCAwNjo0MTowNyArMDIwMA==
  content: ! 'THANKS!!!!


    Two days of beating my head against the wall before I found this.'
---
<p>A quick tip if you have a dynamic scroll bar and want to bind it's maxScrollPosition to a value at runtime unfortunately you can't use the MXML binding, i.e. maxScrollPosition={value}.</p>
<p>Alternatively you need to set the value programatically in an event handler, AND importantly call updateDisplayList() on the scrollbar. i.e.</p>
<pre lang="actionscript">

		<!--[CDATA[
			private function handleSlideChange():void {
				scroll.maxScrollPosition = slider.value;
				scroll.invalidateDisplayList();
			}
		]]--></pre>
<p><script src="http://www.gotripod.com/wp-content/uploads/2008/05/ac_oetags.js"></script><br />
 <script type="text/javascript"><!--<br />
		AC_FL_RunContent(<br />
					"src", "http://www.gotripod.com/wp-content/uploads/2008/05/scrollbartest",<br />
					"width", "500",<br />
					"height", "100",<br />
					"align", "middle",<br />
					"id", "ScrollBarTest",<br />
					"quality", "high",<br />
					"bgcolor", "#869ca7",<br />
					"name", "ScrollBarTest",<br />
					"allowScriptAccess","sameDomain",<br />
					"type", "application/x-shockwave-flash",<br />
					"pluginspage", "http://www.adobe.com/go/getflashplayer"<br />
	);<br />
// --><br />
// --&gt;</script></p>
<noscript>&lt;br /&gt; 	&lt;span class="mceItemObject"  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"&lt;br /&gt; 			id="ScrollBarTest" width="500" height="100"&lt;br /&gt; 			codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"&gt;&lt;span  name="movie" value="ScrollBarTest.swf" class="mceItemParam"&gt;&lt;/span&gt;&lt;span  name="quality" value="high" class="mceItemParam"&gt;&lt;/span&gt;&lt;span  name="bgcolor" value="#869ca7" class="mceItemParam"&gt;&lt;/span&gt;&lt;span  name="allowScriptAccess" value="sameDomain" class="mceItemParam"&gt;&lt;/span&gt;&lt;span class="mceItemEmbed"  src="http://www.gotripod.com/wp-content/uploads/2008/05/scrollbartest.swf" mce_src="http://www.gotripod.com/wp-content/uploads/2008/05/scrollbartest.swf" quality="high" bgcolor="#869ca7"&lt;br /&gt; 				width="500" height="100" name="ScrollBarTest" align="middle"&lt;br /&gt; 				play="true"&lt;br /&gt; 				loop="false"&lt;br /&gt; 				quality="high"&lt;br /&gt; 				allowScriptAccess="sameDomain"&lt;br /&gt; 				type="application/x-shockwave-flash"&lt;br /&gt; 				pluginspage="http://www.adobe.com/go/getflashplayer"&gt;&lt;/span&gt;&lt;/span&gt;&lt;br /&gt; </noscript>

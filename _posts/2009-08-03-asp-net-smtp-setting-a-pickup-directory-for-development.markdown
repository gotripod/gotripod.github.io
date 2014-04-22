---
layout: post
status: publish
published: true
title: ASP.NET SMTP - Setting a Pickup Directory for Development
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
wordpress_id: 669
wordpress_url: http://www.gotripod.com/?p=669
date: !binary |-
  MjAwOS0wOC0wMyAxNzozOTowNyArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wOC0wMyAxNjozOTowNyArMDIwMA==
categories:
- .Net
tags: []
comments: []
---
<p>One of the hidden gems of System.Net is the ability to change from using an SMTP server for sending your email. Instead you can specify a pickup directory which will receive all emails sent from your application as a .EML text file. There are clearly uses for this in production - you may have a second application which monitors this pickup directory and sends the emails after performing some processing on them.</p>
<p>My favourite use of this feature is for development - when you're sending loads of test emails you can avoid polluting your inbox and simply check the pickup directory. You also avoid having to set up an SMTP host and all of the associated configuration.</p>
<p>Simply add the following to your web.config's system.net section:</p>
<pre lang="xml"><mailSettings>
	<smtp deliveryMethod="SpecifiedPickupDirectory">
		<specifiedPickupDirectory pickupDirectoryLocation="c:temp"/>
	</smtp>
</mailSettings></pre>
<p>Make sure you've got the right permissions on the directory. Now, send an email from your application and watch it appear in c:temp, as if by magic!</p>

---
layout: post
status: publish
published: true
title: A walkthrough on how to use Cairngorm with Flex or Air
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 333
wordpress_url: http://clockobj.co.uk/?p=94
date: !binary |-
  MjAwOC0wNi0wNiAxOToyMDowMyArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNi0wNiAxOToyMDowMyArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- cairngorm
- mvc
comments:
- id: 156
  author: David Tucker
  author_email: david@davidtucker.net
  author_url: http://www.davidtucker.net/
  date: !binary |-
    MjAwOC0wNi0wNyAxMToxNDoyMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wNyAxMToxNDoyMiArMDIwMA==
  content: ! 'I did a complete series on Cairngorm as well:


    http://www.davidtucker.net/category/cairngorm/'
---
<p>The Flex scene seems to be lacking in beginners' guides to Cairngorm (maybe they are just alluding my Google searches) so I have put together (larger than hoped) a four part series that guides you through how I use Cairngorm.</p>
<p>For those of you who have <a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">read my articles</a> on <a href="www.tombray.com/">Tom Bray's</a> EasyMVC, this may sound surprising. I have previously posted articles on how to <a href="http://www.gotripod.com/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/">scale up EasyMVC into a Micro-architecture similar to Cairngorm</a>. However, the rationale behind these articles was to help developers who implement EasyMVC and find their app out grows the implementation that Tom originally presented, and not as a blueprint for architecting apps. EasyMVC is a great framework for small Flex apps and Flex widgets where using Cairngorm would be the equivalent of taking a sledgehammer to a walnut. If you know in advance you application is going to be fairly sizable, use Cairngorm (or something like <a href="http://puremvc.org/">PureMVC</a> if you prefer).</p>
<p>Before I get started, there is a slight disclaimer: I am going to present my own approach to using Cairngorm which does deviate from the documented approach, namely around services. I feel it is simpler, but you may beg to differ. I do not present this as the best solution or a perfect solution, but it is a tried and tested solution which hopefully will get more developers understanding and using Cairngorm where appropriate.</p>
<p>In essence this series should give you all you need to know to get started with Cairngorm.</p>
<h2>Contents:</h2>
<p><a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1 - Setting up a project for Cairngorm</a><br />
<a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2 - The Model</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">Part 3 - Commands</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-4/">Part 4 - Services</a><br />
<a href="http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip">Cairngorm Demo Source Files</a></p>

---
layout: post
status: publish
published: true
title: How We Track Projects
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
wordpress_id: 1117
wordpress_url: http://www.gotripod.com/?p=1117
date: !binary |-
  MjAxMC0wMi0xMyAxMDoxMDoyOSArMDEwMA==
date_gmt: !binary |-
  MjAxMC0wMi0xMyAxMDoxMDoyOSArMDEwMA==
categories:
- Go Tripod
- 37 Signals
- Campfire
- Project Management
- Ruby
tags: []
comments: []
---
<p>Depending on time of year, current workload, phase of moon, and other factors, the Go Tripod team may not always work from the same location. And even if we do, we're often in Do Not Disturb mode with headphones on. We've found that the best way to keep track is by using the Campfire chat system, which allows not only standard back-and-forth yapping, but sharing of source code and images. A killer feature for us is the ability to see what's been talked about if we've not been in the chatroom for a few hours; Campfire offers transcripts of everything that's been said in your absence.</p>
<p>So we're always in <em>Campfire</em>, and it's an integrated part of our working day. As Go Tripod is going from strength to strength, we've started to need a way of doing a similar thing with projects - a very simple way for anyone to see and overview of projects that are on the go right now. We've kind of tried this before, but the stuff that we've tried either hasn't been simple enough or we've only used it rarely because it's separated out from every other part of our work. In the latter case, it just gets left by the wayside and forgotten.</p>
<p>The idea sprang to mind to somehow involve Campfire in the proceedings. Maybe we change the room title to reflect the current open projects? The problem with the room title is that it's a bit out of the way up the top of the screen and could be affected by the same issue as I described above - out of sight, out of mind. So the solution needed to be integrated. In fact we basically needed another team member in Campfire, our communication method of choice, talking to us and updating us. Some kind of automated team member... Some kind of robot?</p>
<h2>The Technical Bit</h2>
<p>I did a quick search - <a href="http://github.com/timriley/campfire-bot">Tim Riley's Campfire Bot</a> looked absolutely perfect, with its plugin system, so I tried to use that. Unfortunately I couldn't get the latest source code to work, and I had other <a href="http://github.com/collectiveidea/tinder/issues#issue/3">issues</a> when I tried to use the <a href="http://github.com/collectiveidea/tinder/">Tinder</a> library which underlies the Campfire Bot.</p>
<p>A quick scout around for some more libraries led me to <a href="http://github.com/qrush/broach">Broach</a>, a simple wrapper for the Campfire API, and the 37 Signals <a href="http://developer.37signals.com/campfire/streaming">example code for the Campfire Streaming</a> API, which uses the <a href="http://github.com/voloko/twitter-stream">twitter-stream</a> library. I quickly put together a proof of concept using these tools and some sneaky code which allowed us to issue commands to the bot from the Campfire window itself.</p>
<h2>The Results</h2>
<p>A picture tells a thousand words:</p>
<p><a href="http://www.gotripod.com/wp-content/uploads/2010/02/projects.png"><img src="http://www.gotripod.com/wp-content/uploads/2010/02/projects.png" alt="List Projects with GoTripodBot" title="!projects" width="458" height="53" class="alignleft size-full wp-image-1121" /></a></p>
<p>A list of current projects! And Simon decides to add another:</p>
<p><a href="http://www.gotripod.com/wp-content/uploads/2010/02/open.png"><img src="http://www.gotripod.com/wp-content/uploads/2010/02/open.png" alt="Open a Project with GoTripodBot" title="!open" width="548" height="79" class="alignleft size-full wp-image-1125" /></a></p>
<p>GoTripodBot is a helpful fellow:</p>
<p><a href="http://www.gotripod.com/wp-content/uploads/2010/02/help.png"><img src="http://www.gotripod.com/wp-content/uploads/2010/02/help.png" alt="Getting Help from GoTripodBot" title="!help" width="486" height="50" class="alignleft size-full wp-image-1133" /></a></p>
<p>And a brief insight into the world of development (I wrote some unit tests after this):</p>
<p><a href="http://www.gotripod.com/wp-content/uploads/2010/02/dev-issues.png"><img src="http://www.gotripod.com/wp-content/uploads/2010/02/dev-issues.png" alt="Development issues with GoTripodBot" title="dev-issues" width="308" height="205" class="alignleft size-full wp-image-1137" /></a></p>
<h2>Conclusion</h2>
<p>Of course there's a lot more to our project management process than this (and a lot more projects to manage than I've shown!) but having such easy transparency into this top layer of our work is really going to improve our awareness of what's happening <em>right now</em> in the world of Go Tripod.</p>

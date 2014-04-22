---
layout: post
status: publish
published: true
title: The Most Lightweight Audio Player for OSX
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
wordpress_id: 1181
wordpress_url: http://www.gotripod.com/?p=1181
date: !binary |-
  MjAxMC0wMy0wMSAyMjoyMzoxNCArMDEwMA==
date_gmt: !binary |-
  MjAxMC0wMy0wMSAyMjoyMzoxNCArMDEwMA==
categories:
- Objective-C and Cocoa
- Euphony
- Github
- Labs
tags: []
comments:
- id: 268
  author: g
  author_email: itsgoodtobealive_yeah@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMC0wMy0xNiAwMTo1ODo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wMy0xNiAwMTo1ODo0MiArMDEwMA==
  content: ! 'Hi, how can I use it? Downloaded the .app app but says "classic mode,
    can''t run".

    Using Snow Leopard.

    thx'
- id: 269
  author: Colin
  author_email: colin@gotripod.com
  author_url: http://www.gotripod.com
  date: !binary |-
    MjAxMC0wMy0xNiAwOToyODo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wMy0xNiAwOToyODo1NiArMDEwMA==
  content: ! 'The .app on github is just an early code preview - keep watching the
    blog and we''ll announce a "proper" version soon. In the meantime, you could add
    your problem as an issue in the github project and that''ll help us track it.


    Thanks,

    Colin.'
- id: 270
  author: g
  author_email: itsgoodtobealive_yeah@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMC0wMy0xNyAwNTowNDoxNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wMy0xNyAwNTowNDoxNSArMDEwMA==
  content: ! ';) cool, found the new download :)

    thx!


    when I visited the source site I only saw the .1 version, just realized it was
    a 1kb file, lol

    thx again (:'
---
<p>I had an issue. iTunes is a fine program, with loads of great features, and it's essential for the iTunes store and syncing my iPhone. Trouble is, in my house, we've got a central media server which reports 1037 albums - pulled from the CD collections of four music lovers. The combination of network access and a huge number of songs means that iTunes does get a little sluggish. I've tried alternatives - Songbird, Picoplay, Cog - but to be honest I want something that's fast as lightning and I'm not really interested in the library features of iTunes.</p>
<p>I've written a <a href="http://github.com/colinramsay/euphony">very rough and ready Objective-C media player</a>. It sits as an OSX menu icon, near the spotlight and airport icons, and allows you to pick a directory of audio files to play. That's pretty much it. You can choose "pause", "skip" and "quit" to control the player, but there's no notifications, libraries, fancy features or airs and graces.</p>
<p>I want to thank Matteo Bertozzi for teaching me <a href="http://th30z.netsons.org/2008/10/cocoa-system-statusbar-item-aka-traybar/">how to create the system bar items</a>, and P.J. Onori for the <a href="http://somerandomdude.com/projects/iconic/">icon from the Iconic set</a> which I used. I'm using this player daily, so it works for me, but we're putting it in our labs and it's on github, so please <a href="http://github.com/colinramsay/euphony">fork the audioplayer repo</a> if you have any features you want to add.</p>
<p>Updated 19/3/2010: The audioplayer has been renamed Euphony, so I've updated the links accordingly.</p>

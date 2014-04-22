---
layout: post
status: publish
published: true
title: ! 'Tip: Running command line / shell commands in Ruby using %x'
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 308
wordpress_url: http://old.miletbaker.com/index.php/2007/10/18/tip-running-command-line-shell-commands-in-ruby-using-x/
date: !binary |-
  MjAwNy0xMC0wNyAwODowODowNCArMDIwMA==
date_gmt: !binary |-
  MjAwNy0xMC0wNyAwODowODowNCArMDIwMA==
categories:
- Ruby on Rails
tags:
- Ruby on Rails
- tips
comments:
- id: 2
  author: Ikai
  author_email: jon@clockobj.co.uk
  author_url: http://railsblaster.wordpress.com
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo1Mjo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo1Mjo1NCArMDEwMA==
  content: ! 'Hey there,    Thought I''d let you know there are a few different ways
    - I didn''t know about %x, but it is very similar to the backtick (`). Example:    `dig
    yahoo.com`  `dig #{domain}`    Double quote rules apply. Of course, I might start
    adopting the %x[]  format for readability - unless you are using an IDE or VIM
    (my choice) with syntax highlighting, backticks are hard to spot.'
- id: 3
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo1MzozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo1MzozOCArMDEwMA==
  content: ! 'Thanks for the comment, indeed this also works in exactly the same way.
    Interesting enough the syntax highlighting in RadRails doesn''t like %x[] so if
    you are using this, you may prefer the back tick approach i.e.    @whois = `whois
    #{dom}`'
- id: 4
  author: steve
  author_email: WeissSteven@hotmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMi0yNSAxNTo1NDo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0yNSAxNTo1NDo0OSArMDEwMA==
  content: I'm kind of a newbe, but do these operations wait for the command line/shell
    command to complete, ie as if you were calling the function from a shell or command
    line and the whois operation was complete, to return to the ruby app and execute
    the next line of code?  Maybe this is obvious, but I haven't seen said details
    specified.  Thanks either way for the %x[], very helpfull
- id: 5
  author: gaw.in
  author_email: m@il.gaw.in
  author_url: http://gaw.in
  date: !binary |-
    MjAwOC0wNi0wNSAwODo0MToyNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wNSAwODo0MToyNSArMDIwMA==
  content: ! '# Steve: you could start a thread and retrieve the result later.


    dom = ''clockobj.co.uk''

    t = Thread.new { `whois #{dom}` }

    puts "Proceed with your code..."

    puts t.value'
- id: 6
  author: margaret
  author_email: mafloria@hotmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNy0xMCAxNjo1ODowMyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0xMCAxNjo1ODowMyArMDIwMA==
  content: ! 'I prove the three options but i''m get the follow error:  Errno::ECONNREFUSED
    in ... What i am doing bad?? i prove exec command too and the server shut down
    after execute the command.


    Tanks'
- id: 7
  author: Tony Mann
  author_email: thephatmann@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0xMi0wOSAwMjowMTozMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0xMi0wOSAwMjowMTozMCArMDEwMA==
  content: ! 'Example #2 is not right. It should be:


    @whois = %x[whois #{dom}]


    That is, no backslashes. If you backslash, then you are asking the shell to do
    the interpolation instead of Ruby.'
---
<p>I thought I would post a very quick tip on how to execute a command line / shell command with Ruby. There are several ways to run command lines / shell commands in Ruby as discussed by <a href="http://blog.jayfields.com/2006/06/ruby-kernel-system-exec-and-x.html">Jay Fields</a> however by far the most useful of these is the %x command, as follows:</p>
<ol class="CodeRay">
<li><span class="iv">@whois</span> = <span class="sh"><span class="dl">%x[</span><span class="k">whois www.gotripod.com</span><span class="dl">]</span></span></li>
</ol>
<p>And what is important and not mentioned by Jay is the fact that you can pass parameters into %x[] as follows:</p>
<ol class="CodeRay">
<li>dom = <span class="s"><span class="dl">'</span><span class="k">www.gotripod.com</span><span class="dl">'</span></span></li>
<li><span class="iv">@whois</span> = <span class="sh"><span class="dl">%x[</span><span class="k">whois </span><span class="il"><span class="dl">#{</span>dom<span class="dl">}</span></span><span class="dl">]</span></span></li>
</ol>
<p><img src="http://feeds.feedburner.com/~r/miletbaker/~4/166620922" height="1" width="1" /></p>

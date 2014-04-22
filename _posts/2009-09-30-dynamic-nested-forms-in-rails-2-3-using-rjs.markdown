---
layout: post
status: publish
published: true
title: Dynamic Nested Forms in Rails 2.3+ Using RJS
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 889
wordpress_url: http://www.gotripod.com/2009/09/30/dynamic-nested-forms-in-rails-2-3-using-rjs/
date: !binary |-
  MjAwOS0wOS0zMCAwOToxMTo1NSArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wOS0zMCAwODoxMTo1NSArMDIwMA==
categories:
- Uncategorized
tags:
- plugin
- accepts_nested_attributes_for
- rails
comments:
- id: 263
  author: Joe McGlynn
  author_email: joemcglynn@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOS0xMS0xOCAxODo0NzowNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0xOCAxODo0NzowNCArMDEwMA==
  content: ! "I'm not having any luck with this, I get a \"compile error\".\n\nI've
    added this line to my form:\n\n  # form is the enclosing form_builder (I'm using
    semantic_form_for, but it's just an extension of form_for)\n  # :agenda_items
    is the name of the has_many attributes on the parent model (a meeting has_many
    agenda_items)\n  # 'agenda_item' is the id of the dom element (a div) within which
    I want to add the new records\n\nThe error I get is:\n\ncompile error\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:18:
    syntax error, unexpected kEND, expecting ')'\n@output_buffer.concat \"  \";  end
    ; @output_buffer.concat \"n\"\n                                ^\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:20:
    syntax error, unexpected kENSURE, expecting ')'\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:22:
    syntax error, unexpected kEND, expecting ')'\n\nExtracted source (around line
    #18):\n\n15:\n16:\n17:      \"Create Meeting\" %&gt;\n18:\n19:\n\n\nwhich causes
    this error:\n\ncompile error\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:18:
    syntax error, unexpected kEND, expecting ')'\n@output_buffer.concat \"  \";  end
    ; @output_buffer.concat \"n\"\n                                ^\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:20:
    syntax error, unexpected kENSURE, expecting ')'\nC:/workspace2/MeetingAdjourned/app/views/meetings/new.html.erb:22:
    syntax error, unexpected kEND, expecting ')'\n\nExtracted source (around line
    #18):\n\n15:\n16:\n17:      \"Create Meeting\" %&gt;\n18:\n19:"
- id: 264
  author: Jon
  author_email: jon@gotripod.com
  author_url: http://www.gotripod.com
  date: !binary |-
    MjAwOS0xMS0xOSAwOToxMzo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0xOSAwOToxMzo0OSArMDEwMA==
  content: ! '@Joe I can''t see what line you have added in the comment. I have not
    heard of any incompatibilities with Formtstic but have not personally tried it.
    The error is suggesting you have a syntax error in terms of a missing closing
    bracket but thet is all I can work out from this.'
---
<p>Rails 2.3 delivered a new feature that allows you to easily write forms in rails that can process nested attributes for related objects using the accepts_nested_attributes_for method in your models. Now there is a plugin to make adding and removing nested forms a walk in the park!</p>
<p>I am not going to go into detail about this feature as <a href="http://ryandaigle.com/articles/2009/2/1/what-s-new-in-edge-rails-nested-attributes#comment-form">Ryan Daigle has an excellent write up on his blog</a>.</p>
<p>However I have been looking at ways to easily add and remove nested form blocks using Javascript/RJS and came across a good method of achieving this <a href="http://railsforum.com/viewtopic.php?pid=91229">by Marsvin on the RailsForum website</a>.</p>
<p>We have used this method a few times now, so thought we would roll it up into a plugin. Simply install the plugin to give you two new view helpers that allow you to create links to add and remove these nested form item partials using RJS.</p>
<p><a href="http://github.com/miletbaker/add_nested_fields">Visit the plugin's page on GitHub to install or view the documentation.</a></p>

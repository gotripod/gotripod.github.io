---
layout: post
status: publish
published: true
title: Rails deployment is so easy these days
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
excerpt: ! '<a href="http://www.gotripod.com/wp-content/uploads/2008/11/enterprise_logo_alpha.png"><img
  class="float_left alignleft size-full wp-image-214" style="margin: 5px;" title="enterprise_logo_alpha"
  src="http://www.gotripod.com/wp-content/uploads/2008/11/enterprise_logo_alpha.png"
  alt="" width="261" height="68" /></a>I have been meaning to blog about Phusion Passenger
  for a while as about 3-4 months ago we migrated Stubmatic from using Apache / Mongrel
  Cluster to <a href="http://www.modrails.com/">Phusion Passenger A.K.A. mod_rails</a>.

'
wordpress_id: 364
wordpress_url: http://clockobj.co.uk/?p=196
date: !binary |-
  MjAwOC0xMS0yMiAxMjowNDoxNiArMDEwMA==
date_gmt: !binary |-
  MjAwOC0xMS0yMiAxMjowNDoxNiArMDEwMA==
categories:
- Ruby on Rails
tags:
- Ruby on Rails
- Apache
- Phusion Passenger
comments:
- id: 251
  author: Dipak
  author_email: driswadkar@gmail.com
  author_url: http://www.bookmyroom-sa.com
  date: !binary |-
    MjAxMC0wOS0wMyAwNTowOTozMSArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wOS0wMyAwNDowOTozMSArMDIwMA==
  content: Thank you very much. The maintenance.html part was fantastic.
---
<p><a href="http://www.gotripod.com/wp-content/uploads/2008/11/enterprise_logo_alpha.png"><img class="float_left alignleft size-full wp-image-214" style="margin: 5px;" title="enterprise_logo_alpha" src="http://www.gotripod.com/wp-content/uploads/2008/11/enterprise_logo_alpha.png" alt="" width="261" height="68" /></a>I have been meaning to blog about Phusion Passenger for a while as about 3-4 months ago we migrated Stubmatic from using Apache / Mongrel Cluster to <a href="http://www.modrails.com/">Phusion Passenger A.K.A. mod_rails</a>.<br />
<a id="more"></a><a id="more-364"></a><br />
Mod rails is extreamly easy to install. Make sure you update gem first:</p>
<pre lang="bash">gem update --system</pre>
<p>Then install the Phusion Passenger gem</p>
<pre lang="bash">gem install passenger</pre>
<p>Once complete you can run the Phusion Passenger install that compiles mod_rails for you.</p>
<pre lang="bash">passenger-install-apache2-module</pre>
<p>Once this completes it will give you some code to past into your httpd.conf file and you are ready to start configuring your sites.. Well actually if you have been using Mongrels then time to strip most of the configuration out of your https.conf file. You can have as simple a configuration as shown below. <strong>Note:</strong> The DocumentRoot should be set to the public folder within your app. Passenger automatically detects that this is a rails app.</p>
<pre lang="xml">
    ServerName www.stubmatic.com
    DocumentRoot /websites/stubmatic/public</pre>
<p>One thing to note is that by default Passenger disables ModRewrite for that VirtualHost and in our case we use ModRewrite for a number of things such as providing a Maintenance page when maintenance.html is in our public folder allowing us to take the app offline. We also use ModRewrite to hide .svn folders, so we needed to use ModRewrite. Thankfully Passenger provides a solution. <strong>Note: You must first make sure you remove the .htaccess file in your rails public folder!</strong></p>
<p>So our new Apache configuration looks like this:</p>
<pre lang="xml">
    ServerName www.stubmatic.com
    DocumentRoot /websites/stubmatic/public

    RailsAllowModRewrite on

    RewriteEngine On

    RewriteRule ^(.*/)?.svn/ - [F,L]

    RewriteCond %{DOCUMENT_ROOT}/maintenance.html -f
    RewriteCond %{SCRIPT_FILENAME} !maintenance.html
    RewriteRule ^.*$ /maintenance.html [L]</pre>
<p>If you want to setup an Apache / Phusion Passenger testing server you will also need to add the following directive to your VirtualHost configuration:</p>
<pre lang="xml">RailsEnv development</pre>
<p>As you can see Phusion Passenger make deployment of Ruby on Rails as trivial as deploying a PHP. You can easily reload Phusion Passenger by running the following command from within your Rails project root.</p>
<pre lang="xml">touch tmp/restart.txt</pre>
<p>In terms of performance, Phusion Passenger holds it's own against Mongrel and there are <a href="http://www.modrails.com/documentation.html">plenty of details on Phusion's website</a>.</p>
<p>For more information:</p>
<ol>
<li><a href="http://www.modrails.com/">Phusion Passenger</a></li>
<li><a href="http://www.modrails.com/documentation/Users%20guide.html">Phusion Passenger Documentation</a></li>
</ol>

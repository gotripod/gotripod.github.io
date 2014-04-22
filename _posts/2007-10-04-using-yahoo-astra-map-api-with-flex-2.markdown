---
layout: post
status: publish
published: true
title: Using Yahoo ASTRA Map API with Flex 2
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'Yahoo recently released a new Flash framework for use with it''s Search,
  Weather, Mapping, Upcoming and Answers APIs called <span class="caps">ASTRA</span>
  (ActionScript Toolkit for Rich Applications). As the documentation is still a little
  sketchy in places I thought I would write a quick getting started tutorial on using
  the <span class="caps">ASTRA</span> framework with Flex 2 and Flex Builder.

  <p class="contentbar_header">&nbsp;</p>

  <p class="contentbar_body"> <img src="http://farm2.static.flickr.com/1251/1482189977_9e7c45074d.jpg"
  /></p>

  <p class="contentbar_footer">Yahoo Maps Flash Component</p>

'
wordpress_id: 309
wordpress_url: http://old.miletbaker.com/index.php/2007/10/15/using-yahoo-astra-map-api-with-flex-2/
date: !binary |-
  MjAwNy0xMC0wNCAxOTo1OTozNSArMDIwMA==
date_gmt: !binary |-
  MjAwNy0xMC0wNCAxOTo1OTozNSArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- RIAs
- yahoo api
comments:
- id: 8
  author: batmitra
  author_email: jon@clockobj.co.uk
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo1MTozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo1MTozMyArMDEwMA==
  content: ! 'hi  this is a good introduction, give us more on this please.   meanwhile
    let me add that when create a custom marker using latloncontroller.addmarkerByLatLon,
    if you don''t know the value of latitude and longitude you can use the click event
    that returns on the object this:    ev.lastResult.latlonObj.y for latitude and
    ev.lastResult.latlonObj.x for longitude, s oyou can put it like this:      latlon.addMarkerByLatLon("CustomPOIMarker",ev.lastResult.latlonObj.y,ev.lastResult.latlonObj.x,{index:'',myindex'',title:''mytitle
    '',description:''mydescription'',markerColor:''0x336699'' });'
- id: 9
  author: Ram
  author_email: jon@clockobj.co.uk
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo1NTo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo1NTo0NCArMDEwMA==
  content: Cool stuff....may ASTRA grow fast!! Eager to see it happening.
- id: 10
  author: Kaushal Shah
  author_email: kaushal_bshah@yahoo.co.in
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wNSAxMzoyNzoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAxMzoyNzoxNiArMDEwMA==
  content: HI, ASTRA works really good. I have easily attached this tool in my site,
    but i found one problem, in some IE6 this doesn't work even not giving onMapErro(),
    while in other IE6 its work perfactly. What to do in this case?
- id: 11
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0wNSAxMzo0MToyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAxMzo0MToyMyArMDEwMA==
  content: Hi, This could be due to Javascript settings, I believe that the AS3 ASTRA
    framework uses the ExternalInterface API to communicate with the AS2 a2map.swf
    via Javascript calls. Don't quote me on that as I am not on the Yahoo development
    team and have not gobe through thier code in great detail.
- id: 12
  author: Kaushal Shah
  author_email: kaushal_bshah@yahoo.co.in
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wNiAwOTowNzoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNiAwOTowNzoxMCArMDEwMA==
  content: ! 'Thanks for quick response.

    And you r correct that its not going ahead from Draw() method of YahooMapService.as.
    This method uses ExternalInterface.addCallback to know us when the map is loaded
    or if there was an error loading it.


    Now from where I can get some solution?'
- id: 13
  author: Haz
  author_email: shado_ryuuki@hotmail.com
  author_url: http://-
  date: !binary |-
    MjAwOC0wMy0xOCAxMDowOToyMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xOCAxMDowOToyMCArMDEwMA==
  content: Can you give full source code? still green in Flex
- id: 14
  author: harry
  author_email: topcat1983old@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMi0wMyAxODowODoyMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0wMyAxODowODoyMiArMDEwMA==
  content: ! 'Hi,


    I''ve had a read through the astra library docs and am having difficulty adding
    the two extra options which you have example code for (pan and widget). The error
    i''m getting is


    "1067: Implicit coercion of a value of type MapExample to an unrelated type com.yahoo.webapis.maps:YahooMapService"


    Its odd because when I use the code hint thing I can see the widgets and the pan
    class.'
- id: 15
  author: dietlev
  author_email: info@dietlev.be
  author_url: http://www.dietlev.be
  date: !binary |-
    MjAwNy0xMi0yMyAyMjoxNDo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0yMyAyMjoxNDo1MiArMDEwMA==
  content: ! 'Harry, change your code to :


    var panTool:PanTool = new PanTool(yahooMapID);

    var widgets:Widgets = new Widgets(yahooMapID);


    Hope that helps.

    Thx for the tutorial !'
- id: 16
  author: adam
  author_email: adamray22@hotmail.co.uk
  author_url: http://www.allthatflash.co.uk
  date: !binary |-
    MjAwNy0xMS0yOCAyMzoxMTowNyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0yOCAyMzoxMTowNyArMDEwMA==
  content: ! 'Thank you so much, if its any use because of the support I get from
    people like you I now do it when I can on my blog and i''m glad to say I have
    helped at least one guy out.


    Adam'
- id: 17
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwNy0xMS0yOCAyMjowNzo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0yOCAyMjowNzo1MSArMDEwMA==
  content: ! 'Hi Adam,


    Make sure the swfDomId=“{SWFDOMID}“ in your yahooYahooMapService tag matches the
    name of the embed tag in the generated html, by default it is set to the project
    name.


    Regards


    Jon'
- id: 18
  author: adam
  author_email: adamray22@hotmail.co.uk
  author_url: http://www.allthatflash.co.uk
  date: !binary |-
    MjAwNy0xMS0yOCAyMToxOToyNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0yOCAyMToxOToyNiArMDEwMA==
  content: ! 'Hi,


    I have followed your instructions and when I run the example (your first two code
    blocks) I am being shown the default flex background with a small 5*5 grey image.
    When I run the as2map.swf it is also very small. I think it is nearly working
    but i''m having some difficulty working out what the problem is :(


    Thank youfor your time,


    Adam


    The code is as folows:'
- id: 19
  author: Prash
  author_email: mailspark1802@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0yNSAwOToyNjoxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yNSAwOToyNjoxMyArMDEwMA==
  content: ! 'Hey thanks for Astra,it was really helpful for . iCould get the map
    into my flex page. But

    mapController.goToAddressAndZoom(“London“, 6);


    This doesnt seem to work

    .Any pointers on how to have user search for a particular loacation.

    Is there any other function that can be used to acheive this.

    Thanks'
---
<p>Yahoo recently released a new Flash framework for use with it's Search, Weather, Mapping, Upcoming and Answers APIs called <span class="caps">ASTRA</span> (ActionScript Toolkit for Rich Applications). As the documentation is still a little sketchy in places I thought I would write a quick getting started tutorial on using the <span class="caps">ASTRA</span> framework with Flex 2 and Flex Builder.</p>
<p class="contentbar_header">&nbsp;</p>
<p class="contentbar_body"> <img src="http://farm2.static.flickr.com/1251/1482189977_9e7c45074d.jpg" /></p>
<p class="contentbar_footer">Yahoo Maps Flash Component</p>
<p><a id="more"></a><a id="more-309"></a></p>
<h2>Getting Started</h2>
<p><strong><em>Note:</em></strong> I also recomment you read <a href="http://developer.yahoo.com/flash/tutorials/as3/maps.html">Yahoo’s own tutorial on getting started as well as this</a></p>
<p>This article assumes you are using the most current version of Flex Builder 2 (2.0.1). You can <a href="http://www.adobe.com/products/flex/">download a trial version directly from Adobe</a></p>
<p>Once you have Flex Builder installed, you will need to <a href="http://developer.yahoo.com/flash/">download the latest version of the <span class="caps"><span class="caps">ASTRA</span></span> framework from Yahoo Developer Network’s new Flash Developer Center</a> , unzip the files into a suitable folder, this could be your Flex Builder workspace but could be anywhere that Flex Builder has access to.</p>
<p>Yahoo suggests adding the <span class="caps"><span class="caps">ASTRA</span></span> sources as a Source Path (under Project &gt; Properties &gt; Flex Build Path &gt; Source Path) which can be useful if you want to look at the source code. If you do, click ‘Add Folder’ and navigate to your unzipped <span class="caps"><span class="caps">ASTRA</span></span> framework, then browse to and select the following subfolder (Source/Actionscript 3). If you are not bothered about viewing or changing the sources, Yahoo have bundled a pre-packaged .swc library file in the Build folder of <span class="caps"><span class="caps">ASTRA</span></span>. Add this file, by adding it to your Flex Build Path (Project &gt; Properties &gt; Flex Build Path &gt; Library Path &gt; Add <span class="caps"><span class="caps">SWC</span></span>)</p>
<p><strong><em>Once this is created there is one more important step…</em></strong> You need to copy the file named as2map.swf from the build folder, to the root path of your project, however, at the time of writing this particular as2map.swf file seems a little buggy and one important feature that missing is the ability to add an event handler to handle the event that is raised when a user searches for a location and there is more than one possible location. If you are only going to be positioning the map using Lat and Lon, you don’t need to worry, but if you want the user to enter an address string you will need to use the older as2map.swf file that is located under Examples/Maps/traffic.</p>
<p>Once you have the as2map.swf located in your project root, you can now add the map directly into your <span class="caps"><span class="caps">MXML</span></span> page.</p>
<h2>Adding the map</h2>
<p>To add the map to a container, you first need to add the <span class="caps"><span class="caps">XML</span></span> namespace to your application (or component if adding to a custom component). If you are adding it directly to your main application <span class="caps"><span class="caps">MXML</span></span> file you would add the following attribute to your <application> tag:</application></p>
<ol class="CodeRay">
<li><span class="ta">&lt;mx:Application</span> <span class="an">xmlns:mx</span>=<span class="s"><span class="dl">"</span><span class="k">http://www.adobe.com/2006/mxml</span><span class="dl">"</span></span></li>
<li><span class="an">xmlns:yahoo</span>=<span class="s"><span class="dl">"</span><span class="k">com.yahoo.webapis.maps.*</span><span class="dl">"</span></span></li>
<li><span class="an">layout</span>=<span class="s"><span class="dl">"</span><span class="k">absolute</span><span class="dl">"</span></span> <span class="an">creationComplete</span>=<span class="s"><span class="dl">"</span><span class="k">init();</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
</ol>
<p>With the <span class="caps"><span class="caps">XML</span></span> namespace defined, you can now go ahead and add the Yahoo Map to your application using the following:</p>
<ol class="CodeRay">
<li><span class="ta">&lt;yahoo:YahooMapService</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">myMap</span><span class="dl">"</span></span> <span class="an"><span class="caps">UUID</span></span>=<span class="s"><span class="dl">"</span><span class="k">{UNIQUEID}</span><span class="dl">"</span></span></li>
<li><span class="an">swfDomId</span>=<span class="s"><span class="dl">"</span><span class="k">{SWFDOMID}</span><span class="dl">"</span></span> <span class="an">apiId</span>=<span class="s"><span class="dl">"</span><span class="k">{YAHOOAPIKEY}</span><span class="dl">"</span></span> <span class="an">mapURL</span> = <span class="s"><span class="dl">"</span><span class="k">{MAPSWF}</span><span class="dl">"</span></span></li>
<li><span class="an">horizontalCenter</span>=<span class="s"><span class="dl">"</span><span class="k">0</span><span class="dl">"</span></span> <span class="an">verticalCenter</span>=<span class="s"><span class="dl">"</span><span class="k">0</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">600</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">400</span><span class="dl">"</span></span> <span class="ta">/&gt;</span></li>
</ol>
<p>In the above code I have bound <span class="caps"><span class="caps">UNIQUEID</span></span>, swfDomId, apiId and mapURL to constants, however you could simply enter the relevant parameter values here.</p>
<p><strong><em><span class="caps"><span class="caps">UNIQUEID</span></span></em></strong> is literally a unique int value, Yahoo suggest using getTimer() to generate a psuedorandom number.</p>
<p><strong><em>swfDomId</em></strong> is a string that needs to be set to the name of the Project (or in particular, must match the name assigned to the embed tag in the generated html file, by default the name of your project) and I belive is case sensitive. This is used so that the external as2map.swf file can access your application.</p>
<p><strong><em>apiId</em></strong> is your Yahoo <span class="caps"><span class="caps">API</span></span> key, if you don’t have one you need to <a href="https://developer.yahoo.com/wsregapp/index.php">register with Yahoo</a></p>
<p><strong><em>mapURL</em></strong> is the path to the as2map.swf, if you put this in the root of your project, as advised above, this is literally “as2map.swf”</p>
<p>Test your application and your map should be shown.</p>
<h3>Scaling the map</h3>
<p>If you would like to scale your map beyond the default 600×400 width and height, you need to set scaleContent=”false on the YahooMapService tag. i.e.</p>
<ol class="CodeRay">
<li><span class="ta">&lt;yahooYahooMapService</span> <span class="an">..</span> <span class="an">scaleContent</span>=<span class="s"><span class="dl">"</span><span class="k">false</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
</ol>
<p>Failing to set this attribute causes the map to distort and not scale as expected.</p>
<h2>Adding controls</h2>
<p>Once the map is on the page, we can start to add controls to allow users to interact with the map. We can choose which controls we want to add, and we add these programmatically. If you do not already have an <mx:script> block on the page, add one, then add the following code.</mx:script></p>
<ol class="CodeRay">
<li><span class="r">private</span> <span class="r">function</span> <span class="er">onLoad</span>():<span class="r">void</span></li>
<li>{</li>
<li>      <span class="c">// myMap is the id I gave the YahooMapService earlier</span></li>
<li>      myMap.addEventListener(<span class="s"><span class="dl">"</span><span class="k">onMapLoad</span><span class="dl">"</span></span>, onMapLoaded)</li>
<li>}</li>
<li><span class="r">private</span> <span class="r">function</span> onMapLoaded(ev:<span class="pt">Object</span>):<span class="r">void</span></li>
<li>{</li>
<li>      <span class="c">// Allow the user to drag the map to pan around</span></li>
<li>      <span class="r">var</span> panTool:PanTool = new PanTool(<span class="pc">this</span>);</li>
<li>      panTool.setPanTool(<span class="pc">true</span>);</li>
<li>      <span class="r">var</span> widgets:Widgets = new Widgets(<span class="pc">this</span>);</li>
<li>      <span class="c">// Adds the zoom control and window control that can be opened to help pan</span></li>
<li>      widgets.showNavigatorWidget(<span class="pc">true</span>);</li>
<li>      <span class="c">// Adds buttons to allow users to switch from Arial, Satellite or Hybrid</span></li>
<li>      widgets.showSatelliteControlWidget(<span class="pc">true</span>);</li>
<li>}</li>
</ol>
<p>We now need to get the application to call our onLoad function once the application is loaded using the <em>creationComplete</em> event, which inturns adds our onMapLoaded function as a listener for _onMap_load. We add this to our <application> tag as follows:</application></p>
<ol class="CodeRay">
<li><span class="ta">&lt;yahooYahooMapService</span> <span class="an">..</span> <span class="an">creationComplete</span>=<span class="s"><span class="dl">"</span><span class="k">onLoad()</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
</ol>
<h2>Using the Controllers</h2>
<p>Yahoo have provided us with two main controllers to allow us to programmatically interact with the map. Firstly the MapController which allows us to vaigate to locations using an address string, which is automatically Geo Coded for us, or the LatLonController which allows us to manipulate the map using Latitude and Longitude co-ordinates. In addition to these two controllers there are also Overlays class that allows Yahoo or custom overlays to be added and a Distance tool to calculate distences (these go beyond the scope of this tutorial but more info can be found in the <a href="http://developer.yahoo.com/flash/astra-webapis/classreference/package-summary.html"><span class="caps"><span class="caps">API</span></span> documentation</a>).</p>
<p>To add the main two controllers we create them as follows in the onMapLoaded function:</p>
<ol class="CodeRay">
<li><span class="c">//Map controller, we pass our map to the constructor</span></li>
<li><span class="r">var</span> mapController:MapController = new MapController(myMap)</li>
<li><span class="c">//LatLonController, again passing our map instance</span></li>
<li><span class="r">var</span> latLonController:LatLonController = new LatLonController(myMap)</li>
</ol>
<p>Once these are created we can call methods on these objects as follows:</p>
<ol class="CodeRay">
<li><span class="c">//Go to address and zoom to 6 (0..16 scale, 0 nearest)</span></li>
<li>mapController.goToAddressAndZoom(<span class="s"><span class="dl">"</span><span class="k">London</span><span class="dl">"</span></span>, 6);</li>
</ol>
<p>If the address is found, we are navigated to the location and the map is zoomed to the specified level. However if the location is not found <span class="caps"><span class="caps">ASTRA</span></span> fires a <em>mapGeoCodeError</em> event which we need to capture as shown below:</p>
<p><em><strong>Note:</strong></em> At the time of writing the newest as2map.swf file (which is 164kb is size) does not fire this event. If you need to catch this event then use the older as2map file (155kb) located with the traffic example (see above). If you need to use the latest as2map.swf you will either have to wait for Yahoo to fix this, or use an external GeoCoding service, such as the free <a href="http://www.geonames.org/">GeoNames Service.</a> (Note however: have personally experienced performance issues with this service)</p>
<h2>Handling Events</h2>
<p>In order to handle events with <span class="caps"><span class="caps">ASTRA</span></span> (and unfortunately this is not clearly documented) you need to create an instance of the MapEventsDispatcher class as follows (again once the map is loaded, so put this in your onMapLoaded function).</p>
<ol class="CodeRay">
<li><span class="c">//Create the MapEventDispatcher, passing the map instance to it’s contructor</span></li>
<li><span class="r">var</span> mapEvents:MapEventDispatcher = new MapEventDispatcher(myMap);</li>
<li><span class="c">//Then add event listeners as follows</span></li>
<li>mapEvents.addEventListener(<span class="s"><span class="dl">"</span><span class="k">mapGeocodeError</span><span class="dl">"</span></span>, suggestedAddresses)</li>
</ol>
<p>All Map events fire an event of type MapEvent which is a standard event, however data passed back from the as2map.swf is stored in a parameter named lastResult, the structure of lastResult varies and does not always match the documentation.</p>
<h3>Tip: Finding Out the Structure of Data Stored in MapEvent.lastResult</h3>
<p>While developing you can query the structure of the event using a useful technique that I found on <a href="http://www.scottgmorgan.com/php/default.php?topicID=170&amp;contentID=739">Scott Morgan’s Blog</a></p>
<ol class="CodeRay">
<li><span class="r">private</span> <span class="r">function</span> suggestedAddresses(ev:MapEvent):<span class="r">void</span></li>
<li>{</li>
<li>      <span class="r">for</span> (<span class="r">var</span> i in ev.lastResult)</li>
<li>      {</li>
<li>            trace(i + <span class="s"><span class="dl">"</span><span class="k"> : </span><span class="dl">"</span></span> + ev.lastResult[i])</li>
<li>      }</li>
<li>}</li>
</ol>
<h3>Adding a Custom Marker</h3>
<p class="contentbar_header">&nbsp;</p>
<p class="contentbar_body" align="center"> <img src="http://farm2.static.flickr.com/1264/1482189987_f166c7d835.jpg" /></p>
<p class="contentbar_footer">Custom <span class="caps"><span class="caps">POI</span></span> Marker</p>
<p>Finally another feature that is not well documented is how to add a Point of Interest marker, in particular a customPOIMarker to a specific Latitude or Longitude. It is easy to add one to an address such as “London, UK” using the MapConroller.addCustomPOIMarker method, however with the LatLonController you need to do the following:</p>
<ol class="CodeRay">
<li><span class="r">var</span> latLonContoller:LatLonController = new LatLonController(myMap)</li>
<li><span class="c">// addMarkerByLatLon(markerType:String,latitude:Number,longitude:Number, settings:Object) i.e.</span></li>
<li>latLonController.addMarkerByLatLon(<span class="s"><span class="dl">‘</span><span class="k">CustomPOIMarker</span><span class="dl">‘</span></span>, 50.1024, -5.0417, {index: <span class="s"><span class="dl">"</span><span class="k">ClockObj</span><span class="dl">"</span></span>, title: <span class="s"><span class="dl">"</span><span class="k">Location</span><span class="dl">"</span></span>, description: <span class="s"><span class="dl">"</span><span class="k">Jon Milet Baker’s Location</span><span class="dl">"</span></span>, markerColor: <span class="s"><span class="dl">‘</span><span class="k">0xda001d</span><span class="dl">‘</span></span>, strokeColor: <span class="s"><span class="dl">‘</span><span class="k">0xda001d</span><span class="dl">‘</span></span>});</li>
</ol>
<h2>Useful Resources</h2>
<ul>
<li><a href="http://www.adobe.com/products/flex/">Flex Builder / Flex <span class="caps"><span class="caps">SDK</span></span></a></li>
<li><a href="http://developer.yahoo.com/flash/">Yahoo Developer Network: Flash Developer Center</a></li>
<li><a href="http://tech.groups.yahoo.com/group/ydn-flash/">Yahoo Group for Flash/ASTRA <span class="caps"><span class="caps">API</span></span></a></li>
</ul>

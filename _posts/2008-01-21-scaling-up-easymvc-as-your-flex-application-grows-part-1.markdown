---
layout: post
status: publish
published: true
title: Scaling up EasyMVC as your Flex application grows (Part 1)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 357
wordpress_url: http://clockobj.co.uk/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/
date: !binary |-
  MjAwOC0wMS0yMSAxMTo1MjozOSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wMS0yMSAxMTo1MjozOSArMDEwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- RIAs
- ActionScript
- easymvc
comments:
- id: 162
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0wOSAyMjo1MjozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wOSAyMjo1MjozNyArMDEwMA==
  content: ! 'Hi Jon


    With EMVC where is the most approriate place to handle business logic? Command
    class or is it better to have a model object that handles this and updates its
    associated value object/s?'
- id: 163
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0wNyAwMTozODoxMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNyAwMTozODoxMSArMDEwMA==
  content: Thanks Jon - thanks for additional explanation. I got it now.
- id: 164
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0wNiAyMzozMToxOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNiAyMzozMToxOSArMDEwMA==
  content: You are correct you use cmd.execute without parentheses as this passes
    the function rather than the result of calling the function which cmd.execute()
    would do. Functions in ECMAScript are treated as properties of a class (think
    how Javascript works) in AS3 (which is typed, a function is of type Function).
    The addEventLisener() method is inherited from the EventDispatcher class and expects
    the function that you want calling when the event you are listentng for is dispatched,
    passed to it as a parameter. Hope that helps.
- id: 165
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0wNiAyMjowMzowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNiAyMjowMzowMSArMDEwMA==
  content: ! 'Thanks Jon - I got it working but possibly by hack more than understanding.


    I found that I had to use systemManager.addEventListener(eventType, cmd.execute)
    and not  systemManager.addEventListener(eventType, cmd.execute()) - notice in
    second case it is execute().


    I must have a basic error in understanding as when calling the method execute()
    the errors are that it expects 1 argument and there is implicit cooercion of type
    void to unrelated type Function. That would make sense to me since the execute
    method expects event - execute(event:Event)


    As a newbie I think I am missing something obvious. Suggestions appreciated.'
- id: 166
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0wNiAwODo1MToxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNiAwODo1MToxMyArMDEwMA==
  content: ! 'Hi Johan,


    You can simply cast the event into your custom event. this is done as follows:


    var customEvent:MyCustomEvent = MyCustomEvent(event);


    Regards,


    Jon'
- id: 167
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0wNiAwNzoxNjowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNiAwNzoxNjowNiArMDEwMA==
  content: Enjoying the series a lot. Keeping in mind I am a Flex novice can you explain
    how using commands would work if I have custom events? The problem I see is that
    my custom event class would have a different signature to the interface which
    is typed as Event.
- id: 168
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0wNCAyMjo1NDoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNCAyMjo1NDoxMiArMDEwMA==
  content: ! 'I have been asked why EasyMVC''s controller extends UIComponent and
    wanted to clarify with this from Tom Bray: "I extend UIComponent so I can listen
    for the ADDED_TO_STAGE event which lets me know when the systemManager is no longer
    null..., the amount of code in UIComponent doesn''t concern me because it''s already
    linked in to the compiled SWF because everything, including mx:Application extends
    it, Cairngorm''s FrontController does the same thing"


    Thanks for the clarification Tom!


    Jon'
- id: 169
  author: ! 'Clockwork Objects &raquo; Scaling up EasyMVC as your Flex application
    grows (Part 2: Services)'
  author_email: ''
  author_url: http://clockobj.co.uk/2008/03/04/scaling-up-easymvc-as-your-flex-application-grows-part-2-services/
  date: !binary |-
    MjAwOC0wMy0wNCAyMjowNjozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNCAyMjowNjozMSArMDEwMA==
  content: ! '[...] Click here to read an introduction on EasyMVC Click here to read
    Scaling up EasyMVC part 1. [...] '
- id: 170
  author: jtd
  author_email: jodiedunlop@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0yOCAxMTo1MTozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOCAxMTo1MTozOCArMDEwMA==
  content: another great article. please keep them coming.
- id: 171
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMi0yOCAyMToxMjowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0yOCAyMToxMjowMyArMDEwMA==
  content: Thanks for this great article (and your previous EasyMVC one) - it is nice
    to learn/use some of the techniques found in Cairngorm without having to try and
    understand Cairngorm. Please keep up the great work - much appreciated.
- id: 172
  author: Clockwork Objects &raquo; Simplified Cairngorm, Easy MVC for Adobe Flex
  author_email: ''
  author_url: http://clockobj.co.uk/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/
  date: !binary |-
    MjAwOC0wMS0yMyAxMDozMjo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yMyAxMDozMjo1OSArMDEwMA==
  content: ! '[...] Update 23/01/08: I have added an article on scaling up EasyMVC,
    you can read it by clicking here.'
- id: 173
  author: NdyT
  author_email: anduy.tran@technomedia.ca
  author_url: ''
  date: !binary |-
    MjAwOS0wMy0yNSAxOTozNjo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0yNSAxOTozNjo1NCArMDEwMA==
  content: ! 'hi


    i get the first article about easyMvc, but i dont get everything in this article

    can you put source files to see how interface/controler/CountryChangedCommand
    class are separated ?


    thanks'
- id: 174
  author: NdyT
  author_email: anduy.tran@technomedia.ca
  author_url: ''
  date: !binary |-
    MjAwOS0wMy0yNyAyMDoxNjo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0yNyAyMDoxNjo0OCArMDEwMA==
  content: ! 'ok i get it.

    but with this interface , it is not compatible with the previous article because
    of the type of the argument of the function execute(e:Event).


    We had two function handle_joinRoom( event:JoinRoomEvent ) and handle_sendMessage(
    event:SendMessageEvent ) with different type of argument.


    we can not factorise those function ....'
- id: 175
  author: NdyT
  author_email: anduy.tran@technomedia.ca
  author_url: ''
  date: !binary |-
    MjAwOS0wMy0yNyAyMDo1MzoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0yNyAyMDo1MzoxOCArMDEwMA==
  content: ! 'my bad, didn''t read the comments properly :


    Comment:

    -------------------

    Hi Johan,

    You can simply cast the event into your custom event. this is done as follows:

    var customEvent:MyCustomEvent = MyCustomEvent(event);

    Regards,

    Jon

    -------------------


    it''s indeed working well, but it''s a little weird to cast like that.


    Thanks'
---
<p><a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">EasyMVC</a> is an excellent, easy to use Model View Controller architecture for Adobe Flex designed by <a href="http://www.tombray.com">Tom Bray</a> from <a href="http://www.chatopica.com">Chatopica</a>. However as your apps grow you may find yourself outgrowing this architecture. For example as all your event handlers are centralised into one class, this class may get to large to maintain, especially as the team maintaining the app also expands.One of the best solutions I have found to handling a growing controller is to borrow the command pattern from <a href="http://labs.adobe.com/wiki/index.php/Cairngorm">Cairngorm </a>which uses the Command design pattern.</p>
<p>Note if you have not read my previous article on EasyMVC, <a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">click to read it here first</a>.</p>
<p>What Cairngorm does is to move these centralised event handlers from the controller into separate "command" classes. In a simple sense we are putting each of these event handlers into their own separate classes that contains just that event handler and and services the command uses. We could simply copy and paste the event handlers over as they are, initialise the class and pass the handler function (it will need to be public) within the class as the event handler. However, we want to make our lives a bit easier and this is where the command design pattern comes in.</p>
<pre line="1" lang="actionscript">
package com.clockobj.gotidal.controller{import flash.events.Event;

import mx.core.UIComponent;

import mx.events.FlexEvent;

public class GoTidalController extends UIComponent {

private var am:AppModel = AppModel.getInstance();

public function GoTidalController() {

      addEventListener( FlexEvent.CREATION_COMPLETE, setupEventListeners );

    }

private function setupEventListeners( event:Event):void {

      systemManager.addEventListener(AppEvent.COUNTRYCHANGED, countryChanged);

    }

// Country Changed

private function countryChanged(e:AppEvent):void {

      am.setCountry(e.data);

    }

  }

}</pre>
<p>Above we have an example of an EasyMVC controller which extends the UIComponent and then adds our centralised event handlers to the system manager (which can see all application events through bubbling). In this example, we have a single event handler called countryChanged which stores the changed data (passed by the event) into the AppModel (Singleton model) but as our application grows we could end up with tens if not hundreds of commands.</p>
<p>Cairngorm's strength is toe move these commands out into their own classes as discussed above. I like to create an interface definition for this class so that all commands are standard and then I can write a method to handle registering the class as an event listener on the systemManager class.</p>
<p>I use the following interface:</p>
<pre line="1" lang="actionscript">
package com.triggersoft.core.emvc{  import flash.events.Event;

public interface IEMVCCommand

  {

    function execute(e:Event):void;

  }

}</pre>
<p>Then any commands we create we need to implement this interface:</p>
<pre line="1" lang="actionscript">
package com.clockobj.gotidal.controller.commands{  import flash.events.Event;  public class CountryChangedCommand implements IEMVCCommand

  {

    public function execute(event:Event):void

    {

      AppModel.getInstance().setCountry(event.data);

    }

  }

}</pre>
<p>Then rather than having to keep initialising the new command and then adding the command as an event listener as follows:</p>
<pre line="1" lang="actionscript">
private function setupEventListeners( event:Event):void {

  var countryChangedCmd:CountryChangedCommand = new CountryChangedCommand();

  systemManager.addEventListener(AppEvent.COUNTRYCHANGED, countryChangedCmd.execute());

}</pre>
<p>We can create a function to do this for us, making use of the interface definition we created:</p>
<pre line="1" lang="actionscript">
private function addCommand(eventType:String, cmd:IEMVCCommand) {

  systemManager.addEventListener(eventType, cmd.execute());

}</pre>
<p>And in our event controller simplify it so that commands are added using our addCommand function</p>
<pre line="1" lang="actionscript">
private function setupEventListeners( event:Event):void {

  addCommand(AppEvent.COUNTRYCHANGED, new countryChangedCmd());

}</pre>
<p>With this solution we borrow how Cairngorm handles events and have a scalable Controller where each handler is in it's own command class and the controller is only used to register these commands as eventListeners on the systemManager class..</p>
<p>Taking this idea further, I like to create a EMVCController class which I then extend. i.e. the EMVCController has the addCommand method in it and it extends UIComponent and my Flex's application controller has to simply extend EMVCController instead of UIComponent as was done previously and I inherit the addCommand method so don't have to write it for each project.</p>
<p><a href="http://www.gotripod.com/2008/03/04/scaling-up-easymvc-as-your-flex-application-grows-part-2-services/">In part 2 I will look at how we share web / http services between commands.</a></p>

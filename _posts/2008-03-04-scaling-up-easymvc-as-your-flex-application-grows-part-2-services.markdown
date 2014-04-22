---
layout: post
status: publish
published: true
title: ! 'Scaling up EasyMVC as your Flex application grows (Part 2: Services)'
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'EasyMVC is a lightweight architecture process for Adobe Flex and AIR first
  proposed by <a href="http://www.tombray.com/">Tom Bray</a> of <a href="http://searchcoders.com/">SearchCoders</a>
  and <a href="http://www.chatopica.com">Chatopica</a>. This is the second part covering
  Service calls, of a two part article on how to take that architecture and scale
  up to a simplified cairngorm style architecture when you outgrown EasyMVC.


  <a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">Click
  here to read an introduction on EasyMVC</a><a href="http://www.gotripod.com/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/">

  Click here to read Scaling up EasyMVC part 1.</a>


  Firstly I would like to add some clarification as to the motivation for these articles.
  I have had a few emails asking what the point of these articles are as I am just
  recreating Cairngorm. I hope these articles will satisfy two goals. Firstly having
  discussed EasyMVC and evangelised about it a little I feel I should offer a way
  to scale this up when your application grows, if not you could end up with a huge
  EasyMVC controller class that has 30 or so event handlers in addition to service
  calls etc which will get unmanageable, especially in a team of developers. Secondly
  I hope these articles will give an insight into how Cairngorm works from a simplified
  perspective. Cairngorm is an excellent architecture but it is intimidating for beginners
  and intermediates alike. This Scaled up EasyMVC architecture provides a simplified
  lightweight version of Cairngorm and also provides an upgrade path for EasyMVC adopters.

  In the first article we looked at how we can borrow the command design pattern (as
  used in Cairngorm) to split out our centralised event handlers into separate classes
  or commands. Firstly this makes your code more organised and easier to locate specific
  functionality when you application grows but also provides you with the basis for
  the next step in handling remote calls to web services, be that SOAP, REST or AMF
  services.


'
wordpress_id: 330
wordpress_url: http://clockobj.co.uk/2008/03/04/scaling-up-easymvc-as-your-flex-application-grows-part-2-services/
date: !binary |-
  MjAwOC0wMy0wNCAyMjowNToyNyArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wMy0wNCAyMjowNToyNyArMDEwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- RIAs
- ActionScript
- easymvc
- AIR
comments:
- id: 128
  author: johan
  author_email: johan@orbital.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0wOSAwMDozMzozNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wOSAwMDozMzozNCArMDEwMA==
  content: ! 'I an using this with RemoteObject (not web service as in your example)
    and found that I had to have result() and fault() controller methods accept return
    types of data:Object (not event:Event) otherwise Flex Builder 3 gives incompatible
    signature error since IReponder is defined with data:Object and not event:Event


    Also in your services singleton code you have _instance = new RespondentWS() where
    I think RespondentWS() should be MyService().


    Thanks for another great article - your series has helped me get my app nicely
    structured and given me a good framework for development.


    I hope there will be more to come!'
- id: 129
  author: Clockwork Objects &raquo; Scaling up EasyMVC as your Flex application grows
    (Part 1)
  author_email: ''
  author_url: http://clockobj.co.uk/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/
  date: !binary |-
    MjAwOC0wMy0wNCAyMjowODowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNCAyMjowODowMSArMDEwMA==
  content: ! '[...] In part 2 I will look at how we share web / http services between
    commands.  Comments below.. Advertisement        &nbsp;  &nbsp;    Permalink |  dzone  |
    3 Comments &#187; [...] '
- id: 130
  author: Matt
  author_email: alias@pet-theory.com
  author_url: http://pet-theory.com/blog
  date: !binary |-
    MjAwOC0wNS0wMiAxNzozNjozMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0wMiAxNzozNjozMiArMDIwMA==
  content: Great series--keep it coming. I'd especially like you to walk it back from
    the point reached at the end of the article, starting from the return of the web
    service and ending with a change in UI.
- id: 131
  author: Ted
  author_email: ted@example.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0yMyAxNDozNDoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMyAxNDozNDoxNiArMDEwMA==
  content: ! 'Very interesting article as I am looking at Cairngorm &amp; EasyMVC
    at present.


    Is it possible you could zip up a project of this tutorial to make it easier to
    set up here and follow along ?'
- id: 132
  author: RENTAL EPC
  author_email: my@whitelabelhip.co.uk
  author_url: http://www.whitelabelhip.co.uk
  date: !binary |-
    MjAwOC0wNy0yMSAxMDoxODoxNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0yMSAxMDoxODoxNiArMDIwMA==
  content: ! 'Thanks man, just what I was looking for. Thanks so much...


    Very interesting article as I am looking at Cairngorm &amp; EasyMVC at present.'
- id: 133
  author: deboraa
  author_email: alexjjhhoj2@live.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNC0wMSAwNjoyMzowNyArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wNC0wMSAwNToyMzowNyArMDIwMA==
  content: ! 'Hey...this is a wonderful website buddy and an informative post!!! i
    am new here and i found this site very interesting and informative ,, you are
    a professional blogger i think i have a great interest in such things...thank
    you for the post buddy and keep on posting nice stuff like this :)

    ________________________________________________________________

    i am <a href="http://www.securityplusexams.com" rel="nofollow">security+ certification</a>
    expert.'
---
<p>EasyMVC is a lightweight architecture process for Adobe Flex and AIR first proposed by <a href="http://www.tombray.com/">Tom Bray</a> of <a href="http://searchcoders.com/">SearchCoders</a> and <a href="http://www.chatopica.com">Chatopica</a>. This is the second part covering Service calls, of a two part article on how to take that architecture and scale up to a simplified cairngorm style architecture when you outgrown EasyMVC.</p>
<p><a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">Click here to read an introduction on EasyMVC</a><a href="http://www.gotripod.com/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/"><br />
Click here to read Scaling up EasyMVC part 1.</a></p>
<p>Firstly I would like to add some clarification as to the motivation for these articles. I have had a few emails asking what the point of these articles are as I am just recreating Cairngorm. I hope these articles will satisfy two goals. Firstly having discussed EasyMVC and evangelised about it a little I feel I should offer a way to scale this up when your application grows, if not you could end up with a huge EasyMVC controller class that has 30 or so event handlers in addition to service calls etc which will get unmanageable, especially in a team of developers. Secondly I hope these articles will give an insight into how Cairngorm works from a simplified perspective. Cairngorm is an excellent architecture but it is intimidating for beginners and intermediates alike. This Scaled up EasyMVC architecture provides a simplified lightweight version of Cairngorm and also provides an upgrade path for EasyMVC adopters.<br />
In the first article we looked at how we can borrow the command design pattern (as used in Cairngorm) to split out our centralised event handlers into separate classes or commands. Firstly this makes your code more organised and easier to locate specific functionality when you application grows but also provides you with the basis for the next step in handling remote calls to web services, be that SOAP, REST or AMF services.</p>
<p><a id="more"></a><a id="more-330"></a>At this point we are going to borrow <a href="http://www.darronschall.com/weblog/archives/000234.cfm">a technique used by Darren Schall</a>, where he suggests using the built in IResponder interface to handle web service responses.</p>
<p>The IResponder interface defines that we should create two event handlers, one called result which takes one parameter of type Event (usually a ResultEvent) and one event handler called fault which takes one parameter of type Event (usually a FaultEvent).</p>
<p>What we want, is for commands to handle our service calls. In the first article we created an interface for our commands called ICommandEMVC. Here we ensured all commands we created has an execute(e:Event) function which would be called as the event handler for all our centralised events.<br />
What we will now do is create a new Interface called IResponderCommandEMVC which will implement both the ICommandEMVC that we created and Flex’s build in IResponder interface. This will then give us a class definition that has an execute event handler that is called when we fire off a EasyMVC event that is handled by our central event handler, and result() and fault() event handlers that handles the results of our service call. We do this as follows:</p>
<pre line="1" lang="actionscript">
package com.triggersoft.core.emvc

{

  import mx.rpc.IResponder;

  public interface IResponderCommandEMVC extends IResponder, ICommandEMVC

  {

  }

}</pre>
<p>We can now write command classes that implement IResponderCommandEMVC. We could implement the code to call our web service here but then we may duplicate effort whenever we need more than one command to call the same web service. So I like to create the equivalent of Cairngorm’s service locator or more simply a singleton that proxies my service calls.</p>
<p>So for example, if we had a SOAP web service located on our localhost i.e. http://localhost/Service?WSDL which had an authenticate command that took a username and password parameter (and this is a simple example) we could do the following</p>
<pre line="1" lang="actionscript">package com.triggersoft.project.controller.services

{

  public class MyService {

    private static var _instance:MyService;

    private var service:WebService;    public static function getInstance():void {

      if (_instance == null) {

      _instance = new RespondentWS();

      }

      return _instance;

    }

public function MyService:void {

      service = new WebService();

      service.loadWSDL(“http://locahost/Service?WSDL”);

    }

public function authenticate(responder:IResponder, username:String, password:String):void {

      var at:AsynToken = service.authenticate(username, password);

      at.addResponder(responder);

    }

  }</pre>
<p>This means that we can call the authenticate method on this service from any command using the MyService.getInstance.authenticate() method and pass in a responder, the username and password.</p>
<p>As our command implemented the IResponderCommandEMVC interface, which in turn implements the IResponder interface we can pass the command as a web service responder, so if we had AuthenticateCommand which was registered with our Controller (See part I) that listened to a custom event that stored the username and password. We could write the following command</p>
<pre line="1" lang="actionscript">package com.triggersoft.project.controller.commands

{

  public class AuthenticateCommand {    public function execute(e:Event):void {

      var ae:AuthenticationEvent = AuthenticationEvent (e)

      MyService.getInstance().Authenticate(this, ae.username, ae.password)

    }

public function result(e:Event):void {

      //handle web service result

    }

public function fault(e:Event):void {

      //handle web service error

    }

}

}</pre>
<p>As you can see we can easily scale up EasyMVC to a lightweight version of Cairngorm as your application grows.  In reading these articles, I hope you have gained an insight into the benefits of using a formal architecture such as this and also demystified the Cairngorm framework. EasyMVC does not have all the feature of Cairngorm but it is a light weight alternative that suits many projects from small to large.</p>

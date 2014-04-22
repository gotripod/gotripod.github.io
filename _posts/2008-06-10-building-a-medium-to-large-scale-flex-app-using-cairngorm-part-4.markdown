---
layout: post
status: publish
published: true
title: Building a medium to large scale Flex App using Cairngorm (Part 4)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'In this final part on building a medium to large scale flex or Air app
  using Cairngorm, I will look at how I approach the service locator and use flex
  builders built in responder mechanism to handle service call responses.

'
wordpress_id: 360
wordpress_url: http://clockobj.co.uk/?p=107
date: !binary |-
  MjAwOC0wNi0xMCAyMjowNjoxMiArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNi0xMCAyMjowNjoxMiArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- cairngorm
comments:
- id: 188
  author: Johan
  author_email: johans@xtra.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xMiAyMzowODowMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMiAyMzowODowMCArMDIwMA==
  content: ! 'Jon - I''ve been using your EasyMVC with the scaling up additions (commands
    and services). From what I can see the main differences you have shown thus far
    in the Cairngorm articles is the FrontController + Cairngorm events and the Cairngorm
    SequenceCommand feature. I did add the service locator to EasyMVC which is nice
    since you do not have to add singleton implementation to each service.


    Hopefully I do not end up re-building Cairngorm but EasyMVC is really, well...,
    easy, and works well for me. Based on your articles I can learn more about Cairngorm
    and add functionality (like the Servicelocator) as I go.


    Many thanks, another nice series Jon - look forward to more.'
- id: 189
  author: Daniel Neri
  author_email: daniel.a.neri@gmail.com
  author_url: http://flexfanatic.wordpress.com
  date: !binary |-
    MjAwOC0wNi0xNCAxODowODoxMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xNCAxODowODoxMiArMDIwMA==
  content: ! 'Fantastic article!


    Let''s hope a can get a hang of cairngorm as I''m building a HUGE enterprise level
    app. These series definitely helped a lot!


    Thanks a TON!'
- id: 190
  author: Susanta
  author_email: statsusant@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0xMSAyMjowOTo1MyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0xMSAyMjowOTo1MyArMDIwMA==
  content: ! "I have a model that is bound to a form ( as you fill in values in forms
    the values in model are set) .After submit, I would like to clear the form. How
    the clear action can be implemented in cairngorm ?\n I can not free the model
    in a seperate command and expect the view to change(that is free itself) that
    would require 2-way binding. I can have the form register a listener during startup
    but then that way I am not using the cairngorm controller. I can think of a Component
    Locator model (that would give me a reference of the form) and run a method on
    it to free it. But none of these seem to be an elegant solution.\n\nAny input
    is helpful"
- id: 191
  author: bobot
  author_email: baluyot.robert@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0xMiAwMzoyMjoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0xMiAwMzoyMjoxNiArMDEwMA==
  content: ! 'hi.


    Can you provide me simple example apps w/ login, that implements this MVC.


    Thanks in advance.

    God Bless,

    Bobot'
- id: 192
  author: kwame
  author_email: softcons99@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMy0yNyAxMzo0ODoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0yNyAxMzo0ODoxMiArMDEwMA==
  content: ! 'I''m enjoying your tutorials.

    Thank you.

    But When will you publish the next tutorials in same the field? can you email
    me to tell me when it will ready?

    Kwame.'
- id: 193
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOS0wNC0wMSAxODoyNTo1OCArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNC0wMSAxODoyNTo1OCArMDIwMA==
  content: ! '@kwame


    Unfortunately I am not a Java developer so the spring/Flamingo side is a little
    of a dark art to me, the guys I work with use Seam with Flamingo which has worked
    well. As for the Flex/Cairngorm side of things my tutorials provide a fairly concise
    tour of using these technologies together. What I do plan to do shortly (when
    time permits) is write up using the Mate Framework (see http://mate.asfusion.com
    for details) which is the architecture framework I have been using recently and
    has been a really positive experience, especially through it''s use of dependancy
    injection.'
- id: 194
  author: kwame
  author_email: softcons99@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNC0wMSAxNTowMzoxMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNC0wMSAxNTowMzoxMCArMDIwMA==
  content: ! 'Can you make a tutorial which will be a kind of step by step tutorial
    on

    Flexbulder3/cairngorm/spring/Flamingo integration tutorial?

    Please I''m waiting for your answer.

    Kwame'
---
<p>In this final part on building a medium to large scale flex or Air app using Cairngorm, I will look at how I approach the service locator and use flex builders built in responder mechanism to handle service call responses.<br />
<a id="more"></a><a id="more-360"></a></p>
<h2>Services</h2>
<p>In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">part 1</a> we created a ServiceLocator singleton using the same method as we did for our ModelLocator. We will use this in a minute when we register our Service with the ServiceLocator.</p>
<p>I like to create a proxy class for my services.</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.services
{
	import mx.rpc.AsyncToken;
	import mx.rpc.IResponder;
	import mx.rpc.remoting.RemoteObject;

	public class UserService
	{
		private var ro : RemoteObject;

		public function UserService()
		{
			ro = new RemoteObject();
			ro.destination = "userService";
		}

		public function logInUser( username : String, password : String, responder : IResponder) : void
		{
			var at : AsyncToken = ro.logInUser( username, password );
			at.addResponder( responder );
		}

	}
}</pre>
<p>In this example we want to call a destination method called logInUser() passing a username and password as parameters. Here I am using the RemoteObject class to work with a backend server such as <a href="http://www.adobe.com/products/livecycle/">LiveCycle</a>, <a href="http://opensource.adobe.com/wiki/display/blazeds/BlazeDS">BlazeDS</a>, <a href="http://www.exadel.com/web/portal/flamingo">Flamingo</a>, <a href="http://www.themidnightcoders.com/weborb/">WebOrb</a> etc, via AMF (Actionscript Message Format), but you can use this with HTTPService, WebService, etc.</p>
<p>Notice that along with the two parameters that our service call will need, I have added a responder of type IResponder. I am going to use the <a href="http://www.darronschall.com/weblog/archives/000234.cfm">method championed by Darron Schall</a> where we use Flex's built in responder and AsyncToken mechanism.</p>
<p>We need to now register this service on our ServiceLocator.</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller
{
	import uk.co.clockobj.cairngormdemo.controller.services.ProductService;
	import uk.co.clockobj.cairngormdemo.controller.services.UserService;

	public class ServiceLocator
	{
		private static var _instance:ServiceLocator;

		public static function getInstance():ServiceLocator {
			if (_instance == null) {
				_instance = new ServiceLocator();
			}
			return _instance;
		}

		public function ServiceLocator()
		{
			if ( _instance != null )
			{
				throw( new Error( "Singleton class has already been instantiated" ) );
			} else
			{
				// Instantiate services here
				userService = new UserService();
				productService = new ProductService();
			}
		}

		public var userService : UserService;
		public var productService : ProductService;

	}
}</pre>
<h2>IResponder</h2>
<p>The IResponder interface that we used in our service enforces any class that implements it to provide a result( data : Object ) and fault( info : Object ) method. Due to the Asynchronous nature of Actionscript 3, the AsyncToken ensures the responder we provide handles that particular service call. Regular Event handlers to not offer this.</p>
<p>We are going to get all the commands we create (that make service calls) to implement this IResponder interface, in addition to the ICommand interface. We can then pass the command to the service as the responder for the service call:</p>
<p>So for a command that gets the ProductDTOs we used in <a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2</a>, using for example a getProducts() method call on a productService destination.</p>
<p><em>Service:</em></p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.services
{
	import mx.rpc.AsyncToken;
	import mx.rpc.IResponder;
	import mx.rpc.remoting.RemoteObject;

	public class ProductService
	{
		private var ro : RemoteObject;





		public function ProductService()
		{
			ro = new RemoteObject();
			ro.destination = "productService";
		}

		public function getProducts( responder : IResponder ) : void
		{
			var at : AsyncToken = ro.getProducts();
			at.addResponder( responder );
		}

	}
}</pre>
<p>(We register this with our ServiceLocator as we did for the UserService)</p>
<p><em>GetAllProductsCommand:</em></p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.commands
{
	import com.adobe.cairngorm.commands.ICommand;
	import com.adobe.cairngorm.control.CairngormEvent;

	import mx.rpc.IResponder;
	import mx.rpc.events.ResultEvent;

	import uk.co.clockobj.cairngormdemo.controller.ServiceLocator;
	import uk.co.clockobj.cairngormdemo.model.ModelLocator;

	public class GetAllProductsCommand implements ICommand, IResponder
	{
		public function GetAllProductsCommand()
		{
		}

		public function execute(event:CairngormEvent):void
		{
			ServiceLocator.getInstance().productService.getProducts( this );
		}

		public function result(data:Object):void
		{
			ModelLocator.getInstance().product.dtos = ResultEvent( data ).result;
		}

		public function fault(info:Object):void
		{
			// Fault handler code
		}

	}
}</pre>
<p>Once this command is registered with our controller we can dispatch the relevant event form anywhere in our application to load all the products into our model.</p>
<p>Notice above how the command implements the IResponder interface and passes itself to the service to act as the responder for the service call. We then get to handle the service response and fault from within the command.</p>
<h2>Chaining Commands Together (Revisited)</h2>
<p>With this knowledge, we can return to our SequenceCommand example where we want to log a user in and then call the ChangeApplicationStateCommand to change the view state of Main.mxml to the logged in user state or logged in Admin state</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.commands
{
	import com.adobe.cairngorm.commands.SequenceCommand;
	import com.adobe.cairngorm.control.CairngormEvent;

	import mx.rpc.IResponder;
	import mx.rpc.events.ResultEvent;

	import uk.co.clockobj.cairngormdemo.controller.AppController;
	import uk.co.clockobj.cairngormdemo.controller.ServiceLocator;
	import uk.co.clockobj.cairngormdemo.controller.events.LoginEvent;
	import uk.co.clockobj.cairngormdemo.model.ModelLocator;
	import uk.co.clockobj.cairngormdemo.model.dto.UserDTO;
	import uk.co.clockobj.cairngormdemo.model.session.SessionModel;

	public class LogUserInCommand extends SequenceCommand implements IResponder
	{
		public function LogUserInCommand()
		{
			this.nextEvent = new CairngormEvent(AppController.CHANGE_APP_STATE);
		}

		override public function execute(event:CairngormEvent):void
		{
			var le : LoginEvent = LoginEvent( event );
			ServiceLocator.getInstance().userService.logInUser( le.username, le.password, this );
		}

		public function result(data:Object):void
		{
			ModelLocator.getInstance().session.userDTO = UserDTO( ResultEvent( data ).result );

			if ( ModelLocator.getInstance().session.loggedInUser.isAdmin )
			{
				this.nextEvent.data = SessionModel.APP_STATE_ADMIN;
			}
			else
			{
				this.nextEvent.data = SessionModel.APP_STATE_LOGGED_IN;
			}
			executeNextCommand();
		}

		public function fault(info:Object):void
		{
			// Fault handler code goes here
		}

	}
}</pre>
<p>To use Cairngorm's SequenceCommand feature, our command has to extend SequenceCommand. SequenceCommand already implements ICommand but this means we need to override the execute() method and we still need to implement IResponder as we want this class to handle the response from the userService.</p>
<p>In the commands constructor we set the SequenceCommands nextEvent property which takes the CairngormEvent you want to dispatch from this command. When you are ready you can dispatch the event using the SequenceCommand's executeNextCommand() method.</p>
<p>Our ChangeApplicationStateCommand looks for the state we want to change to in the data property of the CairngormEvent so we set the relevant one in the result handler and dispatch.</p>
<p>As I previously demonstrated for the Product model, I have implemented similar code to convert the UserDTO returned from the service to a User model item object. The User object has some business logic in it to identify whether the user is an Admin (which is not in the DTO).</p>
<p>As you can see although Cairngorm adds a fair bit of code, in the long run we have a more organised and consistently centralised configuration which makes it easier to maintain, test etc. <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">As I stated in Part 1</a> my method is not the documented way of using Cairngorm but has been adapted over use on several large projects to the solution that works best for us. I hope this series is useful to anyone starting out with Cairngorm and I do recommend you look at <a href="http://www.gotripod.com/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/">EasyMVC</a> and alternatives to Cairngorm such as <a href="http://puremvc.org/">PureMVC</a> ( I have never used this but only because Cairngorm meets my needs ).</p>
<p>I have also attached the source files I used to write this article which i hope will help you see how everything hangs together.: <a href='http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip'>Cairngorm Demo Srource Files</a></p>
<h2>Contents:</h2>
<p><a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1 - Setting up a project for Cairngorm</a><br />
<a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2 - The Model</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">Part 3 - Commands</a><br />
Part 4 - Services<br />
<a href="http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip">Cairngorm Demo Source Files</a></p>

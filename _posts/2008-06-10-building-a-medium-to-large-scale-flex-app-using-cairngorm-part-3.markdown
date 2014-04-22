---
layout: post
status: publish
published: true
title: Building a medium to large scale Flex App using Cairngorm (Part 3)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Parts
  1</a> &amp; <a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">2</a>
  we setup Cairngorm and our models. In Part 3 we will look at how we will make use
  of the controller, using commands to handle events, chaining together a series of
  commands using Cairngorm''s SequenceCommand and creating custom CairngormEvents.

'
wordpress_id: 366
wordpress_url: http://clockobj.co.uk/?p=105
date: !binary |-
  MjAwOC0wNi0xMCAxOTo0OToxNiArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNi0xMCAxOTo0OToxNiArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- cairngorm
comments:
- id: 255
  author: Daniel Neri
  author_email: daniel.a.neri@gmail.com
  author_url: http://flexfanatic.wordpress.com
  date: !binary |-
    MjAwOC0wNi0xNCAxOToyMDo1NyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xNCAxOToyMDo1NyArMDIwMA==
  content: ! "I'm getting a strange error :\nTypeError: Error #1034: Type Coercion
    failed: cannot convert com.adobe.cairngorm.control::CairngormEvent@25216c49 to
    com.quikchek.controller.events.LoginEvent.\n\tat com.quikchek.controller.commands::LogUserInCommand/execute()[C:Documents
    and SettingsOwnerMy DocumentsFlex Builder 3QuikChek Basic CairngormsrccomquikchekcontrollercommandsLogUserInCommand.as:24]\n\nAny
    clues?"
- id: 256
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wNi0xNSAwNzoyNzowNCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xNSAwNzoyNzowNCArMDIwMA==
  content: ! 'Hi Daniel, Make sure that LoginEvent extends CairngormEvent. Cairngorm
    expects to hand a CairngormEvent to it''scommands so you need to make sure your
    own custom events are inherited from CairngormEvent. i.e.


    class LoginEvent extends CairngormEvent

    {'
- id: 257
  author: Building a medium to large scale Flex App using Cairngorm (Part 1) &laquo;
    Go Tripod Ltd
  author_email: ''
  author_url: http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/
  date: !binary |-
    MjAxMC0wMi0wMyAxNjo0MToxOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wMi0wMyAxNjo0MToxOCArMDEwMA==
  content: ! '[...] We create an initialiseCommands function which is called from
    the constructor and this function will be where we will register our command classes
    as event listeners for cairngorm events. (more on that in part 3) [...] '
---
<p>In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Parts 1</a> &amp; <a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">2</a> we setup Cairngorm and our models. In Part 3 we will look at how we will make use of the controller, using commands to handle events, chaining together a series of commands using Cairngorm's SequenceCommand and creating custom CairngormEvents.<br />
<a id="more"></a><a id="more-366"></a></p>
<h2>Controller</h2>
<p>In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">part 1</a> we created a class that extends Cairngorm's FrontController. This controller allows us to register event handlers on Cairngorm's custom event dispatcher. But rather than creating each event handler directly in Cairngorm's front controller (as we would in EasyMVC) we use the command pattern to organise our event handlers into separate classes.</p>
<p>As our app grows, this separation into commands helps keep our application easily maintainable.</p>
<h2>Commands</h2>
<p>Cairngorm provides an interface named ICommand, that command classes must implement. This interface enforces an execute() function which passes in a a CairngormEvent.</p>
<p>As an example, we are now going to create a command for changing the application's state between it's default logged out state, logged in state and admin state. If you remember back to <a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2</a>, we created a Session model and stored Main.mxml's view state here using binding. We will now create a command that will change this state.</p>
<p>Firstly we start with the actual command class that will handle this event by creating a new ActionScript class that implements ICommand in the controller/commands folder. This command will fire when we dispatch the appropriate CairngormEvent. By default the CairngormEvent class has a data property that allows us to pass information to the command, in this case we want to pass the state that we want the command to change our Main.mxml viewstate to.</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.commands
{
	import com.adobe.cairngorm.commands.ICommand;
	import com.adobe.cairngorm.control.CairngormEvent;

	import uk.co.clockobj.cairngormdemo.model.ModelLocator;

	public class ChangeApplicationStateCommand implements ICommand
	{
		public function ChangeApplicationStateCommand()
		{
		}

		public function execute(event:CairngormEvent):void
		{
			ModelLocator.getInstance().session.appState = String( event.data );
		}

	}
}</pre>
<p>Once we have written our command, we need to register the class with our controller. The FrontController that we extended provides an addCommand method that registers our command as an event listener for a specific named event.</p>
<p>Like native flex events, Cairngorm uses a name property on the event (of type string) to track which command will handle which event. By convention we store our event names as static string constants in the Controller.</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller
{
	import com.adobe.cairngorm.control.FrontController;

	import uk.co.clockobj.cairngormdemo.controller.commands.ChangeApplicationStateCommand;

	public class AppController extends FrontController
	{
		public function AppController()
		{
			super();
			initialiseCommands();
		}

		private function initialiseCommands() : void
		{
			addCommand(CHANGE_APP_STATE, ChangeApplicationStateCommand)
		}

		public static const CHANGE_APP_STATE : String = "changeAppState";
	}
}</pre>
<p>With our command registered we can now call it globally within our application using the following code. Note: If you remember back to <a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">part 2</a> we stored the three view states for Main.mxml as static constants on our Session model.</p>
<pre lang="actionscript" line="1">var ce : CairngormEvent = new CairngormEvent()
ce.data = SessionModel.APP_STATE_LOGGED_IN;
CairngormEventDispatcher.getInstance().dispatchEvent( ce );</pre>
<p>If we were not passing any data, we could obviously do this in one line. Cairngorm's data property is useful for passing all kinds of data, however in some cases you may need to pass more that one bit of data. For example a username and password, to a login command.</p>
<p>There are many ways we could do this, one of the easiest is to create a dynamic object instance to send the data over in. i.e.</p>
<pre lang="actionscript" line="1">var ce : CairngormEvent = new CairngormEvent(AppController.LOGIN_COMMAND)
ce.data = { username : "jon" , password: "baker" };
CairngormEventDispatcher.getInstance().dispatchEvent( ce );</pre>
<p>Then in our command we can extract these values:</p>
<pre lang="actionscript" line="14">public function execute( event : CairngormEvent ):void
{
	var username : String = event.data.username;
	var password : String = event.data.password;</pre>
<h2>Custom events</h2>
<p>The above method is fine for ad hoc requirements but if you need to formalise this, we need to create a custom CairngormEvent.</p>
<p>We do this by extending the CairngormEvent and including (in this case) a username and password property to our extended class.</p>
<pre lang="actionscript" line="1">package uk.co.clockobj.cairngormdemo.controller.events
{
	import com.adobe.cairngorm.control.CairngormEvent;

	public class LoginEvent extends CairngormEvent
	{

		public var username : String;
		public var password : String;

		public function LoginEvent(type:String, username : String = "", password : String = "", bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
			this.username = username;
			this.password = password;
		}

	}
}</pre>
<p><em>Note:</em> I have added code to allow the username and password to the constructor, this is useful for dispatching the event from one line of code.</p>
<h2>Chaining Commands Together</h2>
<p>There are times when developing an application that we will want to run a command from within another command. For this we need to use Cairngorm's built in SequenceCommand class.</p>
<p>So for example on logging into our application, we will want to change the application state to either the logged in state or the admin state, based on the user's role. We could do this directly from our login command but we have an event for this so we want to reuse that command.</p>
<p>For any command that wants to make a call to an additional command, the calling class must extend SequenceCommand;</p>
<p><em>Note:</em> With the example above we are making use of a service call to log a user in. I will first cover Services and the Service Locator classes in the next part, so to avoid confusion, I will cover these in <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 4</a> and finish up by returning to the example sequence command discussed above.</p>
<p>In Part 4, I will discuss how we use our ServiceLocator class we created in Part 1 to locate our services and how we will call and respond to these service calls from our commands.</p>
<h2>Contents:</h2>
<p><a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1 - Setting up a project for Cairngorm</a><br />
<a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2 - The Model</a><br />
Part 3 - Commands<br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-4/">Part 4 - Services</a><br />
<a href="http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip">Cairngorm Demo Source Files</a></p>

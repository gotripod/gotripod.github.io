---
layout: post
status: publish
published: true
title: Building a medium to large scale Flex App using Cairngorm (Part 1)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'This is the first part of a four part series on my own approach to using
  Cairngorm to build an enterprise Rich Internet App.


  In the first part, I cover setting up your project and creating the foundation classes
  that will hand our Rich Internet Application together.

'
wordpress_id: 358
wordpress_url: http://clockobj.co.uk/?p=95
date: !binary |-
  MjAwOC0wNi0wNiAxOToyMjoyMCArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNi0wNiAxOToyMjoyMCArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- cairngorm
comments:
- id: 176
  author: Eric
  author_email: elewis00@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0wNyAwMjoyNTo1OCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wNyAwMjoyNTo1OCArMDIwMA==
  content: Thanks this is a great intro to Cairngorm I like it a lot and have passed
    it along to the rest of the team working on our first Flex application.
- id: 177
  author: Hyder Alamgir
  author_email: hyderalamgir@gmail.com
  author_url: http://alamgirdesigns.blogspot.com
  date: !binary |-
    MjAwOC0xMC0xMiAxMDozMDo0NiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0xMiAxMDozMDo0NiArMDIwMA==
  content: ! 'Great Work!


    Just what I was looking for to get meself started with Cairngorm!'
- id: 178
  author: Rakesh
  author_email: rakeshs.trivandrum@gmail.com
  author_url: http://www.rakeshsivan.in
  date: !binary |-
    MjAxMC0wNy0wMSAwNTozNTowMCArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wNy0wMSAwNTozNTowMCArMDIwMA==
  content: Exactly what I was looking for. The tutorial is structured in a good readable/workable
    manner, and a good starter kit for anyone looking for Cairngorm at Enterprise
    level implementations. Thanks for your time and effort. Kudos !!
---
<p>This is the first part of a four part series on my own approach to using Cairngorm to build an enterprise Rich Internet App.</p>
<p>In the first part, I cover setting up your project and creating the foundation classes that will hand our Rich Internet Application together.<br />
<a id="more"></a><a id="more-358"></a></p>
<h2>Getting Started</h2>
<p>Before we start although I am using Flex 3 and building a Flex app, this method works for Flex 2 and also Adobe Air applications.</p>
<p>Cairngorm is a Model View Controller framework and the first thing I like to do after creating a new Flex project is to create the appropriate folders in my project namespace. so for example, under uk/co/clockobj/projectname, I would create three folders named model, view and controller. Note: you don't have to namespace or use this folder structure I use, but this is what I like to do by convention.</p>
<p>The controller folder will store my controller (Cairngorm's Front Controller), my commands, my service locator, services and custom events.</p>
<p>The model folder will store my model locator, models and my Value Objects / Data Transfer Objects, in the screenshot above I have created a product subfolder to hold product related model classes.</p>
<p>Finally the view folder will store all our mxml.</p>
<p><img src="http://www.gotripod.com/wp-content/uploads/2008/06/cairngorm_layout.png" alt="" title="cairngorm_layout" width="402" height="492" class="aligncenter size-full wp-image-106" /></p>
<p>Note: I have an additional folder shown above called presentation. This is entirely optional but if you use a Presentation methodology, you can mimicking the folder structure of the view folder and store your Presentation modifier classes here.</p>
<p>Note: For now the presentation layer is beyond the scope of this article but I hope to post an article on this soon.</p>
<p>Next, you will want to <a href="http://labs.adobe.com/wiki/index.php/Cairngorm">download the Cairngorm.swc file from here</a>. (If you are new to Cairngorm <a href="http://www.adobe.com/devnet/flex/articles/cairngorm_pt1.html">do read Steven Websters articles</a>, they are a little outdated but explain the rationale and thinking behind cairngorm). Once downloaded, put the cairngorm.swc file in your libs folder.</p>
<p>With the Cairngorm.swc in our libs folder we have access to the Cairngorm classes. I also really recommend looking at the source code for Cairngorm (separate download from the link above).</p>
<h2>Setting up Cairngorm</h2>
<p>First thing we can setup is our controller. This is done by extending Cairngorm's front controller class. Cairngorm's front controller is very similar to the controller class created in my <a href="http://www.gotripod.com/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/">scaling up EasyMVC articles</a> except Cairngorm uses it's own EventDispatcher. Rather than listening to native events, it listens to CairngormEvents dispatched by it's custom event handler.</p>
<p>We create an initialiseCommands function which is called from the constructor and this function will be where we will register our command classes as event listeners for cairngorm events. (<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">more on that in part 3</a>)</p>
<p>Your controller class should look a little like this, I have called mine AppController:</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.controller
{
	import com.adobe.cairngorm.control.FrontController;

	public class AppController extends FrontController
	{
		public function AppController()
		{
			super();
			initialiseCommands();
		}

		private function initialiseCommands() : void
		{
			// We will register our commands as event handlers here.
		}
	}
}</pre>
<p>Next, I will create a Model Locator and Service Locator using the known locator pattern which yes, uses Singletons but as Steven Webster so rightly puts it:<br />
<a href="http://www.adobe.com/devnet/flex/articles/cairngorm_pt2_06.html">"The singleton nature of the Model Locator pattern ensures that you don't suffer from duplicate state on the client, gives a large development team a consistent place to expose and share application-level state as instances of value objects, while ensuring that developers leverage the powerful data-binding capabilities of Flex to ensure that the view is notified when the model has changed."</a></p>
<h2>Model Locator</h2>
<p>I create my model locator named ModelLocator, however you will get a class name clash as there is a deprecated class in Cairngorm called ModelLocator (This just means when ever you add it to a class in Flex Builder you will be asked which one to use, which may annoy you).</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.model
{
	import com.adobe.cairngorm.model.IModelLocator;

	[Bindable]
	public class ModelLocator implements IModelLocator
	{
		private static var _instance:ModelLocator;

		public static function getInstance():ModelLocator {
			if (_instance == null) {
				_instance = new ModelLocator();
			}
			return _instance;
		}

		public function ModelLocator()
		{
			if ( _instance != null )
			{
				throw( new Error( "Singleton class has already been instantiated" ) );
			}	else
			{
				// Instantiate services here
			}
		}

	}
}</pre>
<p>Note: Although I implement Cairngorm's IModelLocator interface above, it does not actually enforce any methods or properties.</p>
<p>In Steven Webster's guide to Cairngorm, he stores the DTOs/VO as static properties of the model locator. I take a slightly different approach and I like to have models which are accessible through, and instantiated when the ModelLocator is first created, I will discuss this later (<a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">in part 2</a>)</p>
<h2>Service Locator</h2>
<p>I am also going to deviate slightly from the Cairngorm documented approach for Service Locators and implement a slightly less enforced version. Cairngorm uses an IServiceLocator interface which enforces the use of simple factory methods to access your services. You may need this so have a <a href="http://www.cairngormdocs.org/">look at the documentation</a>, but I going to keep my Service Locator consistent with my Model Locator.</p>
<p>So in the controller folder create a new ActionScript Class called ServiceLocator.as as follows:</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.controller
{
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
			if ( instance != null )
			{
				throw( new Error( "Singleton class has already been instantiated" ) );
			} else
			{
				// Instantiate services here
			}
		}

	}
}</pre>
<p>For now we are not going to create any web services, <a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">we will do this in part 3</a>.</p>
<p><a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">In the next part of this series</a> I will go into detail about how I implement models, discuss the advantages and disadvantages of accessing your DTOs directly and propose a different solution and show how we can bind our currentState view state property directly to the model.</p>
<h2>Contents:</h2>
<p>Part 1 - Setting up a project for Cairngorm<br />
<a href="http://www.gotripod.com/2008/06/08/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-2/">Part 2 - The Model</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">Part 3 - Commands</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-4/">Part 4 - Services</a><br />
<a href="http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip">Cairngorm Demo Source Files</a></p>

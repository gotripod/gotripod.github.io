---
layout: post
status: publish
published: true
title: Building a medium to large scale Flex App using Cairngorm (Part 2)
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part
  1</a> we created a new Flex project and setup the classes we that will be used to
  support our application architecture. In this part we will look at how we build
  our application around these classes.

'
wordpress_id: 359
wordpress_url: http://clockobj.co.uk/?p=104
date: !binary |-
  MjAwOC0wNi0wOCAxODoxOToxNiArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wNi0wOCAxODoxOToxNiArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- AIR
- cairngorm
comments:
- id: 179
  author: Rodrigo Reyes
  author_email: rreyes@corbitecso.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0wOCAxOTo0ODoxMyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wOCAxOTo0ODoxMyArMDIwMA==
  content: ! 'Hi. Excelente article. Right now I just coded my first small Flex project
    (no Cairngorm so far) from scratch and I had some trouble binding an ArrayCollection
    item returned from a Remote Object operation to a PopUp Window Form. Any ideas
    on how to accomplish that? I know your article is about something else, but I
    have tried to look for help at the forums with no luck so far and seems like you
    already have some good experience in Flex.

    Thanx in advance...'
- id: 180
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wNi0wOCAyMToyNDoyNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wOCAyMToyNDoyNiArMDIwMA==
  content: ! 'Hi Rodrigo,


    How are you binding to the item in the array collection? Flex will not update
    the binding if you bind to an arraycollection element using the following:


    <code>&lt;mx:Label text="{array[1]}" /&gt;</code>


    you need to use the getItemAt method, i.e.


    <code>&lt;mx:Label text="{array.getItemAt(1)}"/&gt;</code>


    Also make sure you remember to make the arraycollection bindable.


    i.e.


    [Bindable]

    var array : ArrayCollection;'
- id: 181
  author: Fernanda Gomez
  author_email: riahobby@gmail.com
  author_url: http://www.adsmap.net
  date: !binary |-
    MjAwOC0wNi0xMCAwMjoyNTo0OSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMCAwMjoyNTo0OSArMDIwMA==
  content: Thanks for the article, I have a question, what size of app do you recommend
    using Cairngorm?
- id: 182
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wNi0xMCAwNzo0NTowNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMCAwNzo0NTowNiArMDIwMA==
  content: ! 'Hi Fernada,


    This is hard to quantify and very much depends on your app. If you app is very
    simple i.e. a flex powered widget that displays content, or even some slightly
    more complex apps such as a project browser that simply displays information and
    makes very basic calls to get data to display would probably more candidates for
    Easy MVC. Cairngorm requires a fair bit of up front investment creating all these
    classes etc which pays off once you have at least 5 or more commands. But this
    is my opinion and really you need to think about how big the app could grow in
    the future. I hope that helps.'
- id: 183
  author: Tech Per
  author_email: per.olesen@gmail.com
  author_url: http://www.techper.net/
  date: !binary |-
    MjAwOC0wNi0xMCAxODo0MDoyNCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMCAxODo0MDoyNCArMDIwMA==
  content: ! 'I know Cairngorm examples databind directly from the view and into the
    model, as you show. But do you like that way of doing it? Tying the view and the
    model tightly?


    I ask because I recently did a post on the subject, <a href="http://www.techper.net/2008/06/09/patterns-of-gui-architecture-in-cairngorm-and-puremvc/"
    rel="nofollow">comparing Cairngorm and PureMVC to see how they apply patterns
    in the View-part of MVC</a>.


    What is your opinion on the subject?'
- id: 184
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wNi0xMCAxOTozMzoxMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMCAxOTozMzoxMSArMDIwMA==
  content: You are quite right, ideally with an MVC solution, we wouldn't want domain
    knowledge creeping into our view. This can be overcome by using a Presentation
    layer between the view and the model. Basically each view has a modifier and the
    view databinds to properties in a modifier class which could just be references
    to the model. We specify the modify in the MXML tag for the view component (I
    have also heard of situations where all modifiers are defined in the top most
    container and passed down how you implement is up to you really and what works
    for your project). We can design our modifierers in such a way (using interfaces
    or inheritence) so that we can swap out the modifier for another one if needed,
    reusing the view. The other advantage of using a presentation layer like this
    is that view related code can also go in the modifier making it easier to unit
    test. There are many ways to do a presentation layer but I hope that gives you
    an idea. It sounds like this solution would also work with PureMVC.
- id: 185
  author: Johan
  author_email: johans@xtra.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xMiAyMToxMDoxOCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMiAyMToxMDoxOCArMDIwMA==
  content: ! 'You set the view states like this:




    I think it should be referring to the constants




    However this means you would have to import the SessionModel class in the  view
    - does it not make more sense just to set the view state constants in the ModelLocator?'
- id: 186
  author: Johan
  author_email: johans@xtra.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xMiAyMToxMjoxMyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMiAyMToxMjoxMyArMDIwMA==
  content: ! 'Code did not post - trying again:


    &lt;mx:State name="appStateLoggedIn"&gt;


    &lt;mx:State name="{SessionModel.APP_STATE_LOGGED_IN}"&gt;'
- id: 187
  author: ! '[Fx] Creating list of links using &lt;mx:Repeater&gt; &laquo; RKDspot'
  author_email: ''
  author_url: http://rkdspot.com/blog/?p=37
  date: !binary |-
    MjAwOS0wNi0yOSAwNToxMTowNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0yOSAwNToxMTowNyArMDIwMA==
  content: ! '[...] this object was a VO (&#8221;value object&#8221;, or &#8220;Data
    Transfer Object&#8221;&#8230; this article has a good explanation), but for this
    demo its just a standard object with properties [...] '
---
<p>In <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1</a> we created a new Flex project and setup the classes we that will be used to support our application architecture. In this part we will look at how we build our application around these classes.<br />
<a id="more"></a><a id="more-359"></a><br />
Having set up our project in Step 1 we are ready to start building our app. Like many flex developers, I don't generally start building the view in the default application mxml file (CairngormDemo.mxml in the example I have been using). Instead I create a new MXML Component called Main.mxml file in the View folder (often based on a VBox or Canvas, 100% wide x 100% high). From here, all my other views hang off this. The main reason for this is that the application file needs to sit in the source root, while the rest of our application sits in our namespace folders. This avoids having code here.</p>
<p>There are various ways to implement the different application states. One approach which is popular, is to have a view state (within Main.mxml) for each top level state of the application, so for example I may have a default logged out state, a logged in state and possibly and admin state for example.</p>
<p>We need to ensure that we have nested our Main.mxml view into the application. While we are editing our application file, I place the Caringorm controller (App Controller we created in Part 1 here too). For purpose of example, my CairngormDemo.mxml file looks like this:</p>
<p>I may also add an mx:style tag referencing an external style sheet here but other than that nothing else goes here.</p>
<h2>A model for session and state</h2>
<p>I like to create a session model to hold session state data such as view states and depending on our apps perhaps the currently logged in user etc.</p>
<p>I create this model, as I would any other model (so it will be a good example). I firstly create a folder for this session model under the model directory (in this case called session) and create my new simple ActionScript class called SessionModel in that folder that will hold my model data.</p>
<p>As we are going to bind to data in this model directly from our mxml files, so we need to use the [Bindable] Meta tag.</p>
<p>For now we will add a property to hold the current view state for Main.mxml and store the name of each state as static properties on the model. As our app grows we will add other view states that need we want to make globally accessible here.</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.model.session
{
	[Bindable]
	public class SessionModel
	{
		public function SessionModel()
		{
		}

		public static const APP_STATE_LOGGED_OUT : String = "";
		public static const APP_STATE_LOGGED_IN : String = "appStateLoggedIn";
		public static const APP_STATE_ADMIN : String = "appStateAdmin";

		public var appState : String = APP_STATE_LOGGED_OUT;

	}
}</pre>
<p>We now want to make this locatable via our Model Locator. We can make the following modifications to the ModelLocater we created in <a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1</a> as as follows:</p>
<pre lang="actionscript">		public function ModelLocator()
		{
			if ( instance != null )
			{
				throw( new Error( "Singleton class has already been instantiated" ) );
			} else
			{
				// Instantiate the model when the Locator is Instantiated
				session = new SessionModel();
			}
		}

		public var session : SessionModel;</pre>
<p>Once we have done this we can add our bindings to Main.mxml's currentState property using Flex's binding mechanism, as in the following example:</p>
<pre lang="xml"><?xml version="1.0" encoding="utf-8"?>
<mx:VBox xmlns:mx="http://www.adobe.com/2006/mxml" width="100%" height="100%"
	currentState="{ ModelLocator.getInstance().session.appState }">
	<mx:states>
		<mx:State name="appStateLoggedIn">
			<!-- Changes to mxml when logged in -->
		</mx:State>
		<mx:State name="appStateAdmin">
			<!-- Changes to mxml when admin logged in -->
		</mx:State>
	</mx:states>
	<mx:Script>
		<![CDATA[
			import uk.co.clockobj.cairngormdemo.model.ModelLocator;
		]]>
	</mx:Script>

	<!-- Default view -->

</mx:VBox></pre>
<p>Once setup, we can now change the application's state by doing something like this:</p>
<pre lang="actionscript">ModelLocator.getInstance().session.appState = SessionModel.APP_STATE_LOGGED_IN;</pre>
<p>However, RESIST the temptation to do this all over the place. We want to maintain a convention and as this is an MVC framework, the controller should manage these state changes. Instead to change application state we will dispatch a CairngormEvent. (<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">We will look at dispatching and handling Cairngorm events in Part 3</a>)</p>
<h2>More on Models and Data Transfer Objects</h2>
<p>The <a href="http://www.adobe.com/devnet/flex/articles/cairngorm_pt1.html">Cairngorm guide by Steven Webster</a> suggests storing Value Objects, or Data Transfer Objects, directly in the ModelLocator and binding to these directly. There are two schools of though here and your approach will depend on your project.</p>
<p>One is to do this and store the DTOs directly in the model, the other is to have separate model classes. The advantage of the latter is obviously less code, however by creating separate model classes to the DTOs may seem like duplication of work, you have the added advantage of being able to add business logic into your models, for example validation, conversions, etc. Secondly if the DTOs signatures change, you don't have to re-factor your entire app changing all your bindings. You need to only to this in the translation methods between your DTOs and model. You also overcome an issue I encountered recently when returning remote objects received from a backend Java AMF server where you have to ensure all the data in cast to the correct DTOs (<a href="http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&amp;productId=2&amp;postId=8323">See this article</a>) as the translation process overcomes this.</p>
<p>An example, if we had to work with product data, I would have a product model which held product items. I would build a method into my model to translate DTOs into the model and back.</p>
<p>Note: if you are using soap / xml you could pass in the untyped object or xml to build the class from.</p>
<p>With the following DTO:</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.model.dto
{
	[Bindable]
	[RemoteClass(alias="namespace.to.some.server.dto")]
	public class ProductDTO
	{

		public var id				: int;
		public var price 			: Number;
		public var description		: String;

		public function ProductDTO()
		{
		}

	}
}</pre>
<p>Our product items (stored in our product model) would take an optional ProductDTO class passed to the constructor to build itself from. As an example, I have also added simple business logic to ensure the price is never negative. In a future article i want to show how validation logic can be put here (Which to me seems a more appropriate place than the view):</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.model.product
{
	import uk.co.clockobj.cairngormdemo.model.dto.ProductDTO;

	[Bindable]
	public class Product
	{
		public var id			: int;

		private var _price 		: Number;

		public var description	: String;

		public function get price() : Number
		{
			return _price;
		}

		public function set price( value : Number ) : void
		{
			if ( value &lt; 0 )
				value = 0;
			_price = value;
		}

		public function Product( productDTO : ProductDTO = null )
		{
			if ( productDTO != null )
			{
				this.price = productDTO.price;
				this.description = productDTO.description;
			}
		}

	}
}</pre>
<p>Finally we create our product model, as we did for our session model, but with a dto translation function (here implemented via a property setter / getter):</p>
<pre lang="actionscript">package uk.co.clockobj.cairngormdemo.model.product
{
	import mx.collections.ArrayCollection;

	import uk.co.clockobj.cairngormdemo.model.dto.ProductDTO;

	[Bindable]
	public class ProductModel
	{
		public var products : ArrayCollection;

		public function ProductModel()
		{
			products = new ArrayCollection()
		}

		public function set dtos( value : ArrayCollection ) : void
		{
			for each ( var pdto : ProductDTO in value )
			{
				products.addItem( new Product( pdto ) );
			}
		}

		public function get dtos() : ArrayCollection
		{
			var dtos : ArrayCollection;
			for each ( var p : Product in products )
			{
				var pdto : ProductDTO = new ProductDTO()
				pdto.id = p.id;
				pdto.description = p.description;
				pdto.price = p.price;
				dtos.addItem( pdto );
			}
			return dtos;
		}
	}
}</pre>
<p>We would also need to put this product model into our model locator, exactly as we did for the session model.</p>
<h2>Binding</h2>
<p>We can now bind to our product data from throughout our application. We would do this as we bound the currentState property of Main.mxml. You can obviously use this approach when binding to editable controls (such as form fields) but, depending on the project, one thing I do is setup a two way binding (I have a custom component that uses the BindingUtils.bindProperty() method to bind the model to the form and the form back to the model). Again I hope to add an article about this in the future.</p>
<p>In <a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">Part 3</a> I will look at how we will make use of the controller, use commands to handle events, chain together a series of commands using Cairngorm's SequenceCommand and also create custom events that extend CairngormEvents.</p>
<h2>Contents:</h2>
<p><a href="http://www.gotripod.com/2008/06/06/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-1/">Part 1 - Setting up a project for Cairngorm</a><br />
Part 2 - The Model<br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-3/">Part 3 - Commands</a><br />
<a href="http://www.gotripod.com/2008/06/10/building-a-medium-to-large-scale-flex-app-using-cairngorm-part-4/">Part 4 - Services</a><br />
<a href="http://www.gotripod.com/wp-content/uploads/2008/06/cairngormdemo.zip">Cairngorm Demo Source Files</a></p>

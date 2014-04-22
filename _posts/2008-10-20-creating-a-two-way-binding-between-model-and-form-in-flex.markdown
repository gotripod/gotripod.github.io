---
layout: post
status: publish
published: true
title: Creating a two-way binding between Model and Form in Flex
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'A quick sorry to all my Flex readership for the lack of Flex related posts
  these last few months. I though I would drop a quick tip / class I often use to
  create a two way binding between a form to a corresponding class model.

'
wordpress_id: 362
wordpress_url: http://clockobj.co.uk/?p=172
date: !binary |-
  MjAwOC0xMC0yMCAyMzo1NjoxOCArMDIwMA==
date_gmt: !binary |-
  MjAwOC0xMC0yMCAyMzo1NjoxOCArMDIwMA==
categories:
- Flex and Air
tags:
- Flex and Air
- ActionScript
- AIR
comments:
- id: 236
  author: Russ
  author_email: rsprague@infusion-studios.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMC0yMSAwMjowOTo0OSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0yMSAwMjowOTo0OSArMDIwMA==
  content: nice, I was just looking for something like this.
- id: 237
  author: Carro Brasilia
  author_email: webmaster@queroveiculos.com.br
  author_url: http://www.queroveiculos.com.br/
  date: !binary |-
    MjAwOC0xMS0wOSAyMDo1Nzo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wOSAyMDo1Nzo0OCArMDEwMA==
  content: Nice, I need some think like this. Any change to dynamic link a model with
    a form in flx?
- id: 238
  author: flex@slinkset
  author_email: spamprotection+flexslinkset@gmail.com
  author_url: http://flex.slinkset.com/
  date: !binary |-
    MjAwOC0xMC0yMSAwNzo1Mzo1OSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0yMSAwNzo1Mzo1OSArMDIwMA==
  content: Thanks for that helpful class! Added to my list of Flex links :-)
- id: 239
  author: George
  author_email: georgejcook@gmail.com
  author_url: http://www.lifeonrails.org
  date: !binary |-
    MjAwOC0xMC0yNiAyMjozMzo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0yNiAyMjozMzo1NCArMDEwMA==
  content: ! 'Hey Jon,


    nice stuff - you''ve just reminded me that I''ve got some spike''s laying around
    that expand on these ideas too - I''ll blog them up later this week.'
- id: 240
  author: Jamie Jackson
  author_email: myspamb8@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMS0xNCAxODozMzoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xNCAxODozMzoyNyArMDEwMA==
  content: Never mind, got it. You have to add the "property" attribute, e.g.,
- id: 241
  author: Two way binding with Flex &laquo; Yakafokon&#8217;s Blog
  author_email: ''
  author_url: http://yakafokon.wordpress.com/2009/01/28/two-way-binding-with-flex/
  date: !binary |-
    MjAwOS0wMS0yOCAxMDoxMToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0yOCAxMDoxMToxMiArMDEwMA==
  content: ! '[...] Another solution for creating a two way binding using a &#8220;in-house
    utility api&#8221; found here [...] '
- id: 242
  author: Jamie Jackson
  author_email: myspamb8@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMS0xNCAxNzozNjowNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xNCAxNzozNjowNSArMDEwMA==
  content: ! 'This doesn''t seem to work with mx:DateField out of the box. http://pastebin.com/f58b27b7d

    http://pastebin.com/f53acddbf'
- id: 243
  author: Sai Saphire
  author_email: saisaphire@gmail.com
  author_url: http://irsandimyati.wordpress.com
  date: !binary |-
    MjAwOC0xMi0wNSAwODowNToyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wNSAwODowNToyMyArMDEwMA==
  content: Very nice class.. thanks..
- id: 244
  author: yakafokon
  author_email: jeanbaptiste.claramonte@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMS0xOSAxNzowMjo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xOSAxNzowMjo1MSArMDEwMA==
  content: ! 'Very usefull ! thanx for sharing !

    It seems that two way binding is a common issue, I''ve found this on the net :

    http://bugs.adobe.com/jira/browse/SDK-11193

    and the adobe solution (available in flex 4 ???)

    http://opensource.adobe.com/wiki/display/flexsdk/Two-way+Data+Binding


    To come back to your solution, in my opinion the main drawback is that we are
    loosing the error warning during compilation time :

    For example if I introduce a wrong field name I''ll not be warned :



    But with this, even if it takes 2 lines, I''ll be warned during compile time




    Another issue with binding is the type conversion, for example between an int
    type of your object model and the String type of the TextInput : how do you handle
    this issue, do you have any tips ?


    Thanx'
- id: 245
  author: Jamie Jackson
  author_email: myspamb8@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMS0xNCAxODozNDozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xNCAxODozNDozNSArMDEwMA==
  content: ! "(Trying that again, with escaped HTML.)\n\n&lt;form:ModelBinding\n model=\"{conference}\"\n
    field=\"materialsDueDate\"\n target=\"{conferenceForm_materialsDueDate}\"\n property=\"selectedDate\"\n/&gt;"
- id: 246
  author: eldalai
  author_email: eldalai@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0xOCAyMzo1OTozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xOCAyMzo1OTozMyArMDEwMA==
  content: funciona!!!!!! Muchisimas gracias!!!!!!!!!!!
- id: 247
  author: eldalai
  author_email: eldalai@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0xOSAxOToxMToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xOSAxOToxMToxMiArMDEwMA==
  content: What for Binding a model.field to a Combobox ?
- id: 248
  author: eldalai
  author_email: eldalai@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0yMCAxNjoyNDo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yMCAxNjoyNDo1NyArMDEwMA==
  content: we solved the problem with combos!
- id: 249
  author: TJ Downes
  author_email: koldfuzun@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNS0xNyAxNjo1MjowNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xNyAxNjo1MjowNyArMDIwMA==
  content: ! 'Hey Jon, thanks for this excellent shortcut for two way binding. I''ve
    actually gone and replaced a significant amount of code with it, which has made
    my projects more readable


    I did have questions on the dates and combobx binding. Others seem to have it
    working, but mine are flailing. When bound to dateFields the binding seems to
    be one-way still, when bound to the selectedDate property.


    Which comboboxes It doesnt seem to work at all unless I am using and array of
    strings as the dataProvider. If I have an ArrayCollection or Array of objects
    nothing seems to allow it to bind. Any suggestions?


    Also, this component doesn''t seem to support binding of properties of nested
    objects, for example user.pet.petName to petName.text.


    Lastly, I noticed that you have a grassroots project going on, stubmatic. I am
    working on a project that I believe would be complimentary to yours, we should
    talk :D


    TJ'
---
<p>A quick sorry to all my Flex readership for the lack of Flex related posts these last few months. I though I would drop a quick tip / class I often use to create a two way binding between a form to a corresponding class model.<br />
<a id="more"></a><a id="more-362"></a><br />
Flex provides a one way binding through its &lt;mx:Binding&gt; tags, if you are unfamiliar with this tag check out the <a href="http://www.adobe.com/devnet/flex/quickstart/using_data_binding/#section3">section on them in Adobe's Flex quick start guide</a>. However if you want changes made to the model reflected in the form as well as changes made to the form reflected back in the model you need to set up two way bindings. To simplify this I have created a helper class (listed below) which then allows me to establish a two way binding.</p>
<pre lang="actionscript3">package com.vibrant.components.Forms
{
	import flash.display.DisplayObject;

	import mx.binding.utils.BindingUtils;
	import mx.binding.utils.ChangeWatcher;

	public class ModelBinding
	{

		private var _modelWatcher		: ChangeWatcher;
		private var _componentWatcher		: ChangeWatcher;
		private var bindingsAreEstablished	: Boolean = false;

		public function ModelBinding()
		{
		}

		/**
		 * Property field
		 * @default null
		 */

		private var _model : Object;

		public function set model( value : Object ):void
		{
			_model = value;
			updateBinding();
		}

		public function get model() : Object
		{
			return _model;
		}

		/**
		 * Property field, field within model to bind
		 * @default ""
		 */

		private var _field:String;

		public function set field( value : String ):void
		{
			_field = value;
			updateBinding();
		}

		public function get field() : String
		{
			return _field;
		}

		/**
		 * Property: target, component to tartget binding from model to.
		 */

		private var _target : Object;

		public function set target( value : Object ):void
		{
			_target = value;
			updateBinding();
		}

		public function get target() : Object
		{
			return _target;
		}

		/**
		 * Property: property, to bind to on target component
		 */

		private var _property : String = "text";

		public function set property( value : String ):void
		{
			_property = value;
			updateBinding();
		}

		public function get property() : String
		{
			return _property;
		}

		/**
		 * @private
		 * Updates bindings between component and model
		 *
		 */
		private function updateBinding() : void
		{
			if ( bindingsAreEstablished ) clearBindings();

			if ( model != null &&  model.hasOwnProperty( field )
				&& target != null && target.hasOwnProperty( property ) )
			{
				_modelWatcher = BindingUtils.bindProperty( target, property, model, field );
				_componentWatcher = BindingUtils.bindProperty( model, field, target, property );
				bindingsAreEstablished = true;
			}
		}

		/**
		 * Clears bindings
		 *
		 */
		private function clearBindings() : void {

			if ( _modelWatcher != null )
			{
				_modelWatcher.unwatch();
				_modelWatcher = null;
			}

			if ( _componentWatcher != null )
			{
				_componentWatcher.unwatch();
				_componentWatcher = null;
			}
			bindingsAreEstablished = false;
		}

	}
}</pre>
<p>This class basically takes a model class, that has the data you would like to setup the bindings with in. The field name, the name of the property within the model class to bind to. A target, the form component to establish the view side binding with and finally you can specify an optional property that the binding should be made to on the form element. If unspecified, the 'property' defaults to "text" as this is the most often used property to bind to. So for example given the following User model:</p>
<pre lang="actionscript3" line="1">public class UserModel
{
    public var firstName : String;
    public var lastName : String;

	public function UserModel()
	{
	}
}</pre>
<p>We could set up a binding to a TextInput as follows:</p>
<pre lang="html" line="1">...
<mx:Script>
	<![CDATA[
		public var userModel : UserModel;
	]]>
</mx:Script>
<mx:Form>
	<mx:FormItem label="First Name">
		<mx:TextInput id="txtFirstName"/>
	</mx:FormItem>
</mx:Form>
<modelBinding model="{userModel}" field="firstName" target="{txtFirstName}"/>
...</pre>
<p>As you can see with this class you can quickly setup two-way bindings with your models.</p>
<p><a href='http://www.gotripod.com/wp-content/uploads/2008/10/modelbinding.as'>Download ModelBinding.as</a><br />
For more information on Binding, <a href="http://www.adobe.com/devnet/flex/quickstart/using_data_binding">check out Adobe Devnet</a>.</p>

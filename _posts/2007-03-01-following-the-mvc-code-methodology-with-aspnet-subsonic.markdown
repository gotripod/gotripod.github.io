---
layout: post
status: publish
published: true
title: Following the MVC code methodology with ASP.Net / SubSonic
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
wordpress_id: 315
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/following-the-mvc-code-methodology-with-aspnet-subsonic/
date: !binary |-
  MjAwNy0wMy0wMSAxODozNDoxNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wMy0wMSAxNzozNDoxNyArMDEwMA==
categories:
- .Net
tags:
- .Net
- dotnet
comments: []
---
<p>I have been recently getting into Ruby on Rails and wanted to share my experiences of applying a similar philosophy to <span class="caps">ASP</span>.Net development. One of the core principles of RoR is based on the development of dynamic websites around the Model, View, Controller Methodology. This gives a clean code separation and by following this convention we reduce the risk of duplication and always know where to look for a certain bit of functionality.</p>
<p>Ruby on Rails is based on the <span class="caps"><span class="caps">MCV</span></span> model and implements it cleanly out of the box. <span class="caps"><span class="caps">ASP</span></span>.Net is not designed around this, so we have to take a slightly different view of our <span class="caps"><span class="caps">ASP</span></span>.Net projects to achieve the same thing.</p>
<p>For this approach, I am making use of the <a target="_blank" href="http://www.codeplex.com/actionpack"><strong><font color="#ffffff">SubSonic ActionPack</font></strong></a> (Zero Code <span class="caps"><span class="caps">DAL</span></span>). If you do not know, or have not used SubSonic before, I cannot stress enough how useful this components is. Once SubSonic is setup correctly and pointing at your database. You simply run an .aspx page that generates classes for the selected tables in your database. This allows you then to access information in the database as if a member of a class. Effectively SubSonic is a self-building Object Relational Model (ORM).</p>
<h2>View</h2>
<p>The View of the <span class="caps"><span class="caps">MVC</span></span> model is as you would expect, the .apsx page itself. To follow the model other than JavaScript, etc, avoid .Net coding in this file and keep it cleanly in the code-behind page.</p>
<h2>Controller</h2>
<p>In the <span class="caps"><span class="caps">MVC</span></span> model, the controller deals with the interaction between the view that the user interacts with and the model, that contains are business logic. In here our event handlers, such as button1.click etc are handled as normal, however I stress these event handlers should not contain any business logic. Instead purely use code here to control the view. For example, in here you would call the Model to get you the required information to populate to a GridView and simple databind that data. The business logic to get the required information (for example all products of a certain category) is stored in your Model.</p>
<h2>Model</h2>
<p>To implement the Model in the <span class="caps"><span class="caps">MVC</span></span> model, we need to create our own classes for this. I like to group all functions that relate to a certain theme in one class or model. Using our examples of Products, I would create a ProductModel.cs file and store all my functions such as the above GetProductsByCategory() method.</p>
<p>By doing this I can change the business logic at any time without having to worry about which <span class="caps"><span class="caps">ASP</span></span>.Net code behind pages I have accessed the products table from.</p>
<p>To show you the simplicity of SubSonic, to access the Products by a certain category we could define the following:</p>
<pre lang="csharp">
public static ProductCollection GetProductsByCategory(string category)
{
     SubSonic.Query query = Product.CreateQuery();
     query.AddWhere(Products.Columns.Category, category);
     ProductCollection pc = new ProductCollection();
     pc.Load(query.ExecuteReader());
     return pc;
}
</pre>
<p>That’s it no SQL, no worries, the ProductCollection, SubSonic.Query and Product classes are all generated for us by SubSonic.</p>
<h2>SubSonic DAL/ORM</h2>
<p>The pink classes on the diagram labeled SubSonic ActionPack are created for us and automatically built around our pre-designed database.</p>
<h2>Helper Files</h2>
<p>Finally the helper files are classes created by us to contain methods that we regularly use throughout our application. For example, a method to strip HTML from a string. I normally name these with Helper in the name to distinguish them from my Models and SubSonic classes.<br />
So as you can see it is fairly easy to take the MVC approach when building a Web Application in ASP.Net. The core engine behind this is the SubSonic ActionPack which really makes all the difference.</p>

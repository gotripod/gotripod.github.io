---
layout: post
status: publish
published: true
title: ! 'Writing an XML-RPC server or client in ASP.Net: Part 1'
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! '<a href="http://www.gotripod.com/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/">Part
  Two available here</a>


  I have recently be working on a project which needed to implement the blogging MetaWebLog
  <span class="caps">API</span>, allowing users to post blog messages from their favorite
  blog editor, such as Windows Live Writer or blog directly from MetaWebLog <span
  class="caps">API</span> enabled websites such as Flickr or Digg. My tutorial below
  will show you how to easily create or consume an <span class="caps">XML</span>-RPC
  service such as the MetaWebLog <span class="caps">API</span>.


'
wordpress_id: 314
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/
date: !binary |-
  MjAwNy0wMy0wMyAxODozMzo1NSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wMy0wMyAxNzozMzo1NSArMDEwMA==
categories:
- .Net
tags:
- .Net
- dotnet
comments:
- id: 41
  author: ! 'Clockwork Objects &raquo; Writing an XML-RPC server or client in ASP.Net:
    Part 2'
  author_email: ''
  author_url: http://clockobj.co.uk/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/
  date: !binary |-
    MjAwNy0xMi0wNCAxNDo1ODoyMCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0wNCAxNDo1ODoyMCArMDEwMA==
  content: ! '[...] my previous article I covered how to setup an XML-RPC server in
    .Net, in particular looking at how to service XML-RPC [...] '
- id: 42
  author: AL DENNIS
  author_email: albertdadze@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0wMyAxMDowMjozMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wMyAxMDowMjozMSArMDIwMA==
  content: Thanks man, I searched all over for this stuff and never got a comprehensive
    one anywhere. Thanks for ur great help, it is really appreciated.
- id: 43
  author: ! 'Writing an XML-RPC server or client in ASP.Net: Part 2 &laquo; Go Tripod
    Ltd'
  author_email: ''
  author_url: http://www.gotripod.com/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/
  date: !binary |-
    MjAwOS0wOC0wMyAxNzo0NjozMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wOC0wMyAxNjo0NjozMSArMDIwMA==
  content: ! '[...] my previous article I covered how to setup an XML-RPC server in
    .Net, in particular looking at how to service XML-RPC [...] '
---
<p><a href="http://www.gotripod.com/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/">Part Two available here</a></p>
<p>I have recently be working on a project which needed to implement the blogging MetaWebLog <span class="caps">API</span>, allowing users to post blog messages from their favorite blog editor, such as Windows Live Writer or blog directly from MetaWebLog <span class="caps">API</span> enabled websites such as Flickr or Digg. My tutorial below will show you how to easily create or consume an <span class="caps">XML</span>-RPC service such as the MetaWebLog <span class="caps">API</span>.</p>
<p><a id="more"></a><a id="more-314"></a></p>
<p>The MetaWebLog <span class="caps">API</span> runs over <a href="http://www.xmlrpc.com/"><span class="caps">XML</span>-RPC</a> an open standard for <span class="caps">HTTP</span> based remote procedure calls and is the standard api protocol for blog platforms. A <a href="http://www.xml-rpc.net/">.Net <span class="caps">XML</span>-RPC framework</a> already exists for use in <span class="caps">ASP</span>.Net, which has been developed by Charles Cook of <a href="http://www.cookcomputing.com/blog/index.html">CookComputing</a> .</p>
<p><strong>Setting up the project</strong></p>
<p>You can create an <span class="caps"><span class="caps">XML</span></span>-RPC server or client easily within an existing project. To start working with <span class="caps"><span class="caps">XML</span></span>-RPC, the first thing you will need to do in download the <a href="http://www.xml-rpc.net/">.Net <span class="caps"><span class="caps">XML</span></span>-RPC implementation from CooksComputing.</a> Although I think the <span class="caps"><span class="caps">XML</span></span>-RPC implementation is an excellent stable offering, the documentation is a little sketchy and hard to follow at times which is why I am posting this tutorial. Once you have downloaded the latest version, extract only the following file from the .zip archive: This is the core component you will need:</p>
<p>For .Net 2.0 the file is: <em><strong>bin/CookComputing.XmlRpcV2.dll</strong>For .Net 1.0/1.1 the file is: <strong>bin1_0/CookComputing.XmlRpc.dll</strong></em></p>
<p>Once extracted you will need to copy this .dll to your projects /bin/ directory. You can now create or consume an <span class="caps"><span class="caps">XML</span></span>-RPC service.</p>
<p><strong>Creating a <span class="caps"><span class="caps">XML</span></span>-RPC Server</strong></p>
<p>For this example I am going to implement the MetaWebLog <span class="caps"><span class="caps">API</span></span> in C# to do this we need to add two files to our project, a generic handler and a class file to handler requests to the generic handler.</p>
<p>For this example I will create a handler named MetaWebLog.ashx and it will contain simply the following webhandler directive:</p>
<pre lang="asp">
<%@ WebHandler Language="C#" Class="MetaWebLogHandler" %></pre>
<p>I now need to create my MetaWebLogHandler.cs class file in the App_Code directory. Within this file we first need to reference the CookComputing.XmlRpc package as follows:</p>
<pre lang="csharp">
using CookComputing.XmlRpc;</pre>
<p>Once we have done that we need to alter the class definition as follows passing some parameters to the <span class="caps"><span class="caps">XML</span></span>-RPC service and inheriting the class from XmlRpcService as follows:</p>
<pre lang="csharp">
[XmlRpcService(Name = "MetaWebLogApi",
Description = "This is XML-RPC which implement MetaWeblog API.",
AutoDocumentation = true)]
face=”Courier New”&gt;http://www.miletbaker.com/Blog/MetaWebLog.ashx")]
public class MetaWebLogHandler : XmlRpcService
{

}</pre>
<p>The Name parameter indicates the name of our service, in this case MetaWebLogApi, there is a description and the AutoDocumentation allows us to browse to the <span class="caps"><span class="caps">XML</span></span>-RPC service (.ashx generic handler file) and see the available methods.</p>
<p>We can now create our methods, the <a href="http://www.xmlrpc.com/metaWeblogApi">MetaWebLog <span class="caps"><span class="caps">API</span></span> is documented at the <span class="caps"><span class="caps">XML</span></span>-RPC site</a> , but again it is not very clear. However, I was able to find a <a href="http://msdn2.microsoft.com/en-us/library/bb259697.aspx">definition on <span class="caps"><span class="caps">MSDN</span></span></a> which was very helpful. We basically need to implement the following methods:</p>
<p>metaWeblog.newPost<br />
metaWeblog.editPost<br />
metaWeblog.getPost<br />
metaWeblog.getCategories<br />
metaWeblog.getRecentPosts<br />
blogger.deletePost<br />
blogger.getUsersBlogs<br />
blogger.getUserInfo</p>
<p><em>Note: I have found that with the last three methods prefixed blogger. although these are defined by <span class="caps"><span class="caps">XML</span></span>-RPC like this, some MetaWebLog <span class="caps"><span class="caps">API</span></span> clients call these methods with the metaWebLog. prefix instead.</em></p>
<p>For each of these methods we need to make a compiler declaration before the method to indicate the <span class="caps"><span class="caps">XML</span></span>-RPC method name. I will not go through each method but rather show you one as an example of how to work with an <span class="caps"><span class="caps">XML</span></span>-RPC request.</p>
<pre lang="csharp">
[XmlRpcMethod("metaWeblog.getPost")]
public XmlRpcStruct getPost(string postid, string username, string password)
{
 If (Authenticate(username, password))
 {
 	//We need to create an XML-RPC Struct to return
 	XmlRpcStruct rpcstruct = new XmlRpcStruct();
 	rpcstruct.Add("postid", "1234");
 	rpcstruct.Add("dateCreated", DateTime.Now.PublishedAt.ToUniversalTime());
 	rpcstruct.Add("title", "A blog post");
 	rpcstruct.Add("link", "http://www.miletbaker.com/blog/Article.aspx?id=1234");
 	rpcstruct.Add("description", "test");
 	rpcstruct.Add("categories", new string[] {"News","Opinion"});
 	rpcstruct.Add("publish", true);		return rpcstruct;
 }
 else {
 	HttpContext.Current.Response.Clear();
 	HttpContext.Current.Response.StatusCode = 403;
 	HttpContext.Current.Response.Flush();
 	return null;
 }

}</pre>
<p>In this example we are being sent a blog post item id, and a username and password. We first want to check the username and password are valid, I have an Authenticate method to do this. If we are not authorized I use the Response object to return a 403 – Not Authorised message, else we can continue. I would normally use the post ID to query a database but here I have hard coded the response. We need to respond within a nested <span class="caps"><span class="caps">XML</span></span> element / struct with specific parameter names, to do this we use the XmlRpcStruct object. We create a new <span class="caps"><span class="caps">XML</span></span>-RPC object and then use the Add method to add each parameter name (key) and value. Once we have done that we can return it. <span class="caps"><span class="caps">XML</span></span>-RPC also handles Arrays and in the MetaWebLog <span class="caps"><span class="caps">API</span></span>, the MetaWebLog.getRecentPosts needs to return each post as an element of an array of XmlRpcStructs.</p>
<p>Once we have written our methods we can build and browse to our MetaWebLog.ashx file and if all is working the methods should be listed in the browser.</p>
<p>To overcome the issue with some blog editors calling metaweblog.deletePost rather than blogger.deletePost, you simply create an additional method to handle this and then call your other method i.e.</p>
<pre lang="csharp">
[XmlRpcMethod("MetaWebLog.deletePost")]
public bool MWLDeletePost(string appKey, string postid, string username, string password, bool publish)
{
	return this.deletePost(appKey, postid, username, password, publish);
}
</pre>
<p>In <a href="http://www.gotripod.com/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/">part II</a>, I will look at how we implement an <span class="caps"><span class="caps">XML</span></span>-RPC client to ping blogging servers.</p>
<p><a href="http://www.gotripod.com/2007/03/09/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/">Part Two available here</a></p>

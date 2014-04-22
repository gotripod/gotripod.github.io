---
layout: post
status: publish
published: true
title: ! 'Writing an XML-RPC server or client in ASP.Net: Part 2'
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'In my <a href="http://www.gotripod.com/2007/03/03/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/">previous
  article</a> I covered how to setup an <span class="caps">XML</span>-RPC server in
  .Net, in particular looking at how to service <span class="caps">XML</span>-RPC
  MetaWebLog <span class="caps">API</span> requests. In this second part I am looking
  at how we can easily construct an <span class="caps">XML</span>-RPC client to ping
  blog directory or search services such as Technorati, Google BlogSearch, blo.gs
  etc.


'
wordpress_id: 26
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/writing-an-xml-rpc-server-or-client-in-aspnet-part-2/
date: !binary |-
  MjAwNy0wMy0wOSAxODozMzowMiArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wMy0wOSAxNzozMzowMiArMDEwMA==
categories:
- .Net
tags:
- .Net
- dotnet
comments:
- id: 33
  author: ! 'Clockwork Objects &raquo; Writing an XML-RPC server or client in ASP.Net:
    Part 1'
  author_email: ''
  author_url: http://clockobj.co.uk/2007/03/03/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/
  date: !binary |-
    MjAwNy0xMi0wNCAxNTowNDoyNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0wNCAxNTowNDoyNSArMDEwMA==
  content: ! '[...] Part Two available here [...] '
- id: 34
  author: Fulin Xiang
  author_email: fulin.xiang@delaval.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0xMiAwNjoyMzowNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0xMiAwNjoyMzowNSArMDIwMA==
  content: ! 'Hi,


    Do you know how to use XML-RPC.NET to create a client that can connect to a non-html
    endpoint (where there is no http server, just IP address and port number)?


    Thank you!'
- id: 35
  author: mohammad
  author_email: ahmedorhussain@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOS0yMyAwNjoxODo0OSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0yMyAwNjoxODo0OSArMDIwMA==
  content: ! 'Hai,


    Can you please send me a link for a video tutorial to understand clearly about
    xml rpc.'
- id: 36
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0yMyAwODozNjo0MSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0yMyAwODozNjo0MSArMDIwMA==
  content: ! 'Hi


    unfortunately I do not know the answer to either of these. XML-RPC is quite an
    enigmatic protocol I have not seen any videos. As for using XML-RPC over sockets
    directly. This should be possible I have not done any .Net for a very long time
    but I think you can transmit strings rather than have to byte encode. Just transafer
    your XML-RPC as a string between a client socket and server socket (I may be confusing
    with Java here sorry) and then constuct an XMLRPCStruct. In fact you can possibly
    serialize the XMLRPCStruct over the wire. Maybe someone with more recent .Net
    experience can help you.


    Regards,


    Jon'
- id: 37
  author: Hugo
  author_email: hugomoen@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0yNyAxMToyOTozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yNyAxMToyOTozMSArMDEwMA==
  content: ! 'Hi.

    I am using CookComputing.XmlRpc to write a client.

    The service I''m working against have one method I''m struggling with.

    Its a method for importing file. Making a struct with the file in bytes is easy,
    but sending this struct don''t work.

    I''m not able to use struct as a type in the interface when declaring the method.

    Don''t CookComputing.XmlRpc support struct?

    Any ides..'
- id: 38
  author: Joe
  author_email: joeabill@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNC0yMCAwNjozNTowNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNC0yMCAwNjozNTowNyArMDIwMA==
  content: ! 'Jon,


    You frickin'' rule! This is exactly what I was looking for.


    Thanks a ton!


    Joe'
- id: 39
  author: ! 'Writing an XML-RPC server or client in ASP.Net: Part 1 &laquo; Go Tripod
    Ltd'
  author_email: ''
  author_url: http://www.gotripod.com/2007/03/03/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/
  date: !binary |-
    MjAwOS0wOC0wMyAxNzo0NjowNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wOC0wMyAxNjo0NjowNiArMDIwMA==
  content: ! '[...] Part Two available here [...] '
- id: 40
  author: chand
  author_email: chandra@ambitsoft.in
  author_url: http://movesms
  date: !binary |-
    MjAxMS0wNy0yMCAwNjoxNjoxOCArMDIwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0yMCAwNToxNjoxOCArMDIwMA==
  content: could u please send me how can i call xmlrpc service present in php to
    my dotnet page
---
<p>In my <a href="http://www.gotripod.com/2007/03/03/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/">previous article</a> I covered how to setup an <span class="caps">XML</span>-RPC server in .Net, in particular looking at how to service <span class="caps">XML</span>-RPC MetaWebLog <span class="caps">API</span> requests. In this second part I am looking at how we can easily construct an <span class="caps">XML</span>-RPC client to ping blog directory or search services such as Technorati, Google BlogSearch, blo.gs etc.</p>
<p><a id="more"></a><a id="more-26"></a></p>
<p>If you have not read <a href="http://www.gotripod.com/2007/03/03/writing-an-xml-rpc-server-or-client-in-aspnet-part-1/">part one</a>, I recommend you take a look at this article first as it covers the set-up and configuration of <a href="http://www.xml-rpc.net/">CooksComputing <span class="caps">XML</span>-RPC provider</a>, which is required for this tutorial.</p>
<p><strong>Creating an <span class="caps"><span class="caps">XML</span></span>-RPC client proxy class</strong></p>
<p>Before we can make and <span class="caps"><span class="caps">XML</span></span>-RPC client request, we need to create a proxy/wrapper class to handle our client requests for us. In this example I am going to create a client that pings <a href="http://pinger.blogflux.com/" target="_blank">blogflux.com</a> . To use their <span class="caps"><span class="caps">XML</span></span>-RPC service you need to sign-up for a free account.</p>
<p>To ping blogflux.com we need to send an <span class="caps"><span class="caps">XML</span></span>-RPC call to <a href="http://pinger.blogflux.com/rpc/" title="http://pinger.blogflux.com/rpc/">http://pinger.blogflux.com/rpc/</a></p>
<p>Which is configured to accept pings that follow the WebLog ping format.</p>
<p>Firstly, we will create our proxy class in our App_Code directory as follows:</p>
<pre lang="javascript">
using System.Reflection;
using CookComputing.XmlRpc;

[XmlRpcUrl("http://pinger.blogflux.com/rpc/")]
class BlogFlux : XmlRpcClientProtocol{

     [XmlRpcMethod("weblogUpdates.ping")]
     public XmlRpcStruct ping(string weblogname, string weblogurl)
     {
          return (XmlRpcStruct)Invoke(MethodBase.GetCurrentMethod(), new object[] { weblogname, weblogurl });
     }

}</pre>
<p>Here we need to insert a compiler directive before the class definition which indicates the <span class="caps"><span class="caps">URL</span></span> we want this proxy to communicate with, in this case: pinger.blogflux.com/rpc/. We then need to insure that our class inherits from XmlRpcClientProtocol. Once we have done this we can define the methods that we want to call on the remote <span class="caps"><span class="caps">RPC</span></span>-XML server. the WebLog ping protocol supports two method calls, weblogUpdates.ping and weblogUpdates.extendedPing. The most widely implemented in the weblogUpdates.ping method, which takes two parameters, the first being a string containing the name of your blog, the second (again a string) the <span class="caps"><span class="caps">URL</span></span> of your blog. webblogUpdates.ping returns a <span class="caps"><span class="caps">XML</span></span>-RPC struct indicating whether the ping succeeded or not, so our method returns and XmlRpcStruct and to initiate the call we use the following code:</p>
<pre lang="javascript">
Invoke(MethodBase.GetCurrentMethod(), new object[] { weblogname, weblogurl});</pre>
<p>As you can see we pass the parameters onto the <span class="caps"><span class="caps">XML</span></span>-RPC client call within the second parameter of the Invoke method call and all <span class="caps"><span class="caps">XML</span></span>-RPC methods are stored in an array of type object.</p>
<p>Once we have our client proxy defined, we can easily create and invoke a remote <span class="caps"><span class="caps">XML</span></span>-RPC call as follows:</p>
<pre lang="javascript">
BlogFlux bf = new BlogFlux();
bf.ping("Jon Milet Baker’s Blog", http://www.miletbaker.com/blog/);</pre>
<p>And if we want to check the results of our client <span class="caps"><span class="caps">XML</span></span>-RPC call we can do the following.</p>
<pre lang="javascript">
XmlRpcStruct struct = bf.ping("Jon Milet Baker’s Blog", http://www.miletbaker.com/blog/);
label1.text = struct["errMsg"];</pre>
<p>The <span class="caps"><span class="caps">XML</span></span>-RPC protocol is widely adopted especially by blog platforms. This tutorial covers the basics of <span class="caps"><span class="caps">XML</span></span>-RPC and I recommend reading <a href="http://www.xml-rpc.net/" target="_blank">Charles Cooks <span class="caps"><span class="caps">FAQ</span></span></a> for more information, but as you can see this code could easily be adapted for any Remote Procedure Call requirement and provides an alternative to <span class="caps"><span class="caps">SOAP</span></span> based Web Services.</p>

---
layout: post
status: publish
published: true
title: Simplified Cairngorm, Easy MVC for Adobe Flex
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'Like many others, I have been struggling to fully get my head fully around
  the <a href="http://labs.adobe.com/wiki/index.php/Cairngorm">Cairngorm Micro Architecture</a>,
  and even with the excellent <a href="http://www.tylerbeck.com/CairngormCreator/">Cairngorm
  Creator</a>, I find it a little overkill for many Adobe Flex projects I am involved
  with, in fact, <a href="http://weblogs.macromedia.com/swebster/archives/2006/08/why_i_think_you.cfm">so
  does Steven Webster</a> (one of the creators of Cairngorm).


  So yesterday I sat in on an excellent Adobe eSeminar, presented by <a href="http://www.searchcoders.com/">Tom
  Bray of SearcherCoders</a> who presented an easy / simplified Model View Controller
  architecture based on Cairngorm.


  To demonstrate the need for these frameworks, Tom started with an excellent example
  of an application based on a simple chat client. Inspired by his excellent <a href="http://www.chatopica.com/">Chatopica</a>
  perhaps?:

'
wordpress_id: 7
wordpress_url: http://old.miletbaker.com/index.php/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex/
date: !binary |-
  MjAwNy0xMC0xNyAyMjozMDo0NiArMDIwMA==
date_gmt: !binary |-
  MjAwNy0xMC0xNyAyMjozMDo0NiArMDIwMA==
categories:
- Flex and Air
tags:
- as3
- Flex and Air
- RIAs
- ActionScript
- easymvc
comments:
- id: 62
  author: Mike@opco
  author_email: Mike@opco.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wMiAwMDoxNTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMiAwMDoxNTo0MyArMDEwMA==
  content: Great summary of Tom Bray's EasyMVC presentation.  I also attended the
    e-seminar, but missed some of the details because of my lack of experience with
    Flex.  Your article covered all of my questions.  Thanks.
- id: 63
  author: davidderaedt
  author_email: contact@dehats.com
  author_url: http://www.dehats.com/drupal/?q=node
  date: !binary |-
    MjAwNy0xMS0wMiAwMDoxNjoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMiAwMDoxNjoyNyArMDEwMA==
  content: ! 'Thanks a lot for this summary!  If I remember correctly, the first versions
    of cairngorm relied of event bubbling too, but they decided to give up this technique
    because you can get stuck with it in some situations.  More on this here:  http://weblogs.macromedia.com/auhlmann/archives/2006/07/cairngorm_2_for.cfm'
- id: 64
  author: Dave
  author_email: themadadmin@themaadmin.com
  author_url: http://themadadmin.com
  date: !binary |-
    MjAwNy0xMS0wMiAwMDoxNzoyMCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMiAwMDoxNzoyMCArMDEwMA==
  content: Great post.  I put a post linking to this one today on my site.    I am
    working on getting the concept of using amfphp and getting it to work in the model.  Hitting
    some problems but it is mostly my knowledge of action script 3 that is lacking.    I
    do like his MVC.    Thanks
- id: 65
  author: chat &raquo; Simplified Cairngorm, Easy MVC for Adobe Flex
  author_email: ''
  author_url: http://chat.wpbloggers.com/?p=3557
  date: !binary |-
    MjAwNy0xMS0xNSAwNDozNTozNCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0xNSAwNDozNTozNCArMDEwMA==
  content: ! '[...] Read the rest of this great post here [...] '
- id: 66
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0xOCAxNToxMzo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xOCAxNToxMzo1NCArMDEwMA==
  content: ! 'Hi Shanon,


    Thank you for your point of view. Firstly, I understand the concerns regarding
    singletons. And I agree that in my example, from my articles on extending EasyMVC
    I have used Singletons for my services which possibly could lead to problems of
    extendability in the future, however I stand by the fact a singleton should be
    used to access these services, via a singleton servicelocator (which is the widely
    agreed approach to locator patterns). This locator creates instances and provides
    access to the relevant services rather thank accessing them directly. As for the
    models in the example above, (this uses a modellocator pattern), the ChatModel
    is a modellocator to the Data Transfer Objects / Value Objects which can actually
    make testing easier as the test data can be easily injected via the modellocator
    from within the test rig, and I have used this approach using FlexUnit.


    Again I want to clarify that this article puts forward a simple framework that
    can be used where Cairngorm or PureMVC is overkill. This article was originally
    presented after Tom Brays Adobe eSeminar was not recorded and has proved to be
    a very popular approach. It is also designed to allow a fairly trivial upgrade
    to Cairngorm if needed and my articles on extending EasyMVC are a step towards
    that.


    I also want to clarify that these extending articles are designed to help understand
    how frameworks like Cairngorm work. I have come accross a lot of developers that
    are new to Flex come across Cairngorm and implement it without fully understanding
    it. EasyMVC works well (I use it regularly) where Cairngorm is overkill. Tom could
    have created a custom eventDispatcher as Caingorm does and then registered event
    listeners against that but for the sake of simplicity I agree with Tom Bray comments
    regarding the use of UIComponent.


    But like I say the use of design patterns are subjective, their use should depends
    on the software architects professional judgment, based on the project  and project
    team, not opinions on the web. Although there are always arguments for and against
    there are no hard and fast rules.'
- id: 67
  author: Shanon
  author_email: shanon.mcquay@carsales.com.au
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0xOCAwMDoxMjo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xOCAwMDoxMjo1OSArMDEwMA==
  content: ! 'I thought this was a good way to introduce the concept of MVC, however
    I really disagree with the widespread use of singletons.


    How do you plan to test your controller when it gets more complex? How are you
    going to mock the model for testing purposes?


    For more information on the appropriate use of singletons please read this article
    http://www.softwarereality.com/design/singleton.jsp


    I also agree with tim that you shouldn''t need to extend from UIComponent, i''d
    prefer to see a seperate MVC event dispatcher (in which case a singleton is appropriate)
    used to dispatch and consume these custom events.'
- id: 68
  author: Comprendre simplement les MVC | Flex actualités
  author_email: ''
  author_url: http://flex-actu.com/2008/04/comprendre-simplement-les-mvc/
  date: !binary |-
    MjAwOC0wNC0yMSAxMTowMTozMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0yMSAxMTowMTozMCArMDIwMA==
  content: ! '[...] Le lien  http://clockobj.co.uk/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex
    [...] '
- id: 69
  author: John
  author_email: john@myfreemail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xOCAxODowMDozNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xOCAxODowMDozNSArMDIwMA==
  content: ! 'Sounds like shanon is well versed in singleton theory. The method Jon
    used to create his singleton is very commonly used in Actionscript.


    Even if a private constructor were allowed in Actionsctipt, you''d be able to
    instantiate two instances of a "singleton" from inside the class itself.  If you
    didn''t use the getInstance() method (as suggested in your comment), then you
    wouldn''t be abiding by the singleton''s contract to begin with.


    Regarding singletons in Actionscript, there has been more of a trend toward using
    singleton enforcers to compensate for the lack of a private constructor.'
- id: 70
  author: laflex.org &raquo; EasyMVC Transcript
  author_email: ''
  author_url: http://www.laflex.org/2007/12/11/easymvc-transcript/
  date: !binary |-
    MjAwNy0xMi0xMyAxODozODo0NSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0xMyAxODozODo0NSArMDEwMA==
  content: ! '[...] http://clockobj.co.uk/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex
    [...] '
- id: 71
  author: The write-up from my EasyMVC eSeminar yesterday is now available | tombray.com
    - chatting about Flex &amp; AIR
  author_email: ''
  author_url: http://www.tombray.com/2007/10/17/the-write-up-from-my-easymvc-eseminar-yesterday-is-now-available/
  date: !binary |-
    MjAwNy0xMi0xMyAyMTozMDo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0xMyAyMTozMDo1NyArMDEwMA==
  content: ! '[...] I didn&#8217;t have to do the work!'
- id: 72
  author: Tim
  author_email: mail@timwalling.com
  author_url: http://timwalling.com
  date: !binary |-
    MjAwOC0wMy0yMSAxMjoxMTozNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMSAxMjoxMTozNiArMDEwMA==
  content: ! '"Tom could have created a custom eventDispatcher as Caingorm does"


    All one would have to do here is extend EventDispatcher, extending UIComponent
    just to get event dispatching is overkill.'
- id: 73
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0wNSAwODowNzoyNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNSAwODowNzoyNCArMDEwMA==
  content: ! 'Hi Todd,


    Thank you for your comments, and clarification of some of the issues with this
    approach.


    Jon'
- id: 74
  author: todd
  author_email: todd@custardbelly.com
  author_url: http://custardbelly.com/blog
  date: !binary |-
    MjAwOC0wMy0wNSAwMjoxMDo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNSAwMjoxMDo0OCArMDEwMA==
  content: ! 'Hey Jon,


    These are some great examples for setting up a lightweight framework for applications
    utilizing the MVC pattern. Thanks for putting them out there!


    However, i think it is a mistake to say that the systemManager acts the same as
    the FrontContoller/CairngormEvent/CairngormEventDispatcher mechanism of the Ciarngorm
    framework. The FrontController is not added to the display list of an application
    built on the Ciarngorm framework and commands are executed based on the EventDispatcher
    instance of the CairngormEventDispatcher (CED) delegate.


    As such, since the SystemManager manages an application window, you may run into
    problems using EasyMVC effectively with modular Flex/AS applications and AIR applications.


    That is not to say that EasyMVC does not have its place, and i would certiainly
    use it in some cases :) Just a little info to think about prior to building modular
    or windowed apps. However, as you have said and pointed out in this great series
    is that it is not much work to switch over to the Cairngorm framework if you do
    find that the application needs it down the line.'
- id: 75
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMy0wNCAyMjo1NjoxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNCAyMjo1NjoxMyArMDEwMA==
  content: ! 'Tim,  To clarify why the controller uses UIComponent I have had the
    following back  from Tom Bray: “I extend UIComponent so I can listen for the ADDED_TO_STAGE
    event which lets me know when the systemManager is no longer null…, the amount
    of code in UIComponent doesn’t concern me because it’s already linked in to the
    compiled SWF because everything, including mx:Application extends it, Cairngorm’s
    FrontController does the same thing”


    Thanks for the clarification Tom!


    Jon'
- id: 76
  author: ! 'Clockwork Objects &raquo; Scaling up EasyMVC as your Flex application
    grows (Part 2: Services)'
  author_email: ''
  author_url: http://clockobj.co.uk/2008/03/04/scaling-up-easymvc-as-your-flex-application-grows-part-2-services/
  date: !binary |-
    MjAwOC0wMy0wNCAyMjowNTozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0wNCAyMjowNTozNSArMDEwMA==
  content: ! '[...] Click here to read an introduction on EasyMVC Click here to read
    Scaling up EasyMVC part 1. [...] '
- id: 77
  author: ! 'WS-Blog &raquo; WS-ThumbsGenerator: Using the drag-and-drop and file
    system APIs with Adobes JPEGEncoder to create image thumbnails'
  author_email: ''
  author_url: http://www.websector.de/blog/2008/02/01/ws-thumbsgenerator-using-the-drag-and-drop-and-file-system-apis-with-adobes-jpegencoder-to-create-image-thumbnails/
  date: !binary |-
    MjAwOC0wMi0wMiAwNzoyNToxNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0wMiAwNzoyNToxNCArMDEwMA==
  content: ! '[...] prototypes like &#8220;WS-ThumbsGenerator&#8221;. Fore more information
    about easyMVC check out the excellent tutorial of Jon Baker as [...] '
- id: 78
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMS0wMyAyMjoyODoyMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAyMjoyODoyMiArMDEwMA==
  content: ! 'Thanks Dave,


    I have been making a great deal of use of this framework and have found it an
    excellent approach. I am interested in reading your article of using EasyMVC with
    AMFPHP.


    Jon'
- id: 79
  author: Tim
  author_email: mail@timwalling.com
  author_url: http://timwalling.com
  date: !binary |-
    MjAwOC0wMS0yMiAwNDozMTo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yMiAwNDozMTo1MiArMDEwMA==
  content: I was just throwing in the EventDispatcher point in case it did need to
    dispatch events. I'd be interested in seeing what the arguments are for UIComponent.
    I still extending UIComponent is pulling in a lot of inherited code that really
    isn't needed. The controller isn't a view component. You could always pass a reference
    to the main view, listen for creation complete or what I've done in some cases
    is to create a public init() function which the main view could call once the
    creationComplete event fires. I also think it would be fine to add event listeners
    to the systemManager before the creationComplete event. Unless there's some case
    that Tom ran into of course where this didn't work. Is the presentation available
    online? Maybe I should watch it before commenting more :)
- id: 80
  author: Dave Finnerty
  author_email: dave@youmethem.us
  author_url: http://themadadmin.com
  date: !binary |-
    MjAwOC0wMS0wMyAxODoxNzoxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxODoxNzoxNSArMDEwMA==
  content: ! 'I just posted a sample of using easyMVC (Tom''s Version) with AMFPHP
    1.9


    http://themadadmin.com/wp/?p=1070


    I put a link back to your writeup on easyMVC in the links section of the application.


    Thanks


    Dave'
- id: 81
  author: Shanon
  author_email: shanon.mcquay@carsales.com.au
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0yMCAwNzowNjo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMCAwNzowNjo1MSArMDEwMA==
  content: ! 'Hi Jon,


    Yes I agree that the service locator and model locator patterns can be VERY useful.


    I would like to clarify that theChatModel presented is in fact NOT a singleton.
    If I never call the getInstance() method I can create as many instances I like:


    var chatOne:ChatModel = new ChatModel();

    var chatTwo:ChatModel = new ChatModel();


    And even if it were a singleton I think using static variables would haven been
    a lot simpler.


    e.g. ChatModel.currentActivity = ChatModel.VIEWING_CHAT;


    Now lets say I want to expand on the example and add the ability to join more
    than one room at once. You simply can''t do it with the chat model as a singelton.
    Yes you can tell me that you dont need to do this for the purposes of this example,
    but I''d tell you that anyone who has a need for MVC isn''t developing a one room
    chat application. And since when was a singleton recommended for the Model in
    MVC?'
- id: 82
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wMS0yMSAxNjowMDo0NSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yMSAxNjowMDo0NSArMDEwMA==
  content: ! 'Tim, Thank you for your alternative solution, just to clarify.


    There is a good reason why Tom extends UIComponent, as he is well aware of the
    fact you raise. He mentioned it in his presentation, but it has slipped my mind.
    I think it is to do with being able to listen to the creationComplete event, as
    eventListeners need to be added to the systemManager at this point.


    Also to clarify the controller does not dispatch any events it is purely there
    to listen for them.


    I''ll double check with Tom...'
- id: 83
  author: Clockwork Objects &raquo; Scaling up EasyMVC as your Flex application grows
    (Part 1)
  author_email: ''
  author_url: http://clockobj.co.uk/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/
  date: !binary |-
    MjAwOC0wMS0yMSAxMjoxNDowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yMSAxMjoxNDowMyArMDEwMA==
  content: ! '[...] EasyMVC is an excellent, easy to use Model View Controller architecture
    for Adobe Flex designed by Tom Bray from Chatopica. However as your apps grow
    you may find yourself outgrowing this architecture. For example as all your event
    handlers are centralised into one class, this class may get to large to maintain,
    especially as the team maintaining the app also expands.One of the best solutions
    I have found to handling a growing controller is to borrow the command pattern
    from Cairngorm which uses the Command design pattern. [...] '
- id: 84
  author: Tim
  author_email: mail@timwalling.com
  author_url: http://timwalling.com
  date: !binary |-
    MjAwOC0wMS0yMSAxMzoyMzo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yMSAxMzoyMzo1MSArMDEwMA==
  content: You don't have to have your controller extend UIComponent in order to be
    able to declare it in MXML. Personally I'd consider not extending UIComponent
    because your controller really isn't a view component. I'd pass a reference in
    to the systemManager and have the controller simply extend EventDispatcher in
    order to take care of any event dispatching needs.
- id: 85
  author: Dave Finnerty
  author_email: dave@youmethem.us
  author_url: http://themadadmin.com
  date: !binary |-
    MjAwOC0wMS0xMyAwMjoyMDowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0xMyAwMjoyMDowOCArMDEwMA==
  content: ! 'Jon,


    I like this system also.  Keeps the code understandable and easy to update.  Let
    me know any and all questions.  I did not get to do a proper write up on the ins
    and out.  Biggest resource is the sample code.


    I did the AMFPHP code because someone asked me how to do it and a sample was easier
    than explaining it.  Tom had answered my questions on it already.'
- id: 86
  author: laflex.org &raquo; Blog Archive &raquo; Flex Application Frameworks
  author_email: ''
  author_url: http://www.laflex.org/2008/01/14/flex-application-frameworks/
  date: !binary |-
    MjAwOC0wMS0xNCAxOTo1NjowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0xNCAxOTo1NjowNiArMDEwMA==
  content: ! '[...] http://clockobj.co.uk/2007/10/17/simplified-cairngorm-easy-mvc-for-adobe-flex
    [...] '
- id: 87
  author: Johan
  author_email: johans@xtra.co.nz
  author_url: ''
  date: !binary |-
    MjAwOC0wNS0yNSAyMToxOToyNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yNSAyMToxOToyNyArMDIwMA==
  content: ! 'As an alternative to the ChangeWatcher to control the view stack, depending
    on how your application views are structured, you can use binding to easily contorl
    the view. Bind the view container (which contains the states) currentState attribute
    to the model''s currentActivity: currentState="{model.currentActivity}"'
- id: 88
  author: Skeuds
  author_email: skeuds@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNy0wOSAwNzo1MDoyMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOSAwNzo1MDoyMSArMDIwMA==
  content: ! 'Hi, Thank you for this good example. I think you have just forget a
    line for instantiate the instance in your ChatModel class :

    If the instance is null you must instantiate like "instance = this" else it''s
    doesn''t work.


    Sorry for my bad English ^^.


    Your website is really usefull.'
- id: 89
  author: Chad
  author_email: chadian22@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xMSAxOToyNzo0NiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMSAxOToyNzo0NiArMDIwMA==
  content: ! 'Johan:


    I''m a big noob here, but what happens if you wanted to execute something like
    a state change (or an effect)? Wouldn''t it be easier to watch, catch the event,
    and then do more than just data bind?'
- id: 90
  author: venkat
  author_email: vencool@gmail.com
  author_url: http://techmytongue.blogpot.com
  date: !binary |-
    MjAwOC0wOC0yNCAxMToxNjozNCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yNCAxMToxNjozNCArMDIwMA==
  content: ! 'Hi ,


    I use a similar approach as explained here


    http://techmytongue.blogspot.com/2008/08/mvc-with-flex.html


    Thanks,

    Venkat'
- id: 91
  author: Nathan
  author_email: nar2111@columbia.edu
  author_url: ''
  date: !binary |-
    MjAwOC0xMC0wOSAyMDo1MDoxMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0wOSAyMDo1MDoxMSArMDIwMA==
  content: Very useful article. Thanks!
- id: 92
  author: Ben
  author_email: ben@bensmeets.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0yNSAyMDowMDoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNSAyMDowMDoxMiArMDEwMA==
  content: ! 'Lo all,


    Great explanations on this site. Been trying out the EasyMVC method, coming from
    Cairngorm, and I like it a lot. I ran into one problem though and I hope that
    posting it here will help me fix it.


    I let the controller extend UIComponent. Add it and every event I dispatch runs
    fine. E.g. clicking a button fires a command, no problems there.

    Where it goes wrong is when i wanted to fire a e.g. StartApplicationEvent directly
    after my main view component fires it''s ''creationComplete''. What happens then
    is that the systemManager does not receive the event. It just does nothing. The
    events on the buttons work, because they get dispatched later on.


    What I don''t get is, that the controller is initted BEFORE i use the creationComplete
    to dispatch the AppStart event. putting a trace(systemManager) just before that
    dispatch does not return null. But still the event doesn''t reach the controller
    :S.


    Any ideas?


    Tnx, Ben'
- id: 93
  author: Austin
  author_email: austin.keeley@gmail.com
  author_url: http://www.espressoninja.com
  date: !binary |-
    MjAwOC0xMC0zMSAwMTozMTowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0zMSAwMTozMTowMSArMDEwMA==
  content: Thanks for this tutorial.  I've been working with Flex for a few months
    and I like the end results of a Flex application, but writing well designed code
    has always been a challenge.  This framework looks like something that will make
    my code a little more robust.
- id: 94
  author: Ben
  author_email: ben@bensmeets.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0yNSAxMTo0OTowNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yNSAxMTo0OTowNyArMDEwMA==
  content: ! 'Jon,


    Still having issues with when the controller is handling events correctly or not.
    I use the creationComplete or addedToStage events inside the controller to initialize
    the listeners. Inside my main app I use the creationComplete to dispatch a certain
    event (which should be handled by the controller). It never reaches the controller
    it seems? If I use a button''s click handler to fire that same event moments later,
    it is handled correctly. What am i missing here? It seems the controller is initted
    too late. But if I add trace statements to the controller and creationComplete
    of the mainview, it does trace it''s init first and dispatch after.... tracing
    the systemManager in the init of the controller says it''s NOT null...I''m fresh
    out of ideas here...


    Ben'
- id: 95
  author: Claire, A Simple MVC for Adobe Air and Flex - Kerkness.ca
  author_email: ''
  author_url: http://www.kerkness.ca/?p=63
  date: !binary |-
    MjAwOC0xMi0xNyAwMDo1OTo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAwMDo1OTo0OCArMDEwMA==
  content: ! '[...] or Adobe Air applications using MVC design patterns. Claire&#8217;s
    approach to MVC is based on a simplified Cairngorm architecture called Easy MVC
    and has been optimized to work with the Kerkness PHP framework. It is [...] '
- id: 96
  author: Ashim S
  author_email: flashim@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0wMiAxMToxNDozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0wMiAxMToxNDozOSArMDEwMA==
  content: great post... really helpful !!
- id: 97
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMi0wMyAwOToxMjo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wMyAwOToxMjo1OCArMDEwMA==
  content: ! '@Jonecir


    There is nothing to download with EasyMVC it is simply a process the classes that
    need to be setup (controller) can easily be cut and pasted from the blog.. That''s
    about it.


    Regards,


    Jon'
- id: 98
  author: Jonecir
  author_email: jonecir@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0wMiAyMzo0Mzo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wMiAyMzo0Mzo1MyArMDEwMA==
  content: Hi, where can I download this EasyMvc?
- id: 99
  author: Cabuto
  author_email: algo@algo.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0xOSAwMDoxNjowNSArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0xOCAyMzoxNjowNSArMDIwMA==
  content: ! 'Wow, at last! all my nightmares are gone!

    Thank you so much!'
- id: 100
  author: flex developers india
  author_email: ronaldwallace7@live.com
  author_url: http://estradamatthew.onsugar.com/
  date: !binary |-
    MjAxMS0xMi0wMyAwNjo1MDoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0xMi0wMyAwNjo1MDoxNyArMDEwMA==
  content: Amazing post. Thank you.
---
<p>Like many others, I have been struggling to fully get my head fully around the <a href="http://labs.adobe.com/wiki/index.php/Cairngorm">Cairngorm Micro Architecture</a>, and even with the excellent <a href="http://www.tylerbeck.com/CairngormCreator/">Cairngorm Creator</a>, I find it a little overkill for many Adobe Flex projects I am involved with, in fact, <a href="http://weblogs.macromedia.com/swebster/archives/2006/08/why_i_think_you.cfm">so does Steven Webster</a> (one of the creators of Cairngorm).</p>
<p>So yesterday I sat in on an excellent Adobe eSeminar, presented by <a href="http://www.searchcoders.com/">Tom Bray of SearcherCoders</a> who presented an easy / simplified Model View Controller architecture based on Cairngorm.</p>
<p>To demonstrate the need for these frameworks, Tom started with an excellent example of an application based on a simple chat client. Inspired by his excellent <a href="http://www.chatopica.com/">Chatopica</a> perhaps?:<br />
<a id="more"></a><a id="more-7"></a></p>
<ol class="CodeRay">
<li><span class="pp">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span></li>
<li><span class="ta">&lt;mx:Application</span> <span class="an">xmlns:mx</span>=<span class="s"><span class="dl">"</span><span class="k">http://www.adobe.com/2006/mxml</span><span class="dl">"</span></span> <span class="an">layout</span>=<span class="s"><span class="dl">"</span><span class="k">vertical</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:Script&gt;</span></li>
<li> <span class="er">&lt;</span>![CDATA[</li>
<li> import mx.collections.ArrayCollection;</li>
<li> [Bindable]</li>
<li> public var rooms:ArrayCollection = new ArrayCollection( ["Flex", "Flash", "AIR", "ColdFusion" ] );</li>
<li> [Bindable]</li>
<li> public var users:ArrayCollection = new ArrayCollection( ["John", "Paul", "George", "Ringo" ] );</li>
<li> [Bindable]</li>
<li> public var currentRoom:String;</li>
<li> [Bindable]</li>
<li> public var messages:String = "";</li>
<li> private function joinRoom( room:String ):void</li>
<li> {</li>
<li> currentRoom = room;</li>
<li> views.selectedChild = chatPanel;</li>
<li> }</li>
<li> private function sendMessage( message:String ):void</li>
<li> {</li>
<li> messages += message + "\n";</li>
<li> }</li>
<li> ]]<span class="er">&gt;</span></li>
<li> <span class="ta">&lt;/mx:Script&gt;</span></li>
<li> <span class="ta">&lt;mx:ViewStack</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">views</span><span class="dl">"</span></span> <span class="an">resizeToContent</span>=<span class="s"><span class="dl">"</span><span class="k">true</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:Panel</span> <span class="an">title</span>=<span class="s"><span class="dl">"</span><span class="k">Room List</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">300</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">400</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:VBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:List</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">roomList</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span></li>
<li> <span class="an">borderSides</span>=<span class="s"><span class="dl">"</span><span class="k">top</span><span class="dl">"</span></span> <span class="an">dataProvider</span>=<span class="s"><span class="dl">"</span><span class="k">{rooms}</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;mx:Button</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">label</span>=<span class="s"><span class="dl">"</span><span class="k">Chat</span><span class="dl">"</span></span> <span class="an">enabled</span>=<span class="s"><span class="dl">"</span><span class="k">{roomList.selectedItem != null}</span><span class="dl">"</span></span></li>
<li> <span class="an">click</span>=<span class="s"><span class="dl">"</span><span class="k">joinRoom(roomList.selectedItem as String)</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;/mx:VBox&gt;</span></li>
<li> <span class="ta">&lt;/mx:Panel&gt;</span></li>
<li> <span class="ta">&lt;mx:Panel</span> <span class="an">title</span>=<span class="s"><span class="dl">"</span><span class="k">Topic: {currentRoom}</span><span class="dl">"</span></span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">chatPanel</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">500</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">400</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:HBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">paddingLeft</span>=<span class="s"><span class="dl">"</span><span class="k">10</span><span class="dl">"</span></span> <span class="an">paddingBottom</span>=<span class="s"><span class="dl">"</span><span class="k">10</span><span class="dl">"</span></span></li>
<li> <span class="an">paddingRight</span>=<span class="s"><span class="dl">"</span><span class="k">10</span><span class="dl">"</span></span> <span class="an">paddingTop</span>=<span class="s"><span class="dl">"</span><span class="k">10</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:VBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">150</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:Label</span> <span class="an">text</span>=<span class="s"><span class="dl">"</span><span class="k">User List</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;mx:List</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">dataProvider</span>=<span class="s"><span class="dl">"</span><span class="k">{users}</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;/mx:VBox&gt;</span></li>
<li> <span class="ta">&lt;mx:VBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:Label</span> <span class="an">text</span>=<span class="s"><span class="dl">"</span><span class="k">Chat</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;mx:TextArea</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">chatText</span><span class="dl">"</span></span> <span class="an">text</span>=<span class="s"><span class="dl">"</span><span class="k">{messages}</span><span class="dl">"</span></span></li>
<li> <span class="an">editable</span>=<span class="s"><span class="dl">"</span><span class="k">false</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">wordWrap</span>=<span class="s"><span class="dl">"</span><span class="k">true</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;mx:HBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li> <span class="ta">&lt;mx:TextInput</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">messageInput</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">minWidth</span>=<span class="s"><span class="dl">"</span><span class="k">0</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;mx:Button</span> <span class="an">label</span>=<span class="s"><span class="dl">"</span><span class="k">Send</span><span class="dl">"</span></span> <span class="an">click</span>=<span class="s"><span class="dl">"</span><span class="k">sendMessage( messageInput.text )</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li> <span class="ta">&lt;/mx:HBox&gt;</span></li>
<li> <span class="ta">&lt;/mx:VBox&gt;</span></li>
<li> <span class="ta">&lt;/mx:HBox&gt;</span></li>
<li> <span class="ta">&lt;/mx:Panel&gt;</span></li>
<li> <span class="ta">&lt;/mx:ViewStack&gt;</span></li>
<li><span class="ta">&lt;/mx:Application&gt;</span></li>
</ol>
<p>The above example application is a classic example of how most of us start out developing in Flex, we end up putting all our properties and event handlers in the same file. This may be fine for a tiny application but if we want to scale it up we are going to run into problems.</p>
<p>For example, Flex offers us the ability to create a custom <span class="caps"><span class="caps">MXML</span></span> component, that we can then reuse through our application, so as Tom showed, maybe we want to take the code that displays the Room list (above) and copy this into a separate mxml component . We can easily cut and paste the code and create a new <span class="caps"><span class="caps">MXML</span></span> file RoomList.mxml with the following code:</p>
<ol class="CodeRay">
<li><span class="pp">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span></li>
<li><span class="ta">&lt;mx:Panel</span> <span class="an">title</span>=<span class="s"><span class="dl">"</span><span class="k">Room List</span><span class="dl">"</span></span> <span class="an">xmlns:mx</span>=<span class="s"><span class="dl">"</span><span class="k">http://www.adobe.com/2006/mxml</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">300</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">400</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li>    <span class="ta">&lt;mx:VBox</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li>    <span class="ta">&lt;mx:List</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">roomList</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span></li>
<li>            <span class="an">borderSides</span>=<span class="s"><span class="dl">"</span><span class="k">top</span><span class="dl">"</span></span> <span class="an">dataProvider</span>=<span class="s"><span class="dl">"</span><span class="k">{rooms}</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li>    <span class="ta">&lt;mx:Button</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">label</span>=<span class="s"><span class="dl">"</span><span class="k">Chat</span><span class="dl">"</span></span> <span class="an">enabled</span>=<span class="s"><span class="dl">"</span><span class="k">{roomList.selectedItem != null}</span><span class="dl">"</span></span></li>
<li>            <span class="an">click</span>=<span class="s"><span class="dl">"</span><span class="k">joinRoom(roomList.selectedItem as String)</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
<li>  <span class="ta">&lt;/mx:VBox&gt;</span></li>
<li><span class="ta">&lt;/mx:Panel&gt;</span></li>
</ol>
<p>The problem is that we now have introduced two errors as the ArrayCollection ‘rooms’ is no longer in this mxml file then we cannot bind to it as the dataProvider for the roomList, also the event handler ‘joinRoom’ is no longer accessible. We could move these into this file, but then they couldn’t access the view stack and the problem goes on. So what we really need is to centralise our data into a central model and also centralise our even handlers into a controller.</p>
<h2>Centralising Data into a Model</h2>
<p>To centralise data, Tom took the Cairngorm’s modelLocator pattern, based around a <a href="http://en.wikipedia.org/wiki/Singleton_pattern">singleton pattern</a> . Where by the singleton ensures there is only ever one instance of itself, we define our Model as follows:</p>
<ol class="CodeRay">
<li><span class="r">package</span> com.chatopica.chat.model</li>
<li>{</li>
<li>  <span class="r">public</span> <span class="r">class</span> ChatModel</li>
<li>  {</li>
<li>    <span class="r">private</span> <span class="r">static</span> <span class="r">var</span> instance:ChatModel;</li>
<li>    <span class="r">public</span> <span class="r">function</span> ChatModel()</li>
<li>    {</li>
<li>      <span class="r">if</span>( instance != <span class="pc">null</span> )</li>
<li>      {</li>
<li>        <span class="r">throw</span>( new Error( <span class="s"><span class="dl">"</span><span class="k">there can be only one instance of ChatModel</span><span class="dl">"</span></span> ) );</li>
<li>      }</li>
<li>    }</li>
<li>    <span class="r">public</span> <span class="r">static</span> <span class="r">function</span> getInstance():ChatModel</li>
<li>    {</li>
<li>      <span class="r">if</span>( instance == <span class="pc">null</span> )</li>
<li>      {</li>
<li>        instance = new ChatModel();</li>
<li>      }</li>
<li>      <span class="r">return</span> instance;</li>
<li>    }</li>
<li>  }</li>
<li>}</li>
</ol>
<p>This is a typical singleton, implemented in ActionScript 3. As Tom pointed out in the eSeminar, ActionScript does not allow for private constructors, so here he is throwing an error if we try and instantiate the class and it is already instantiated. We can now access this Model anywhere in our application by simply typing</p>
<ol class="CodeRay">
<li>ChatModel.getInstance()</li>
</ol>
<p>So the next thing to do is move our ArrayCollection rooms into the Model so we end up with the following:</p>
<ol class="CodeRay">
<li><span class="r">package</span> com.chatopica.chat.model</li>
<li>{</li>
<li>  <span class="r">import</span> mx.collections.ArrayCollection;</li>
<li>  <span class="r">public</span> <span class="r">class</span> ChatModel</li>
<li>  {</li>
<li>    <span class="r">private</span> <span class="r">static</span> <span class="r">var</span> instance:ChatModel;</li>
<li>    [Bindable]</li>
<li>    <span class="r">public</span> <span class="r">var</span> rooms:ArrayCollection = new ArrayCollection( [ new Room(<span class="s"><span class="dl">"</span><span class="k">Flex</span><span class="dl">"</span></span>), new Room(<span class="s"><span class="dl">"</span><span class="k">Flash</span><span class="dl">"</span></span>), new Room(<span class="s"><span class="dl">"</span><span class="k"><span class="caps">AIR</span></span><span class="dl">"</span></span>), new Room(<span class="s"><span class="dl">"</span><span class="k">ColdFusion</span><span class="dl">"</span></span>) ] );</li>
<li>    <span class="r">public</span> <span class="r">function</span> ChatModel()</li>
<li>    {</li>
<li>      <span class="r">if</span>( instance != <span class="pc">null</span> )</li>
<li>      {</li>
<li>        <span class="r">throw</span>( new Error( <span class="s"><span class="dl">"</span><span class="k">there can be only one instance of ChatModel</span><span class="dl">"</span></span> ) );</li>
<li>      }</li>
<li>    }</li>
<li>    <span class="r">public</span> <span class="r">static</span> <span class="r">function</span> getInstance():ChatModel</li>
<li>    {</li>
<li>      <span class="r">if</span>( instance == <span class="pc">null</span> )</li>
<li>      {</li>
<li>        instance = new ChatModel();</li>
<li>      }</li>
<li>      <span class="r">return</span> instance;</li>
<li>    }</li>
<li>  }</li>
<li>}</li>
</ol>
<p>Because our ArrayCollection is now in the Model that we can access from anywhere. We can change the mx:List ‘roomList’ in RoomList.mxml to use the rooms ArrayCollection in the Model as the dataProvider as follows:</p>
<ol class="CodeRay">
<li><span class="ta">&lt;mx:List</span> <span class="an">id</span>=<span class="s"><span class="dl">"</span><span class="k">roomList</span><span class="dl">"</span></span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">height</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span>  <span class="an">borderSides</span>=<span class="s"><span class="dl">"</span><span class="k">top</span><span class="dl">"</span></span> <span class="an">dataProvider</span>=<span class="s"><span class="dl">"</span><span class="k">{ChatModel.getInstance().rooms}</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
</ol>
<p>We have now fixed the first issue but we still have the issue of the click handler for the button being inaccessible. We can solve this by centralising our events into a Controller</p>
<h2>Centralising Events into a Controller</h2>
<p>As with many event driven languages, ActionScript has a handy feature known as event bubbling. When an event is fired in a container, if the event has been set to bubble (by default events don’t bubble) it will also fire on it’s parent container, and in turn fire on the grandparent container all the way up to the main Application <span class="caps"><span class="caps">MXML</span></span> class. By bubbling events, we can register event listeners on the System Manager and listen for any global application events that are set to bubble. So we can dispatch an event anywhere in our application using the following, and we can listen for it on the System Manager:</p>
<ol class="CodeRay">
<li>dispatchEvent(new Event(<span class="s"><span class="dl">‘</span><span class="k">myEvent</span><span class="dl">‘</span></span>, <span class="pc">true</span>))</li>
</ol>
<p><em>Note:</em> We have set the second parameter (bubbles) on the Event constructor to true, which tells the event dispatcher to bubble this event.</p>
<p>As we are centralising our events we may need to send related information along with the event, for use by the event handler. For example, as the event handler is no longer able to directly query the roomList, to see which item has been selected (i.e. roomList.selectedItem), we need to send this information with the event. We can easily do this by creating a custom event that extends the Event class as follows:</p>
<ol class="CodeRay">
<li><span class="r">package</span> com.chatopica.chat.events</li>
<li>{</li>
<li>  <span class="r">import</span> com.chatopica.chat.model.Room;</li>
<li>  <span class="r">import</span> flash.events.Event;</li>
<li>  <span class="r">public</span> <span class="r">class</span> JoinRoomEvent <span class="r">extends</span> Event</li>
<li>  {</li>
<li>    <span class="r">public</span> <span class="r">static</span> <span class="r">const</span> JOIN:<span class="pt">String</span> = <span class="s"><span class="dl">"</span><span class="k">joinRoom</span><span class="dl">"</span></span>;</li>
<li>    <span class="r">public</span> <span class="r">var</span> room:Room;</li>
<li>    <span class="r">public</span> <span class="r">function</span> JoinRoomEvent( room:Room )</li>
<li>    {</li>
<li>      <span class="pc">super</span>( <span class="caps">JOIN</span>, <span class="pc">true</span> );</li>
<li>      <span class="pc">this</span>.room = room;</li>
<li>    }</li>
<li>  }</li>
<li>}</li>
</ol>
<p>Above we have simply extended the event using inheritance and have added a public property called room (of type Room, Tom has created a Room class that holds the name as well as a collection of Users). We have also declared the event name/type as a constant <span class="caps"><span class="caps">JOIN</span></span> = “joinRoom”. This allows us to reference this event anywhere. In our constructor, we call the constructor on the parent class (Event) setting the event name/type to “joinRoom” and stating that it should bubble (like this we don’t have to specify that it bubbles when we create a new JoinRoomEvent). We then set the room property from the parameter passed to the constructor.</p>
<p>So now we can fire a JoinRoomEvent anywhere in our application, passing in a room object. The event handler listening for this event will have access to this room object. So we can fix the last error in RoomList.mxml as follows:</p>
<ol class="CodeRay">
<li><span class="ta">&lt;mx:Button</span> <span class="an">width</span>=<span class="s"><span class="dl">"</span><span class="k">100%</span><span class="dl">"</span></span> <span class="an">label</span>=<span class="s"><span class="dl">"</span><span class="k">Chat</span><span class="dl">"</span></span> <span class="an">enabled</span>=<span class="s"><span class="dl">"</span><span class="k">{roomList.selectedItem != null}</span><span class="dl">"</span></span></li>
<li>      <span class="an">click</span>=<span class="s"><span class="dl">"</span><span class="k">dispatchEvent( new JoinRoomEvent( roomList.selectedItem as Room ) )</span><span class="dl">"</span></span><span class="ta">/&gt;</span></li>
</ol>
<p>So far we have created a custom event and we have discussed where to look to find bubbling events but we have not looked at how to do this.</p>
<h2>The Controller</h2>
<p>As I mentioned before, we can listen to all events that have been set to bubble on the systemManager and as UIComponent (anyone who has created a custom component will know this one) has a reference to systemManager within it, we can extend this class. The other benefit of extending UIComponent for our class that will be our central event handler or Controller is that we can then use it in <span class="caps"><span class="caps">MXML</span></span>.</p>
<p>We extend the UIComponent as follows:</p>
<ol class="CodeRay">
<li><span class="r">package</span> com.chatopica.chat.controller</li>
<li>{</li>
<li>  <span class="r">import</span> com.chatopica.chat.events.JoinRoomEvent;</li>
<li>  <span class="r">import</span> com.chatopica.chat.events.SendMessageEvent;</li>
<li>  <span class="r">import</span> com.chatopica.chat.model.ChatModel;</li>
<li>  <span class="r">import</span> flash.events.Event;</li>
<li>  <span class="r">import</span> mx.core.UIComponent;</li>
<li>  <span class="r">import</span> mx.events.FlexEvent;</li>
<li>  <span class="r">public</span> <span class="r">class</span> ChatController <span class="r">extends</span> UIComponent</li>
<li>  {</li>
<li>    <span class="r">public</span> <span class="r">function</span> ChatController()</li>
<li>    {</li>
<li>      addEventListener( FlexEvent.CREATION_COMPLETE, setupEventListeners );</li>
<li>    }</li>
<li>    <span class="r">private</span> <span class="r">function</span> setupEventListeners( <span class="pt">event</span>:Event ):<span class="r">void</span></li>
<li>    {</li>
<li>      systemManager.addEventListener( JoinRoomEvent.JOIN, handle_joinRoom );</li>
<li>    }</li>
<li>    <span class="r">private</span> <span class="r">function</span> handle_joinRoom( <span class="pt">event</span>:JoinRoomEvent ):<span class="r">void</span></li>
<li>    {</li>
<li>      ChatModel.getInstance().currentActivity = ChatModel.VIEWING_CHAT;</li>
<li>    }</li>
<li>  }</li>
<li>}</li>
</ol>
<p><em>Note::</em> Above we have not directly added an event listener to the systemManager in the ChatController constructor. In fact we can’t to do this, because at the time the class is instantiated the systemManager is not initialised and is Null. We would therefore be adding an event listener to nothing. We get around this by adding an event listener for the global FlexEvent.CREATION_COMPLETE event, and at that point we can then add our event handler(s) to the systemManager.</p>
<h2>Controlling the View Stack</h2>
<p>The final thing we have left to achieve is the ability to change the View Stack from the controller, we first need to store the currentActivity or state in the Model as follows:</p>
<ol class="CodeRay">
<li>    <span class="r">public</span> <span class="r">static</span> <span class="r">const</span> VIEWING_CHAT:<span class="pt">String</span> = <span class="s"><span class="dl">"</span><span class="k">viewingChat</span><span class="dl">"</span></span>;</li>
<li>    <span class="r">public</span> <span class="r">static</span> <span class="r">const</span> VIEWING_ROOMS:<span class="pt">String</span> = <span class="s"><span class="dl">"</span><span class="k">viewingRooms</span><span class="dl">"</span></span>;</li>
<li>    [Bindable]</li>
<li>    <span class="r">public</span> <span class="r">var</span> currentActivity:<span class="pt">String</span>;</li>
</ol>
<p>In addition to the currentActivity property above, we have also added a constant value for each state. Unfortunately it is not as simple as binding this property to the mx:ViewStack, but that does not mean it isn’t easy. All we have to use is the ChangeWatcher class that monitors a property and fires and event when it changes. We do this in the file MainView.mxml that holds out viewstack as follows:</p>
<ol class="CodeRay">
<li><span class="pp">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span></li>
<li><span class="ta">&lt;mx:ViewStack</span> <span class="an">xmlns:mx</span>=<span class="s"><span class="dl">"</span><span class="k">http://www.adobe.com/2006/mxml</span><span class="dl">"</span></span> <span class="an">resizeToContent</span>=<span class="s"><span class="dl">"</span><span class="k">true</span><span class="dl">"</span></span> <span class="an">xmlns:views</span>=<span class="s"><span class="dl">"</span><span class="k">com.chatopica.chat.views.</span><span class="dl"><strong>"</strong></span></span><span class="ta"><strong>&gt;</strong></span></li>
<li><strong>  <span class="ta">&lt;mx:Script&gt;</span></strong></li>
<li><strong>    <span class="er">&lt;</span>![CDATA[</strong></li>
<li><strong>      import mx.events.PropertyChangeEvent;</strong></li>
<li><strong>      import mx.binding.utils.ChangeWatcher;</strong></li>
<li><strong>      import com.chatopica.chat.model.ChatModel;</strong></li>
<li><strong>      </strong></li>
<li><strong> private var activityWatcher:ChangeWatcher = ChangeWatcher.watch( ChatModel.getInstance(), "currentActivity", handle_activityChange );</strong></li>
<li><strong>      </strong></li>
<li><strong>      private function handle_activityChange( event:PropertyChangeEvent ):void</strong></li>
<li><strong>      {</strong></li>
<li><strong>        if( event.newValue == ChatModel.VIEWING_CHAT )</strong></li>
<li><strong>        {</strong></li>
<li><strong>          selectedChild = chatPanel;</strong></li>
<li><strong>        }</strong></li>
<li><strong>      }</strong></li>
<li><strong>    ]]<span class="er">&gt;</span></strong></li>
<li><strong>  <span class="ta">&lt;/mx:Script&gt;</span></strong></li>
<li><strong>      </strong></li>
<li><strong>  <span class="ta">&lt;views:RoomList</span><span class="ta">/&gt;</span></strong></li>
<li><strong>  </strong></li>
<li><span class="ta"><strong>&lt;/mx:ViewStack&gt;</strong></span></li>
</ol>
<p><strong>    </strong><strong>Now, when the value of currentActivity in the ChatModel changes, Flex will dispatch a PropertyChangedEvent. We can then listen for this event and change the view, accessing what the new value of currentActivity is in the newValue property of the PropertyChangeEvent (shown above as event.newValue).</strong></p>
<p><strong>    </strong></p>
<h2><strong>Refactor the rest of your application…</strong></h2>
<p><strong>    </strong><strong>Having done this for the RoomList component, we can now repeat the process for the code that implements the chat window. Finally we are simply left with the following in our mx:Application tags:</strong></p>
<ol class="CodeRay">
<li><span class="pp"><strong>&lt;?xml version="1.0" encoding="utf-8"?&gt;</strong></span></li>
<li><span class="ta"><strong>&lt;mx:Application</strong></span><strong> <span class="an">xmlns:mx</span>=<span class="s"><span class="dl">"</span><span class="k">http://www.adobe.com/2006/mxml</span><span class="dl">"</span></span> <span class="an">layout</span>=<span class="s"><span class="dl">"</span><span class="k">vertical</span><span class="dl">"</span></span> <span class="an">xmlns:views</span>=<span class="s"><span class="dl">"</span><span class="k">com.chatopica.chat.views.</span></span></strong><span class="dl">"</span> <span class="an">xmlns:controller</span>=<span class="s"><span class="dl">"</span><span class="k">com.chatopica.chat.controller.*</span><span class="dl">"</span></span><span class="ta">&gt;</span></li>
<li>    <span class="ta">&lt;controller:ChatController</span><span class="ta">/&gt;</span></li>
<li>    <span class="ta">&lt;views:MainView</span><span class="ta">/&gt;</span></li>
<li><span class="ta">&lt;/mx:Application&gt;</span></li>
</ol>
<p>This process now makes our code cleaner, loosely coupled and more <span class="caps"><span class="caps">DRY</span></span> (Don’t Repeat Yourself), easy to scale and we can reuse these components without the risk of breaking our system.</p>
<p>Thanks again to Tom for the excellent eSeminar which has really clarified my understanding for the necessities of using an architecture like this.</p>
<p><a href="http://www.tombray.com/?p=57">Source code for this example was kindly supplied by Tom Bray, you can download them directly from his blog.</a></p>
<p><a href="http://www.tombray.com/?p=59">A transcript of the questions and answers session from Tom’s eSemminar, is also available on his blog</a></p>
<p><em>Update 23/01/08: </em><a href="http://www.gotripod.com/2008/01/21/scaling-up-easymvc-as-your-flex-application-grows-part-1/"><em>I have added an article on scaling up EasyMVC, you can read it by clicking here.</em> </a></p>
<p>For more information:</p>
<ul>
<li><a href="http://www.tombray.com/">Tom Bray</a></li>
<li><a href="http://www.chatopica.com/">Chatopica</a></li>
<li><a href="http://www.searchcoders.com/">SearchCoders</a></li>
<li><a href="http://www.adobe.com/products/flex/">Adobe Flex</a></li>
</ul>

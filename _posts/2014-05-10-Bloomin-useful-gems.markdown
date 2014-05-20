---
layout: post
title: Bloomin useful Gems
published: false
---

##Development Gems (Geek Alert)
	 	 	
In the Go Tripod team, during our Ruby On Rails development process we’re always trying to ease our workflow. We have tested plenty of gems supporting our everyday programmer work. Some of them were interesting - but unfortunately not handy in real work, but we found a few to be really useful.

For those not into the world of development, a gem file is an archive. The archive contains a piece of computer code, a specification describing its functions and documentation. Gems are in effect 3rd party libraries that help us quickly build applications.

In today’s entry, Slaw one of Go Tripod’s senior developers, shares our three favourite ones.

##better_errors

This is our current must-have gem. In fact, today I can barely imagine working without **better_errors** entry in my Gemfile.

It replaces the current – old-fashion error page – with a fancy one containing a lot of useful elements, like source code inspection, variables inspection and live REPL on every stack frame. Ok, but what does “live REPL” mean? According to wikipedia - 

*“A read–eval–print loop (REPL) is a simple, interactive computer programming environment.”. Exactly! It means that we can run ruby code on every stack frame in our browser! If you are not convinced about this feature, just give it a try, after some time you won't be able to work without it!*

Installation is straightforward. *Because of the nature of this gem, please be sure that you add the following entries to the development group!*

```<gemfile configuration – this will be somekind of plugin for highlighting code>
group :development do
gem “better_errors”
gem “binding_of_caller”
end	
</gemfiled>```


##jazz_hands

In fact, jazz_hands is not a regular gem. It is rather a bundle of great console gems, mostly based on **Pry** console. I will introduce only couple of its features, if you want to find more information please visit [gem page](https://github.com/nixme/jazz_hands).


##Readable Output

One of the most frustrating things in the console is completeley unreadable output for non-atomic data like arrays, objects or hashes. Also, the lack of colours can be annoying after hours of work.

(to GT Team – I wll remove campaignmonitor helper name ;))



##Additional Helpers

Do you want to display all routes, when working in the console? Well, you need to open new terminal.. With jazz_hands you can use **show-routes** directly in the console now! You can also use **show-models** to display all models, **show-source** to display formatted and coloured source code, **show-doc** to display documentation or **show-middleware** to display list of middleware! If you want to find all show-* helpers, just type show- and press **tab** two times.


##History Management

Do you like the Linux history command? Now you can use **history** in your console to check history of operations. You can also utilise options: tail, head, grep – for instance **history - -grep show-**

You can re-invoke line using - -replay N option.


… just to name a few! If you want to find more you can go directly to a bundle gems pages, where you can find examples and documentation.

Installation is as easy as adding **jazz_hands** to your Gemfile.


##Brakeman

Finally I want to describe the Brakeman gem. This is a static analysis security scanner for Ruby on Rails applications, which can catch most common vulnerabilities.

Installation is easy (like for almost every gem!) - you just need to add a brakeman entry to your Gemfile.

After installation the brakeman command is available in your system path, then you can then run the **Brakeman** in your application root directory.

Example of running brakeman for application using Rails 4.0.0


I want to cover couple useful types of vulnerabilities recognized by the **Brakeman** scanner:

###SQL Injection

{% highlight sql %}
Summary.where("email like '%#{params[:q]}%'")
{% endhighlight %}

This is one of the basic vulnerabilities in **Active Record**, and also often encountered. Using the **where** method with string interpolation containing user supplied values is open for SQL injections.


SQL Injection        | Possible SQL injection near line 7: Summary.where("email like '%#{+params[:q]+}%'")



###Unlimited File Access

{% highlight ruby %}
File.open("documents/#{params[:category]}")
{% endhighlight %}

Creating file name from data supplied by user can be really harmful. Example ? Try to assign ‘../config/database.yml” to params[:category]..

{% highlight ruby %}
File Access          | Parameter value used in file name near line 7: File.open("documents/#{+params[:category]+}") 
{% endhighlight %}

###Regular Expression vulnerability

According to http://guides.rubyonrails.org/security.htm *“A common pitfall in Ruby's regular expressions is to match the string's beginning and end by ^ and $, instead of \A and \z.”*

In Ruby, the ^ and $ pair means line beginning and line end, not beginning and end of string. What this means in practice ? 

{% highlight ruby %}
 only_digit = /^[1-9]*$/
  only_digit.match("x.match("javascript:run_code();/*\n123\n*/") # < MatchData “123” > 
{% endhighlight %}

We have dangerous security flaw in the most unexpected place! Luckily, replacing ^ and $ with \A and \z will solve this issue.

{% highlight ruby %}
 only_digit = /\A[1-9]\z$/
  only_digit.match("x.match("javascript:run_code();/*\n123\n*/") # nil 
{% endhighlight %}

Why this is so important ? Remember, that regular expressions are used heavily in [model validations](http://guides.rubyonrails.org/active_record_validations.html)! 

All possible recognised vulnerabilities can be found in the [documentation](http://brakemanscanner.org/docs/warning_types/t). Fortunately, most of the problems were fixed in Rails 3 version. 

Do you know any more useful development gems? Please share in the comments!

Slaw.








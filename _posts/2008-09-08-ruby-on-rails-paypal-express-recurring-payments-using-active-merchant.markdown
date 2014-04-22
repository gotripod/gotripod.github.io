---
layout: post
status: publish
published: true
title: Ruby on Rails, PayPal Express Recurring Payments using Active Merchant
author: Colin Ramsay
author_login: colin
author_email: colin@gotripod.com
excerpt: ! 'I recently needed to setup recurring payments through PayPal''s express
  checkout for a subscription based site I have writen using Ruby on Rails. There
  is already an excellent framework for interacting with most payment gateways, including
  PayPal, for Ruby called <a href="http://www.activemerchant.org/">Active Merchant</a>.
  Unfortunately recurring payments support in Active Merchant for PayPal Express Checkout
  is limited to a <a href="http://jadedpixel.lighthouseapp.com/projects/11599-active-merchant/tickets/17-patch-creating-paypal-recurring-payments-profile-with-activemerchant#ticket-17-4">script
  pasted into their lighthous bug tracking system</a>. The trouble is that this script
  only covers creating subscription profiles and also later getting details of that
  profile, but I needed to be able to suspend and cancel subscriptions profiles as
  well as make changes to the subscription from my site.


'
wordpress_id: 361
wordpress_url: http://clockobj.co.uk/?p=128
date: !binary |-
  MjAwOC0wOS0wOCAwOTozMTo1MiArMDIwMA==
date_gmt: !binary |-
  MjAwOC0wOS0wOCAwOTozMTo1MiArMDIwMA==
categories:
- Ruby on Rails
tags:
- Ruby on Rails
- PayPal
comments:
- id: 195
  author: leon
  author_email: leondu@gmail.com
  author_url: http://leondu.com
  date: !binary |-
    MjAwOC0wOS0wOSAxMTozMToyMiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0wOSAxMTozMToyMiArMDIwMA==
  content: ! '/vendor/plugins/active_merchant/billing/gateways/

    should be:

    /vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/'
- id: 196
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0wOSAxMTozMzo0OCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0wOSAxMTozMzo0OCArMDIwMA==
  content: Thanks, I missed that one!
- id: 197
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMC0xNiAyMToxNzoxNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0xNiAyMToxNzoxNSArMDIwMA==
  content: ! 'Hi David, I think even with a PayPal website payments Pro account you
    would be limited to how much of an increase you can process. It depends what you
    are trying to do. If it is a discount trial period PayPal may let you do this
    or get the user to sign up to a new recurring agreement?


    Alternatively it may be worth looking at some of the other payment gateways supported
    by Active Merchant.'
- id: 198
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMS0wNiAyMzo1Mjo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAyMzo1Mjo0MSArMDEwMA==
  content: ! 'Hi Adam,


    Unfortunately to limitations in PayPals API, you can only recieve IPN notifications
    for subscriptions if you have set it up in your PayPal account (Under Profile
    - Instant Notification) - Enter the IPN address and you will then get notifications
    for new subscription profiles, each payment and if they cancel.


    Also note from my experience the Sandbox is quite flacky and every so often stops
    sending these notifications and you have to switch this setting off and then back
    on again to get it working again. Luckily the Live environment does not suffer
    from these problems!'
- id: 199
  author: evan
  author_email: esparkman@esdezines.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOS0xNiAwMDoxMjozMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNiAwMDoxMjozMCArMDIwMA==
  content: Jon Thanks for this great tutorial. Any chance I could discuss this in
    more detail with you?
- id: 200
  author: Adam
  author_email: adamuk@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wOCAxMjowMzoxMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wOCAxMjowMzoxMSArMDEwMA==
  content: ! 'Excellent thanks Jon, turns out you''ve answered another question! The
    reason I wanted to talk with the API was because I was not receiving IPN notifications
    and I thought there was another way to collect the data.


    Makes developing my platform 10x harder as their simulator is a load of tosh.


    Thanks again!'
- id: 201
  author: David
  author_email: dralison@gmail.com
  author_url: http://www.davidalison.com
  date: !binary |-
    MjAwOC0xMC0xNiAyMDo1NTozMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0xNiAyMDo1NTozMCArMDIwMA==
  content: Hi Jon - great stuff, exactly what I am looking for. Thanks for taking
    the time to write this down. In reading through the PayPal express checkout rules
    it says that a person's payment profile can only be increased by 20% in a 180
    day period. Is there a better way to handle subscriptions through ActiveMerchant
    and PayPal without incurring that limitation? Perhaps something other than Express
    Checkout?
- id: 202
  author: Thomas
  author_email: thomas.luce@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMC0wMSAxNTo0MzowNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0wMSAxNTo0MzowNiArMDIwMA==
  content: ! "Hi!\n\nFirst, great plugin, and great explanation! This is very helpful!\n\nI
    do have one small problem, though. I have pasted my controller code below, but
    the issue is that when the user clicks the \"Agree and Continue\" button in paypal,
    I get redirected to another paypal page, which the browser claims to not be able
    to connect to....\n\ndef change_amt\n    # TODO: check if this user already has
    a donation amount, and if so, update instead of creating a new one.\n    amount
    = (params[:donate][:amount].to_f * 100).to_i\n    gw = ActiveMerchant::Billing::PaypalExpressRecurringNvGateway.new(
    :login =&gt; PAYPAL_ACCOUNT, :password =&gt; PAYPAL_PASSWORD, :signature =&gt;
    PAYPAL_SIGNATURE )\n    response = gw.setup_agreement(\"Subscription $#{params[:donate][:amount]}
    per month\", :cancel_return_url =&gt; \"http://#{PAYPAL_RETURN_URL}/cancel\",
    :return_url =&gt; \"https://#{PAYPAL_RETURN_URL}/complete\" )\n\n    session[:amount]
    = amount\n    redirect_to gw.redirect_url_for(response.token)\n  end\n\n  def
    complete\n    gw = ActiveMerchant::Billing::PaypalExpressRecurringNvGateway.new(
    :login =&gt; PAYPAL_ACCOUNT, :password =&gt; PAYPAL_PASSWORD, :signature =&gt;
    PAYPAL_SIGNATURE )\n    response = gw.create_profile(session[:amount], params[:token],
    :currency =&gt; \"USD\", :reference =&gt; current_user.id)\n    current_user.paypal_profile_id
    = response.params[\"profileid\"]\n    current_user.monthly_donation = session[:amount]\n
    \   current_user.billing_date = Date.today\n    current_user.save\n\n    session[:amount]=
    nil\n    session[:response_token] = nil\n    flass[:notice] = \"Your monthly donation
    has been updated\"\n    redirect_to current_user\n  end\n\nfyi: I'm using the
    :test parameter, so everything is going to www.sandbox.paypal.com\n\nAny help
    anyone can offer would be much appreciated!\n\nThanks,\n-Thomas"
- id: 203
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0xNiAyMjo0MDoyNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNiAyMjo0MDoyNyArMDIwMA==
  content: ! 'Yeah sure, just drop me an email via the contact form.


    Thx'
- id: 204
  author: grosser
  author_email: grosser.michael@gmail.com
  author_url: http://pragmatig.wordpress.com
  date: !binary |-
    MjAwOC0wOS0xNyAxNDo0MToyNyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNyAxNDo0MToyNyArMDIwMA==
  content: ! 'what does :reference=&gt;34 do ??


    when i return and do

    gw = ..Gateway.new

    gw.create_profile(2500, params[:token], :currency =&gt; "EUR", :reference =&gt;
    "34")


    the response looks like this:

    --- !ruby/object:ActiveMerchant::Billing::PaypalExpressNvResponse authorization:
    avs_result: message: code: street_match: postal_match: cvv_result: message: code:
    fraud_review: message: Security header is not valid params: timestamp: "2008-09-17T14:40:32Z"
    correlationid: 9b289d182ec1 l_severitycode0: Error build: "690663" version: "50.0000"
    l_longmessage0: Security header is not valid l_shortmessage0: Security error l_errorcode0:
    "10002" ack: Failure success: false test: true'
- id: 205
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0xNyAxNDo0OTo1MSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNyAxNDo0OTo1MSArMDIwMA==
  content: ! 'It looks like it does not like your API username, password or Signature.
    Make sure you double check these by logging into your PayPal account and looking
    under Profile -> API Access.


    Regards,


    Jon'
- id: 206
  author: grosser
  author_email: grosser.michael@gmail.com
  author_url: http://pragmatig.wordpress.com
  date: !binary |-
    MjAwOC0wOS0xNyAxNToxMjozNiArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNyAxNToxMjozNiArMDIwMA==
  content: ! "can you post some controller code?\nI think im doing something wrong...\nThe
    credentials should be valid since the initial request does work(sending the user
    to my store+returning)\n\n  def abo\n    gw = ActiveMerchant::Billing::PaypalExpressRecurringNvGateway.new(
    :login =&gt; CFG[:paypal_login], :password =&gt; CFG[:paypal_password], :signature
    =&gt; CFG[:paypal_signature] )\n    response = gw.setup_agreement(\"Test Subscription\",
    :cancel_return_url =&gt; root_url, :return_url =&gt; abo_return_orders_url )\n
    \   redirect_to gw.redirect_url_for(response.token)\n  end\n\n  def abo_return\n
    \   gw = ActiveMerchant::Billing::PaypalExpressRecurringNvGateway.new( :login
    =&gt; CFG[:paypal_account], :password =&gt; CFG[:paypal_password], :signature
    =&gt; CFG[:paypal_signature] )\n    response = gw.create_profile(2500, params[:token],
    :currency =&gt; \"EUR\", :reference =&gt; \"34\")\n    flash[:error] = response.to_yaml\n
    \   flash[:notice] = response.params['profileid']\n  end"
- id: 207
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0xNyAxNTozMzoxOSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNyAxNTozMzoxOSArMDIwMA==
  content: This is very bizarre as I am using exactly the same code as you - the only
    difference is the currency I am using is GBP, are you testing against the sandbox
    or live?
- id: 208
  author: grosser
  author_email: grosser.michael@gmail.com
  author_url: http://pragmatig.wordpress.com
  date: !binary |-
    MjAwOC0wOS0xNyAxNTo1NzoxMCArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xNyAxNTo1NzoxMCArMDIwMA==
  content: ! 'you used response.token which failed so i used params[:token]


    ill give it another try tomorrow, maybe only a strange bug...

    (ill try $/GBP too...)'
- id: 209
  author: David
  author_email: dralison@gmail.com
  author_url: http://www.davidalison.com
  date: !binary |-
    MjAwOC0xMC0yMCAyMjoyMToxMSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0yMCAyMjoyMToxMSArMDIwMA==
  content: Thanks Jon, I'm going to start looking at other gateways that are supported
    by ActiveMerchant.
- id: 210
  author: grosser
  author_email: grosser.michael@gmail.com
  author_url: http://pragmatig.wordpress.com
  date: !binary |-
    MjAwOC0wOS0xOCAxMTo1OTowMyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0xOCAxMTo1OTowMyArMDIwMA==
  content: ! 'i had to add:

    require File.join %w[active_merchant billing gateways paypal_nv paypal_nv_common_api]
    or else i would get uninitialized constant ActiveMerchant::Billing::PaypalExpressRecurringNvGateway::PaypalNvCommonAPI
    when running db:migrate very strange...'
- id: 211
  author: Leon
  author_email: leondu@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOS0yMyAwMzozMjoxNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0yMyAwMzozMjoxNSArMDIwMA==
  content: ! 'Hi,


    In your post:

    "if you are using PayPal Express (which is free) independently of PayPal Website
    Payments Pro (Which you need to pay for) the US PayPal Express API works for all
    countries (apart from Germany I believe) and as you can see above I am passing
    in the UK currency."


    What do you mean by "apart from Germany I believe"? Is that to say Germany currency
    is not supported?'
- id: 212
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0wOS0yMyAwODoyODoxOSArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0yMyAwODoyODoxOSArMDIwMA==
  content: ! 'Hi Leon,


    I am not totally sure what the issue is, but PayPal stated the following:


    "Yes - the API is the same for the UK and the US. There are only some

    small changes if you plan to accept payments in Germany as they have

    some different payment systems over there that require slightly

    different treatment.:


    I am not sure what these changes are but if you do find out I would be greatful
    if you could amend the code to work for developers with German PayPal accounts.


    Thanks'
- id: 213
  author: David
  author_email: dralison@gmail.com
  author_url: http://www.davidalison.com
  date: !binary |-
    MjAwOC0xMS0wNiAxNDoxMTowNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAxNDoxMTowNyArMDEwMA==
  content: OK Jon, total newbie Rails question for you on this. How are you maintaining
    the state of the response object between redirects to the PayPal site? Any help
    you can provide is greatly appreciated.
- id: 214
  author: David
  author_email: dralison@gmail.com
  author_url: http://www.davidalison.com
  date: !binary |-
    MjAwOC0xMS0wNiAxNDozOToxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAxNDozOToxMyArMDEwMA==
  content: Sorry Jon - nevermind. I just reread Grosser's comments above and see how
    he was doing it. That worked great for me.
- id: 215
  author: Adam
  author_email: adam@undefinedfunction.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNiAyMDoyMzozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAyMDoyMzozNSArMDEwMA==
  content: ! 'Awesome, thanks for this, works a treat and bugged me for weeks how
    to do this.


    Have you done much with IPN notifications, your extension and paypal? I''m just
    not sure how I can tell if a user''s subscription was cancelled by them via Paypal?


    Is there something in get_profile_details where I can get the status etc of and
    status/history of payments made? I want to be able to dynamically create and update
    invoices / receipts for my users.


    Thanks!'
- id: 216
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMi0xOSAxMDowNzowNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xOSAxMDowNzowNSArMDEwMA==
  content: ! '@Vaibhav, @Amitava, this class is dependent on the PayPalNvCommonAPI
    class being present. I will need to investigate where it has been moved to or
    whether it has been removed and why as I know the project owners are keen to integrate
    my class.'
- id: 217
  author: Vaibhav
  author_email: djdon11@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0xNyAwOTo0MjoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAwOTo0MjoyNyArMDEwMA==
  content: ! "Hello Jon\ni am getting this error after doing all the above mentioned
    things\n\nNoMethodError (undefined method `add_pair' for #):\n    /vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/paypal_express_recurring_nv.rb:56:in
    `build_setup_agreement'\n    /vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/paypal_express_recurring_nv.rb:25:in
    `setup_agreement'\n    /app/controllers/users_controller.rb:146:in `create'\n\nCan
    you help me over this please"
- id: 218
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xNyAwMToyNDoyMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAwMToyNDoyMiArMDEwMA==
  content: ! 'HI jon,

    Thanks for the great ''extension'' for this gateway.  I too am watching ticket
    17 to see if they can add it to the core functionality of Active Merchant.


    I''ve taken the liberty to mash your article/extension with one that Cody Fauser
    did.  You''ll see it includes the controller and views needed to get your extension
    working in an app.


    It''s available here:http://nerbie69.blogspot.com/2008/11/recurring-payments-using-paypal-express.html.


    Two questions though:  Grosser on 09/17 mentioned that you had response.token,
    when it should be params{:token] in the gw.create_profile line.  Are you going
    to change that, or are we both missing something?


    Secondly, this may be basic, but you store the profile_id in the db, right?  I
    mean it makes sense and all, but i guess we''d need a model to hold that table/column
    right?  where do you put it?  Cause in my examples, i don''t really store any
    of the details, do you?  Would love to know your thoughts on this profile storing.'
- id: 219
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMS0xNyAwOToyNTowMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAwOToyNTowMiArMDEwMA==
  content: ! '@nerbie69


    You should be able to use response.token (I do in my code) the token parameter
    is exposed by one of the classes I extend (can''t remember which) but it is part
    of the ActiveMerchant framework which handles normal PayPal Express NVP responses
    and it basically maps response[:token] to response.token. I am not sure why you
    are having difficulties with it?


    I recommend storing the profileid as you can then suspend, modify or cancel the
    subscription profile. I store mine in the user model however it will greatly depend
    on your app. I also store the ipns for each transaction which allows me to use
    the standard NVP api to automate refunds etc from the transaction id.


    I hope that helps,


    Jon'
- id: 220
  author: Amitava
  author_email: amitava580@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0xOSAwNToyMzoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xOSAwNToyMzoyMyArMDEwMA==
  content: ! 'uninitialized constant ActiveMerchant::Billing::PaypalExpressRecurringNvGateway::PaypalNvCommonAPI


    The above exception is thrown after placing ''paypal_express_recurring_nv.rb''
    into ''/vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/''.


    I have installed the plugin from github and it only has ''paypal_common_api.rb''
    but not ''paypal_nv_common_api.rb''. If I change the line ''include PaypalNvCommonAPI''
    to ''include include PaypalCommonAPI'' then it shows the following error:


    NoMethodError (undefined method `add_pair’ for #):

    /vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/paypal_express_recurring_nv.rb:56:in
    `build_setup_agreement’

    /vendor/plugins/active_merchant/lib/active_merchant/billing/gateways/paypal_express_recurring_nv.rb:25:in
    `setup_agreement’'
- id: 221
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xNyAxMzowMTowMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAxMzowMTowMCArMDEwMA==
  content: ! 'thanks jon.


    i found out why the response.token bit wasn''t working.  In my version of activemerchant
    we need to add:


    require File.dirname(__FILE__) + ''/paypal_nv/paypal_nv_common_api''

    require File.dirname(__FILE__) + ''/paypal_nv/paypal_express_nv_response''


    to the top of your extension.  This gives us access to the response methods inside.


    And your line profile_id = response.params[:profileid] really doesn''t store it,
    does it.  It is just an example, eh?  that''s cool if it is, i just want to make
    sure the code as written isn''t supposed to work.'
- id: 222
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMS0xNyAxNDowNToxOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAxNDowNToxOSArMDEwMA==
  content: ! "@nerbie69\n\nMy class is as is, I run ActiveMerchant as a plugin so
    I am not sure if this affects thinks. I also have \"include ActiveMerchant::Billing\"
    in my contoller.\n\nYou are correct, I am only showing an example but in the case
    of my own code I have the following:\n\nif response.success?\n   ...\n   @user.payment_profile_id
    = response.params[\"profileid\"]\n   @user.save\nend\n\nI hope that clarifies
    things.."
- id: 223
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xNyAxNDoxMzoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAxNDoxMzoxNyArMDEwMA==
  content: ! 'i don''t think my profileid is being passed.


    if i do a params.inspect, i would assume that all of the params coming from paypal
    would be included in the inspect call.


    here is what is coming back.

    {"token"=&gt;"RP-1YC815571E051481U", "action"=&gt;"confirm", "controller"=&gt;"subscriptions"}


    it appears it''s only token.  since this call is coming from paypal, i wonder
    what i can do to ensure the profile_id is also passed.  thoughts?'
- id: 224
  author: Jon
  author_email: jon@miletbaker.com
  author_url: http://clockobj.co.uk
  date: !binary |-
    MjAwOC0xMS0xNyAxNDoxNTozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAxNDoxNTozMyArMDEwMA==
  content: You need to call response = gw.create_profile(2500, response.token, :currency
    => "GBP", :reference => "34") first. Then the profile id will be in your response
    object
- id: 225
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xNyAxNTowMDozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAxNTowMDozMSArMDEwMA==
  content: ! 'crud.  that is what is borking each time... hmm, hitting the code to
    see why the response.token is not working for me.


    Thanks eh.  You''ve been a great help, sorry for the questions.  maybe they''ll
    help someone else?'
- id: 226
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xNyAyMzoxNTowNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xNyAyMzoxNTowNSArMDEwMA==
  content: ! 'i still get the nil.object type of error, when i use response.token,  (nil.token),


    however,  by adding if response.success?; @profile_id = params[''profileid''];
    end

    actually returns the profile id.  i''m excited.  thanks again.'
- id: 227
  author: nerbie69
  author_email: philipjingram@yahoo.com
  author_url: http://nerbie69.blogspot.com
  date: !binary |-
    MjAwOC0xMS0xOCAwMjowMDoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xOCAwMjowMDoyMSArMDEwMA==
  content: ! 'is it possible that response is a reserved word?  I mean i changed to
    an instance variable of @cat = gateway.get_profile_details(@user.profile_id),
    and i then do a @cat.inspect in my view, and i see all the paypal info.


    however if i change @cat to response (not an instance variable but just a variable)
    and then do a response.inspect in my view, i get the usual response debug information
    (around 100 lines on my browser).


    Just thought i''d share.  needless to say, i''m sticking with @cat.'
- id: 228
  author: David Parkinson
  author_email: david@davidparkinson.com
  author_url: http://www.davidparkinson.com
  date: !binary |-
    MjAwOC0xMS0xOSAwODowMzo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xOSAwODowMzo0MiArMDEwMA==
  content: ! 'Jon:


    Great tutorial!  I must it''s a real bummer with the Express Checkout API not
    supporting IPN.  What are you to do if you collect payments for multiple websites
    from one PayPal account?


    I also verified CreateRecurringPaymentsProfile API doesn''t seem to have any spot
    for the NotifyURL.'
- id: 229
  author: Pavan Agrawal
  author_email: pavan.agrawala@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0yNiAwNzoxOTo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNiAwNzoxOTo1OSArMDEwMA==
  content: Great Tutorial !!!!
- id: 230
  author: Martin
  author_email: martin@domeweb.co.uk
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0yNiAxNDoxODozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNiAxNDoxODozNyArMDEwMA==
  content: ! 'Jon:

    what does paypal send to the ipn (does it work with paypal express?) and how do
    I capture the info.'
- id: 231
  author: PayPal Recurring Billing with ActiveMerchant in Ruby on Rails @ Raymond
    Law
  author_email: ''
  author_url: http://rayvinly.com/articles/2009/02/20/paypal-recurring-billing-with-activemerchant-in-ruby-on-rails/
  date: !binary |-
    MjAwOS0wMi0yMCAxOToxODo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yMCAxOToxODo0MyArMDEwMA==
  content: ! '[...] a monthly or yearly subscription plan with PayPal. Therefore,
    I did some googling and found that Jon Baker has already extended ActiveMerchant
    to add this functionality using PayPal&#8217;s Name-Value Pair [...] '
- id: 232
  author: sam
  author_email: saaam@mailcatch.com
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0xMCAxMjoxNTo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0xMCAxMjoxNTo0OCArMDEwMA==
  content: ! 'Hi...

    Great tutorial..

    I have implemented both "EXPRESS" &amp; "SIMPLE" Gateway. I have tried the solution
    that you have given. But I am having error like "This transaction is invalid.
    Please return to the recipient''s website to complete your transaction using their
    regular checkout flow." on paypal site.


    Can help me out???


    Thanks..'
- id: 233
  author: smit
  author_email: smit.v.shah@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0xMCAxMjoyMjowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0xMCAxMjoyMjowMyArMDEwMA==
  content: ! 'Thanks for the great tutorial....

    But I am also having the same problem that sam is facing...


    Waiting for your solution..


    Thanks.'
- id: 234
  author: Go merchant | Khnouna
  author_email: ''
  author_url: http://khnouna.co.cc/2011/06/02/go-merchant/
  date: !binary |-
    MjAxMS0wNi0wMiAxMjozOTo1NCArMDIwMA==
  date_gmt: !binary |-
    MjAxMS0wNi0wMiAxMTozOTo1NCArMDIwMA==
  content: ! '[...] Ruby on Rails, PayPal Express Recurring Payments using ActiveThere
    is already an excellent framework for interacting with most payment gateways,
    including PayPal, for Ruby called Active Merchant. Unfortunately recurring payments
    support in Active Merchant for PayPal Express Checkout is limited to a script
    pasted into their lighthous bug tracking system. [...] '
- id: 235
  author: uma mahesh
  author_email: umamaheshvarma@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0wOS0yOSAxNDowOToyOSArMDIwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0yOSAxMzowOToyOSArMDIwMA==
  content: ! "Hi,\n\nI am using the recurring payment in my application. At one state
    while upgrading to account, I need to adjust the amount and charge the user with
    certain amount and need to change the next billing cycle. For that I am using
    the below method in it.\n\n    data = {:initial_amount=&gt;50 , :amount=&gt; 250,
    :period =&gt; 'Year',\n    :description =&gt; \"account update\"}\n    response
    = GATEWAY.update_profile(profile_id,data)\n\n\nBut in the paypal I am unable to
    see the charged amount and able to see only the accout update with new package
    price.\n\nCan You suggest me.\n\nThank you,\nUma Mahesh."
---
<p>I recently needed to setup recurring payments through PayPal's express checkout for a subscription based site I have writen using Ruby on Rails. There is already an excellent framework for interacting with most payment gateways, including PayPal, for Ruby called <a href="http://www.activemerchant.org/">Active Merchant</a>. Unfortunately recurring payments support in Active Merchant for PayPal Express Checkout is limited to a <a href="http://jadedpixel.lighthouseapp.com/projects/11599-active-merchant/tickets/17-patch-creating-paypal-recurring-payments-profile-with-activemerchant#ticket-17-4">script pasted into their lighthous bug tracking system</a>. The trouble is that this script only covers creating subscription profiles and also later getting details of that profile, but I needed to be able to suspend and cancel subscriptions profiles as well as make changes to the subscription from my site.</p>
<p><a id="more"></a><a id="more-361"></a></p>
<p><strong>**** UPDATE: ActiveMerchant recently removed the functionality to use PayPal's NVP API and so this code will no longer work with the latest ActiveMerchant. Raymond Law has kindly ported the code to use the SOAP API and <a href="http://rayvinly.com/articles/2009/02/20/paypal-recurring-billing-with-activemerchant-in-ruby-on-rails/">you can find out more information and usage on his blog</a>. ****</strong></p>
<p>Active Merchant is very easy to extend so I have written a Ruby class that can be dropped into /vendor/plugins/active_merchant/billing/gateways/ within your Rails project (assuming you have AM installed as a plugin)</p>
<p>Below is the code: (I have also attached the .rb file: <a href="http://www.gotripod.com/wp-content/uploads/2008/09/paypal_express_recurring_nv.rb">paypal_express_recurring_nv.rb</a>)</p>
<pre lang="ruby"># simple extension to ActiveMerchant for basic support of recurring payments with Express Checkout API
#
# See http://http://www.gotripod.com/2008/09/07/ruby-on-rails-paypal-express-recurring-payments-using-active-merchant/
# for details on getting started with this gateway
#
#
module ActiveMerchant #:nodoc:
  module Billing #:nodoc:
    class PaypalExpressRecurringNvGateway &lt; Gateway
      include PaypalNvCommonAPI

      LIVE_REDIRECT_URL = 'https://www.paypal.com/cgibin/webscr?cmd=_customer-billing-agreement&amp;token='
      TEST_REDIRECT_URL = 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_customer-billing-agreement&amp;token='

      def redirect_url
        test? ? TEST_REDIRECT_URL : LIVE_REDIRECT_URL
      end

      def redirect_url_for(token)
          "#{redirect_url}#{token}"
      end

      def setup_agreement(description, options = {})
        requires!(options, :return_url, :cancel_return_url)
        commit 'SetCustomerBillingAgreement', build_setup_agreement(description, options)
      end

      def get_agreement(token)
        commit 'GetBillingAgreementCustomerDetails', build_get_agreement(token)
      end

      def create_profile(money, token, options = {})
        commit 'CreateRecurringPaymentsProfile', build_create_profile(money, token, options)
      end

      def get_profile_details(profile_id)
        commit 'GetRecurringPaymentsProfileDetails', build_get_profile_details(profile_id)
      end

      def manage_profile(profile_id, action, options = {})
        commit 'ManageRecurringPaymentsProfileStatus', build_manage_profile(profile_id, action, options)
      end

      def update_profile(profile_id, options = {})
        commit 'UpdateRecurringPaymentsProfile', build_update_profile(profile_id, options)
      end

      def bill_outstanding(profile_id, money, options = {})
        commit 'BillOutstandingAmount', build_bill_outstanding(profile_id, money, options)
      end

      private

      def build_setup_agreement(description, options)
        post = {}
        add_pair(post, :billingagreementdescription, description)
        add_pair(post, :returnurl, options[:return_url])
        add_pair(post, :cancelurl, options[:cancel_return_url])
        add_pair(post, :billingtype, "RecurringPayments")
        add_pair(post, :paymenttype, options[:payment_type]) if options[:payment_type]
        add_pair(post, :localecode, options[:locale]) if options[:locale]
        add_pair(post, :billingagreementcustom, options[:custom_code]) if options[:custom_code]
        post
      end

      def build_get_agreement(token)
        post = {}
        add_pair(post, :token, token)
        post
      end

      def build_create_profile(money, token, options)
        post = {}
        add_pair(post, :token, token)
        add_amount(post, money, options)
        add_pair(post, :subscribername, options[:subscriber_name]) if options[:subscriber_name]
        add_pair(post, :initamt, options[:initamt]) if options[:initamt]
        add_pair(post, :failedinitamtaction, options[:failedinitamtaction]) if  options[:failedinitamtaction]
        add_pair(post, :profilestartdate, Time.now.utc.iso8601)
        add_pair(post, :billingperiod, options[:billing_period] ? options[:billing_period] : "Month")
        add_pair(post, :billingfrequency, options[:billing_frequency] ? options[:billing_frequency] : 1)
        add_pair(post, :totalbillingcycles, options[:billing_cycles]) if [:billing_cycles]
        add_pair(post, :profilereference, options[:reference]) if options[:reference]
        add_pair(post, :autobillamt, options[:auto_bill_amt]) if options[:auto_bill_amt]
        add_pair(post, :maxfailedpayments, options[:max_failed_payments]) if options[:max_failed_payments]
        add_pair(post, :shippingamt, amount(options[:shipping_amount]), :allow_blank =&gt; false) if options[:shipping_amount]
        add_pair(post, :taxamt, amount(options[:tax_amount]), :allow_blank =&gt; false) if options[:tax_amount]
        add_shipping_address(post, options[:shipping_address]) if options[:shipping_address]
        post
      end

      def build_get_profile_details(profile_id)
        post = {}
        add_pair(post, :profileid, profile_id)
        post
      end

      def build_manage_profile(profile_id, action, options)
        post = {}
        add_pair(post, :profileid, profile_id)
        add_pair(post, :action, action)
        add_pair(post, :note, options[:note]) if options[:note]
        post
      end

      def build_update_profile(profile_id, options)
        post = {}
        add_pair(post, :profileid, profile_id)
        add_pair(post, :note, options[:note]) if options[:note]
        add_pair(post, :desc, options[:description]) if options[:description]
        add_pair(post, :subscribername, options[:subscriber_name]) if options[:subscriber_name]
        add_pair(post, :profilereference, options[:reference]) if options[:reference]
        add_pair(post, :additionalbillingcycles, options[:additional_billing_cycles]) if options[:additional_billing_cycles]
        add_amount(post, options[:money], options)
        add_pair(post, :shippingamt, amount(options[:shipping_amount]), :allow_blank =&gt; false) if options[:shipping_amount]
        add_pair(post, :autobillamt, options[:auto_bill_amt]) if options[:auto_bill_amt]
        add_pair(post, :maxfailedpayments, options[:max_failed_payments]) if options[:max_failed_payments]
        add_pair(post, :taxamt, amount(options[:tax_amount]), :allow_blank =&gt; false) if options[:tax_amount]
        add_shipping_address(post, options[:shipping_address]) if options[:shipping_address]
        post
      end

      def build_bill_outstanding(profile_id, money, options = {})
        post = {}
        add_pair(post, :profileid, profile_id)
        add_amount(post, money, options)
        add_pair(post, :note, options[:note]) if options[:note]
        post
      end

      def build_response(success, message, response, options = {})
        PaypalExpressNvResponse.new(success, message, response, options)
      end

    end
  end
end</pre>
<p>With this class installed using Active Merchant to set up a subscription / recurring payment through PayPal Express Checkout is easy. Firstly setup your gateway object:</p>
<pre lang="ruby">gw = ActiveMerchant::Billing::PaypalExpressRecurringNvGateway.new( :login =&gt; 'PAYPALEMAIL', :password =&gt; 'PASSWORD', :signature =&gt; 'PAYPALAPISIGNATURE' )</pre>
<p>Then make a request to PayPal to setup the recurring payment. At this stage you pass through a description (which is what is shown to the user when they are asked to authorise the subscription so make it descriptive) and you also need to provide URLs on your site, that PayPal should redirect the subscriber back to when they either complete the payment, or alternatively if they choose to cancel.</p>
<pre lang="ruby">response = gw.setup_agreement("Subscription £25 per month", :cancel_return_url =&gt; "https://mysite.com/cancel", :return_url =&gt; "https://mysite.com/complete" )</pre>
<p>The request above returns us a token in the response from paypal and at this point we need to redirect the user to PayPal to authorise this subscription. The user will see the description "Subscription £25 per month" as sent in the previous request. We need to redirect the subscriber to PayPal using the following line of ruby:</p>
<pre lang="ruby">redirect_to gw.redirect_url_for(response.token)</pre>
<p>Once the user has authorised the subscription they are returned to the :return_url we specified earlier, at which point we can create the actual subscription using the following:</p>
<pre lang="ruby">response = gw.create_profile(2500, response.token, :currency =&gt; "GBP", :reference =&gt; "34")</pre>
<p>Note: PayPal are really confusing having one API for the US and another for the UK but if you are using PayPal Express (which is free) independently of PayPal Website Payments Pro (Which you need to pay for) the US PayPal Express API works for all countries (apart from Germany I believe) and as you can see above I am passing in the UK currency. I am using the US API and I have a UK PayPal account. Also note that I have passed in a reference (I have an IPN URL setup in my PayPal account - Unfortunately you cannot pass an IPN URL with the request) to be sent in the IPN.</p>
<p>The previous step completes the set up of our Subscription. However if we need to later get information on the subscription or change it, we need to extract the Profile ID from the response as follows:</p>
<pre lang="ruby">profile_id = response.params["profileid"]</pre>
<p>With this profile_id we can then later use these additional methods that I have included, such as getting details of the subscription profile using:</p>
<pre lang="ruby">gw.get_profile_details(profile_id)</pre>
<p>Update the subscription using various options (i.e. changing subscription amount shown below):</p>
<pre lang="ruby">gw.update_profile(profile_id, :money =&gt; 3000, :currency =&gt; "GBP")</pre>
<p>Manage the subscription, for example cancel it as follows:</p>
<pre lang="ruby">gw.manage_profile(profile_id, "Cancel", :note =&gt; "Your subscription has been cancelled by us")</pre>
<p>And finally bill any outstanding subscription balance:</p>
<pre lang="ruby">gw.bill_outstanding(profile_id, 2500, :currency=&gt; "GBP", :note =&gt; "£20 Overdue Subscription")</pre>
<p>Please note that as of yet this class is not part of Active Merchant, however it has been added to <a href="http://jadedpixel.lighthouseapp.com/projects/11599-active-merchant/tickets/17-patch-creating-paypal-recurring-payments-profile-with-activemerchant#ticket-17-4">Active Merchants case #17</a> If you want to use this you will have to add it manually as above.</p>
<p>I recommend reading <a href="https://www.paypal.com/en_US/pdf/PP_ExpressCheckout_IntegrationGuide.pdf">PayPals Express Checkout Integration Guide</a> and the <a href="https://www.paypal.com/en_US/pdf/PP_NVPAPI_DeveloperGuide.pdf">Name Value Pair API Developer Guide and Reference</a> for more information on what variables can be passed in each request to PayPal.</p>

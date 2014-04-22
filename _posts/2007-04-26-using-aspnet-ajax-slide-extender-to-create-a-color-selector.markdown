---
layout: post
status: publish
published: true
title: Using ASP.Net / AJAX slide extender to create a color selector
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! 'Using the <span class="caps">MS AJAX ASP</span>.Net Extensions and the
  Ajax Control Toolkit (available through codeplex) You can easily make a colour selector
  using the Ajax Control Toolkits Slider Extender control.


  The Slider Extender included in the Ajax control toolkit renders on the screen as
  a control that allows the user to click and drag to adjust a numerical value. Out
  of the box the slider extender is given an <span class="caps">ASP</span>:TextBox
  as it''s Target Control ID, the slider extender automatically hides these textboxes.  We
  can use three slider controls to create a Red, Green and Blue sliders to set a colour.
  When working in <span class="caps">RGB</span> we can set a value of 0 to 255 for
  each of Red, Green or Blue. So the first thing we need is the three sliders on our
  <span class="caps">HTML</span> page.

  <p class="contentbar_header">&nbsp;</p>

  <p class="contentbar_body" align="center"><img src="http://farm2.static.flickr.com/1266/1322473907_107fb0f56f_o.jpg"
  alt="ASP.Net MVC Diagram" /></p>

  <p class="contentbar_footer"><span class="caps">ASP</span>.Net <span class="caps">AJAX</span>
  Slide Extender Color Selector</p>

'
wordpress_id: 19
wordpress_url: http://old.miletbaker.com/index.php/2007/09/06/using-aspnet-ajax-slide-extender-to-create-a-color-selector/
date: !binary |-
  MjAwNy0wNC0yNiAxODoyOToyMCArMDIwMA==
date_gmt: !binary |-
  MjAwNy0wNC0yNiAxODoyOToyMCArMDIwMA==
categories:
- Javascript
- .Net
tags:
- AJAX
- Javascript
- .Net
- dotnet
comments:
- id: 25
  author: olle
  author_email: jon@clockobj.co.uk
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wMSAxNDo0OToxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wMSAxNDo0OToxNSArMDEwMA==
  content: Thanks for the article it was very fun implementing this. And for other
    readers, be aware that you have to place the javascript in the body not the head,
    or else the asp code (  ) won't work.
- id: 26
  author: sharathchandra
  author_email: sharathchandra.sabbani@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0yNiAxNjo1NDo0NyArMDIwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yNiAxNjo1NDo0NyArMDIwMA==
  content: Thanks for your article its working perfectly for me................Thank
    you very much...
- id: 27
  author: JayPrakash Sharma
  author_email: jaypeehuda@rocketmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMS0wNCAwODo0OToxMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wMS0wNCAwODo0OToxMSArMDEwMA==
  content: ! 'Hi,


    I was reading your article and I would like to appreciate you for making it very
    simple and understandable. This article gives me a basic idea of Ajax Toolkit
    SliderExtender Control in ASP.Net and it helped me a lot. Thanks for sharing with
    us. Check out this helpful link too its also having nice post with wonderful explanation
    on Ajax Toolkit SliderExtender Control in ASP.Net....


    http://mindstick.com/Articles/e4eb3037-9f65-4361-9d1b-9c9dd136208a/?Ajax%20Toolkit%20SliderExtender%20Control%20in%20ASP.Net



    Thank you very much!'
---
<p>Using the <span class="caps">MS AJAX ASP</span>.Net Extensions and the Ajax Control Toolkit (available through codeplex) You can easily make a colour selector using the Ajax Control Toolkits Slider Extender control.</p>
<p>The Slider Extender included in the Ajax control toolkit renders on the screen as a control that allows the user to click and drag to adjust a numerical value. Out of the box the slider extender is given an <span class="caps">ASP</span>:TextBox as it's Target Control ID, the slider extender automatically hides these textboxes.  We can use three slider controls to create a Red, Green and Blue sliders to set a colour. When working in <span class="caps">RGB</span> we can set a value of 0 to 255 for each of Red, Green or Blue. So the first thing we need is the three sliders on our <span class="caps">HTML</span> page.</p>
<p class="contentbar_header">&nbsp;</p>
<p class="contentbar_body" align="center"><img src="http://farm2.static.flickr.com/1266/1322473907_107fb0f56f_o.jpg" alt="ASP.Net MVC Diagram" /></p>
<p class="contentbar_footer"><span class="caps">ASP</span>.Net <span class="caps">AJAX</span> Slide Extender Color Selector</p>
<p><a id="more"></a><a id="more-19"></a></p>
<p>We need to register the AjaxControlToolkit, so that we can use the slider control, by adding the following line, just below the &lt;% Page %&gt; directive:</p>
<pre line="1" lang="asp">&lt;%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %&gt;</pre>
<p>Then we can add our three Textboxes and sliders:</p>
<pre line="1" lang="asp">
<table><tbody>
<tr>
<td>Red:</td>
<td><asp:textbox id="txtR" runat="server" cssclass="hide" text="218" onchange="updateslide();"></asp:textbox> <cc1:sliderextender id="SliderExtender1" length="75" minimum="0" raisechangeonlyonmouseup="false" maximum="255" targetcontrolid="txtR" runat="server"></cc1:sliderextender></td>
</tr>
<tr>
<td>Green:</td>
<td><asp:textbox id="txtG" runat="server" cssclass="hide" text="0" onchange="updateslide();"></asp:textbox> <cc1:sliderextender id="SliderExtender2" length="75" minimum="0" raisechangeonlyonmouseup="false" maximum="255" targetcontrolid="txtG" runat="server"></cc1:sliderextender></td>
</tr>
<tr>
<td>Blue:</td>
<td><asp:textbox id="txtB" runat="server" cssclass="hide" text="29" onchange="updateslide();"></asp:textbox> <cc1:sliderextender id="SliderExtender3" length="75" minimum="0" raisechangeonlyonmouseup="false" maximum="255" targetcontrolid="txtB" runat="server"></cc1:sliderextender></td>
</tr>
</tbody></table>
</pre>
<p>One way to implement this (if you don’t feel comfortable with Javascript) is to put these control in an update panel and then set the Text Changed event for each of the three text boxes, you could then in .Net change take the values and create a System.Drawing.Color and then use it to set  a control’s back colour to give a preview. This is fine but does not get updated until the user drags and releases the mouse, which makes it a little unhelpful. The slider extender control conveniently also has a property called <strong>RaiseChangeOnlyOnMouseUp</strong> which can be set to false (as in the code above). This will then automatically fire the Text Changed event as the mouse is dragged. However, in testing this proved not to work too well even using a local web server. As each request is sent back with all the viewstate information etc and even though only the update panel is updated we are using a lot of unnecessary bandwidth. So to effectively make this work we need to add a little simple javascript.</p>
<p>If you look at the controls above, I have added an <strong>onchange </strong>event to the textbox controls. Visual Studio complains about me wanting to add real <span class="caps"><span class="caps">HTML</span></span> events, but you can safely ignore the red squigly lines it produces. In the example I have asked each textbox to call a Javascript function called <strong>updateslide()</strong> whenever the text changes. In combination with the RaiseChangeOnlyOnMouseUp setting, this will fire constantly while the user is dragging, but this time without sending network requests, instead to our Javascript function. Before we look at the Javascript, I will add two a textbox and a div to the page. The TextBox control will hold the hex colour values, such as #ff00ff, which is probably the most useful way of using the selected colour. The Div wil be used to preview the colour.</p>
<pre line="1" lang="asp">
<asp:textbox id="txtHexRGB" width="75px" onkeyup="updatetext(this.value);" runat="server" maxlength="6">da001d</asp:textbox></pre>
<p>In this example, I have set a default colour of #da001d (Red) and in addition I have added another javascript function to the <strong>onkeyup</strong> event of this Textbox, this allows the user to enter a hex colour code and the preview to be updated. We pass the value of the textbox to the function using the <strong>this.value</strong></p>
<p>Below is the Java script which can be pasted inline, into your <span class="caps"><span class="caps">ASPX</span></span> page.</p>
<pre line="1" lang="javascript">
<script type="text/javascript">
<!—

function updatetext(hex)
{
	var regex = /[a-fA-F0-9]{6}/;
	if (regex.test(hex) == true){
		document.getElementById("testDiv").style.backgroundColor = ’#’ + hex;
	}
}

function updateslide()
{
	// Get R G B values from slider textboxes;
	var decR = document.getElementById(’<=txtR.ClientID>’).value;
	var decG = document.getElementById(’<=txtG.ClientID>’).value;
	var decB = document.getElementById(’<=txtB.ClientID>’).value;

	// converted to hex
	var hexR = parseInt(decR).toString(16);
	var hexG = parseInt(decG).toString(16);
	var hexB = parseInt(decB).toString(16);

	// pad with 0 if needed
	if (hexR.length < 2) {
		hexR = "0" + hexR;
	}
	if (hexG.length < 2) {
		hexG = "0" + hexG;
	}
	if (hexB.length < 2) {
		hexB = "0" + hexB;
	}
	// Set text box value
	document.getElementById(’<=txtHexRGB.ClientID>’).value = hexR + hexG + hexB;

	// Set div preview colour
	document.getElementById("testDiv").style.backgroundColor = ’#’ + hexR + hexG + hexB;
}
—>
</script>
</pre>
<p>The javascript above includes our two javascript functions. The first updateText(hex) is called when the user types a hexadecimal colour value into the text box we created, the second (updateSlide()) is fired as the user drags any of our three colour sliders. With the updateText(hex) function we pass it the hexadecimal value being entered by the user as they press each key. We first create a regular expression to check we have a valid 6 string hexadecimal value. If the value is valid we apply that hexadecimal value to our preview <span class="caps"><span class="caps">DIV</span></span>’s backgroundColor.</p>
<p>With our second javascript function updateSlide() we do not take a parameter as above, but instead access the value directly in the text boxes. As we do not know what these text boxes ID will be (as they are rendered by <span class="caps"><span class="caps">ASP</span></span>.Net at runtime we can instruct <span class="caps"><span class="caps">ASP</span></span>.Net to inject the names of these <span class="caps"><span class="caps">ASP</span></span>.Net textboxes when the page is rendered using the <font face="Courier New">&lt;<span>=txtR.ClientID</span>&gt;</font> inline code. Having got the numerical values (set by the slider extender) we can go about converting these to hexadecimal by first converting the textbox string to an integer using the Javascript <strong>parseInt </strong>function then using the .<strong>toString(16)</strong> function which converts an int into hexadecimal. With <span class="caps"><span class="caps">HTML</span></span> elements we either need a three character hex string for example fff (which is equivalent to ffffff) or a six character string so the easiest method is to pag and hex values that are only 1 character long with a leading 0. We can then simply update our user textbox with the hex value and set the preview div’s backgroundcolor.</p>
<p>When the page is posted back you can access the <span class="caps"><span class="caps">RGB</span></span> values in the textboxes set be the slider or the hexadecimal value in the textHexRGB textbox.</p>

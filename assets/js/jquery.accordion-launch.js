$(function() {
	$( "#accordion" ).accordion({
	  heightStyle: "content",
	  active: false,
	  collapsible: true,
	  animate: 100  
	});
	$( ".selector" ).accordion({ header: "div.panel" });
});
var cv = false;
var fadeTime = 1500;

/* http://jquery-howto.blogspot.no/2009/09/get-url-parameters-values-with-jquery.html */
$.extend({
	getUrlVars: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar: function(name) {
		return $.getUrlVars()[name];
	}
});

/* http://stackoverflow.com/a/8727167/2295891 */
(function($){
	$.fn.moveTo = function(selector){
		return this.each(function(){
		var cl = $(this).clone();
			$(cl).appendTo(selector);
			$(this).remove();
		});
	};
})(jQuery);

/*	utilizes moveTo() to change page contents on button click
	if getUrlVar() can detect ?cv=1, the CV will be displayed by default */
$(document).ready( function () {
		
	$("#viewCV").show(0);
	$("#print button").show(0);
	
	var urlVarCV = $.getUrlVar('cv');
	
	if ( urlVarCV == 1 ) {
		cv = true;
		$("#social").moveTo("#sidebar");
		$("#viewCV").html("Close CV");
	} else {
		$("#cv").hide(0);
	}

	$("#viewCV").click( function () {
		
		cv = !cv;

		$("#cv").fadeOut(fadeTime);
		$("#footer").fadeOut(fadeTime);
		$("#social").fadeOut(fadeTime).promise().done( function () {

			if ( cv ) {
				$("#cv").fadeIn(fadeTime);
				$("#social").moveTo("#sidebar");
				$("#viewCV").html("Close CV");
			} else {
				$("#social").moveTo("#header");
				$("#viewCV").html("View CV");
			}
			$("#social").hide(0).fadeIn(fadeTime);
			$("#footer").hide(0).fadeIn(fadeTime);
		})
	});
});						

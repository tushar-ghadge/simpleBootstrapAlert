/* Created for message alert
Author : Tushar Ghadge
version 1.0 */
$.fn.alertManager = (function alertManager(){
	var defaultOptions = {
		alertType : 1 , //1-Success, 2-Error, 3 -Warning , 4 - Information
		msgHeader : "",
		message : "Please add message",
		timing : 2000
	};
	var $alertDivClass;
	function createAlert( options ){
		if( options.alertType ){
			defaultOptions.alertType = options.alertType; 
		}
		if( options.msgHeader ){
			defaultOptions.msgHeader = options.msgHeader;
		}
		if( options.message ){
			defaultOptions.message = options.message;
		}
		if( options.timing ){
			defaultOptions.timing = options.timing;
		}
		var glypJSONCSS = {
			"position": "relative",
			"top": "1px",
			"display": "inline-block",
			"font-family": "Glyphicons Halflings",
			"font-style": "normal",
			"font-weight": "400",
			"line-height": "1",
			"-webkit-font-smoothing": "antialiased",
			"-moz-osx-font-smoothing": "grayscale",
			"height" : "auto",
			"width" : "auto",
			"left" : "0px"
		};
		var alertJSON = {
			"padding": "15px",
			"border" : "1px solid transparent",
			"border-radius": "4px"
		};
		var alertSuccessJSONCSS = {
			"color": "#3c763d",
			"background-color" : "#dff0d8",
			"border-color" : "#d6e9c6"
		};
		var alertFailedJSONCSS = {
			"color" : "#a94442",
			"background-color": "#f2dede",
			"border-color": "#ebccd1"
		}
		var alertWarningJSONCSS = {
			"color " : "#8a6d3b",
			"background-color" : "#fcf8e3",
			"border-color ": "#faebcc"
		};
		var alertInfoJSONCSS = {
			"color" : "#31708f",
			"background-color" : "#d9edf7",
			"border-color" : "#bce8f1"
		};
		var glyphiconJSON = {
			1 : "glyphicon-ok-circle",
			2 : "glyphicon-remove-sign",
			3 : "glyphicon-warning-sign",
			4 : "glyphicon-info-sign"
		};
		var template = "<div id='alertManagerDiv' class='tgAMP col-xs-8 col-sm-3 animated fadeInDown' style='margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out; z-index: 1031; top: 20px; left: 0px; right: 0px; animation-iteration-count: 1;'>\
		<span class='glyphicon'></span>\
		<span id='tgAlertHeader'></span>\
		<span id='tgAlertMsg'></span>\
		</div>";
		var alertTypeCSSJSON = { 1 : alertSuccessJSONCSS, 2 : alertFailedJSONCSS , 3 : alertWarningJSONCSS, 4 : alertInfoJSONCSS};
		$( template ).appendTo( "body" );
		var $glyphiconSpan = $( ".tgAMP .glyphicon" );
		$( "#tgAlertHeader" ).text( defaultOptions.msgHeader );
		$( "#tgAlertMsg" ).text( defaultOptions.message );
		$glyphiconSpan.css( glypJSONCSS );
		$glyphiconSpan.addClass( glyphiconJSON[ defaultOptions.alertType ] );
		$alertDivClass = $( ".tgAMP" );
		$alertDivClass.css( alertTypeCSSJSON[ defaultOptions.alertType ] );
		$alertDivClass.css( alertJSON );
		setTimeout(function() {                                       
			$alertDivClass.removeClass( "fadeInDown" ).addClass( "fadeOutUp" );
			removeDiv();
		}, defaultOptions.timing );
	}
	function removeDiv(){
		setTimeout(function() {                                       
			$alertDivClass.remove();
		}, defaultOptions.timing + 500 );
	}
	return{
		createAlert : createAlert
	}
})();

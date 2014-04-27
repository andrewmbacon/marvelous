/*
 * jQuery Tiny Pub/Sub
 * https://github.com/cowboy/jquery-tiny-pubsub
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

$.subscribe('hello', function(_, elmType, className){
	var cssClass = className || '';
	var elm = document.createElement( elmType );
	elm.setAttribute( 'class', cssClass );
	elm.textContent = 'hello';
	$('body').append( elm );
});


$( document ).ready(function() {

$.publish('hello', 'h1');


});


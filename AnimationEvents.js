(function(w,n){
	"use strict";
	var d = function(as, ai, ae, te ) {
		w.ANIMATION_START = as;
		w.ANIMATION_ITERATION = ai;
		w.ANIMATION_END = ae;
		w.TRANSITION_END = te;
		/*
		// or, if you prefer :
		w.ANIMATION = {
			START: as,
			ITERATION: ai,
			END: ae,
			toString: function() { return ae }
		};
		w.TRANSITION = {
			END: te
		};
		// or like this ?
		w.EVENTS = {
			ANIMATION_START: as,
			ANIMATION_ITERATION: ai,
			ANIMATION_END: ae,
			TRANSITION_END: te
		};
		*/
	};

	var b = document.createElement("div");
	if ('onwebkittransitionend' in w) { // webkit
		d( 'webkitAnimationStart','webkitAnimationIteration','webkitAnimationEnd','webkitTransitionEnd');
	} else if ('onotransitionend' in b || n.appName == 'Opera') { // opera
		d( 'oAnimationStart','oAnimationIteration','oAnimationEnd','oTransitionEnd');
	} else { // assume standard
		d( 'animationstart','animationiteration','animationend','transitionend');
	}
})(window,navigator);

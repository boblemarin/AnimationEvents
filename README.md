# AnimationEvent.js #

A simple utility script that generates pseudo-constants for CSS animation and transition events, so you don't have to worry about vendor prefixes. The values are stored in the global scope, so they're easy to use in your entire project.

If you don't feel like polluting the blogal scope, feel free to modify the source to accomodate your favourite coding style (I left some examples in the comments).

## Usage : ##

Link to AnimationEvents.js in your source code.

	<script type="text/javascript" src="AnimationEvents.js"></script>

Then use the following syntax to add your events listeners :

	element.addEventListener( TRANSITION_END, myTransitionEndHandler, false );

Available values :
~~~
	TRANSITION_END
	ANIMATION_START
	ANIMATION_ITERATION
	ANIMATION_END
~~~

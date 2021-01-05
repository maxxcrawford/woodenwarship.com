(function() {
	"use strict";

	const img = document.getElementById("img");

	function loaded() {

	}

	if (img.complete) {
	  loaded()
	} else {
	  img.addEventListener('load', loaded)
	  img.addEventListener('error', function() {
	      throw new Error("Image won't load");
	  })
	}

})();

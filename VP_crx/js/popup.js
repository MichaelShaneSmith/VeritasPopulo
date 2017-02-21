//Pure JS code with jQuery implementation
/*(function() {
	'use strict';

	window['counter'] = 0;
	var snackbarContainer = document.querySelector('#demo-toast-example');
	var showToastButton = document.querySelector('#demo-show-toast');
	showToastButton.addEventListener('click', function() {
		'use strict';
		var data = {message: 'Example Message # ' + ++counter};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	});
}());*/

var close_1 = document.getElementById("c1");
var close_2 = document.getElementById("c2");
var close_3 = document.getElementById("c3");

var update = function (){
	//confirm("Hi");
	var snackbarContainer = document.querySelector('#demo-toast-example');
	var data = {message: 'Trusted Websites List Updated'};
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

close_1.onclick = update
close_2.onclick = update
close_3.onclick = update


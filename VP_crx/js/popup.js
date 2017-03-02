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

////////////////////////////////////////////////////////////////////////////////

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Rating');
        data.addColumn('number', 'Sites');
        data.addRows([
          ['Neutral', 3],
          ['Slight Lean', 1],
          ['Hyper-Partisan', 1],
          ['Literal Garbage', 1]
        ]);

       // Set chart options
        var options = {'title':'Your Browsing History'};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
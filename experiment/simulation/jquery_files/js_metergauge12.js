
		$(document).ready(function(){
		   s1 = [0];
		   plot5 = $.jqplot('chart12',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
					   intervals:[0, 2, 4, 8, 10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter12(){
		s1[0]=parseFloat(document.getElementById('A12').value);
		plot5 = $.jqplot('chart12',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
				   intervals:[0, 2, 4, 8, 10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}


		$(document).ready(function(){
		   s1 = [0];
		   plot5 = $.jqplot('chart11',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 30,
					   intervals:[0, 10, 20, 30],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter11(){
		s1[0]=parseFloat(document.getElementById('V12').value);
		plot5 = $.jqplot('chart11',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 30,
					   intervals:[0, 10, 20, 30],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

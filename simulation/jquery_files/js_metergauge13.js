
		$(document).ready(function(){
		   s1 = [0];
		   plot5 = $.jqplot('chart13',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 300,
					   intervals:[0, 75, 150, 225, 300],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter13(){
		s1[0]=parseFloat(document.getElementById('W12').value);
		plot5 = $.jqplot('chart13',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 300,
					   intervals:[0, 75, 150, 225, 300],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}


		$(document).ready(function(){
		   s16 = [0];
		   plot3 = $.jqplot('chart16',[s16],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 15,
					   intervals:[0, 3, 6, 12, 15],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter16(){
		s16[0]=parseFloat(document.getElementById('A23').value);
		plot3 = $.jqplot('chart16',[s16],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 15,
					   intervals:[0, 3, 6, 12, 15],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

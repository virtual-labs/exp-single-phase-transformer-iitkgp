
		$(document).ready(function(){
		   s2 = [0];
		   plot3 = $.jqplot('chart2',[s2],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 220,
					   intervals:[0, 55, 110, 165,220],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter2(){
		s2[0]=parseFloat(document.getElementById('V13').value);
		plot3 = $.jqplot('chart2',[s2],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 220,
					   intervals:[0, 55, 110, 165,220],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

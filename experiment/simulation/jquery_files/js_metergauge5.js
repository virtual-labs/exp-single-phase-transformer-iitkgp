
		$(document).ready(function(){
		   s5 = [0];
		   plot3 = $.jqplot('chart5',[s5],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 300,
					   intervals:[0, 60, 120, 180, 240, 300],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter5(){
		s5[0]=parseFloat(document.getElementById('V2').value);
		plot3 = $.jqplot('chart5',[s5],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 300,
					   intervals:[0, 60, 120, 180, 240, 300],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

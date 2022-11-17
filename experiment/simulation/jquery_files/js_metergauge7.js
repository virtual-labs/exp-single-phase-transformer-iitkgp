
		$(document).ready(function(){
		   s7 = [0];
		   plot7 = $.jqplot('chart7',[s7],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 220,
					   intervals:[0, 50, 100, 150, 200, 250],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#E7E658', '#93b75f']
				   }
			   }
		   });
		});
		function perform_meter7(){
		s7[0]=parseFloat(document.getElementById('Vrated').value);
		plot7 = $.jqplot('chart7',[s7],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 220,
					   intervals:[0, 50, 100, 150, 200, 250],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#E7E658', '#93b75f']
				   }
			   }
		   });
		}


		$(document).ready(function(){
		   s15 = [0];
		   plot5 = $.jqplot('chart15',[s15],{
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
		function perform_meter15(){
		s15[0]=parseFloat(document.getElementById('A13').value);
		plot5 = $.jqplot('chart15',[s15],{
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

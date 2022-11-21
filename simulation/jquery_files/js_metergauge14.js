
		$(document).ready(function(){
		   s1 = [0];
		   plot5 = $.jqplot('chart14',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 20,
					   intervals:[0, 5, 10, 20],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter14(){
		s1[0]=parseFloat(document.getElementById('A22').value);
		plot5 = $.jqplot('chart14',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 20,
					   intervals:[0, 5, 10, 20],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

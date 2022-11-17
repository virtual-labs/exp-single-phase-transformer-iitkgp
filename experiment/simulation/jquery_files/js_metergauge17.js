
		$(document).ready(function(){
		   s17 = [0];
		   plot3 = $.jqplot('chart17',[s17],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 150,
					   intervals:[0, 50, 100, 150],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter17(){
		s17[0]=parseFloat(document.getElementById('PH1').value);
		plot3 = $.jqplot('chart17',[s17],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 150,
					   intervals:[0, 50, 100, 150],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

	$(function() { 

		$.getJSON('js/countries.json', function(data){

		$('#map').vectorMap({
	 		// map: 'world-mill-en',
	        markers: data.countries.coords,
	        series: {
	        	markers: [{ 
	        	attribute: 'r',
          		scale: [5, 20],
          		values: data.countries.number_of_cases
          		// min: jvm.min(metroPopValues),
          		// max: jvm.max(metroPopValues)
        		}]
        	},
	        onMarkerLabelShow: function(event, label, index){
	             label.html(
	               data.countries.country_name[index] + " " + "<br>" +
	               'Number of cases: '+data.countries.number_of_cases[index]
	               
	             );
	           },

	       	scaleColors: ['#C8EEFF', '#0071A4'],
		    normalizeFunction: 'polynomial',
		    hoverOpacity: 0.7,
		    hoverColor: false,
		    markerStyle: {
	        	initial: {
		        fill: '#F8E23B',
		        stroke: '#383f47'
	  	    	}
	    	},
	    	 


	   		});
    	});	

});
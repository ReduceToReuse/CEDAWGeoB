$(function() { 

	$.getJSON('js/countries.json', function(data){
    // var placesValues = jvm.values.apply({}, jvm.values(data.countries.country_name)),
    //     casesValues = Array.prototype.concat.apply([], jvm.values(data.countries.number_of_cases));
         

	$('#map').vectorMap({
 		map: 'world-mill-en',
      	markers: data.countries.coords,
      	series: {
 			markers: [{
	       //    attribute: 'fill',
	       //    scale: ['#FEE5D9', '#A50F15'],
	       //    values: data.metro.unemployment[val],
	       //    min: jvm.min(metroUnemplValues),
	       //    max: jvm.max(metroUnemplValues)
        // } 
        // ,{
          attribute: 'r',
          scale: [5, 20],
          values: data.countries.number_of_cases[val],
          min: jvm.min(casesValues),
          max: jvm.max(casesValues)

        }]
    },
    	onMarkerLabelShow: function(event, label, index){
       		 label.html(
          		''+data.countries.country_name[val]+''+
          		'Number of cases: '+data.countries.number_of_cases[val]+''
       
      	)}
   });
});

});
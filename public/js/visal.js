 
 // var parsed = JSON.parse('js/countries');
 // $(function(){
 $(function() {
  
  obj = require(['parsed']),
        // statesValues = jvm.values.apply({}, jvm.values(data.states)),
        metroPopValues = Array.prototype.concat.apply([], jvm.values(obj.number_of_cases));
        // metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

    $('#map').vectorMap({
      // map: 'world-mill-en',
      markers: obj.coords,
      series: {
        markers: [{
          attribute: 'fill',
          scale: ['#FEE5D9', '#A50F15'],
          values: obj.number_of_cases,
          // min: jvm.min(metroUnemplValues),
          // max: jvm.max(metroUnemplValues)
        },{
          attribute: 'r',
          scale: [5, 20],
          values: obj.number_of_cases,
          min: jvm.min(metroPopValues),
          max: jvm.max(metroPopValues)
        }],
        // regions: [{
        //   scale: ['#DEEBF7', '#08519C'],
        //   attribute: 'fill',
        //   values: data.states[val],
        //   min: jvm.min(statesValues),
        //   max: jvm.max(statesValues)
        // }]
      },
      onMarkerLabelShow: function(event, label, index){
        label.html(
          ''+obj.name[index]+''+
          'number of cases: '+obj.number_of_cases
        );
      },
      // onRegionLabelShow: function(event, label, code){
      //   label.html(
      //     ''+label.html()+''+
      //     'Unemployment rate: '+data.states[val][code]+'%'
      //   );
      // }
    });

    var mapObject = $('#map').vectorMap('get', 'mapObject');

  });

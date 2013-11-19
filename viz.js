$(function() {
        // initialize tooltips
        $.fn.qtip.defaults.style.classes = '.tooltip'; //changed from ui
        $.fn.qtip.defaults.style.def = false;

        var map = $K.map('#map', 960, 400);

        map.loadMap('world.svg', function() {
            map.addLayer('context', {
                styles: {
                    stroke: '#aaa',
                    fill: '#f6f4f2'
                }
            });
            map.addLayer('countries', {
                id: 'bg',
                styles: {
                    stroke: '#d8d6d4',
                    'stroke-width': 10,
                    'stroke-linejoin': 'round'
                }
            });

            map.addLayer('countries', {
                title: function(d) { return d.name },
                styles: {
                    stroke: '#333',
                    fill: '#fff'
                }
            });

            $.ajax({
                url: 'countries.json',
                dataType: 'json',
                success: function(countries) {

                    var scale = $K.scale.sqrt(countries.concat([{ number_of_cases: 0 }]), 'number_of_cases').range([0, 60]);

                    map.addSymbols({
                        type: $K.Bubble,
                        data: countries,
                        location: function(country) {
                            return [country.long, country.lat];
                        },
                        radius: function(country) {
                            return scale(country.number_of_cases/3);
                        },
                        // click: function(data, path, event) {
                        //         // do something nice
                        //         // console.log(data);
                        //         // console.log(path);
                        //         // $('circle').tooltip('show');    

                        //     },

                        tooltip: function(country) {   //this was the original code
                            var caseTerm = country.number_of_cases > 1 ? ' cases' : ' case';
                            return ' <div class="tooltip-inner">'
                            + country.country_name + " : "
                            + country.number_of_cases
                            + caseTerm 
                            + '</div>';
                        },
                        sortBy: 'radius desc',
                        style: 'fill:#800; stroke: #fff; fill-opacity: 0.5;',
                    });
                }
            });

        }, { padding: -5 });

    });
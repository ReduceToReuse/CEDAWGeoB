$(function () {
        $('#container-canada').highcharts({
    
            chart: {
                type: 'column'
            },
    
            title: {
                text: 'Cases brought against Canada grouped by topic'
            },
    
            xAxis: {
                categories: ['Asylum claim - domestic violence', 'Marriage and family relations', 'Unknown']
            },
    
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of cases'
                }
            },
    
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>';
                }
            },
    
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
    
            series: [{
                name: 'Admissible',
                data: [0, 1, 0],
                stack: 'male'
            }, {
                name: 'Inadmissible',
                data: [2, 0, 0],
                stack: 'male'
            }, {
                name: 'Discontinued',
                data: [0, 0, 1],
                stack: 'female'
            
            }]
        });
    });
    

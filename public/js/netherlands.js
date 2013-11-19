$(function () {
        $('#container').highcharts({
    
            chart: {
                type: 'column'
            },
    
            title: {
                text: 'Cases brought against the Netherlands grouped by topic'
            },
    
            xAxis: {
                categories: ['Employment - maternity leave', 'Sex trafficking', 'Unknown']
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
                data: [1, 0, 0],
                stack: 'male'
            }, {
                name: 'Inadmissible',
                data: [0, 1, 0],
                stack: 'male'
            }, {
                name: 'Discontinued',
                data: [0, 0, 2],
                stack: 'female'
            
            }]
        });
    });
    

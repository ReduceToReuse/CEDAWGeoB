$(function () {
        $('#container-general').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'CEDAW Cases Admissibility'
            },
            xAxis: {
                categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'CEDAW cases'
                }
            },
            legend: {
                backgroundColor: '#FFFFFF',
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }, 
                column: {
                    colorByPoint: true
            } 
        },
                colors: ['#85FFCD', '#FF9885', '#214033'],
                series: [{
                name: 'Admissible',
                data: [0, 1, 2, 2, 0, 0, 1, 4, 4]
            }, {
                name: 'Inadmissible',
                data: [1, 0, 1, 3, 0, 3, 0, 2, 2]
            }, {
                name: 'Discontinued',
                data: [0, 0, 0, 0, 3, 0, 0, 1, 0]
            
            }]
        });
    });
    

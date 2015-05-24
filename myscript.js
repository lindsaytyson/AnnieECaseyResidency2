$(function () {
    $('#econcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: '#fafafa'
        },
        title: {
            text: 'Massachusetts Economic Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500,"fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            min: 0,
            gridLineColor: '#fafafa',
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true,
            verticalAlign: 'top'
        },
        credits: {enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
            name: '% Teens Age 16-19 Not in School or Working',
            data: [0, 0, 0, 5, 6, 5, 5, 5], 
            color: '#6fb574'
            }, {
            name: ' ',
            data: [0, 0, 0, 14, 12, 10, 10, 10],
            color: '#fafafa'
        },{
            name: '% Children with No Full-Time Employed Parent',
            data: [0, 0, 0, 26, 28, 30, 30, 30],
            color: '#39823e'
        },{
            name: ' ',
            data: [6, 8, 7, 8, 7, 6, 5, 5],
            color: '#fafafa'
        },{
            name: '% Children in Poverty',
            data: [14, 12, 13, 12, 13, 14, 15, 15],
            color: '#1c5b20'
        },{
            name: ' ',
            data: [10, 6, 8, 8, 10, 11, 9, 14],
            color: '#fafafa'
        },{
            name: '% Children in Homes Spending <30% of Income on Housing',
            data: [40, 44, 42, 42, 40, 39, 41, 36],
            color: '#072e0a' 
        }]
    });
});

$(function () {
    $('#educontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: '#fafafa'
        },
        title: {
            text: 'Massachusetts Education Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500, "fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            gridLineColor: '#fafafa', 
            min: 0,
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true
        },
        credits: {enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
            name: '% H.S. Students Not Graduating On Time',
            data: [0, 21, 19, 18, 17, 17, 15, 14, 12], 
            color: '#9c5a9c'
            }, {
            name: ' ',
            data: [55, 11, 14, 15, 14, 14, 13, 55, 75],
            color: '#fafafa'
        },{
            name: '% Children Ages 3-4 Not Attending Preschool',
            data: [0, 44, 41, 40, 41, 41, 42, 0, 0],
            color: '#843284'
        },{
            name: ' ',
            data: [8, 65, 16, 65, 17, 65, 16, 65],
            color: '#fafafa'
        },{
            name: '% 8th Graders Below Proficient Math',
            data: [57, 0, 49, 0, 48, 0, 49, 0, 45],
            color: '#660066'
        },{
            name: ' ',
            data: [9, 65, 14, 65, 12, 65, 15, 65, 12],
            color: '#fafafa'
        },{
            name: '% 4th Graders Below Proficient Reading',
            data: [56, 0, 51, 0, 53, 0, 50, 0, 53],
            color: '#470047' 
        }]
    });
});

$(function () {
    $('#healthcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: '#fafafa',
            
        },
        title: {
            text: 'Massachusetts Health Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500,         "fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            min: 0,
            gridLineColor: '#fafafa',
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true
        },
        credits: {enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
            name: '% Teens Who Have Abused Alcohol or Drugs',
            data: [0, 9, 9, 8, 7, 8, 9, 7], 
            color: '#71acc9'
            }, {
            name: ' ',
            data: [5, 5, 5, 3, 4, 3, 3, 4],
            color: '#fafafa'
        },{
            name: '% Children Without Health Insurance',
            data: [0, 0, 0, 2, 1, 2, 2, 1],
            color: '#447ea9'
        },{
            name: ' ',
            data: [5.1, 5.1, 5.1, 5.2, 5.2, 5.3, 5.4, 5.4],
            color: '#fafafa'
        },{
            name: '% Low-Birthweight Babies',
            data: [7.9, 7.9, 7.9, 7.8, 7.8, 7.7, 7.6, 7.6],
            color: '#306994'
        },{
            name: ' ',
            data: [6, 7, 4, 7, 8, 8, 25, 25],
            color: '#fafafa'
        },{
            name: 'Child and Teen Deaths Per 100,000',
            data: [19, 18, 21, 18, 17, 17, 0, 0],
            color: '#00214f' 
        }]
    });
});

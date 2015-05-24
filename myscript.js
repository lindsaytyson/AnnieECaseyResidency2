$(function () {
    $('#econcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white'
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
            gridLineColor: 'white',
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true,
            verticalAlign: 'bottom',
            itemStyle: { font: '10pt Garamond'}
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
            name: '% Teens Not in School or Working',
            data: [0, 0, 0, 5, 6, 5, 5, 5], 
            color: '#6fb574'
            }, {
            name: ' ',
            data: [0, 0, 0, 14, 12, 10, 10, 10],
            color: 'white',
        },{
            name: '% Children with No Employed Parent',
            data: [0, 0, 0, 26, 28, 30, 30, 30],
            color: '#39823e'
        },{
            name: ' ',
            data: [0, 0, 0, 8, 7, 6, 5, 5],
            color: 'white',
            
        },{
            name: '% Children in Poverty',
            data: [14, 12, 13, 12, 13, 14, 15, 15],
            color: '#1c5b20'
        },{
            name: ' ',
            data: [10, 6, 8, 8, 10, 11, 9, 14],
            color: 'white',
        },{
            name: '% Children in Homes Costing >30% of Income',
            data: [40, 44, 42, 42, 40, 39, 41, 36],
            color: '#072e0a' 
        }]
    });
});

$(function () {
    $('#educontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white'
        },
        title: {
            text: 'Massachusetts Education Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500, "fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            gridLineColor: 'white', 
            min: 0,
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true,
            itemStyle: { font: '10pt Garamond'}
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
            data: [0, 11, 14, 15, 14, 14, 13, 55, 75],
            color: 'white'
        },{
            name: '% Children Ages 3-4 Not In Preschool',
            data: [0, 44, 41, 40, 41, 41, 42, 0, 0],
            color: '#843284'
        },{
            name: ' ',
            data: [0, 65, 16, 65, 17, 65, 16, 65],
            color: 'white'
        },{
            name: '% 8th Graders < Proficient Math',
            data: [57, 0, 49, 0, 48, 0, 49, 0, 45],
            color: '#660066'
        },{
            name: ' ',
            data: [9, 65, 14, 65, 12, 65, 15, 65, 12],
            color: 'white'
        },{
            name: '% 4th Graders < Proficient Reading',
            data: [56, 0, 51, 0, 53, 0, 50, 0, 53],
            color: '#470047' 
        }]
    });
});

$(function () {
    $('#healthcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            
        },
        title: {
            text: 'Massachusetts Health Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500,"fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            min: 0,
            gridLineColor: 'white',
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true,
            itemStyle: { font: '10pt Garamond'}
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
            data: [0, 5, 5, 3, 4, 3, 3, 4],
            color: 'white'
        },{
            name: '% Children Without Health Insurance',
            data: [0, 0, 0, 2, 1, 2, 2, 1],
            color: '#447ea9'
        },{
            name: ' ',
            data: [0, 5.1, 5.1, 5.2, 5.2, 5.3, 5.4, 5.4],
            color: 'white'
        },{
            name: '% Low-Birthweight Babies',
            data: [7.9, 7.9, 7.9, 7.8, 7.8, 7.7, 7.6, 7.6],
            color: '#306994'
        },{
            name: ' ',
            data: [6, 7, 4, 7, 8, 8, 25, 25],
            color: 'white'
        },{
            name: 'Child and Teen Deaths Per 100,000',
            data: [19, 18, 21, 18, 17, 17, 0, 0],
            color: '#00214f' 
        }]
    });
});

$(function () {
    $('#famcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            
        },
        title: {
            text: 'Massachusetts Family & Community Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 500,"fontSize":'22px'}
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            min: 0,
            gridLineColor: 'white',
            labels: {enabled: false},
            title: {text: null}
        },
        legend: {
            reversed: true,
            itemStyle: { font: '10pt Garamond'}
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
            name: '% Children with Household Head Lacking H.S. Diploma',
            data: [10, 9, 9, 9, 9, 9, 9, 9], 
            color: '#ffc891'
            }, {
            name: ' ',
            data: [6, 7, 6, 6, 6, 4, 4, 3],
            color: 'white'
        },{
            name: '% Children in Single Parent Families',
            data: [29, 28, 29, 29, 29, 31, 31, 32],
            color: '#ff9237'
        },{
            name: ' ',
            data: [3, 4, 3, 5, 5, 8, 10, 11],
            color: 'white'
        },{
            name: 'Teen Births Per 1,000 Females',
            data: [22, 21, 22, 20, 20, 17, 15, 14],
            color: '#ff6d2e'
        }]
    });
});
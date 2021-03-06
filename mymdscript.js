$(function () {
    $('#econcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            marginLeft: 70,
            spacingTop: 30,
            spacingBottom: 30
        },
        title: {
            text: 'Maryland Economic Well-Being Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 800,"fontSize":'22px'}
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
            data: [0, 0, 0, 8, 8, 8, 8, 8], 
            color: '#6fb574'
            }, {
            name: ' ',
            data: [0, 0, 0, 9, 6, 4, 3, 4],
            color: 'white',
        },{
            name: '% Children with No Employed Parent',
            data: [0, 0, 0, 21, 24, 26, 27, 26],
            color: '#39823e'
        },{
            name: ' ',
            data: [9, 10, 10, 10, 8, 7, 6, 6],
            color: 'white',
            
        },{
            name: '% Children in Poverty',
            data: [11, 10, 10, 10, 12, 13, 14, 14],
            color: '#1c5b20'
        },{
            name: ' ',
            data: [10, 9, 5, 4, 3, 3, 4, 8],
            color: 'white',
        },{
            name: '% Children in Homes Costing >30% of Income',
            data: [35, 36, 40, 41, 42, 42, 41, 37],
            color: '#072e0a' 
        }]
    });
});

$(function () {
    $('#educontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            marginLeft: 70,
            spacingTop: 30,
            spacingBottom: 30
        },
        title: {
            text: 'Maryland Education Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 800, "fontSize":'22px'}
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
            data: [0, 20, 20, 20, 20, 18, 16, 16, 16], 
            color: '#9c5a9c'
            }, {
            name: ' ',
            data: [0, 7, 9, 9, 11, 11, 10, 60, 72],
            color: 'white'
        },{
            name: '% Children Ages 3-4 Not In Preschool',
            data: [0, 53, 51, 51, 49, 49, 50, 0, 0],
            color: '#843284'
        },{
            name: ' ',
            data: [5, 75, 12, 75, 15, 75, 15, 75],
            color: 'white'
        },{
            name: '% 8th Graders < Proficient Math',
            data: [70, 0, 63, 0, 60, 0, 60, 0, 63],
            color: '#660066'
        },{
            name: ' ',
            data: [7, 75, 11, 75, 12, 75, 18, 75, 20],
            color: 'white'
        },{
            name: '% 4th Graders < Proficient Reading',
            data: [68, 0, 64, 0, 63, 0, 57, 0, 55],
            color: '#470047' 
        }]
    });
});

$(function () {
    $('#healthcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            marginLeft: 70,
            spacingTop: 30,
            spacingBottom: 30
            
        },
        title: {
            text: 'Maryland Health Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 800,"fontSize":'22px'}
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
            data: [0, 7, 8, 7, 6, 6, 6, 6], 
            color: '#71acc9'
            }, {
            name: ' ',
            data: [0, 15.6, 15.9, 5, 5, 5, 5, 6],
            color: 'white'
        },{
            name: '% Children Without Health Insurance',
            data: [0, 0, 0, 5, 5, 5, 5, 4],
            color: '#447ea9'
        },{
            name: ' ',
            data: [0, 0, 0, 5.8, 5.9, 6.2, 6.1, 6.2],
            color: 'white'
        },{
            name: '% Low-Birthweight Babies',
            data: [9.1, 9.4, 9.1, 9.2, 9.1, 8.8, 8.9, 8.8],
            color: '#306994'
        },{
            name: ' ',
            data: [10, 9, 6, 9, 15, 16, 40, 40],
            color: 'white'
        },{
            name: 'Child and Teen Deaths Per 100,000',
            data: [30, 31, 34, 31, 25, 24, 0, 0],
            color: '#00214f' 
        }]
    });
});

$(function () {
    $('#famcontainer').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'white',
            marginLeft: 70,
            spacingTop: 30,
            spacingBottom: 30
    
        },
        title: {
            text: 'Maryland Family & Community Data',
            style: {"fontFamily":"'Garamond'", fontWeight: 800,"fontSize":'22px'}
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
            data: [10, 10, 10, 10, 10, 10, 10, 10], 
            color: '#ffc891'
            }, {
            name: ' ',
            data: [8, 8, 7, 7, 6, 4, 3, 4],
            color: 'white'
        },{
            name: '% Children in Single Parent Families',
            data: [32, 32, 33, 33, 34, 36, 37, 36],
            color: '#ff9237'
        },{
            name: ' ',
            data: [8, 6, 6, 7, 9, 13, 15, 18],
            color: 'white'
        },{
            name: 'Teen Births Per 1,000 Females',
            data: [32, 34, 34, 33, 31, 27, 25, 22],
            color: '#ff6d2e'
        }]
    });
});
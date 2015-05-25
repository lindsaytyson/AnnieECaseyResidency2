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
            text: 'Alabama Economic Well-Being Data',
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
            data: [0, 0, 0, 10, 10, 11, 10, 10], 
            color: '#6fb574'
            }, {
            name: ' ',
            data: [0, 0, 0, 10, 5, 3, 5, 5],
            color: 'white',
        },{
            name: '% Children with No Employed Parent',
            data: [0, 0, 0, 30, 35, 37, 35, 35],
            color: '#39823e'
        },{
            name: ' ',
            data: [10, 12, 11, 13, 10, 7, 7, 8],
            color: 'white',
            
        },{
            name: '% Children in Poverty',
            data: [25, 23, 24, 22, 25, 28, 28, 27],
            color: '#1c5b20'
        },{
            name: ' ',
            data: [13, 10, 10, 10, 7, 5, 5, 8],
            color: 'white',
        },{
            name: '% Children in Homes Costing >30% of Income',
            data: [27, 30, 30, 30, 33, 35, 35, 32],
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
            text: 'Alabama Education Data',
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
            data: [0, 34, 33, 31, 30, 28, 24, 25, 0], 
            color: '#9c5a9c'
            }, {
            name: ' ',
            data: [0, 6, 8, 8, 8, 7, 6, 65, 0],
            color: 'white'
        },{
            name: '% Children Ages 3-4 Not In Preschool',
            data: [0, 59, 57, 57, 57, 58, 59, 0, 0],
            color: '#843284'
        },{
            name: ' ',
            data: [5, 90, 8, 90, 10, 90, 10, 90],
            color: 'white'
        },{
            name: '% 8th Graders < Proficient Math',
            data: [85, 0, 82, 0, 80, 0, 80, 0, 80],
            color: '#660066'
        },{
            name: ' ',
            data: [7, 85, 14, 85, 13, 85, 16, 85, 16],
            color: 'white'
        },{
            name: '% 4th Graders < Proficient Reading',
            data: [78, 0, 71, 0, 72, 0, 69, 0, 69],
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
            text: 'Alabama Health Data',
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
            data: [0, 7, 7, 7, 7, 7, 6, 6], 
            color: '#71acc9'
            }, {
            name: ' ',
            data: [0, 10, 10, 2, 4, 4, 5, 6],
            color: 'white'
        },{
            name: '% Children Without Health Insurance',
            data: [0, 0, 0, 8, 6, 6, 5, 4],
            color: '#447ea9'
        },{
            name: ' ',
            data: [4.3, 4.5, 4.6, 4.4, 4.7, 4.7, 5.1, 5.0],
            color: 'white'
        },{
            name: '% Low-Birthweight Babies',
            data: [10.7, 10.5, 10.4, 10.6, 10.3, 10.3, 9.9, 10.0],
            color: '#306994'
        },{
            name: ' ',
            data: [7, 5, 8, 10, 13, 13, 50, 50],
            color: 'white'
        },{
            name: 'Child and Teen Deaths Per 100,000',
            data: [43, 45, 42, 40, 37, 37, 0, 0],
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
            text: 'Alabama Family & Community Data',
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
            data: [17, 17, 16, 16, 15, 16, 15, 14], 
            color: '#ffc891'
            }, {
            name: ' ',
            data: [8, 8, 7, 9, 6, 5, 6, 6],
            color: 'white'
        },{
            name: '% Children in Single Parent Families',
            data: [37, 37, 38, 36, 39, 40, 39, 39],
            color: '#ff9237'
        },{
            name: ' ',
            data: [10, 6, 6, 7, 9, 16, 19, 21],
            color: 'white'
        },{
            name: 'Teen Births Per 1,000 Females',
            data: [50, 54, 54, 53, 51, 44, 41, 39],
            color: '#ff6d2e'
        }]
    });
});
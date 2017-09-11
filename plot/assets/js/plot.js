
function LastHour(symbol, name) {  
    $("body").css("cursor", "progress");
    var quote;
    // var symbol = 'INX';
    var queryURL =  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+symbol+"&interval=1min&apikey=7L0FQQQ21X7JAJUX";

    return $.ajax({url: queryURL, method: 'GET'}).done(function(response){
      var data = response["Time Series (1min)"];

      var trace1 = {
        x: [],
        y: [],
       xaxis: 'x',
        yaxis: 'y',           
        mode: 'lines',
        name:'Price ',
        line: {
          color: '#07347c',
          width: 3
        }
      };

      var trace2 = {
              x: [],
              y: [],
              xaxis: 'x2',
              yaxis: 'y2',
              name:'volume',
           
              fill: 'tonexty',
              color:'#e57c0b',
              type: 'scatter',
              mode: 'none'

            };

      for (i in data){
        var date = i;
        var open = parseFloat(data[i]["1. open"]);
        var high = parseFloat(data[i]["2. high"]);
        var low = parseFloat(data[i]["3. low"]);
        var close = parseFloat(data[i]["4. close"]);
        var volume = parseFloat(data[i]["5. volume"]);
        trace1.x.push(date);
        trace1.y.push(close);
        trace2.y.push(volume);
        

      }
    trace1.x = trace1.x.slice(0,60);
    trace1.y = trace1.y.slice(0,60);

    trace2.x = trace1.x;
    trace2.y = trace2.y.slice(0,60);
    var data = [trace2,trace1];
    var end =  parseFloat(trace1.y[0]);
    var str =  parseFloat(trace1.y[trace1.y.length-1]);
    var change = (end - str).toFixed(2);
    $('#summary').text(change+ ' $');
    $("#summaryTime").text('since last hour');
    if (change<0){

      var icon = $('<div class="glyphicon glyphicon-arrow-down">');
      icon.css('color','red');
      $('#summary').append(icon);
      $('#summary').css('color','red');
      
    }else{

      var icon = $('<div class="glyphicon glyphicon-arrow-up">');
      icon.css('color','green');
      $('#summary').append(icon);

      $('#summary').css('color','green');
    }
var layout = {
   title: 'Stock Price '+name,
  xaxis2: {anchor: 'y2'},
  yaxis2: {domain: [0, 0.3],
            title: 'Volume'},
  yaxis: {domain: [0.366, 0.9],
            title: 'Price'},
  // legend: {traceorder: 'reversed'},
  xaxis1:{anchor: 'y1',
          title: 'Time'},
  xaxis1: {
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false
      }
    };

    Plotly.purge('chart_div');
    Plotly.plot('chart_div', data, layout,{staticPlot: true}); 
    $("body").css("cursor", "default");

});

}


$('#chart_div').on('plotly_click', function(){
    alert('You clicked this Plotly chart!');
});

function LastDay(symbol, name) {  
    $("body").css("cursor", "progress");
    var quote;
    // var symbol = 'INX';
    var queryURL =  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+symbol+"&interval=5min&apikey=7L0FQQQ21X7JAJUX";

    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
      var data = response["Time Series (5min)"];
      var LastDate = Object.keys(data)[0];
      LastDate = moment(LastDate,'YYYY-MM-DD HH:mm:ss');
      var trace1 = {
        x: [],
        y: [],
       xaxis: 'x',
        yaxis: 'y',           
        mode: 'lines',
        name:'Price ',
        line: {
          color: '#07347c',
          width: 3
        }
      };

      var trace2 = {
              x: [],
              y: [],
              xaxis: 'x2',
              yaxis: 'y2',
              name:'volume',
           
              fill: 'tonexty',
              color:'#e57c0b',
              type: 'scatter',
              mode: 'none'

            };



      // var num = data.length - 60;
      
      for (i in data){
        var date = i; 
        var PointDate = moment(date,'YYYY-MM-DD HH:mm:ss');
        if ( PointDate.diff(LastDate, 'days') == 0 ){
            var open = parseFloat(data[i]["1. open"]);
            var high = parseFloat(data[i]["2. high"]);
            var low = parseFloat(data[i]["3. low"]);
            var close = parseFloat(data[i]["4. close"]);
            var volume = parseFloat(data[i]["5. volume"]);
            trace1.x.push(date);
            trace1.y.push(close);
            trace2.y.push(volume);
        }
      }



    trace2.x = trace1.x;
    var data = [trace2,trace1];

    var end =  parseFloat(trace1.y[0]);
    var str =  parseFloat(trace1.y[trace1.y.length-1]);
    var change = (end - str).toFixed(2);
    $('#summary').text(change+ ' $');
    $("#summaryTime").text('since last day');
    if (change<0){

      var icon = $('<div class="glyphicon glyphicon-arrow-down">');
      icon.css('color','red');
      $('#summary').append(icon);
      $('#summary').css('color','red');
      
    }else{

      var icon = $('<div class="glyphicon glyphicon-arrow-up">');
      icon.css('color','green');
      $('#summary').append(icon);

      $('#summary').css('color','green');
    }

var layout = {
   title: 'Stock Price '+name,
  xaxis2: {anchor: 'y2',
            title: 'Time'},
  yaxis2: {domain: [0, 0.3],
            title: 'Volume',},
  yaxis: {domain: [0.366, 0.9],
    title: 'Price'},
  // legend: {traceorder: 'reversed'},
  xaxis1:{anchor: 'y1'},
  xaxis1: {
    
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false
  }
};


    Plotly.purge('chart_div');
    Plotly.plot('chart_div', data, layout,{staticPlot: true}); 
    $("body").css("cursor", "default");
    });
}


function LastMonth(symbol, name) {  
    $("body").css("cursor", "progress");
    var quote;
    var queryURL =  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+symbol+"&outputsize=compact&apikey=7L0FQQQ21X7JAJUX"

    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
      var data = response["Time Series (Daily)"];
      var LastDate = Object.keys(data)[0];
      LastDate = moment(LastDate,'YYYY-MM-DD HH:mm:ss');

      trace = {
            x: [], 
            close: [], 
            high:[],  
            low: [],
            open: [],

            // cutomise colors 
            increasing: {line: {color: 'green'}},
            decreasing: {line: {color: 'red'}},
            
            type: 'ohlc', 
            xaxis: 'x', 
            yaxis: 'y'
          };
      


      for (i in data){
        var date = i; 
        var PointDate = moment(date,'YYYY-MM-DD HH:mm:ss');
        if ( PointDate.diff(LastDate, 'days') >-31 ){
        var date = i;
        var open = parseFloat(data[i]["1. open"]);
        var high = parseFloat(data[i]["2. high"]);
        var low = parseFloat(data[i]["3. low"]);
        var close = parseFloat(data[i]["4. close"]);

        trace.x.push(date);
        trace.open.push(open);
        trace.high.push(high);
        trace.low.push(low);
        trace.close.push(close);
        }
      }


    var end =  parseFloat(trace.close[0]);
    var str =  parseFloat(trace.close[trace.close.length-1]);
    var change = (end - str).toFixed(2);
    $('#summary').text(change+ ' $');
    $("#summaryTime").text('since last month');
    if (change<0){

      var icon = $('<div class="glyphicon glyphicon-arrow-down">');
      icon.css('color','red');
      $('#summary').append(icon);
      $('#summary').css('color','red');
      
    }else{

      var icon = $('<div class="glyphicon glyphicon-arrow-up">');
      icon.css('color','green');
      $('#summary').append(icon);

      $('#summary').css('color','green');
    }


    var data = [trace];
    var layout = {
      title: 'Stock Price '+name,
      dragmode: 'zoom', 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        title: 'Date'
      }, 
      yaxis: {
        autorange: true,
        title: 'Price' 
      }
    };
    Plotly.purge('chart_div');
    Plotly.plot('chart_div', data, layout,{staticPlot: true}); 
    $("body").css("cursor", "default");
    });
}


function LastYear(symbol, name) {  
    $("body").css("cursor", "progress");
    var quote;
    var queryURL =  "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol="+symbol+"&outputsize=compact&apikey=7L0FQQQ21X7JAJUX"

    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
      var data = response["Weekly Time Series"];
      var LastDate = Object.keys(data)[0];
      LastDate = moment(LastDate,'YYYY-MM-DD HH:mm:ss');

      trace = {
            x: [], 
            close: [], 
            high:[],  
            low: [],
            open: [],

            // cutomise colors 
            increasing: {line: {color: 'green'}},
            decreasing: {line: {color: 'red'}},
            
            type: 'ohlc', 
            xaxis: 'x', 
            yaxis: 'y'
          };
      


      for (i in data){
        var date = i; 
        var PointDate = moment(date,'YYYY-MM-DD HH:mm:ss');
        if ( PointDate.diff(LastDate, 'months') >-13 ){
        var date = i;
        var open = parseFloat(data[i]["1. open"]);
        var high = parseFloat(data[i]["2. high"]);
        var low = parseFloat(data[i]["3. low"]);
        var close = parseFloat(data[i]["4. close"]);

        trace.x.push(date);
        trace.open.push(open);
        trace.high.push(high);
        trace.low.push(low);
        trace.close.push(close);
        }
      }

    var data = [trace];
    var end =  parseFloat(trace.close[0]);
    var str =  parseFloat(trace.close[trace.close.length-1]);
    var change = (end - str).toFixed(2);
    $('#summary').text(change+ ' $');
    $("#summaryTime").text('since last year');
    if (change<0){

      var icon = $('<div class="glyphicon glyphicon-arrow-down">');
      icon.css('color','red');
      $('#summary').append(icon);
      $('#summary').css('color','red');
      
    }else{

      var icon = $('<div class="glyphicon glyphicon-arrow-up">');
      icon.css('color','green');
      $('#summary').append(icon);

      $('#summary').css('color','green');
    }




    var layout = {
      title: 'Stock Price '+name,
      dragmode: 'zoom', 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        title: 'Date'
      }, 
      yaxis: {
        autorange: true,
        title: 'Price' 
      }
    };
    Plotly.purge('chart_div');
    Plotly.plot('chart_div', data, layout,{staticPlot: true}); 
    $("body").css("cursor", "default");
    });
}
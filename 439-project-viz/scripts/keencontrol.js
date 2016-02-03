var client = new Keen({
  projectId: "56aede6346f9a76c007ab555",
  readKey: "afe0201e814600ef37777aa6bbcc2b5d16543f621310246b99f05ecac7f18d9d599087a48207506784f03bca0088d4802bad45bb8444f1a969cd5db734a1b20ef4150691ad29a773bb0b71d3aaa62b91f9fc6bd0348c5ba8bb9ccd6a3d05f6ae"

});
Keen.ready(function(){
  
  var query = new Keen.Query("sum", {
    eventCollection: "project0",
    interval: "daily",
    targetProperty: "time",
    timeframe: {
    "end": "2016-02-13T00:00:00.000+00:00",
    "start": "2016-01-31T00:00:00.000+00:00"
}
  });
  
  client.draw(query, document.getElementById("chart-01"), {
    chartType: "columnchart",
    title: "Time",
    chartOptions: {
      isStacked: true
    }
  });


  var driver_percent = new Keen.Query("sum", {
    eventCollection: "project0",
    groupBy: [
    "developer"
],
    targetProperty: "time",
    timeframe: {
    "end": "2016-02-13T00:00:00.000+00:00",
    "start": "2016-01-31T00:00:00.000+00:00"
}
  });

  client.draw(driver_percent, document.getElementById("state-chart"), {
       chartType: "piechart",
       title: false,
       height: "auto",
       width: "auto",
       chartOptions: {
         chartArea: {
           height: "85%",
           left: "5%",
           top: "5%",
           width: "100%"
         }
       }
  });
  
});

  // var state_chart = new Keen.Query("count", {
  //   eventCollection: "enrollments",
  //   groupBy: "BillingAddress.State",
  //   timeframe: {
  //     start: "2014-05-01T00:00:00.000Z",
  //     end: "2015-07-22T00:00:00.000Z"
  //   }
  // });
  // client.draw(state_chart, document.getElementById("state-chart"), {
  //   chartType: "piechart",
  //   title: false,
  //   height: "auto",
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "85%",
  //       left: "5%",
  //       top: "5%",
  //       width: "100%"
  //     },
  //     pieHole: .4
  //   }
  // });

function submitForm() {
  var vendor = document.getElementById("vendor-input").value;
  var source = document.getElementById("source-input").value;
  var startdate = document.getElementById("start-date").value
}


function selectlist() {
  var time = document.getElementById("timelist");
  updateGraph(time.options[time.selectedIndex].text);
}

function updateGraph(x) {
  var timeinterval = x.toLowerCase();

  Keen.ready(function() {
    var query = new Keen.Query("count", {
      eventCollection: "enrollments",
      interval: timeinterval,
      timeframe: "this_2_days",
      timezone: "UTC"
    });

    client.draw(query, document.getElementById("chart-03"), {
      chartType: "linechart",
      title: false,
      height: 250,
      width: "auto",
      chartOptions: {
        chartArea: {
          height: "85%",
          left: "5%",
          top: "5%",
          width: "80%"
        },
        isStacked: true
      }
    });

  });

}
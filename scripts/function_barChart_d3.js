
var svg_left = d3.select("#d3_plots_left").append("svg");
var rect = svg_left.append("rect");
var circle = svg_left.append("circle");
//var bar_chart = svg_left.append("bar");

var x = [-1, 0, 1, 2, 3, 4, 5, 6];
var y = [ 0, 0, 0, 0, 0, 0, 0, 0];
var dataAnswer = [];
for (var i = 0; i < x.length; i++) {
  dataAnswer.push({
    value: x[i],
    number: y[i]
  });
}



function COAnimation() {
  var elem = document.getElementById("staAnimation");
  if (elem.value == "Start Animation") {
    repeat();
    elem.value = "Stop Animation";
  }
  else {
    stopAnim();
    elem.value = "Start Animation";
  }
}

function redraw() {
  var margin = {top: 0, right: 0, bottom: 20, left: 0},
      width = document.getElementById("d3_plots_left").clientWidth,
      height = document.getElementById("d3_plots_left").offsetHeight;
      console.log(width);

  svg_left.attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var x_bar = d3.scaleBand().range([0, width], .1),
      y_bar = d3.scaleLinear().range([height*0.7, 0]);

  var xAxis = d3.axisBottom(x_bar)
  var yAxis = d3.axisRight(y_bar)
      .ticks(2)
      .tickSize(width)
      .tickFormat(d3.format("d"));


    // max_y = Math.max.apply(Math, y)
    // console.log(max_y);
    //
    // var y_v = Array.from(Array(max_y+2).keys())
    // console.log(y_v);


  x_bar.domain(x)
       .padding(0.1)
       //.paddingOuter(0.5);

  console.log(y_bar(dataAnswer[4].number));

  rect.attr("x", 0)
      .attr("y", 1)
      .attr("height", 40)
      .attr("width", width)
      .style("fill", "rgba(42, 184, 30, 0.64)");

  circle.attr("r", 5)
        .style("stroke", "rgb(55, 49, 46)")
        .style("fill", "rgb(55, 49, 46)")
  drawBar();
//  repeat();


  function repeat(stopAnim) {

     if (stopAnim) {
       circle.attr("cy", (height-5))
             .attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
             .transition()
             .duration(0);
     }
     else {
       circle.attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
             .attr("cy", 10)
             .transition()
             .duration(1500)
             .attr("cy", (height-5))
             .on("end", repeat);


           drawBar();
           dataAnswer[4].number = dataAnswer[4].number + 1;
           yAxis.ticks(4)
     }

  }

 function drawBar() {

       y_bar.domain([0, d3.max(dataAnswer, function(d) {return d.number;})+2]);

       var bar_chart = svg_left.selectAll(".bar")
                .remove()
                .exit()
                .data(dataAnswer)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("transform", "translate(0, " + (height*0.3) + ")")
                .attr("x", function(d) {return x_bar(d.value);})
                .attr("width", x_bar.bandwidth())
                .attr("y", function(d) {return y_bar(d.number);})
                .attr("height", function(d) {return height*0.7 - y_bar(d.number); })
                .style("fill", "rgb(82, 78, 64)");

       svg_left.selectAll(".axis").remove();
       svg_left.append("g")
             .attr("class", "axis axis--x")
             .attr("transform", "translate(0, " + height + ")")
             //.call(d3.axisBottom(x_bar));
             .call(customXAxis);
       svg_left.append("g")
             .attr("class", "axis axis--y")
             .attr("transform", "translate(0, " + (height*0.3) + ")")
             //.call(d3.axisLeft(y_bar));
             .call(customYAxis);

             function customXAxis(svg_left) {
               svg_left.call(xAxis);
               svg_left.select(".domain").remove();
             }

             function customYAxis(svg_left) {
               svg_left.call(yAxis);
               svg_left.select(".domain").remove();
               svg_left.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
               svg_left.selectAll(".tick text").attr("x", 4).attr("dy", -4);
             }
             var elem = document.getElementById("btnAnimation");
             console.log("here", elem.text)
       }

   function COAnimation() {
     var elem = document.getElementById("btnAnimation");
     console.log(elem.text)
     if (elem.value == "Answer = ") {

       elem.value = "Stop Animation";
     }
     else {

       elem.value = "Start Animation";
     }
   }

  // var button = d3.select("#staAnimation")
  //              .on("click", COAnimation);

}



redraw();

window.addEventListener("resize", redraw);

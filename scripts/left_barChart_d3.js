
var svg_left = d3.select("#d3_plots_left").append("svg");
var rect = svg_left.append("rect");
var circle = svg_left.append("circle");
var yAxis;
var xAxis;
var bar_chart;
var x_bar;
var y_bar;
var width;
var height;
var xL = 3;
//var bar_chart = svg_left.append("bar");

var x = [-1, 0, 1, 2, 3, 4, 5, 6];
var y = [ 0, 0, 0, 0, 0, 0, 0, 0];
var margin = {top: 0, right: 0, bottom: 20, left: 0};
var dataAnswer = [];
for (var i = 0; i < x.length; i++) {
  dataAnswer.push({
    value: x[i],
    number: y[i]
  });
}

function repeat() {

    //  circle.attr("cy", (height-5))
    //        .attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
    //        .attr("r", 0)
    //        .transition()
    //        .duration(0);
     circle.attr("cx", (x_bar(dataAnswer[xL+1].value) + x_bar.bandwidth()/2))
           .attr("cy", 10)
           .attr("r", 5)
           .transition()
           .duration(1500)
           .attr("cy", (height-5))
           .on("end", drawBar);

         //drawBar();
         dataAnswer[xL+1].number = dataAnswer[xL+1].number + 1;
         yAxis.ticks(4)

}

function drawBar() {

      y_bar.domain([0, d3.max(dataAnswer, function(d) {return d.number;})+2]);

       bar_chart = svg_left.selectAll(".bar")
               .remove()
               .exit()
               .data(dataAnswer)
               .enter().append("rect")
               .attr("class", "bar")
               .attr("transform", "translate(0, " + (height*0.5) + ")")
               .attr("x", function(d) {return x_bar(d.value);})
               .attr("width", x_bar.bandwidth())
               .attr("y", function(d) {return y_bar(d.number);})
               .attr("height", function(d) {return height*0.5 - y_bar(d.number); })
               .style("fill", "rgb(82, 78, 64)");

      svg_left.selectAll(".axis").remove();
      svg_left.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0, " + height + ")")
            //.call(d3.axisBottom(x_bar));
            .call(customXAxis);
      svg_left.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(0, " + (height*0.5) + ")")
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
    }

function redraw() {

       width = document.getElementById("d3_plots_left").clientWidth,
       height = document.getElementById("d3_plots_left").offsetHeight;

      svg_left.attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


       x_bar = d3.scaleBand().range([0, width], .1),
       y_bar = d3.scaleLinear().range([height*0.5, 0]);

       xAxis = d3.axisBottom(x_bar)
       yAxis = d3.axisRight(y_bar)
          .ticks(2)
          .tickSize(width)
          .tickFormat(d3.format("d"));

      x_bar.domain(x)
           .padding(0.1)
           //.paddingOuter(0.5);

      rect.attr("x", 0)
          .attr("y", 1)
          .attr("height", 150)
          .attr("width", width)
          .style("fill", "rgba(42, 184, 30, 0.64)");

      circle.attr("r", 0)
            .style("stroke", "rgb(55, 49, 46)")
            .style("fill", "rgb(55, 49, 46)")
      drawBar(height, width);
    //  repeat();

  }



redraw();

window.addEventListener("resize", redraw);

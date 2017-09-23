var svg_left = d3.select("#d3_plots_left").append("svg");
var rect = svg_left.append("rect");
var circle = svg_left.append("circle");
var bar_chart = svg_left.append("bar");
var xAxis = svg_left.append("xaxis");
var yAxis = svg_left.append("yaxis");

function redraw() {
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = document.getElementById("d3_plots_left").clientWidth,
      height = document.getElementById("d3_plots_left").offsetHeight;
      console.log(width);

  svg_left.attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var x = d3.scaleLinear().range([width, 0]),
      y = d3.scaleLinear().range([height*0.5, 0]);

  rect.attr("x", 0)
      .attr("y", 1)
      .attr("height", 40)
      .attr("width", width)
      .style("fill", "rgba(42, 184, 18, 0.64)");

  circle.attr("cx", width*0.5)
        .attr("cy", 10)
        .attr("r", 5)
        .style("stroke", "rgb(55, 49, 46)")
        .style("fill", "rgb(55, 49, 46)");

  xAxis.attr("transform", "translate(0, " + height + ")")
       .call(d3.axisBottom(x));
}

redraw();

window.addEventListener("resize", redraw);

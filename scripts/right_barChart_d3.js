
var svg_right = d3.select("#d3_plots_right").append("svg");
var rectr = svg_right.append("rect");
var circler = svg_right.append("circle");
var yAxisr;
var xAxisr;
var bar_chartr;
var x_barr;
var y_barr;
var widthr;
var heightr;
var xR = 2;
//var bar_chart = svg_left.append("bar");

var xr = [ -1, 0, 1, 2, 3, 4, 5, 6, 7];
var yr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dataAnswerr = [];
for (var i = 0; i < x.length; i++) {
  dataAnswerr.push({
    value: x[i],
    number: y[i]
  });
}

function repeat_R() {

   var x = xR+1
    //  circle.attr("cy", (height-5))
    //        .attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
    //        .attr("r", 0)
    //        .transition()
    //        .duration(0);
     circler.attr("cx", (x_barr(dataAnswerr[x].value) + x_barr.bandwidth()/2))
           .attr("cy", 10)
           .attr("r", 5)
           .transition()
           .duration(1500)
           .attr("cy", (heightr-5))
           .on("end", drawBar_R);

         //drawBar();
         dataAnswerr[x].number = dataAnswerr[x].number + 1;
         yAxisr.ticks(4)

}

function drawBar_R() {

      y_barr.domain([0, d3.max(dataAnswerr, function(d) {return d.number;})+2]);

       bar_chartr = svg_right.selectAll(".bar")
               .remove()
               .exit()
               .data(dataAnswerr)
               .enter().append("rect")
               .attr("class", "bar")
               .attr("transform", "translate(0, " + (heightr*0.5) + ")")
               .attr("x", function(d) {return x_barr(d.value);})
               .attr("width", x_barr.bandwidth())
               .attr("y", function(d) {return y_barr(d.number);})
               .attr("height", function(d) {return heightr*0.5 - y_barr(d.number); })
               .style("fill", "rgb(82, 78, 64)");

      svg_right.selectAll(".axis").remove();
      svg_right.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0, " + heightr + ")")
            //.call(d3.axisBottom(x_bar));
            .call(customXAxis);
      svg_right.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(0, " + (heightr*0.5) + ")")
            //.call(d3.axisLeft(y_bar));
            .call(customYAxis);

            function customXAxis(svg_right) {
              svg_right.call(xAxisr);
              svg_right.select(".domain").remove();
            }

            function customYAxis(svg_right) {
              svg_right.call(yAxisr);
              svg_right.select(".domain").remove();
              svg_right.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
              svg_right.selectAll(".tick text").attr("x", 4).attr("dy", -4);
            }
    }

function redraw_R() {

       widthr = document.getElementById("d3_plots_right").clientWidth,
       heightr = document.getElementById("d3_plots_right").offsetHeight;

      svg_right.attr("width", widthr + margin.left + margin.right)
              .attr("height", heightr + margin.top + margin.bottom)
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


       x_barr = d3.scaleBand().range([0, widthr], .1),
       y_barr = d3.scaleLinear().range([heightr*0.5, 0]);

       xAxisr = d3.axisBottom(x_barr)
       yAxisr = d3.axisRight(y_barr)
          .ticks(2)
          .tickSize(widthr)
          .tickFormat(d3.format("d"));

      x_barr.domain(xr)
           .padding(0.1)
           //.paddingOuter(0.5);

      rectr.attr("x", 0)
          .attr("y", 1)
          .attr("height", 150)
          .attr("width", widthr)
          .style("fill", "rgba(42, 184, 30, 0.64)");

      circler.attr("r", 0)
            .style("stroke", "rgb(55, 49, 46)")
            .style("fill", "rgb(55, 49, 46)")
      drawBar_R();
    //  repeat();

  }
//
//
//
 redraw_R();
//
 window.addEventListener("resize", redraw_R);

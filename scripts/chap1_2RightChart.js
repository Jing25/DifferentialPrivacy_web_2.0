
var cha1_2Svg_right = d3.select("#chapter1_2_plots_right").append("svg");
var chapter1_2_rectr = cha1_2Svg_right.append("rect");
var chapter1_2_circler = cha1_2Svg_right.append("circle");
var chapter1_2_yAxisr;
var chapter1_2_xAxisr;
var chapter1_2_bar_chartr;
var chapter1_2_x_barr;
var chapter1_2_y_barr;
var chapter1_2_widthr;
var chapter1_2_heightr;
var chapter1_2_xR = 3;
var datar = [];

var chapter1_2_xr = [ -1, 0, 1, 2, 3, 4, 5, 6, 7];
var chapter1_2_yr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];


var chapter1_2_dataAnswerr = [];
for (var i = 0; i < x.length; i++) {
  chapter1_2_dataAnswerr.push({
    value: x[i],
    number: y[i]
  });
}

function plot_nd_liner() {
  var  width = chapter1_2_widthr;
  var  height = chapter1_2_heightr*0.4;

  getDatar();
  var x = d3.scaleLinear()
      .range([0, width]);

  var y = d3.scaleLinear()
      .range([height, 0]);


  var yAxis = d3.axisLeft(y);


  var line = d3.line()
      .x(function(d) {
          return x(d.q);
      })
      .y(function(d) {
          return y(d.p);
      });

      x.domain(d3.extent(datar, function(d) {
          return d.q;
      }));
      y.domain(d3.extent(datar, function(d) {
          return d.p;
      }));


  cha1_2Svg_right.append("path")
    .datum(datar)
    .attr("class", "line")
    .attr("d", line)
    .attr("transform", "translate(0, 10)")

}

function getDatar() {

// loop to populate data array with
// probabily - quantile pairs
for (var i = 0; i < 100000; i++) {
    q = normal() // calc random draw from normal dist
    p = gaussian(q, 2, 1) // calc prob of rand draw
    el = {
        "q": q,
        "p": p
    }
    datar.push(el)
};

datar.sort(function(x, y) {
    return x.q - y.q;
});
}

function chapter1_2_repeatr() {

    //  circle.attr("cy", (height-5))
    //        .attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
    //        .attr("r", 0)
    //        .transition()
    //        .duration(0);
    var x = normalRandomScaled(2,15)
    //var x = normal();
    chapter1_2_xR = x;
     chapter1_2_circler.attr("cx", (chapter1_2_x_barr(chapter1_2_dataAnswerr[x+1].value) + chapter1_2_x_barr.bandwidth()/2))
           .attr("cy", 10)
           .attr("r", 5)
           .transition()
           .duration(1500)
           .attr("cy", (chapter1_2_heightr-5))
           .on("end", chapter1_2_drawBarr);

         //drawBar();

        console.log(x)
        chapter1_2_dataAnswerr[x+1].number = chapter1_2_dataAnswerr[x+1].number + 1;
        chapter1_2_yAxisr.ticks(4)

}

function chapter1_2_drawBarr() {

      chapter1_2_y_barr.domain([0, d3.max(chapter1_2_dataAnswerr, function(d) {return d.number;})+2]);

       chapter1_2_bar_chartr = cha1_2Svg_right.selectAll(".bar")
               .remove()
               .exit()
               .data(chapter1_2_dataAnswerr)
               .enter().append("rect")
               .attr("class", "bar")
               .attr("transform", "translate(0, " + (chapter1_2_heightr*0.5) + ")")
               .attr("x", function(d) {return chapter1_2_x_barr(d.value);})
               .attr("width", chapter1_2_x_barr.bandwidth())
               .attr("y", function(d) {return chapter1_2_y_barr(d.number);})
               .attr("height", function(d) {return chapter1_2_heightr*0.5 - chapter1_2_y_barr(d.number); })
               .style("fill", "rgb(82, 78, 64)");

      cha1_2Svg_right.selectAll(".axis").remove();
      cha1_2Svg_right.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0, " + chapter1_2_heightr + ")")
            //.call(d3.axisBottom(x_bar));
            .call(customXAxis);
      cha1_2Svg_right.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(0, " + (chapter1_2_heightr*0.5) + ")")
            //.call(d3.axisLeft(y_bar));
            .call(customYAxis);

            function customXAxis(svg_left) {
              svg_left.call(chapter1_2_xAxisr);
              svg_left.select(".domain").remove();
            }

            function customYAxis(svg_left) {
              svg_left.call(chapter1_2_yAxisr);
              svg_left.select(".domain").remove();
              svg_left.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
              svg_left.selectAll(".tick text").attr("x", 4).attr("dy", -4);
            }
    }

function chapter1_2_redrawr() {

       chapter1_2_widthr = document.getElementById("d3_plots_right").clientWidth,
       chapter1_2_heightr = document.getElementById("d3_plots_right").offsetHeight;

      cha1_2Svg_right.attr("width", chapter1_2_widthr + margin.left + margin.right)
              .attr("height", chapter1_2_heightr + margin.top + margin.bottom)
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


       chapter1_2_x_barr = d3.scaleBand().range([0, chapter1_2_widthr], .1),
       chapter1_2_y_barr = d3.scaleLinear().range([chapter1_2_heightr*0.5, 0]);

       chapter1_2_xAxisr = d3.axisBottom(chapter1_2_x_barr)
       chapter1_2_yAxisr = d3.axisRight(chapter1_2_y_barr)
          .ticks(2)
          .tickSize(chapter1_2_widthr)
          .tickFormat(d3.format("d"));

      chapter1_2_x_barr.domain(chapter1_2_xr)
           .padding(0.1)
           //.paddingOuter(0.5);

      chapter1_2_rectr.attr("x", 0)
          .attr("y", 1)
          .attr("height", 150)
          .attr("width", chapter1_2_widthr)
          .style("fill", "rgba(42, 184, 30, 0.64)");

      chapter1_2_circler.attr("r", 0)
            .style("stroke", "rgb(55, 49, 46)")
            .style("fill", "rgb(55, 49, 46)")
      chapter1_2_drawBarr();
      plot_nd_liner();
    //  repeat();

  }



chapter1_2_redrawr();

window.addEventListener("resize", chapter1_2_redrawr);

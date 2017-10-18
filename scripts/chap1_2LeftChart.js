
var cha1_2Svg_left = d3.select("#chapter1_2_plots_left").append("svg");
var chapter1_2_rect = cha1_2Svg_left.append("rect");
var chapter1_2_circle = cha1_2Svg_left.append("circle");
var chapter1_2_yAxis;
var chapter1_2_xAxis;
var chapter1_2_bar_chart;
var chapter1_2_x_bar;
var chapter1_2_y_bar;
var chapter1_2_width;
var chapter1_2_height;
var chapter1_2_xL = 3;
var data=[];

var chapter1_2_x = [ -1, 0, 1, 2, 3, 4, 5, 6, 7];
var chapter1_2_y = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
var chapter1_2_dataAnswer = [];
for (var i = 0; i < x.length; i++) {
  chapter1_2_dataAnswer.push({
    value: x[i],
    number: y[i]
  });
}

function plot_nd_line() {
  var  width = chapter1_2_width;
  var  height = chapter1_2_height*0.4;

  getData();
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

      x.domain(d3.extent(data, function(d) {
          return d.q;
      }));
      y.domain(d3.extent(data, function(d) {
          return d.p;
      }));


  // cha1_2Svg_left.append("g")
  //   .attr("class", "y axis")
  //   .attr("transform", "translate(20, 10)")
  //   .call(yAxis);
  cha1_2Svg_left.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line)
    .attr("transform", "translate(0, 10)")
    // .attr("fill", "none")
    // .attr("stroke": "steelblue")
    // .attr("stroke-width": "2px");
}

function getData() {

// loop to populate data array with
// probabily - quantile pairs
for (var i = 0; i < 100000; i++) {
    q = normal() // calc random draw from normal dist
    p = gaussian(q, 3, 1) // calc prob of rand draw
    el = {
        "q": q,
        "p": p
    }
    data.push(el)
};

data.sort(function(x, y) {
    return x.q - y.q;
});
}

function chapter1_2_repeat() {

    //  circle.attr("cy", (height-5))
    //        .attr("cx", (x_bar(dataAnswer[4].value) + x_bar.bandwidth()/2))
    //        .attr("r", 0)
    //        .transition()
    //        .duration(0);
    //var x = normal();
    var x = normalRandomScaled(3,15)
    chapter1_2_xL = x;

    console.log(x)
     chapter1_2_circle.attr("cx", (chapter1_2_x_bar(chapter1_2_dataAnswer[x+1].value) + chapter1_2_x_bar.bandwidth()/2))
           .attr("cy", 10)
           .attr("r", 5)
           .transition()
           .duration(1500)
           .attr("cy", (chapter1_2_height-5))
           .on("end", chapter1_2_drawBar);

         //drawBar();

        console.log(x)
        chapter1_2_dataAnswer[x+1].number = chapter1_2_dataAnswer[x+1].number + 1;
        chapter1_2_yAxis.ticks(4)

}

function chapter1_2_drawBar() {

      chapter1_2_y_bar.domain([0, d3.max(chapter1_2_dataAnswer, function(d) {return d.number;})+2]);

       chapter1_2_bar_chart = cha1_2Svg_left.selectAll(".bar")
               .remove()
               .exit()
               .data(chapter1_2_dataAnswer)
               .enter().append("rect")
               .attr("class", "bar")
               .attr("transform", "translate(0, " + (chapter1_2_height*0.5) + ")")
               .attr("x", function(d) {return chapter1_2_x_bar(d.value);})
               .attr("width", chapter1_2_x_bar.bandwidth())
               .attr("y", function(d) {return chapter1_2_y_bar(d.number);})
               .attr("height", function(d) {return chapter1_2_height*0.5 - chapter1_2_y_bar(d.number); })
               .style("fill", "rgb(82, 78, 64)");

      cha1_2Svg_left.selectAll(".axis").remove();
      cha1_2Svg_left.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0, " + chapter1_2_height + ")")
            //.call(d3.axisBottom(x_bar));
            .call(customXAxis);
      cha1_2Svg_left.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(0, " + (chapter1_2_height*0.5) + ")")
            //.call(d3.axisLeft(y_bar));
            .call(customYAxis);

            function customXAxis(svg_left) {
              svg_left.call(chapter1_2_xAxis);
              svg_left.select(".domain").remove();
            }

            function customYAxis(svg_left) {
              svg_left.call(chapter1_2_yAxis);
              svg_left.select(".domain").remove();
              svg_left.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
              svg_left.selectAll(".tick text").attr("x", 4).attr("dy", -4);
            }
    }

function chapter1_2_redraw() {

       chapter1_2_width = document.getElementById("d3_plots_left").clientWidth,
       chapter1_2_height = document.getElementById("d3_plots_left").offsetHeight;

      cha1_2Svg_left.attr("width", chapter1_2_width + margin.left + margin.right)
              .attr("height", chapter1_2_height + margin.top + margin.bottom)
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


       chapter1_2_x_bar = d3.scaleBand().range([0, chapter1_2_width], .1),
       chapter1_2_y_bar = d3.scaleLinear().range([chapter1_2_height*0.5, 0]);

       chapter1_2_xAxis = d3.axisBottom(chapter1_2_x_bar)
       chapter1_2_yAxis = d3.axisRight(chapter1_2_y_bar)
          .ticks(2)
          .tickSize(chapter1_2_width)
          .tickFormat(d3.format("d"));

      chapter1_2_x_bar.domain(chapter1_2_x)
           .padding(0.1)
           //.paddingOuter(0.5);

      chapter1_2_rect.attr("x", 0)
          .attr("y", 1)
          .attr("height", 150)
          .attr("width", chapter1_2_width)
          .style("fill", "rgba(42, 184, 30, 0.64)");

      chapter1_2_circle.attr("r", 0)
            .style("stroke", "rgb(55, 49, 46)")
            .style("fill", "rgb(55, 49, 46)")
      chapter1_2_drawBar();
      plot_nd_line();
    //  repeat();

  }



chapter1_2_redraw();

window.addEventListener("resize", chapter1_2_redraw);

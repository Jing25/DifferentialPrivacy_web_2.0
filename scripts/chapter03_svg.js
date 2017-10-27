
var data_L1 = d3.range(31).map(function() { return [] });
var data_L2 = d3.range(31).map(function() { return [] });
var data_R1 = d3.range(31).map(function() { return [] });
var data_R2 = d3.range(31).map(function() { return [] });
var margin = {top: 0, right: 0, bottom: 20, left: 0};

function updateData() {
  if(typeof svgL1 !== "undefined") data_L1 = svgL1.data;
  if(typeof svgL2 !== "undefined") data_L2 = svgL2.data;
  if(typeof svgR1 !== "undefined") data_R1 = svgR1.data;
  if(typeof svgR2 !== "undefined") data_R2 = svgR2.data;

}

// function clearData(btn, svg) {
//   btn = d3.range(31).map(function() { return [] });
//   svg.redraw(btn);
// }


function chapter03_draw(svg_id, random, answer, data) {

        var svgID = "#" + svg_id;
        d3.select(svgID).selectAll("svg." + svg_id).remove();

        var svg_left = d3.select(svgID).append("svg")
                         .attr("class", "svg_id");
        var rect = svg_left.append("rect");
        var xAxis;
        var x_bar;
        var width;
        var height;
        var r = 5;
        var padding = 3;
        var x = [-5];
        var bins = 31;
        var min = -5;
        var max = 10;
        var result;
        var temp = [];

        // data
        for (var i = 0; i < 30; i++) {
          x.push(x[i]+0.5);
        }


         function getResult(p) {
           temp.push(p);
         }


        generator = (function() {
            var gen = d3.randomNormal(answer, 2);
            return function() {
                return ~~Math.max(min, Math.min(gen(), max));
            }
        }());

        width = document.getElementById(svg_id).clientWidth,
        height = document.getElementById(svg_id).offsetHeight;


        svg_left.attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        x_bar = d3.scaleBand().range([0, width], .1),
        //x_barB = d3.scaleBand().range([0, width], .1),
        y_bar = d3.scaleLinear().range([height*0.5, 0]);


        xAxis = d3.axisBottom(x_bar)
                  .tickFormat(function(d) {
                    if (d % 1 == 0) {
                      return d
                    } else {
                      return ""
                    }
                  })

        x_bar.domain(x)
             .padding(0.1)

        //x_barB.domain(x_bins)
        //.paddingOuter(0.5);
        svg_left.selectAll("rect").remove();
        svg_left.append("rect")
               .attr("x", 0)
               .attr("y", 1)
               .attr("height", height*0.35)
               .attr("width", width)
               .style("fill", "rgba(42, 184, 30, 0.64)");

        svg_left.selectAll(".axis").remove();
        svg_left.append("g")
              .attr("class", "axis axis--x")
              .attr("transform", "translate(0, " + height + ")")
              .call(customXAxis);

        var binCols = svg_left.selectAll('g.bin.' + svg_id)
            .remove()
            .exit()
            .data(data)
            .enter().append('g')
            .attr('class', 'bin '+ svg_id)
            .attr('transform', function(d,i) { return 'translate(' + (i * width/bins) + ',0)' });

        function customXAxis(svg_left) {
          svg_left.call(xAxis);
          //svg_left.select(".domain").remove();
          svg_left.selectAll(".tick line").attr("display", "none");
          svg_left.selectAll(".tick text").attr("x", 0).attr("dy", 1).attr("font-size", "10");
        }



        function drawVLine_random() {
         var x_bins = [];
         for (var i = 1; i < x.length-1; i = i+2) {
           x_bins.push(x[i])
         }

         svg_left.selectAll(".vline")
                  .remove()
                  .exit()
                  .data(x_bins)
                  .enter().append("line")
                  .attr("class", "vline")
                  .attr("transform", "translate(0, " + (height) + ")")
                  .attr("x1", function(d) {return x_bar(d) + x_bar.bandwidth()/2;})
                  .attr("x2", function(d) {return x_bar(d) + x_bar.bandwidth()/2;})
                  .attr("y1", 0)
                  .attr("y2", -(height*0.55))
                  .attr("stroke", "grey");
         }

         function drawVLine() {
           var x_bins = [answer-0.5, answer+0.5];

           svg_left.selectAll(".vline")
                    .remove()
                    .exit()
                    .data(x_bins)
                    .enter().append("line")
                    .attr("class", "vline")
                    .attr("transform", "translate(0, " + (height) + ")")
                    .attr("x1", function(d) {return x_bar(d) + x_bar.bandwidth()/2;})
                    .attr("x2", function(d) {return x_bar(d) + x_bar.bandwidth()/2;})
                    .attr("y1", 0)
                    .attr("y2", -(height*0.55))
                    .attr("stroke", "grey");
         }


        function update(target) {
          var counter = 0;
              intervalId = setInterval(function() {
                var number;
                if(random == 1) number = generator();
                else number = answer;
                var bin;
                bin = (number + Math.abs(d3.min(x)))*2;
                data[bin].push(number);
                getResult(number);
                redraw();
                //counter = counter + 1;
               if (++counter >= target) {
                   clearInterval(intervalId);
                }
              }, 800);

            }

        function redraw() {

            var circle = binCols.selectAll("circle." + svg_id)
                    .data(function(d) { return d });

              circle.enter().append("circle")
                    .style("stroke", "green")
                    .style("fill", "green")
                    .attr("class", svg_id)
                    //.attr("cx", (x_bar(ans) + x_bar.bandwidth()/2))
                    .attr("cx", width/bins/2)
                    .attr("cy", 10)
                    .attr("r", r)
                    .transition()
                    .duration(1500)
                    .ease(d3.easeBounce)
                    .attr('cy', function(d,i) {
                        return height - (i * (r*2 + padding) + padding*2)
                    });
          }

        function plot_nd_line() {

            var heightf = height*0.33;
            var datat = [];

            datat = getData(answer);

            var x = d3.scaleLinear()
                .range([0, width]);

            var y = d3.scaleLinear()
                .range([heightf, 0]);


            var yAxis = d3.axisLeft(y);


            var line = d3.line()
                .x(function(d) {
                    return x(d.q);
                })
                .y(function(d) {
                    return y(d.p);
                });

                x.domain(d3.extent(datat, function(d) {
                    return d.q;
                }));
                //x.domain([-5, 10]);
                y.domain(d3.extent(datat, function(d) {
                    return d.p;
                }));


            svg_left.append("path")
              .datum(datat)
              .attr("class", "line")
              .attr("d", line)
              .attr("transform", "translate(0, 5)")

            function getData(answer) {

              // loop to populate data array with
              // probabily - quantile pairs
              var data = [];
              var min = -5;
              var max = 10;

              q = new Array(100000).fill(-5).map((d, i) => {return d + i*15/100000})

              for (var i = 0; i < 100000; i++) {

                  p = gaussian(q[i], answer, 2) // calc prob of rand draw
                  el = {
                      "q": q[i],
                      "p": p
                  }
                  data.push(el);
              };

              return data;
             }

          }

          //console.log("outside", temp);

      // init
      if (random == 1) {
        drawVLine_random();
        plot_nd_line();
      }
      else {
        drawVLine();
      }
      redraw();

      // return
       var chart = {
         redraw: redraw,
         data: data,
         answer: temp[temp.length-1],
         update: update
       }

       return chart;
  }


// window.addEventListener("resize", );

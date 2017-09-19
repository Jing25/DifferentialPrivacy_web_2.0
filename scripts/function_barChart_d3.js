var svg_left = d3.select("#d3_plots_left"),
    margin = {top: 20, right: 5, bottom: 20, left: 5},
    width = svg_left.attr("width") - margin.left - margin.right,
    height = svg_left.attr("height") - margin.top - margin.bottom,
    g = svg_left.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().range([width, 0]),
    y = d3.scaleLinear().range([height*0.5, 0]);

var line = d3.line()

    

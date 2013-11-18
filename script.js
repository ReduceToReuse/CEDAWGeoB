  var width = 960,
      height = 480;

  var projection = d3.geo.equirectangular()
      .scale(153)
      .translate([width / 2, height / 2])
      .precision(.1);

  var path = d3.geo.path()
      .projection(projection);

  var graticule = d3.geo.graticule();

  var svg = d3.select(".map").append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      

  d3.json("world-50m.json", function(error, world) {
    svg.insert("path", ".graticule")
        .datum(topojson.feature(world, world.objects.land))
        .attr("class", "land")
        .attr("d", path)

    svg.insert("path", ".graticule")
        .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
        .attr("class", "boundary")
        .attr("d", path);
  });

  d3.select(self.frameElement).style("height", height + "px");

  d3.csv("countries-cases.csv", function(data) {
  svg.selectAll("circle")
             .data(data)
             .enter()
             .append("circle")
             .attr("cx", function(d) {
                     return projection([d.lon, d.lat])[0];
             })
             .attr("cy", function(d) {
                     return projection([d.lon, d.lat])[1];
             })
             .attr("r", 5)
              .attr("r", function(d) {
                   return Math.sqrt(parseInt(d["Number of cases"]) * 30);
             })
             .style("fill", "red")
             .style("opacity", 0.75)
             .on("click", function(d){
                  // d3.select("body").append("p").text(d.Country);
                  window.location.hash = d.Country;

              //alert("click");
             })
             .call(d3.helper.tooltip(function(d, i){
                    return "<b>"+d.Country + "</b><br/>Number of cases: "+d["Number of cases"];
          }));

  });


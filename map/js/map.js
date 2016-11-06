//basic map config with custom fills, mercator projection
var map = new Datamap({
 scope: 'ncgeo',
 element: document.getElementById('container1'),
 projection: '',
 geographyConfig: {
   dataUrl: 'data/nc.json'
 },
 setProjection: function(element) {
   var projection = d3.geo.equirectangular()
     .center([-72, 43])
     .rotate([4.4, 0])
     .scale(2000)
     .translate([element.offsetWidth / 2, element.offsetHeight / 4]);
   var path = d3.geo.path()
     .projection(projection);

   return {path: path, projection: projection};
 },
 fills: {
   defaultFill: '#f0af0a',
   lt50: 'rgba(0,244,244,0.9)',
   gt50: 'red'
 },

 data: {
   '071': {fillKey: 'lt50' },
   '001': {fillKey: 'gt50' }
 }
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36315921-1']);
  _gaq.push(['_setDomainName', 'bl.ocks.org']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

(function() {
  //var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  //var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

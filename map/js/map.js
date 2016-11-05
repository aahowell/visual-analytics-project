//basic map config with custom fills, mercator projection
var map = new Datamap({
    element: document.getElementById('container1'),
    geographyConfig: {
        dataUrl: 'data/new-topojson.json'
    },
    scope: 'collection',
    setProjection: function(element, options) {
        var projection, path;
        projection = d3.geo.equirectangular()
            .center([-32, 79])
            .scale(15)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        path = d3.geo.path()
                .projection( projection );
        return {path: path, projection: projection};
        }
    });


var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36315921-1']);
  _gaq.push(['_setDomainName', 'bl.ocks.org']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//basic map config with custom fills, mercator projection
var map = new Datamap({
    element: document.getElementById('container1'),
    geographyConfig: {
        dataUrl: 'data/converted-topojson.json'
    },
    scope: 'collection',
    setProjection: function(element, options) {
        var projection, path;
        projection = d3.geo.equirectangular()
            .center([32, 79])
            .scale(element.offsetWidth)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        path = d3.geo.path()
                .projection(projection);
        return {path: path, projection: projection};
        }
    });

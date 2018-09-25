const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYmFzc21hcmtpZSIsImEiOiJjam1pNThiYTAwMGMwM3FsZmo2endmcjRiIn0.pglqo6fXBC0jES7xWOXWjA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

buildMarker('hotels', [-87.641, 41.895]).addTo(map);

buildMarker('activities', [-87.6359, 41.8789]).addTo(map)

buildMarker('restaurants', [-87.6226, 41.8826]).addTo(map)

module.exports = map

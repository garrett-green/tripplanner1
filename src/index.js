console.log('a package of the web')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYmFzc21hcmtpZSIsImEiOiJjam1pNThiYTAwMGMwM3FsZmo2endmcjRiIn0.pglqo6fXBC0jES7xWOXWjA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

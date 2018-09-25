const mapbox = require("mapbox-gl");
const index = require('./index');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {

  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === 'hotels') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurants')  {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else  {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }

  return new mapbox.Marker(markerDomEl).setLngLat(coords)
};

module.exports = buildMarker;

var conferenceCenter = [36.14844, -5.35342]
var map = L.map('map').setView(conferenceCenter, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(conferenceCenter).addTo(map);
marker.bindPopup("<b>Sunborn Gibraltar</b>").openPopup();

// var mba = [36.618264, -121.901792]
// var marker2 = L.marker(mba).addTo(map);
// marker2.bindPopup("<a href='program.html#reception'><b>Monterey Bay Aquarium</b> - Tuesday Night Event</a>");

// var mbari = [ 36.80210, -121.78833]
// var marker3 = L.marker(mbari).addTo(map);
// marker3.bindPopup("<b>Monterey Bay Aquarium Research Institute</b>");

// var dustbowl = [36.60113, -121.89129]
// var marker4 = L.marker(dustbowl).addTo(map);
// marker4.bindPopup("<a href='program.html#mixer'><b>Dust Bowl Brewing Co.</b> - Monday Night Event</a>");

// var barns = [36.59730, -121.89557]
// var marker5 = L.marker(barns).addTo(map);
// marker5.bindPopup("<a href='program.html#dinner'><b>The Barns at Cooper Molera - Wednesday Night Event</b></a>");
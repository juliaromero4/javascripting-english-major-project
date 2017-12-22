let map, tileLayer;
map = L.map("final-project-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18,
              color: "#56E298"
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
let jsonfile="https://juliaromero4.github.io/javascripting-english-major-project/geodata.json";
let featureList;
console.log("hi");
$.getJSON(jsonfile, function(data){
  let leafletLayer;
  featureList=data.features.map(function(feature){
    return {
      latitude:feature.geometry.coordinates[1],
      longitude:feature.geometry.coordinates[0],
      name:feature.properties.name,
      picture:feature.properties.picture
    };
  });
  leafletLayer = L.featureGroup(featureList.map(function(feature){
    return L.marker([feature.latitude, feature.longitude])
      .bindPopup("<h3>" + feature.name + "</h3><img class='img-fluid' src='" + feature.picture + "'>");
    })
  );
  leafletLayer.addTo(map);
  map.fitBounds(leafletLayer.getBounds());
  map.zoomOut(1);
  fillInTabs();
  listenForClicksOnTabs();
});

let fillInTabs = function(){
   let md;
   md = window.markdownit({html: true}).use(window.markdownitFootnote);
   ["Oswego", "watertown",
     "UMass", "Murrays-Apartment",
     "Pitt-Street", "South-Oxford-Street", "Miami-Florida"].forEach(function(tab){
       $.ajax({
         url: "https://juliaromero4.github.io/javascripting-english-major-project/" + tab + ".md",
       success: function(markdown){
         let html;
         html = md.render(markdown);
        $("#" + tab).html(html);
      }
    });
   });
};

let BootiesJourney;
BootiesJourney = L.marker([43.45426,-76.54093]);
BootiesJourney.addTo(map);
BootiesJourney.bindPopup("This is the start of Booties journey");
let BootiesJourneyCoords, tenthousandth, tenthousandthline, thousandth, thousandthPolyline;
BootiesJourneyCoords = L.latLng(43.45426,-76.54093);
map.panTo(BootiesJourneyCoords);
let oswego, oswegomarker;
oswego=L.latLng(43.45426,-76.54093);
oswegomarker=L.marker(oswego).addTo(map);
tenthousandth= [[43.45426,-76.54093],[43.97799,-75.90866],[42.38987,-72.52642],[40.78522,-73.9694],[40.71801,-73.98268],[40.68669,-73.97341],[25.77431,-80.19341]];
tenthousandthline= L.polyline(tenthousandth, {
                          color: "#EA8B29",
                          fillColor: "#fdf6e3"
                          }
                      ).addTo(map);


let listenForClicksOnTabs = function(){
  $(".nav-link").click(function(){
    let lat, lng;
    lat = $( this ).data("lat");
    lng = $( this ).data("lng");
    map.flyTo([lat, lng], 10);
  });
};

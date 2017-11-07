let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
firstMap.setView([40.71322, -74.00400], 16);
let Derive1;
Derive1 = L.marker([40.71322, -74.00400]);
Derive1.addTo(firstMap);
Derive1.bindPopup("This is the start of my first derive.");
let derive1Coords, tenthousandth, tenthousandthline, thousandth, thousandthPolyline;
derive1Coords = L.latLng(40.71322, -74.00400);
firstMap.panTo(derive1Coords);
let brooklynbridge, brooklynbridgemarker;
brooklynbridge=L.latLng(40.71322,-74.00400);
brooklynbridgemarker=L.marker(brooklynbridge).addTo(firstMap);
tenthousandth= [[40.71322, -74.00400],[40.71418, -74.00633],[40.71299,-74.00729],[40.71380,-74.00887],[40.71436,-74.00838],[40.71496,-74.00968],[40.71658,-74.00837],[40.71747,-74.01059],[40.71631,-74.01092],
[40.71725,-74.01307],[40.72032,-74.01203],[40.72013,-74.01014],[40.72079,-74.01005],[40.72063,-74.00854],[40.71997,-74.00858],[40.71975,-74.00599],[40.72010,-74.00568],[40.71949,-74.00440],
[40.71826,-74.00527],[40.71744,-74.00354],[40.71802,-74.00308],[40.71733,-74.00156],[40.71791,-74.00101],[40.71764,-74.00028],[40.71805,-73.99995],[40.71841,-74.00052],[40.72010,-73.99909],
[40.71981,-73.99857],[40.72085,-73.99768],[40.72023,-73.99604],[40.72090,-73.99570],[40.72067,-73.99496],[40.72127,-73.99470],[40.72097,-73.99392]];
tenthousandthline= L.polyline(tenthousandth, {
                          color: "#268bd2"
                          }
                      ).addTo(firstMap);
let derive2;
derive2= L.marker([40.73180,-74.00421], 16);
derive2.addTo(firstMap);
derive2.bindPopup("This is the start of my second derive.");
let derive2Coords;
derive2Coords= L.latLng(40.73180,-74.00421);
firstMap.panTo(derive2Coords);
tenthousandth= [[40.73180,-74.00421],[40.73155,-74.00481],[40.73189,-74.00506],[40.73167,-74.00655],[40.72955,-74.00689],[40.72944,-74.00519],[40.72861,-74.00532],[40.72867,-74.00708],
[40.72724,-74.00734],[40.72695,-74.00356],[40.72571,-74.00084],[40.72451,-74.00193],[40.72199,-73.99625],[40.72576,-73.99444],[40.72653,-73.99586],[40.72425,-73.99775]];
tenthousandthline= L.polyline(tenthousandth, {
                        color: "#8D2020"
                        }
                      ).addTo(firstMap);

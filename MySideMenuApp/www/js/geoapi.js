import {Page, Platform} from 'ionic/ionic';

var position;
var labels = "123456789";
var labelIndex = 0;
var nbrmark;
function initMap() {
        function maPosition(position) {
            var infopos = "Position déterminée :\n";
            infopos += "Latitude : " + position.coords.latitude + "\n";
            infopos += "Longitude: " + position.coords.longitude + "\n";
            document.getElementById("infoposition").innerHTML = infopos;

            if (typeof(Storage) !== "undefined") {

                localStorage.removeItem("loc_maPosition");
                localStorage.setItem("loc_maPosition", infopos);
                localStorage.removeItem("lat");
                localStorage.removeItem("long");
                var latt = position.coords.latitude;
                var loon = position.coords.longitude;
                localStorage.setItem("lat", latt);
                localStorage.setItem("long", loon);
            }
            else
                {
                    var infop = "localStorage error - erreurPosition (maPosition)";
                    document.getElementById("infoss").innerHTML = infop;
                }

            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            });

            var lat_json = localStorage.getItem("lat");
            var long_json = localStorage.getItem("long");
            var lati = JSON.parse(lat_json);
            var longi = JSON.parse(long_json);


            if ($("#map").length != 0) {
                var myLatLng = {lat: lati, lng: longi};

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    sensor: true,
                    center: myLatLng
                });
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    sensor: true,
                    map: map,

                });

                google.maps.event.addListener(map, 'click', function(event) {
                    addMarker(event.latLng, map);
                    var ev_ll = event.latLng;
                    localStorage.removeItem("loc_eventlatLng");
                    localStorage.setItem("loc_eventlatLng", ev_ll);
                });



            }


        }

        navigator.geolocation.getCurrentPosition(maPosition);

}

// Adds a marker to the map.
function addMarker(location, map) {
extend();
    nbrmark++;
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });

function reset_tab(){

}

function refresh_map() {
initMap();
}

function localStorage_del_loc_elatLng () {
  localStorage.removeItem("loc_eventlatLng");
}

function localStorage_del_loc_maPosition () {
  localStorage.removeItem("loc_eventlatLng");
}

function save_loc_marker () {

}

function del_loc_marker () {
  localStorage.removeItem("loc_eventlatLng");

}

}

function extend() {

document.getElementById("map").style.height = "625px";
initMap();

}

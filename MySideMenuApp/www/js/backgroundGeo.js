var position;
var labels = "12345678910111213141516171819";
var labelIndex = 0;
var nbrmark;

function getWindowHeight() {
    var windowHeight = 0;
    if (typeof(window.innerHeight) =='number') {
        windowHeight = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && document.body.clientHeight) {
                windowHeight=document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}

function chg_height() {
             var ny = getWindowHeight();
             console.log("Height : " + ny );
             ny +="px";
             console.log(ny);
             document.getElementById("map").style.height = ny;
           }


function initMap() {
    if(navigator.geolocation) {
        function maPosition(position) {
            var ny = getWindowHeight();
            console.log("Height 100% : " + ny);
            ny = ny - (ny*(3.5/100))
            console.log("Height 96.5% : " + ny );
            ny +="px";
            console.log("Height 96.5% : " + ny);
            document.getElementById("map").style.height = ny;
            document.getElementById("loader-wait").style.display = "none";
            var infopos = "Position déterminée :\n";
            infopos += "\nLatitude : " + position.coords.latitude + "\n";
            infopos += "\nLongitude: " + position.coords.longitude + "\n";
            document.getElementById("info").style.display = "block";
            document.getElementById("info").innerHTML = infopos;

            var myLating = {lat: position.coords.latitude, lng: position.coords.longitude}
            console.log(myLating);
            map = new google.maps.Map(document.getElementById('map'), {
                center: myLating,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROAD
            });

            var marker = new google.maps.Marker({
            position: myLating,
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

        navigator.geolocation.getCurrentPosition(maPosition);
        console.log("navigator.geolocation.getCurrentPosition(maPosition); -- DONE")
    }
    else {
        var infopos = "Position indéterminée - Error API :\n";
        document.getElementById("info").innerHTML += infopos;
    }



// Adds a marker to the map.
function addMarker(location, map) {
    nbrmark++;
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

}

/**
 * Created by Max on 09/02/2017.
 */

if (navigator.geolocation) {
// l’API est disponible
} else {
// Pas de support, proposer une solution alternative ?
}

function maPosition(position) {
    var infopos = "Position déterminée :\n";
    infopos += "Latitude : "+position.coords.latitude +"\n";
    infopos += "Longitude: "+position.coords.longitude+"\n";
    infopos += "Altitude : "+position.coords.altitude +"\n";
    document.getElementById("infoposition").innerHTML = infopos;
}

if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(maPosition);

function surveillePosition(position) {
    var infopos = "Position déterminée :\n";
    infopos += "Latitude : "+position.coords.latitude +"\n";
    infopos += "Longitude: "+position.coords.longitude+"\n";
    infopos += "Altitude : "+position.coords.altitude +"\n";
    infopos += "Vitesse  : "+position.coords.speed +"\n";
    document.getElementById("infoposition").innerHTML = infopos;
}

var survId = navigator.geolocation.watchPosition(surveillePosition);

function erreurPosition(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
        case error.TIMEOUT:
            info += "Timeout !";
            break;
        case error.PERMISSION_DENIED:
            info += "Vous n’avez pas donné la permission";
            break;
        case error.POSITION_UNAVAILABLE:
            info += "La position n’a pu être déterminée";
            break;
        case error.UNKNOWN_ERROR:
            info += "Erreur inconnue";
            break;
    }
    document.getElementById("infoposition").innerHTML = info;
}


map = new google.maps.Map(document.getElementById('mapp'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.SATELLITE
});


function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('mapp'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

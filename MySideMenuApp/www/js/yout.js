// Load the IFrame Player API code asynchronously.
var i; //variable pour la position dans le tableau tab
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tab=[];// tableau tab qui va stavker les adress des video
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;// il va stocker les new player que nous allons initier.

function reinit_player() {//function pour relancer nos player
  document.getElementById("ytplayer").innerHTML = "";
};

function onYouTubePlayerAPIReady() {//lance le player
    player = new YT.Player('ytplayer', {
      height: '283',
      width: '465',
      videoId: 'NHHJHl8agHE'
    });
};

$(function() {//on recupe les resultat de la recherche en la renvois dans la fonction getResquest
  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    reinit_player();//on le réinialise aprés pour en lancer d'autre
  });
});

function getRequest(searchTerm) {// la fonction getrequest recupe les parametre des video, pour les afficher
  var params = {
    part: 'snippet',
    order: 'viewCount',
    safeSearch: 'none',
    q: searchTerm,
    type: 'video',
    maxResults: '16',
    key: 'AIzaSyDSRCxZb9YtVsb7AwvHYmcftv0_zFddVxY',//cle de sécu api
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data) {

    showResults(data.items);//on stock les resultat dans cette class
  });
};

function urli(i){ //permet de créer un player sur la video que lon choisi
  console.log(i);
  console.log(tab[i]);
  document.getElementById("search-results").style.display = "block";
  var div_ytplayer = "<div id=\"ytplayer\"></div>";
  $('#container-player').html(div_ytplayer);
  document.getElementById("container-player").style.display = "block";
  player = new YT.Player('ytplayer', {
    height: '385',
    width: '645',
    videoId: tab[i],//on recupere le lien de ladress de le tableau
 //console.log(val);
});
};

function addplaylist(i){
console.log(tab[i]);
}

function showResults(results) {// on affiche le resultat de la recherche dans les balise html et on stock les adress dans tab
  document.getElementById("search-results").style.display = "block";
  var html = "";
  //console.log(results);
  i = 0;// inialise i a 0 pour les autres fois
  tab = []; // de meme pour tab pour faire de new recherche
  var load = "Loading...";
  $('#container-player').html(load);
  $.each(results, function(index, value) {//on parcourt nos resultat avec un genre de foreach
    tab.push(value.id.videoId);// on envois les adress de chaque video dans le tableau
    //console.log(value);
    html += '<ion-button id='+i+' class="button button_video_search img_size" onClick=\'urli('+i+')\'>';//boutton pour ouvrir le player de la video function urli
    html += '<div class="title_video"><h2>'+ value.snippet.title +'</h2></div><img src=' + value.snippet.thumbnails.high.url + ' width="380" height="260">';// on affiche les resultats de la recherche en recuperant limage
    html += '<ion-button class="button" onClick=\'addplaylist('+i+')\'>Ajout Playlist</ion-button>'; //function ajouter a la playlist
    html +='</ion-button>';
    i++;
    //console.log("https://www.youtube.com/watch?v=" + value.id.videoId);

  //console.log(tab);
  });
  $('#search-results').html(html); // on lance laffichage dans notre page html dans la balise search-results
    console.log(tab);//on recupe fin de url dans un tableau oklm
};

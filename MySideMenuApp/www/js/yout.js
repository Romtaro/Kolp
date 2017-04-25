// Load the IFrame Player API code asynchronously.
var i;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tab=[];
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function reinit_player() {
  document.getElementById("ytplayer").innerHTML = "";
};

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '283',
      width: '465',
      videoId: 'NHHJHl8agHE'
    });
};

$(function() {
  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    reinit_player();
  });
});

function getRequest(searchTerm) {
  var params = {
    part: 'snippet',
    order: 'viewCount',
    safeSearch: 'none',
    q: searchTerm,
    type: 'video',
    maxResults: '16',
    key: 'AIzaSyDSRCxZb9YtVsb7AwvHYmcftv0_zFddVxY',
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data) {

    showResults(data.items);
  });
};

function urli(i){
  console.log(i);
  console.log(tab[i]);
  document.getElementById("search-results").style.display = "block";
  var div_ytplayer = "<div id=\"ytplayer\"></div>";
  $('#container-player').html(div_ytplayer);
  document.getElementById("container-player").style.display = "block";
  player = new YT.Player('ytplayer', {
    height: '385',
    width: '645',
    videoId: tab[i],
 //console.log(val);
});
};

function showResults(results) {
  document.getElementById("search-results").style.display = "block";
  var html = "";
  //console.log(results);
  i = 0;
  tab = [];
  var load = "Loading...";
  $('#container-player').html(load);
  $.each(results, function(index, value) {
    tab.push(value.id.videoId);
    //console.log(value);
    html += '<ion-button id='+i+' class="button button_video_search img_size" onClick=\'urli('+i+')\'>';
    html += '<div class="title_video"><h2>'+ value.snippet.title +'</h2></div><img src=' + value.snippet.thumbnails.high.url + ' width="380" height="260">';
    html +='</ion-button>';
    i++;
    //console.log("https://www.youtube.com/watch?v=" + value.id.videoId);

  //console.log(tab);
  });
  $('#search-results').html(html);
    console.log(tab);// on recupe fin de url dans un tableau oklm
};

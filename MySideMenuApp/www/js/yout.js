// Load the IFrame Player API code asynchronously.
var i = 0;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tab=[];
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
//  player = new YT.Player('ytplayer', {
//    height: '390',
  //  width: '640',
  //  videoId: 'NHHJHl8agHE'
//  });
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
    maxResults: '15',
    key: 'AIzaSyDSRCxZb9YtVsb7AwvHYmcftv0_zFddVxY',
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data) {

    showResults(data.items);
  });
};

function urli(i){
  document.getElementById("ytplayer").innerHTML = " ";
  document.getElementById("search-results").style.display = "none";
  player = new YT.Player('ytplayer', {
    height: '390',
    width: '640',
    videoId: tab[i],
 //console.log(val);
});
i = 0;
tab = [];
//console.log(i);
};

function showResults(results) {
  document.getElementById("search-results").style.display = "block";
  var html = "";
  //console.log(results);

  $.each(results, function(index, value) {
    tab.push(value.id.videoId);
    html += '<ion-button id='+i+' class="button " onClick=\'urli('+i+')\'>';
    html += '<h2>{{video.title}}</h2><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"' + 'target="_blank"> <p><img src=' + value.snippet.thumbnails.high.url + ' width="380" height="260"></p></a>';
    html +='</ion-button>';
    i++;
    //console.log("https://www.youtube.com/watch?v=" + value.id.videoId);

  //console.log(tab);
  });
  $('#search-results').html(html);
    console.log(tab);// on recupe fin de url dans un tableau oklm
};

function reinit_player() {
  var reinit_empty = " ";
  document.getElementById("ytplayer").innerHTML = reinit_empty;

};

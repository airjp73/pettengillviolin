function initMap() {
  var map_center = {lat: 43.311693, lng: -70.705801};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: map_center
  });

  var johnson = {placeId: 'ChIJyTemcEmD44kRms7Un5a3ypY'};
  var musicAndArts = {placeId: 'ChIJh9_uFT6FskwRgR2hNx1NdbQ'};
  //var mountainTop = {placeId: 'ChIJSRtKHHgJs0wRyaRjTkl7V1s'};
  var mainStreet = {placeId: 'ChIJu7Xjq9prskwRnAiIUfdNzpo'};
  var oldMill = {placeId: 'ChIJGZl5TFakskwRIDZ0470Frfg'};
  var frostGully = {placeId: 'ChIJ7eXndKKAskwR6Dg_639KGLI'};

  var service = new google.maps.places.PlacesService(map);
  service.getDetails(johnson, addMarker);
  service.getDetails(musicAndArts, addMarker);
  //service.getDetails(mountainTop, addMarker);
  service.getDetails(mainStreet, addMarker);
  service.getDetails(oldMill, addMarker);
  service.getDetails(frostGully, addMarker);

  function addMarker(place, status) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name
    });
    var infoWindowContent = "<h6>" + place.name + "</h6>"
                          + "<p>" + place.formatted_address + "</p>"
                          + "<a href='" + place.website + "'>Go to Website</a>";
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    })
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    })
  }

}

function initMap() {
  var map_center = {lat: 43.828049, lng: -70.528867};
  var porter = {lat: 43.807791, lng: -70.888924};
  var lewiston = {lat: 44.098295, lng: -70.214974};
  var portland = {lat: 43.661821, lng: -70.255029};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: map_center
  });
  var marker = new google.maps.Marker({
    position: porter,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: lewiston,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: portland,
    map: map
  });
}

function initTeachingLocations() {
  const lewiston = { lat: 44.098731, lng: -70.212383 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: lewiston,
  });
  new google.maps.Marker({
    position: lewiston,
    map: map,
  });
}

export default initTeachingLocations;

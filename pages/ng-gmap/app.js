var ngmap = angular.module('ngmap',[]);


ngmap.directive('gmap', function () {
  return {
    scope:{
      map: '='
    },
    link: function (scope, elm, attrs) {
      init();
      console.log(scope.map);
      var map,selectedMarker;
      function init() {
        console.log('init Google Map');
        var markers = [];
        map = new google.maps.Map($('.map-canvas')[0], {
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-33.8902, 151.1759),
            new google.maps.LatLng(-33.8474, 151.2631));
        map.fitBounds(defaultBounds);

        var input = ($('.pac-input')[0]);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var searchBox = new google.maps.places.SearchBox((input));

        google.maps.event.addListener(searchBox, 'places_changed', function() {
          var places = searchBox.getPlaces();

          for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
          }

          // For each place, get the icon, place name, and location.
          markers = [];
          var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            var image = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };
            console.log(place.geometry.location);

            // Create a marker for each place.
            var marker = new google.maps.Marker({
              map: map,
              icon: image,
              title: place.name,
              position: place.geometry.location
            });

            markers.push(marker);

            bounds.extend(place.geometry.location);
          }

          google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
          });



          map.fitBounds(bounds);
        });

        google.maps.event.addListener(map, 'bounds_changed', function() {
          var bounds = map.getBounds();
          searchBox.setBounds(bounds);
        });
      }

      function placeMarker(location) {
        if(selectedMarker != null) {
          selectedMarker.setMap(null);
        }
        selectedMarker = new google.maps.Marker({
            position: location,
            map: map
        });
        map.setCenter(location);
        scope.map.location = location;
      }
    }
  };
});

function MainCtrl($scope) {
  $scope.map = {};
  console.log($scope.map);
}
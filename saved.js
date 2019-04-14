

var merch = {
    "_id": "57cf75cea73e494d8675eec3",
    "name": "Chipotle Mexican Grill",
    "category": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ],
    "geocode": {
      "lat": 33.7739824,
      "lng": -84.3634878
    },
    "address": {
      "zip": "30306",
      "city": "Atlanta",
      "street number": "718",
      "state": "GA",
      "street name": "Ponce De Leon Avenue Northeast"
    }
  }


function places(merchant) {

  var lat = merchant.geocode.lat;
  var lng = merchant.geocode.lng;
  url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=1600" + 
    "&type=food&key=AIzaSyB-Ftgni6sX-MLo-3vbNzzsFkqPLJo8ezY";

    $.getJSON( {
    url  : "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=1600" + 
    "&type=food&key=AIzaSyB-Ftgni6sX-MLo-3vbNzzsFkqPLJo8ezY",,
    success : function( data, textStatus ) {
        console.log( textStatus, data );
    }
} );
}

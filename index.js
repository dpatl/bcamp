'use strict';
const yelp = require('yelp-fusion');
const apiKey = 'iWc4aVeCqx_MaWiIIkxqw2oIcb7eNpHUx-_8fMggFg0q_MszgAnESqXjuaNhRtSVs56WxFrh6svdWvJ3asHrtnaatYxxtatnby_e6kXsas64dz_GJVA1wI1VK9CyXHYx';
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

business(merch);

function business(merchant) {
	var name = merchant.name;
	var street = merchant.address["street name"];
	var city = merchant.address.city;
	var state = merchant.address.state;
	console.log(name);
	console.log(street);
	console.log(city);
	console.log(state);
	const searchRequest = {
		name: name,
		address: street + ', ' + city + ', ' + state
	}

	const client = yelp.client(apiKey);

	client.businessMatch({
	  name: name,
	  address1: street,
	  city: city,
	  state: state,
	  country: 'US'
	}).then(response => {
	  var a = response.jsonBody.businesses[0].id;
	  client.business(a).then(response => {
	  var bod = response.jsonBody;
	  console.log(response.jsonBody);
	  return bod;
	}).catch(e => {
	  console.log(e);
	});
	}).catch(e => {
		console.log(e);
	});
}


 

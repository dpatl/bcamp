'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'iWc4aVeCqx_MaWiIIkxqw2oIcb7eNpHUx-_8fMggFg0q_MszgAnESqXjuaNhRtSVs56WxFrh6svdWvJ3asHrtnaatYxxtatnby_e6kXsas64dz_GJVA1wI1VK9CyXHYx';

var merch = {
    "_id": "57cf75cea73e494d8675ec4a",
    "name": "Pastimes Antiques",
    "category": [
      "furniture_store",
      "home_goods_store",
      "store",
      "point_of_interest",
      "establishment"
    ],
    "geocode": {
      "lat": 35.909,
      "lng": -79.046
    },
    "address": {
      "street_number": "hellooo"
    }
  }

business(merch);
function business(merchant) {
	var name = merchant.name;
	var street = merchant.street_name;
	var city = merchant.city;
	var state = merchant.state;
	console.log(name);
	console.log("--------------------------------");
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

	return bod;

}


 
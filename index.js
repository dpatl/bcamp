'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'iWc4aVeCqx_MaWiIIkxqw2oIcb7eNpHUx-_8fMggFg0q_MszgAnESqXjuaNhRtSVs56WxFrh6svdWvJ3asHrtnaatYxxtatnby_e6kXsas64dz_GJVA1wI1VK9CyXHYx';

const searchRequest = {
  name:'Chipotle Mexican Grill',
  address: 'South Meadow Street, Ithica, NY'
};

const client = yelp.client(apiKey);

client.businessMatch({
  name: 'Chipotle Mexican Grill',
  address1: 'South Meadow Street',
  city: 'Ithica',
  state: 'NY',
  country: 'US'
}).then(response => {
  var store_id = response.jsonBody.businesses[0].id;
  console.log(store_id);
  client.busine
});
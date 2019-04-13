var request = require('request');
var _ = require('underscore');

request('http://api.reimaginebanking.com/accounts?key=a3555d774ac75bee7c1c13c843980407', function(error, response, body) {
	//convert data into usable array of json objects
	var json = JSON.parse(body);
	for(var idx in json){
		console.log(json[idx]);
	}
	// _.each(body, function(obj){ 
	// 	console.log(obj)
	// });
})
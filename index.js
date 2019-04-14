var request = require('request');
var _ = require('underscore');
var ids = [];
var x = false; 
request("http://api.reimaginebanking.com/accounts?key=ea28bcabdb8040d803667622d9defbe6", function(error, response, body) {
	//convert data into usable array of json objects
	var json = JSON.parse(body);
	for(var idx in json){
		ids.push(json[idx]._id);
	}
	console.log(ids);
	x = true;
	console.log('---------------------------------');
})

console.log(x);
console.log(ids);

/*
console.log(ids);
for (var i =0; i < ids.length; i++) {
	console.log("GGDGDGDGGD");

		url = "http://api.reimaginebanking.com/accounts/" + ids[i]+ "/purchases?key=ea28bcabdb8040d803667622d9defbe6";
		console.log(url);
		request(url, 
			function(error, response, body) {
			var json = JSON.parse(body);
			for(var idx in json){
				console.log(json[idx]);
			}
		})
}
*/
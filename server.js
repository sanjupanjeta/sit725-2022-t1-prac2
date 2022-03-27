var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var adder = function(num1, num2){
	var result = num1 + num2;
	return result;
}

var subtractor = function(num1, num2){
	var result = num1 - num2;
	return result;
}

var divisor = function(num1, num2){
	var result = num1 / num2;
	return result;
}

var multiplier = function(num1, num2){
	var result = num1 * num2;
	return result;
}

app.get('/adder', function(req, res){
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	var result = adder(num1, num2);
	res.send('The Result is: ' + result);
});

app.get('/subtractor', function(req, res){
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	var result = subtractor(num1, num2);
	res.send('The Result is: ' + result);
});

app.get('/divisor', function(req, res){
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	if (num2 === 0) {
		res.send("num2 can't be 0");
		return false;
	}
	var result = divisor(num1, num2);
	res.send('The Result is: ' + result);
});

app.get('/multiplier', function(req, res){
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	var result = multiplier(num1, num2);
	res.send('The Result is: ' + result);
});

var port = 3000;
app.listen(port);
console.log("server is running on: " + port);
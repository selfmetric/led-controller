"use strict";
var i2cBus = require("i2c-bus");
var dr = require("pca9685");
var pwm;
var express = require("express");
var app = express();

var options = {
	i2c: i2cBus.openSync(1),
	address: 0x40,
	frequency: 1000,
	debug: true
};

pwm = new dr.default(options, function() {
	console.log("Initialization done");
});

app.get('/', function(req, res) {
  res.send('Working');
});


app.get('/sleep', function(req, res) {
	pwm.setDutyCycle(1, 0.10);
	pwm.setDutyCycle(2, 0.10);
	pwm.setDutyCycle(3, 0.10);
	pwm.setDutyCycle(4, 0.10);
	pwm.setDutyCycle(5, 0.10);
	pwm.setDutyCycle(6, 0.10);

});


app.get('/:channel/:intensity', function(req, res) {
  var channel = req.param('channel');
  var intensity = req.param('intensity');


  if (channel == 0) {
    switch (intensity) {
      case '0':
				pwm.setDutyCycle(6, 0.10);
				pwm.setDutyCycle(1, 0.10);
				pwm.setDutyCycle(2, 0.10);
				pwm.setDutyCycle(3, 0.10);
				pwm.setDutyCycle(4, 0.10);
				pwm.setDutyCycle(5, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
				pwm.setDutyCycle(6, 0.15);
				pwm.setDutyCycle(1, 0.15);
				pwm.setDutyCycle(2, 0.15);
				pwm.setDutyCycle(3, 0.15);
				pwm.setDutyCycle(4, 0.15);
				pwm.setDutyCycle(5, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
				pwm.setDutyCycle(6, 0.2);
				pwm.setDutyCycle(1, 0.2);
				pwm.setDutyCycle(2, 0.2);
				pwm.setDutyCycle(3, 0.2);
				pwm.setDutyCycle(4, 0.2);
				pwm.setDutyCycle(5, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
				pwm.setDutyCycle(6, 0.3);
				pwm.setDutyCycle(1, 0.3);
				pwm.setDutyCycle(2, 0.3);
				pwm.setDutyCycle(3, 0.3);
				pwm.setDutyCycle(4, 0.3);
				pwm.setDutyCycle(5, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
				pwm.setDutyCycle(6, 0.4);
				pwm.setDutyCycle(1, 0.4);
				pwm.setDutyCycle(2, 0.4);
				pwm.setDutyCycle(3, 0.4);
				pwm.setDutyCycle(4, 0.4);
				pwm.setDutyCycle(5, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
				pwm.setDutyCycle(6, 0.5);
				pwm.setDutyCycle(1, 0.5);
				pwm.setDutyCycle(2, 0.5);
				pwm.setDutyCycle(3, 0.5);
				pwm.setDutyCycle(4, 0.5);
				pwm.setDutyCycle(5, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
				pwm.setDutyCycle(6, 0.6);
				pwm.setDutyCycle(1, 0.6);
				pwm.setDutyCycle(2, 0.6);
				pwm.setDutyCycle(3, 0.6);
				pwm.setDutyCycle(4, 0.6);
				pwm.setDutyCycle(5, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
				pwm.setDutyCycle(6, 0.7);
				pwm.setDutyCycle(1, 0.7);
				pwm.setDutyCycle(2, 0.7);
				pwm.setDutyCycle(3, 0.7);
				pwm.setDutyCycle(4, 0.7);
				pwm.setDutyCycle(5, 0.7);

        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
				pwm.setDutyCycle(6, 0.8);
				pwm.setDutyCycle(1, 0.8);
				pwm.setDutyCycle(2, 0.8);
				pwm.setDutyCycle(3, 0.8);
				pwm.setDutyCycle(4, 0.8);
				pwm.setDutyCycle(5, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
				pwm.setDutyCycle(6, 0.9);
				pwm.setDutyCycle(1, 0.9);
				pwm.setDutyCycle(2, 0.9);
				pwm.setDutyCycle(3, 0.9);
				pwm.setDutyCycle(4, 0.9);
				pwm.setDutyCycle(5, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
				pwm.setDutyCycle(6, 1);
				pwm.setDutyCycle(1, 1);
				pwm.setDutyCycle(2, 1);
				pwm.setDutyCycle(3, 1);
				pwm.setDutyCycle(4, 1);
				pwm.setDutyCycle(5, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }

  } else if (channel == 1) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(1, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(1, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(1, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(1, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(1, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(1, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(1, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(1, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(1, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(1, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(1, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }

  } else if (channel == 2) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(2, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(2, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(2, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(2, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(2, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(2, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(2, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(2, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(2, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(2, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(2, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }
  } else if (channel == 3) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(3, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(3, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(3, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(3, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(3, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(3, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(3, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(3, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(3, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(3, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(3, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }
  } else if (channel == 4) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(4, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(4, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(4, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(4, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(4, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(4, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(4, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(4, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(4, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(4, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(4, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }
  } else if (channel == 5) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(5, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(5, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(5, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(5, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(5, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(5, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(5, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(5, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(5, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(5, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(5, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }
  } else if (channel == 6) {
    switch (intensity) {
      case '0':
        pwm.setDutyCycle(6, 0.10);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '15':
        pwm.setDutyCycle(6, 0.15);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '20':
        pwm.setDutyCycle(6, 0.2);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '30':
        pwm.setDutyCycle(6, 0.3);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '40':
        pwm.setDutyCycle(6, 0.4);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '50':
        pwm.setDutyCycle(6, 0.5);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '60':
        pwm.setDutyCycle(6, 0.6);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '70':
        pwm.setDutyCycle(6, 0.7);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '80':
        pwm.setDutyCycle(6, 0.8);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '90':
        pwm.setDutyCycle(6, 0.9);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
      case '100':
        pwm.setDutyCycle(6, 1);
        res.send('Channel' + ' ' + channel + ' ' + 'Led intensity set to' + ' ' + intensity);
        break
    }
  }


});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

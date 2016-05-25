"use strict";

var pwm;
var i2cBus = require("i2c-bus");
var dr = require("pca9685");
var express = require("express");
var app = express();

var options = {
	i2c: i2cBus.openSync(1),
	address: 0x40,
	frequency: 1000,
	debug: false
};

pwm = new dr.default(options, function() {
	console.log("PWM - Initialization done");
});

app.get('/', function(req, res) { res.send('Led Controller'); });
app.get('/sleep', function(req, res) { set_all(g_led_param_to_pulse('10')); });
app.get('/:channel/:intensity', set_light );
app.get('/rgb/:r/:g/:b', set_rgb );

app.listen(3000, function() { console.log('Listening on port 3000'); });


function set_rgb(req, res) {
	var r =  validete_input( inverse(parseFloat( req.param('r') )));
	var g = req.param('g');
	var b = req.param('b');

	pwm.setDutyCycle(12, r);
	pwm.setDutyCycle(13, g);
	pwm.setDutyCycle(14, b);
}

function set_light(req, res) {
  var channel = req.param('channel');
  var intensity = req.param('intensity');

  var v_intensity = g_led_param_to_pulse(intensity);

  if(channel == 0) {
	  set_all( v_channel );
  }
  else {
	  pwm.setDutyCycle(channel, v_intensity);
  }

  res.send("Channel" + " {" + channel + "} " + " is set to " + v_intensity);
}

function g_led_param_to_pulse(intensity)
{
	switch (intensity) {
		case '0':   return 0.01;
		case '15':  return 0.15;
		case '20':  return 0.2;
		case '30':  return 0.3;
		case '40':  return 0.4;
		case '50':  return 0.5;
		case '60':  return 0.6;
		case '70':  return 0.7;
		case '80':  return 0.8;
		case '90':  return 0.9;
		case '100': return 0.99;
		default: return 0.01;
	}
}

function inverse(val)
{
	return 1 - val;
}

function validete_input(val)
{
	return (val > 0.99 ? 0.99 : val < 0.01 ? 0.01 : val);
}

function set_all(intensity)
{
	pwm.setDutyCycle(1, intensity);
	pwm.setDutyCycle(2, intensity);
	pwm.setDutyCycle(3, intensity);
	pwm.setDutyCycle(4, intensity);
	pwm.setDutyCycle(5, intensity);
	pwm.setDutyCycle(6, intensity);
}

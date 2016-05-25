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



pwm.setDutyCycle(3, 0.9);


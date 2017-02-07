"use strict";

var pwm;
var i2cBus = require("i2c-bus");
var dr = require("pca9685");

var options = {
	i2c: i2cBus.openSync(1),
	address: 0x40,
	frequency: 1000,
	debug: false
};

pwm = new dr.default(options, function() {
	console.log("PWM - Initialization done");
});

for(i = 0;i < 15; i++) {
    pwm.setDutyCycle(i, 0.01);
}


for(i = 0;i < 15; i++) {
    setTimeout( function() {
        pwm.setDutyCycle(i, 0.99);
    }, 1000);
}
// Using a event module

var event = require("events");

var eventEmitter = new event.EventEmitter();

var myEvent = function(){
    console.log("My Name is Sarthak!");
}

eventEmitter.on('name', myEvent);

eventEmitter.emit('name');
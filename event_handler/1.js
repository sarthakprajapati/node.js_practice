// Using a event module

var event = require("events");

//Create an event handler:

var eventEmitter = new event.EventEmitter();

var myEvent = function(){
    console.log("My Name is Sarthak!");
}

//Assign the event handler to an event:

eventEmitter.on('name', myEvent);

//Fire the 'scream' event:

eventEmitter.emit('name');
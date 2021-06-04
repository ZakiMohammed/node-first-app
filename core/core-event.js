const EventEmitter = require('events')

// initialize the event object
const event = new EventEmitter();

// add listeners
event.addListener('jump', () => console.log('Yay! I jumped'));
event.addListener('swim', () => console.log('Yay! I swim'));

// emit them
event.emit('jump');
event.emit('jump');
event.emit('swim');
event.emit('jump');
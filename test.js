const EventEmitter = require('events');
const emitter = new EventEmitter();

// Методы EventEmitter:
// emit(<event>) - генерирует событие event, заставляя срабатывать обработчики этого события у подписчиков
// on(<event>, <handler>) - подписка на события
// (выполнение функции handler действий при наступлении события event

emitter.on('start', () => console.log('Start'));
emitter.emit('start');

emitter.on('start1', message => console.log(message));
emitter.emit('start1', 'Start message');




class User extends EventEmitter {
    constructor(name, password) {
        super();
        this.name = name;
        this.password = password;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

const user = new User('Vasya', 12345);

user.on('greetings', user.sayHi);

user.emit('greetings'); // Hi! My name is Vasya
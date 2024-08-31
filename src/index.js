import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.prepend('bruh');
console.log(list.at(6).value);
console.log(list.contains('hamster'));
console.log(list.size);
console.log(list.find('turtle'));
list.insertAt('heyo', 0);
list.removeAt(7);

console.log(list.toString());
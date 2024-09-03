// import LinkedList from './linked-list.js';
// import HashMap from './hash-map.js';
import Tree, { prettyPrint } from './tree.js';

const tree = new Tree();
tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(2);
tree.insert(20);
tree.insert(25);
tree.deleteItem(3);
prettyPrint(tree.root);
tree.levelOrder(node => console.log(node.value));

// const list = new LinkedList();
//
// list.append('dog');
// list.append('cat');
// list.append('parrot');
// list.append('hamster');
// list.append('snake');
// list.append('turtle');
//
// list.prepend('bruh');
// console.log(list.at(6).value);
// console.log(list.contains('hamster'));
// console.log(list.size);
// console.log(list.find('turtle'));
// list.insertAt('heyo', 0);
// list.removeAt(7);
//
// console.log(list.toString());

// const test = new HashMap();
// test.set('apple', 'red');
// test.set('banana', 'yellow');
// test.set('carrot', 'orange');
// test.set('dog', 'brown');
// test.set('elephant', 'gray');
// test.set('frog', 'green');
// test.set('grape', 'purple');
// test.set('hat', 'black');
// test.set('ice cream', 'white');
// test.set('jacket', 'blue');
// test.set('kite', 'pink');
// test.set('lion', 'golden');
// test.set('lio', 'golden');
// test.set('lin', 'golden');
// test.set('lon', 'golden');
// test.set('ion', 'golden');
// test.set('moon', 'silver');
// test.set('mon', 'silver');
// test.set('moo', 'silver');
// test.set('mn', 'silver');
//
// console.log(test.get('jacket')); // blue
// console.log(test.get('kite')); // pink
// console.log(test.get('mn')); // silver
// console.log(test.get('m')); // null
// console.log(test.has('m')); // false
// console.log(test.has('lio')); // true
// console.log(test.remove('mn')); // true
// console.log(test.remove('lion')); // true
// console.log(test.remove('m')); // false
// console.log(test.length);
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
//
// console.log(test.toString());

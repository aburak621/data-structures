import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.length = 0;
    this.buckets = new Array(this.capacity).fill().map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hash = this.hash(key);

    const index = this.buckets[hash].findKey(key);
    if (index === -1) {
      this.buckets[hash].appendKey(key, value);
      this.length++;
      this.growIfOverloaded();
    } else {
      this.buckets[hash].at(index).value = value;
    }
  }

  get(key) {
    const hash = this.hash(key);

    const index = this.buckets[hash].findKey(key);
    if (index < 0) {
      return null;
    }
    return this.buckets[hash].at(index).value;
  }

  has(key) {
    const hash = this.hash(key);
    return this.buckets[hash].findKey(key) >= 0;
  }

  remove(key) {
    const hash = this.hash(key);

    const index = this.buckets[hash].findKey(key);
    if (index === -1) {
      return false;
    }

    this.buckets[hash].removeAt(index);
    this.length--;
    return true;
  }

  length() {
    return this.length;
  }

  clear() {
    this.length = 0;
    this.buckets = new Array(this.capacity).fill().map(() => new LinkedList());
  }

  keys() {
    const keys = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node !== null) {
        keys.push(node.key);
        node = node.next;
      }
    });

    return keys;
  }

  values() {
    const values = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node !== null) {
        values.push(node.value);
        node = node.next;
      }
    });

    return values;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node !== null) {
        entries.push([node.key, node.value]);
        node = node.next;
      }
    });

    return entries;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.buckets.length; i++) {
      str += `[${i}]: ${this.buckets[i].toString()}\n`;
    }
    return str;
  }

  growIfOverloaded() {
    if (this.length >= this.capacity * this.loadFactor) {
      this.capacity *= 2;
      this.length = 0;
      const entries = this.entries();
      this.buckets = new Array(this.capacity)
        .fill()
        .map(() => new LinkedList());

      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }
}

export default HashMap;

import Node from './node.js';

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node();
    node.value = value;

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  appendKey(key, value) {
    const node = new Node();
    node.key = key;
    node.value = value;

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  prepend(value) {
    const node = new Node();
    node.value = value;

    if (this.head !== null) {
      node.next = this.head;
    } else {
      this.tail = node;
    }

    this.head = node;
    this.size++;
  }

  at(index) {
    if (this.head === null || index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return -1;
  }

  findKey(key) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentIndex;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return -1;
  }

  toString() {
    let str = '';
    let currentNode = this.head;

    while (currentNode !== null) {
      str += `( ${currentNode.key ? `${currentNode.key}: ` : ''}${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    str += 'null';

    return str;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
      return this.head;
    }

    const node = new Node();
    node.value = value;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex + 1 === index) {
        node.next = currentNode.next;
        currentNode.next = node;

        if (node.next === null) {
          this.tail = node;
        }

        this.size++;
        return node;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return false;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return true;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex + 1 === index) {
        const nodeToRemove = currentNode.next;
        if (nodeToRemove !== null) {
          currentNode.next = nodeToRemove.next;

          if (nodeToRemove === this.tail) {
            this.tail = currentNode;
          }

          this.size--;
          return true;
        }

        return false;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
    return false;
  }
}

export default LinkedList;

import TreeNode from './tree-node.js';

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    // Sort and clear duplicates
    array.sort((a, b) => a - b);
    const cleanArray = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
        cleanArray.push(array[i]);
      }
    }

    this.root = this.buildSubtree(cleanArray);
  }

  buildSubtree(array) {
    if (array.length === 0) {
      return null;
    }

    const middleIndex = Math.floor(array.length / 2);
    const rootNode = new TreeNode();
    rootNode.value = array[middleIndex];

    rootNode.left = this.buildSubtree(array.slice(0, middleIndex));
    rootNode.right = this.buildSubtree(array.slice(middleIndex + 1));

    return rootNode;
  }

  insert(value) {
    let node = this.root;

    while (true) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new TreeNode();
          node.left.value = value;
          return;
        }
        node = node.left;
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new TreeNode();
          node.right.value = value;
          return;
        }
        node = node.right;
      } else {
        return;
      }
    }
  }

  deleteItem(value) {
    let node = this.root;
    let prevNode;

    while (true) {
      if (value < node.value) {
        prevNode = node;
        node = node.left;
      } else if (value > node.value) {
        prevNode = node;
        node = node.right;
      } else {
        break;
      }
    }

    if (node.left === null && node.right === null) {
      if (value < prevNode.value) {
        prevNode.left = null;
      } else if (value > prevNode.value) {
        prevNode.right = null;
      }
    } else if (node.left === null || node.right === null) {
      if (value < prevNode.value) {
        prevNode.left = node.left !== null ? node.left : node.right;
      } else if (value > prevNode.value) {
        prevNode.right = node.left !== null ? node.left : node.right;
      }
    } else {
      let inorderSuccessor = node.right;
      while (inorderSuccessor !== null) {
        if (inorderSuccessor.left === null) {
          const temp = inorderSuccessor.value;
          this.deleteItem(inorderSuccessor.value);
          node.value = temp;
        }
        inorderSuccessor = inorderSuccessor.left;
      }
    }
  }

  find(value) {
    let node = this.root;

    while (node !== null) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return node;
      }
    }

    return null;
  }

  levelOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }

    let node = this.root;
    const queue = [];

    while (node !== null) {
      callback(node);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }

      if (queue.length === 0) {
        break;
      }
      node = queue.shift();
    }
  }

  inOrder(callback, node = this.root) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }

    if (node === null) {
      return;
    }

    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node = this.root) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }

    if (node === null) {
      return;
    }

    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node = this.root) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }

    if (node === null) {
      return;
    }

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  height(node) {
    if (node === null) {
      return -1;
    }

    const left = this.height(node.left);
    const right = this.height(node.right);

    return Math.max(left, right) + 1;
  }

  depth(node) {
    let temp = this.root;
    let depth = 0;

    while (true) {
      if (temp === null) {
        return -1;
      }

      if (node.value < temp.value) {
        temp = temp.left;
        depth++;
      } else if (node.value > temp.value) {
        temp = temp.right;
        depth++;
      } else {
        return depth;
      }
    }
  }

  isBalanced() {
    if (this.root === null) {
      return null;
    }

    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);

    return Math.abs(leftHeight - rightHeight) < 2;
  }

  rebalance() {
    const array = [];
    this.inOrder(node => array.push(node.value));
    this.buildTree(array);
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export { prettyPrint };
export default Tree;

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(num) {
      let newNode = new Node(num);
      if (!this.root) {
        this.root = newNode;
        return this;
      } else {
        let currNode = this.root;
        while (true) {
          // ignore newNode.val === currNode.val
          if (num === currNode.val) return undefined;
  
          if (newNode.val < currNode.val) {
            if (!currNode.left) {
              currNode.left = newNode;
              return this;
            } else {
              currNode = currNode.left
            }
          } else if (newNode.val > currNode.val) {
            if (!currNode.right) {
              currNode.right = newNode;
              return this;
            } else {
              currNode = currNode.right
            }
          }
        }
      }
    }
    find(num) {
      if (!this.root.val) return false;
      let currNode = this.root;
      let found = false;
      while (currNode && !found) {
        if (num < currNode.val) {
          currNode = currNode.left;
        } else if (num > currNode.val) {
          currNode = currNode.right;
        } else {
          return true;
        }
      }
      return false;
    }
    bFS() {
      let queue = [this.root];
      let numsSeen = [];
      while (queue.length) {
        let currNode = queue.shift();
        numsSeen.push(currNode.val);
        if (currNode.left) {
          queue.push(currNode.left)
        }
        if (currNode.right) {
          queue.push(currNode.right)
        }
      }
      return numsSeen;
    }
    dFSPreorder() {
      let numsSeen = [];
      const traverse = node => {
        numsSeen.push(node.val)
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
      }
      traverse(this.root);
      return numsSeen;
    }
    dFSPostorder() {
      let numsSeen = [];
      function traverse (node) {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
        numsSeen.push(node.val);
      }
      traverse(this.root);
      return numsSeen;
    }
    dFSInorder() {
      let numsSeen = [];
      function traverse (node) {
        node.left && traverse(node.left);
        numsSeen.push(node.val);
        node.right && traverse(node.right);
      }
      traverse(this.root);
      return numsSeen;
    }
  }

module.exports = { Node, BinarySearchTree }
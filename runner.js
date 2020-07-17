/*
This file is intended to be used as a quick way to test the code found in this solution.
Simply copy and paste the entire contents of this file and paste it into a REPL for JavaScript.
I recommend https://repl.it/languages/nodejs OR simply using the Chrome developer tools > Console.
*/


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addNode(data) {
        if (isNaN(data) || !data) {
            return;
        }
        if (data < this.data && this.left) {
            this.left.addNode(data);
        } else if (data < this.data && !this.left) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.addNode(data);
        } else if (data > this.data && !this.right) {
            this.right = new Node(data);
        } else if (this.data = data) {
            return;
        }
    }
}

class Queue {
    constructor() {
        this.data = [];
    }

    addData(data) {
        this.data.unshift(data);
    }

    removeData() {
        return this.data.pop();
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    traverseBFS() {
        let queue = new Queue();
        queue.addData(this.root);

        console.log("Starting Breadth-First Traversal...");

        while (queue.data.length) {
            let nextNode = queue.removeData();

            console.log(nextNode.data);

            if (nextNode.left) {
              queue.addData(nextNode.left);
            }
            if (nextNode.right) {
              queue.addData(nextNode.right);
            }
        }
    }
}


// Feel free to add new INT values below to test the functionality of the program!
// Initialize the root node first...
let rootNode = new Node(0);

// Add new values by copying and pasting from a line below, changing the argument passed in (INT ONLY)
rootNode.addNode(1);
rootNode.addNode(2);
rootNode.addNode(3);
rootNode.addNode(4);
rootNode.addNode(-1);


let binaryTree = new BinaryTree();
binaryTree.root = rootNode;
binaryTree.traverseBFS();
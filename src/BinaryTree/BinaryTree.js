/*
Implementing a BinaryTree class with one method: traverseBFS.
This class is initialized with root pointer to a root node to a binary tree.
*/

import Queue from "../Queue";

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to traverse a tree, breadth-first.
    traverseBFS() {
        // Instantiate a new queue to hold the nodes as we traverse.
        let queue = new Queue();
        // The first node in this queue will be the root node.
        queue.addData(this.root);

        console.log("Starting Breadth-First Traversal...");

        // Iterative solution to breadth-first traversal.
        // While there are still nodes left in our queue...
        while (queue.data.length) {
            // Remove the next node in line in a FIFO order
            let nextNode = queue.removeData();

            // Print out the data of that next node.
            console.log(nextNode.data);

            // Check to prevent null values from entering the queue.
            if (nextNode.left) {
                // Add all of the next node's chuldren, left and right, to the queue.
              queue.addData(nextNode.left);
            }
            if (nextNode.right) {
              queue.addData(nextNode.right);
            }
            // This will continue to run until there are no child nodes left in the queue.
        }
    }
}

export default BinaryTree;
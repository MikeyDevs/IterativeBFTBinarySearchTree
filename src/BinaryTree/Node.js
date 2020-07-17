/*
Implementing a Node class for a Binary Search Tree with one method: addNode.
This class is initialized with the node's own data, its left child, and its right child.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // Method to add node to the current tree structure.
    addNode(data) {
        // Check to see if the data being passed in is NOT a number OR is undefined/null. If so, return.
        if (isNaN(data) || !data) {
            return;
        }
        // Check to see if the data coming in is less than the current data, and if there is a current left child.
        if (data < this.data && this.left) {
            // If both conditions are met, use recursion to call the method to its left child.
            this.left.addNode(data);
            // If there is no left child in the current Node...
        } else if (data < this.data && !this.left) {
            // Instantiate a new Node with the incoming data and assign that data to the current left child
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.addNode(data);
        } else if (data > this.data && !this.right) {
            this.right = new Node(data);
            // If the data coming in is the same as the current Node's data, return.
        } else if (this.data = data) {
            return;
        }
    }
}

export default Node;
import BinaryTree from "./src/BinaryTree/BinaryTree";
import Node from "./src/BinaryTree/Node";


// Create a new Binary Tree by initalizing Nodes
// Initialize the root node first...
let rootNode = new Node(0);

// Then continue to add data to the root node, hence creating a tree
rootNode.addNode(1);
rootNode.addNode(2);
rootNode.addNode(3);
rootNode.addNode(4);
rootNode.addNode(-1);


// Initialize a new BinaryTree object
let binaryTree = new BinaryTree();

// Set the root node (with all of its children) as the root of the new instance of the BinaryTree class
binaryTree.root = rootNode;

//Finally, call the traverse method that is attached to the BinaryTree object to traverse the tree at breadth-first
binaryTree.traverseBFS();
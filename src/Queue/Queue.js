/*
Implementing a Queue class with two methods: addData and removeData.
This class uses an array to mimic the structure of a First In, First Out data structure.
*/


class Queue {
    constructor() {
        //use an array to hold the data
        this.data = [];
    }

    // add data to the beginnig of the array.
    addData(data) {
        this.data.unshift(data);
    }

    // remove and return the data at the end of the array.
    removeData() {
        return this.data.pop();
    }
}
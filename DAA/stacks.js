function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the stack class
var stack1 = new Stack();

console.log(stack1); // {array: []}

Stack.prototype.push = function(value) {
    this.array.push(value);
}

stack1.push(1);
stack1.push(2);
stack1.push(3);

Stack.prototype.pop = function() {
    this.array.pop();
}

stack1.pop();
console.log(stack1); 
// Q1
let inputText = "((2 + 3) * (5 - 1))";

let stack = [];

let q1 = true;

for (let i = 0; i < inputText.length; i++) {

    let currentChar = inputText[i];

    if (currentChar === "(") {
        stack.push(currentChar);
    }

    else if (currentChar === ")") {

        if (stack.length === 0) {
            q1 = false;
            break;
        }

        stack.pop();
    }

}

if (stack.length !== 0) {
    q1 = false;
}

console.log(q1);


///////////////////////////////////////////////////
// Q2
const queue = [];

function enqueue(item) {
    queue.push(item);
}

function dequeue() {
    if (queue.length === 0) {
        console.log("Queue is empty");
        return;
    }

    return queue.shift();
}

function peek() {
    if (queue.length === 0) {
        return;
    }

    return queue[0];
}

function isEmpty() {
    return queue.length === 0;
}

function size() {
    return queue.length;
}

// ----- Test -----

enqueue("A");
enqueue("B");
enqueue("C");

console.log("Queue Size:", size());        
console.log("First Item:", peek());          

console.log("Removed:", dequeue());         

enqueue("E");

console.log("Queue Size:", size());         
console.log("Is Empty?", isEmpty());        

console.log("Removed:", dequeue());        
console.log("Removed:", dequeue());         
console.log("Removed:", dequeue());         
console.log("Removed:", dequeue());


///////////////////////////////////////////////
// Q3
function calc(firstNumber) {

    return function (secondNumber) {

        return function (thirdNumber) {

            return {

                sum: function () {
                    return firstNumber + secondNumber + thirdNumber;
                },

                multiply: function () {
                    return firstNumber * secondNumber * thirdNumber;
                }

            };

        };

    };

}

const calculator = calc(2)(3)(4);

console.log(calculator.sum());
console.log(calculator.multiply());


////////////////////////////////////////////////
// Q4
function arrayFilter(array, predicate) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (predicate(array[i])) {
            result.push(array[i]);
        }

    }

    return result;
}


let oddNumbers = arrayFilter(
    [1, 2, 3],
    function (item) {
        return item % 2 !== 0;
    }
);

console.log(oddNumbers); 


function arrayMap(array, callback) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        result.push(callback(array[i]));

    }

    return result;
}


let multipliedNumbers = arrayMap(
    [1, 2, 3],
    function (item) {
        return item * 10;
    }
);

console.log(multipliedNumbers); 


function arrayReduce(array, callback, initialValue) {

    let result = initialValue;

    for (let i = 0; i < array.length; i++) {

        result = callback(result, array[i]);

    }

    return result;
}


let sum = arrayReduce(
    [1, 2, 3, 4],
    function (total, item) {
        return total + item;
    },
    0
);

console.log(sum); 


/////////////////////////////////////////////////
// Q5 
const orders = [
    { id: 1, amount: 250, status: "delivered", items: ["book", "pen"] },
    { id: 2, amount: 120, status: "pending", items: ["notebook"] },
    { id: 3, amount: 560, status: "delivered", items: ["bag", "shoes", "belt"] },
    { id: 4, amount: 75, status: "canceled", items: ["pencil"] },
    { id: 5, amount: 430, status: "delivered", items: ["watch"] },
];

function processOrders(orderList, filterFn, processFn) {

    let total = 0;

    for (let i = 0; i < orderList.length; i++) {

        let order = orderList[i];

        if (filterFn(order)) {
            total += processFn(order);
        }

    }

    return total;
}


function deliveredOrders(order) {
    return order.status === "delivered" && order.amount > 200;
}

function addTax(order) {
    return order.amount * 1.10;
}

const totalWithTax = processOrders(
    orders,
    deliveredOrders,
    addTax
);

console.log("Total Delivered Orders With Tax:", totalWithTax);


function notCanceled(order) {
    return order.status !== "canceled";
}

function calculateItemsPrice(order) {
    return order.items.length * 50;
}

const totalItemsPrice = processOrders(
    orders,
    notCanceled,
    calculateItemsPrice
);

console.log("Total Items Price:", totalItemsPrice);
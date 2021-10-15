function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return y != 0 ? x / y : NaN;
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    pi: 3.14
}
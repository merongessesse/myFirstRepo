const sum = function(arr) {
    return arr.reduce(function(total, element) {
        return total + element;
    })
}

const multiply = function(arr) {
    return arr.reduce(function(total, element) {
        return total * element;
    })
}

const reverse = function(st) {
    return st.split('').reverse().join('');
}

const filterLongWords = function(arr, i) {
    return arr.filter(v => v.length > i);
}
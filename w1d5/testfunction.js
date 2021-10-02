const max = function(x, y) {
    return x > y ? x : y;
}

const maxOfThree = function(x, y, z) {
    if (x > y)
        return x > z ? x : z;

    else return y > z ? y : z;
}

const isVowel = function(v) {
    v = v.toLowerCase();
    return v == 'a' || v === 'e' || v === 'o' || v === 'u' || v === 'i';
}

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

const findLongestWord = function(arr) {

    let max = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }

    return max;
}

const filterLongWords = function(arr, i) {
    return arr.filter(v => v.length > i);
}

const a = [1, 3, 5, 3, 3];

const b = a.map(function(elem, i, array) {
    return elem * 10;
})


const c = a.filter(function(elem, i, array) {
    return elem === 3;
});

const d = a.reduce(function(prevValue, elem, i, array) {
    return prevValue * elem;
});

//from the jsfiddle

document.writeln(b.toString() + "<br/>");

document.writeln(c.toString() + "<br/>");

document.writeln(d + "<br/>");

const d2 = a.find(function(elem) {
    return elem > 1;
}); //3
const d3 = a.findIndex(function(elem) {
    return elem > 1;
}); //1
document.writeln(d2 + "<br/>");
document.writeln(d3);



/* function myFunctionTest(output, function) */

const myFunctionTest = function(output, f, mess) {
    if (output.tostring === f.tostring) {
        console.log(mess + output + " : TEST SUCCEEDED");
    } else {
        console.log(mess + output + " : TEST FAILED");
    }
}


myFunctionTest(20, max(10, 20), "Expected output of max(10,20) is ");
myFunctionTest(30, maxOfThree(10, 20, 30), "Expected output of maxOfThree(10, 20, 30) is ");
myFunctionTest(true, isVowel('a'), "Expected output of isVowel('a') is ");
myFunctionTest(false, isVowel('z'), "Expected output of isVowel(z) is ");
myFunctionTest(10, sum([1, 2, 3, 4]), "Expected output of sum([1, 2, 3, 4]) is ");
myFunctionTest(24, multiply([1, 2, 3, 4]), "Expected output of multiply([1, 2, 3, 4]) is ");

myFunctionTest("!ereht olleh", reverse("hello there!"), "Expected output of reverse('hello there!') is ");

myFunctionTest(5, findLongestWord(["one", "three", "four"]), "Expected output of findLongestWord(['one','three', 'four']) is ");

myFunctionTest(["three", "mynuml"], filterLongWords(["one", "three", "mynuml"], 3), "Expected output of filterLongWords(['one','three', 'mynuml'],3) is ");
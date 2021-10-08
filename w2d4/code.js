String.prototype.filter = function(wrd) {

    return this.split(' ').filter(el => el != wrd).join(' ');
}

Array.prototype.bubbleSort = function() {
    return bblSort(this);
}

function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};

Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

function Teacher() {}

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`
}
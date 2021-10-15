module.exports.drive = function() {
    console.log("car moves forward");
}

module.exports.turn = function(degrees) {
    console.log(`car turns by ${degrees} degrees`);
}

module.exports.break = function() {
    console.log(`car stops`);
}
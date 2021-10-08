describe("filter", function() {
    it("filters bad words from string", function() {
        assert.equal("This house is not nice!".filter('not'), "This house is nice!");
    })
});

describe("bubbleSort", function() {
    it("Bubble sort on a list of int arrays", function() {
        expect([3, 2, 1].bubbleSort()).to.eql([1, 2, 3]);
    })
});

describe("Teacher.teach", function() {
    it("test the teach method of a teacher", function() {
        let mic = new Teacher();
        mic.initialize("Michael", "35");

        assert.equal(mic.teach("WAP"), "Michael is now teaching WAP");
    })
});
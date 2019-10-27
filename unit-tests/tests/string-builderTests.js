const StringBuilder = require("../string-builder.js");
let expect = require("chai").expect;

describe('StringBuilder', function(){
    it("Can be instantiated with a passed in string argument or without anything", function(){
        let instance = new StringBuilder();
        expect(typeof instance).to.equal('object');
    });

    it("Can be instantiated with a passed in string argument or without anything", function(){
        let instance = new StringBuilder("Test");
        expect(typeof instance).to.equal('object');
    });

    it("Can be instantiated with a passed in string argument", function(){
        let instance = new StringBuilder("Test");
        expect(instance._stringArray).to.deep.equal(['T', 'e', 's', 't']);
    });
    
    it("Function append(string) - converts the passed in string argument to an array and adds it to the end of the storage", function(){
        let instance = new StringBuilder("Test");
        instance.append("B")
        expect(instance._stringArray.join('')).to.be.equal("TestB");
    });

    it("Function append(string) - converts the passed in string argument to an array and adds it to the end of the storage", function(){
        let instance = new StringBuilder("Test");
        instance.append("B")
        expect(instance._stringArray).to.have.lengthOf(5);
    });

    it("Function prepend(string) - converts the passed in string argument to an array and adds it to the beginning of the storage", function(){
        let instance = new StringBuilder("T");
        instance.prepend("A")
        expect(instance._stringArray).to.deep.equal(['A', 'T']);
    });

    it("Function prepend(string) - converts the passed in string argument to an array and adds it to the beginning of the storage", function(){
        let instance = new StringBuilder("Test");
        instance.prepend("A")
        expect(instance._stringArray.join('')).to.be.equal("ATest");
    });

    it("Function prepend(string) - converts the passed in string argument to an array and adds it to the beginning of the storage", function(){
        let instance = new StringBuilder("Test");
        instance.prepend("A")
        expect(instance._stringArray).to.have.lengthOf(5);
    });

    it("Function insertAt(string, index) - converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("Test");
        instance.insertAt('I', 2)
        expect(instance._stringArray[2]).to.equal("I");
    });

    it("Function insertAt(string, index) - converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("Test");
        instance.insertAt('I', 2)
        expect(instance._stringArray.join('')).to.be.equal("TeIst");
    });

    it("Function insertAt(string, index) - converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("T");
        instance.insertAt('I', 0)
        expect(instance._stringArray).to.deep.equal(['I', 'T']);
    });

    it("Function remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("Test");
        instance.remove(2, 2)
        expect(instance._stringArray.length).to.equal(2);
    });

    it("Function remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("Test");
        instance.remove(0, 0)
        expect(instance._stringArray).to.deep.equal(['T', 'e', 's', 't']);
    });

    it("Function remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)", function(){
        let instance = new StringBuilder("Testing");
        instance.remove(2, 5)
        expect(instance._stringArray.join('')).to.be.equal("Te");
    });

    it("Function toString() - returns a string with all elements joined by an empty string", function(){
        let instance = new StringBuilder("Test");
        
        expect(instance.toString()).to.equal(Array.from("Test").join(''));
    });

    it("Argument must be a string", function(){
        
        expect(() => new StringBuilder(25)).to.throw(TypeError, 'Argument must be string');
    });

    it("Argument must be a string", function(){
        
        expect(() => new StringBuilder()._stringArray).to.have.lengthOf(0);
    });

    it("Argument must be a string", function(){
        let instance = new StringBuilder("Test");        
        expect(() => instance.append(25)).to.throw(TypeError, 'Argument must be string');
    });

    it("Argument must be a string", function(){
        let instance = new StringBuilder("Test");        
        expect(() => instance.prepend(25)).to.throw(TypeError, 'Argument must be string');
    });

    it("Argument must be a string", function(){
        let instance = new StringBuilder("Test");        
        expect(() => instance.insertAt(25, 7)).to.throw(TypeError, 'Argument must be string');
    });

    it("Argument must be a string", function(){
        let instance = new StringBuilder("Test");        
        expect(() => StringBuilder._vrfyParam(25)).to.throw(TypeError, 'Argument must be string');
    });

    it("Functions attached to instance", function(){
        let instance = new StringBuilder("Test");        
        expect(instance).to.have.property("append");
        expect(instance).to.have.property("prepend");
        expect(instance).to.have.property("remove");
        expect(instance).to.have.property("insertAt");
        expect(instance).to.have.property("_stringArray");
    });

    it("Argument must be a string", function(){
        expect(typeof StringBuilder._vrfyParam).to.equal("function");
    });

    it("Argument must be a string", function(){
        let result = StringBuilder._vrfyParam("Test");
        expect(result).to.equal(undefined);
    });
})
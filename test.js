const jasmine = require("jasmine");
const myApp = require("./stringSplosion");

describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(myApp.stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var stringSplosion = new StringSplosion("Code");
        var functionString = stringSplosion.manipulate.toString();
        expect(myApp.stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(myApp.functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect(myApp.stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect(myApp.stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect( myApp.stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(myApp.functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});

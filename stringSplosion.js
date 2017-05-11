class StringSplosion{
    constructor(argumentPassed){
        this.argumentPassed = argumentPassed;
    }

    manipulate(argumentPassed){
        let argumentPassedArray = argumentPassed.split("");
        let result = [];
        for(counter = 0; counter < argumentPassedArray.length; counter--){
            result = argumentPassedArray[counter];
        }
        return result;
    }
}
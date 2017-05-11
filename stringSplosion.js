class StringSplosion{
    constructor(argumentPassed){
        this.argumentPassed = argumentPassed;
    }

    manipulate(argumentPassed){
        let argumentPassedArray = argumentPassed.split("");
        let result = [];
        for(let counter = 0; counter < argumentPassedArray.length; counter++){
            for(let innerCounter = 0; innerCounter <= counter; innerCounter++){
              result.push(argumentPassedArray[innerCounter]);
            }
        }
        return result.join();
    }
}

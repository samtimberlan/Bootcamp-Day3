const isPalindrome = (argumentPassed) => {
  let result = argumentPassed.split("").reverse().join("");
  if(argumentPassed === result){
    return true;
  }
  return false;
}

const reverseString = (argumentPassed) => 
{
  if(argumentPassed === null || argumentPassed === undefined){
      errorMessage = 'Please enter a string';
      return errorMessage;
    }

    else if(argumentPassed === ""){
      return null;
    }

    else if(isPalindrome(argumentPassed)){
      return true;
    }
  let result = argumentPassed.split("").reverse().join("");
   return result;
}

module.exports = {reverseString};

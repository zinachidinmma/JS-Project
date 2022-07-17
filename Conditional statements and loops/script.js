/*Comparison of two integers*/
   function greater(firstNumber,secondNumber){
    if(firstNumber>secondNumber){
        return firstNumber;
     } else {
          return secondNumber;
     }
}

console.log(greater(10,15));
console.log(greater(1,0));

/*Checking for odd and even integers*/
    function odd_or_even(number){
        if(number%2==0){
            console.log("The number" + " "+ number + " " + "is even" );
        } else {
            console.log("The number" + number + "is odd" );
        }
    }
    console.log(odd_or_even(12));
    

// Daniel Davis, postfixCalc, Takes regular Infix into postfix and calculates to base 10, 1/27/15//

function convert(Input) {
  
  var operands = new Stack();
  var operators = new Stack();
  
  while (i = 0; i <= Stack.length(); i++) { // goes through stack length
  
    if ( Input == 1 || Input == 2 || Input == 3 || Input == 4 || Input == 5 || Input == 6 || Input == 7 || Input == 8 || Input == 9 || Input == 0) { // if a number
      operands.push(Input); // pushes input into the operands stack
      console.log('Input has been pushed to operands stack'); // lets me know job is done
    }// end of if
    
    else if (Input == '' || Input == "" || Input == '.') { // if a spacial character 
      Stack.splice(Input); // delete that character
      console.log('Input has be spliced'); // let me know job is done
    }// end of else if
    
    else if (Input == '+' || Input == '-' || Input == '*' || Input == '/') { // if character is an operator
      operators.push(Input); // push it onto operators stack
      console.log('Input has been pushed to operators'); // job is done
    }// end of else if
    
    else if (Input == '(') { // if the beginning of a private calculation
      convert(); // start up converting that section
      console.log('Starting private calc'); // job is going
    }// end of else if
    
    else if(Input == ')') { // if the end of a private calc
      continue; // break from recursion and continue conversion
      console.log('end of private clac'); // job is done
    }// end of else if
    
    else { // anything else
      console.log('Error, Invalid Character'); // why would you put that in here
    }// end of else
    
  }// end of while loop
  
  operands.forEach(console.log(currentValue));
  operators.forEach(console.log(currentValue));
  
}// end of function

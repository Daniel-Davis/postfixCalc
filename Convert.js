// Daniel Davis, postfixCalc, Takes regular Infix into postfix and calculates to base 10, 1/27/15//

function convert(Input) {
  
  var output = new Stack();
  var operands = new Stack();
  var operators = new Stack();
  
  while (i = 0; i <= Input.length(); i++) { // goes through stack length
  
    if ( Input[i] == 1 || Input[i] == 2 || Input[i] == 3 || Input[i] == 4 || Input[i] == 5 || Input[i] == 6 || Input[i] == 7 || Input[i] == 8 || Input[i] == 9 || Input[i] == 0) { // if a number
      operands.push(Input); // pushes input into the operands stack
      console.log('Input has been pushed to operands stack'); // lets me know job is done
    }// end of if
    
    else if (Input[i] == '+' || Input[i] == '-' || Input[i] == '*' || Input[i] == '/') { // if character is an operator
      operators.push(Input[i]); // push it onto operators stack
      console.log('Input has been pushed to operators'); // job is done
    }// end of else if
    
    else if (Input[i] == '(') { // if the beginning of a private calculation
      Input.Splice(i,1); // deletes un needed '('
      convert(); // start up converting that section
      console.log('Starting private calc'); // job is going
    }// end of else if
    
    else if(Input[i] == ')') { // if the end of a private calc
      Input.Splice(i,1); // delete un needed ')'
      continue; // break from recursion and continue conversion
      console.log('end of private clac'); // job is done
    }// end of else if
    
    else { // anything else
      console.log('Error, Invalid Character'); // why would you put that in here
    }// end of else
    
  }// end of while loop
  
  operands.forEach(console.log(currentValue));
  operators.forEach(console.log(currentValue));
  
  for (var i=0, i<=operators.length, i++) { // pushes all operators onto output stack
    output.push(operators[i]);
  }// end of for loop
  
  for (var i=0, i<=operands.length, i++) { // pushes all operands onto output stack
    output.push(operands[i]);
  }// end of for loop
  
  return output; // returns output stack
  
}// end of function

// Daniel Davis, postfixCalc, Takes regular Infix into postfix and calculates to base 10, 1/27/15//

function convert(Input) {
  
  var operands = new Stack();
  var operators = new Stack();
  
  while (i = 0; i <= Stack.length(); i++) {
    if ( Input == 1 || Input == 2 || Input == 3 || Input == 4 || Input == 5 || Input == 6 || Input == 7 || Input == 8 || Input == 9 || Input == 0) {
      operands.push(Input);
      console.log('Input has been pushed to operands stack');
    }// end of if
    else if(Input == '' || Input == "" || Input == '.' || Input == '(' || Input == ')') {
      Stack.splice(Input);
      console.log('Input has be spliced');
    }// end of else if
    else if (Input == '+' || Input == '-' || Input == '*' || Input == '/') {
      operators.push(Input);
      console.log('Input has been pushed to operators');
    }// end of else if
    else {
      console.log('Error, Invalid Character');
    }// end of else
  }// end of while loop
  
  operands.foreach(console.log(element));
  operators.foreach(console.log(element));

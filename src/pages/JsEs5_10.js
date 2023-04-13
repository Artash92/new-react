import React,{useState} from 'react';
import RuEs5_10 from '../lang/RuEs5_10';
import AmEs5_10 from '../lang/AmEs5_10';

function JsEs5_10() {
 
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский

  const handleEnglishClick = () => {
    setLanguage('en');
  };

  const handleRussianClick = () => {
    setLanguage('ru');
  };

  const handleArmenianClick = () => {
    setLanguage('am');
  };
  
  
  
  return (
    <div className='java-script'>
        
        <div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Russian</button>
        <button onClick={handleArmenianClick}>Armenian</button>
      </div>

      {language === 'en' && (
        <div>     
        
        
        <h1>JavaScript ES5 Examples</h1>

<b>Function to calculate the power of a number</b>
    
    <code>
   
    <p>{"function pow(num, exp) { "}</p>

    <p>{" var cnt = 0; "}</p>

    <p>{"var res = 1; "}</p>

    <p>{"while (cnt < exp) { "}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>{" }"}</p>

    <p>{"return res;"}</p>

    <p>{"}"}</p>
    
    </code>   

<p><b>pow(num, exp)</b>: This function calculates the power of a number. It takes two parameters, num and exp, and returns the value of num raised to the power of exp. The function uses a while loop and a counter to repeatedly multiply num by itself exp number of times until the counter reaches exp.</p>


<b>Function to calculate the power of a number (alternative version)</b>
<code>

<p>{'function pow2(num1, num2) {'}</p>

<p>{'var num3 = 1;'}</p>

<p>{'for (var i = 1; i <= num2; i++) {'}</p>

<p>{'num3 *= num1;'}</p>

<p>{'}'}</p>

<p>{'return num3;'}</p>

<p>{'}'}</p>

</code>

<p><b>pow2(num1, num2)</b>: This function calculates the power of a number. It takes two parameters, num1 and num2, and returns the value of num1 raised to the power of num2. The function uses a for loop to repeatedly multiply num1 by itself num2 number of times until the loop completes.</p>

<b>Function to check if a number is prime</b>

<code>
  <p>{'function isPrime(number) {'}</p> 

  <p>{'if (number < 2) {'}</p> 

  <p>{'return false;'}</p> 

  <p>{'} else if (number == undefined) {'}</p> 

  <p>{' return undefined;'}</p> 

  <p>{'} else {'}</p> 

  <p>{'for (var i = 2; i < number; i++) {'}</p>

   <p>{' if (number % i === 0) {'}</p> 

   <p>{'return false;'}</p>

   <p>{' }'}</p>

   <p>{'}'}</p>

   <p>{'return true;'}</p>

   <p>{'}'}</p>

   <p>{'}'}</p>

</code> 

<p><b>isPrime(number)</b>: This function checks whether a number is prime or not. It takes a parameter number and returns true if the number is prime, otherwise it returns false. The function first checks if the number is less than 2, in which case it immediately returns false. If the number is undefined, it returns undefined. Otherwise, the function uses a for loop to check if any number between 2 and number (exclusive) divides number evenly. If such a number is found, the function returns false. If no such number is found, the function returns true.</p>

<h4>Creating a pyramid using asterisks in JavaScript</h4>

<code>
    <p>{"var x = 6; "}</p>

    <p>{'var string = "";'}</p>

    <p>{"for (var i = 1; i <= x; i++) {"}</p>

    <p>{"for (var y = 1; y <= x - i; y++) {"}</p>

    <p>{'string += " ";'}</p>

    <p>{"}"}</p>

    <p>{" for (var k = 0; k < 2 * i - 1; k++) {"}</p>

    <p>{' string += "*"; '}</p>

    <p>{" }"}</p>

    <p>{'string += "\n";'}</p>

    <p>{"}"}</p>

    <p>{"console.log(string);"}</p>
    
</code>

<p>The code creates a pyramid pattern using asterisks ('*') and spaces.</p>

<p>The code starts by defining a variable 'x' with a value of 6 and an empty string variable 'string'. Then, it uses a for loop to iterate through each row of the pyramid, starting from 1 and going up to 'x'.</p>

<p>Inside the first for loop, another for loop is used to add spaces before the asterisks. It adds (x-i) number of spaces before each row of asterisks.</p>

<p>Then, the second for loop is used to add asterisks to the string. The number of asterisks added in each row is given by the formula 2*i-1, where 'i' is the current row number.</p>   

<p>Finally, a newline character is added to the end of each row, and the completed string is printed to the console using the console.log() method.</p>  

<b> Creating a Pyramid Pattern with Stars and Numbers</b>

<code>
    <p>{'var lineCount = 5;'}</p>

    <p>{"var symb = '*';"}</p>

    <p>{"var result = ''; "}</p>

    <p>{'for (var i = 0; i < lineCount; i++){'}</p>

    <p>{'for(var j = 0; j < lineCount - i; j++){'}</p>

    <p>{"result += '1'; "}</p>

    <p>{' }'}</p>

    <p>{"result += symb + '\\n;'"}</p>

    <p>{" symb += ' *';"}</p>

    <p>{"}"}</p>

    <p>{"console.log(result)"}</p>
</code>

<p>The code creates a pattern of stars and numbers in a pyramid shape. It first defines the number of lines for the pyramid and the symbol to use (in this case, ''). It then uses nested loops to build each line of the pyramid, starting with the base and adding one symbol at a time until it reaches the top. The numbers in the pattern are represented by the digit '1'. Each line of the pyramid is constructed by adding the appropriate number of '1's, followed by the symbol, and then a newline character. The symbol used for each line is updated using the string concatenation operator to add an additional '' for each new line. Finally, the resulting pattern is printed to the console using the 'console.log' function.</p>

    <h3>JavaScript functions for generating Fibonacci series</h3>


    <b>Explame</b>
    <code>
      <p>{"function fibo(num) { "}</p>

      <p>{"if (isNaN(+num)) { "}</p>

      <p>{"return 'ERROR'; "}</p>

      <p>{" } "}</p>

      <p>{"var firstN = 0; "}</p>

      <p>{" var secondN = 1; "}</p>

      <p>{"while (firstN < num) {"}</p>

      <p>{" console.log(firstN); "}</p>

      <p>{" secondN = firstN + secondN; "}</p>

      <p>{"firstN = secondN - firstN; "}</p>

      <p>{"}"}</p>

      <p>{"}"}</p>

      <p>{"fibo(55);"}</p>
    </code>

    <b>Explame</b>

    <code>
      <p>{"function fibonachi(num) {"}</p>

      <p>{"var num1 = 0;"}</p>

      <p>{"var num2 = 1;"}</p>

      <p>{' if (typeof num !== "number") {'}</p>

      <p>{'console.error("write only numbers");'}</p>

      <p>{"} else {"}</p>

      <p>{"for (var i; num1 < num;) {"}</p>

      <p>{" console.log(num1);"}</p>

      <p>{" i = num1 + num2;"}</p>

      <p>{"num1 = num2;"}</p>

      <p>{"num2 = i;"}</p>

      <p>{" }"}</p>

      <p>{" }"}</p>

      <p>{"}"}</p>

      <p>{"fibonachi(100);"}</p>
    </code>

    <b>Example</b>
    
    <code>
      
      <p>{"function fibonachi(n) {"}</p>

      <p>{' if (typeof n === "number") {'}</p>

      <p>{" var a = 0; "}</p>

      <p>{"var b = 1; "}</p>

      <p>{"var result = 0;"}</p>

      <p>{" for (; a < n;) {"}</p>

      <p>{" console.log(a)"}</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>{"}"}</p>

      <p>{" } else {"}</p>

      <p>{'console.error("please write only number")'}</p>

      <p>{"}"}</p>

      <p>{"}"}</p>
    </code>

<p>These are three different implementations of the Fibonacci sequence generator in JavaScript</p>

<p>The first implementation (fibo) uses a while loop to generate Fibonacci numbers up to a given limit (num) and prints them using console.log(). It first checks if the input is a valid number, and if not, it returns an error message.</p>

<p>The second implementation (fibonachi) uses a for loop to generate Fibonacci numbers up to a given limit (num) and prints them using console.log(). It first checks if the input is a valid number, and if not, it prints an error message to the console.</p>    

 <p>The third implementation (fibonachi) also uses a for loop to generate Fibonacci numbers up to a given limit (n) and prints them using console.log(). It first checks if the input is a valid number, and if not, it prints an error message to the console. This implementation uses three variables to generate the next Fibonacci number: a, b, and result. It starts with a = 0 and b = 1, and for each iteration, it calculates the sum of a and b, stores the result in result, sets a to b, and sets b to result.</p>   
    
   
 <h3>Chess board JavaScript</h3>

 <code>
  <p>{"function chess(rows, symbolOne, symbolTwo, currentRow) {"}</p>

  <p>{"var symbol = ' ';"}</p>

  <p>{'if (typeof rows != "number"'}</p>

  <p>{'|| typeof symbolOne != "string"'}</p>

  <p>{'|| typeof symbolTwo != "string") {'}</p>

  <p>{' console.error("Invalid params");'}</p>

  <p>{"return; "}</p>

  <p>{"}"}</p>

  <p>{"rows = rows || 8;"}</p>

  <p>{' symbolOne = symbolOne || " ⬛";'}</p>
  
  <p>{'symbolTwo = symbolTwo || " ⬜";'}</p>

  <p>{"currentRow = currentRow || 1;"}</p>

  <p>{" if (currentRow > rows) return '';"}</p>

  <p>{" for (var i = 0; i < rows / 2; i++) {"}</p>

  <p>{"symbol += symbolOne + symbolTwo;"}</p>

  <p>{" }"}</p>

  <p>{' symbol += "\\n";'}</p>

  <p>{"symbol += chess(rows, symbolTwo, symbolOne, currentRow + 1);"}</p>

  <p>{" return symbol;"}</p>
  
  <p>{'}'}</p>

  <p>{'console.log(chess(8, "⬛", "⬜"))'}</p>
  
  </code>  

  <p>This code defines a recursive function called "chess" that takes four parameters: "rows", "symbolOne", "symbolTwo", and "currentRow". It aims to create a string representation of a chessboard pattern by alternating two symbols, "symbolOne" and "symbolTwo", for each square on the board.</p>
   
  <p>The function first checks whether the input parameters are valid, i.e., whether "rows" is a number and "symbolOne" and "symbolTwo" are strings. If any of the parameters are invalid, it returns an error message and exits the function</p>  
    
  <p>Then, it sets default values for "rows", "symbolOne", and "symbolTwo" if they were not provided. The default value for "rows" is 8, while the default values for "symbolOne" and "symbolTwo" are two Unicode characters that represent a black square and a white square, respectively.</p>  

  <p>Next, the function checks whether it has reached the end of the chessboard (i.e., whether "currentRow" is greater than "rows"). If so, it returns an empty string and exits the function.</p>

  <p>If the end of the chessboard has not been reached, the function creates a string "symbol" by appending "symbolOne" and "symbolTwo" alternately "rows / 2" times (since each row consists of "rows / 2" pairs of symbols).</p>

  <p>It then appends a newline character to the "symbol" string and makes a recursive call to the "chess" function, swapping "symbolOne" and "symbolTwo" and increasing "currentRow" by 1.</p>  
    
  <p>Finally, it returns the "symbol" string, which contains the entire chessboard pattern. The last line of code invokes the "chess" function with "rows" set to 8 and "symbolOne" and "symbolTwo" set to the Unicode characters representing black and white squares, respectively, and logs the resulting chessboard pattern to the console.</p> 
   
  </div>

)}

  
  {language === 'ru' && (
        <div>
          <RuEs5_10 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_10 />
        </div>
      )}
   
  
    </div>
  )
}

export default JsEs5_10;
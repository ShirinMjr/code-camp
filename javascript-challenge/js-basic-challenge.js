//This is a practice JavaScript code
//You can also nest arrays within other arrays, This is also called a multi-dimensional array.



//Modify the new array myArray so that it contains both a string and a number (in that order).
const myArray = ["peanut butter", 1];
/**
 * Escape Sequences in Strings
 *  Code	Output
 *  \'	single quote
 *  \"	double quote
 *  \\	backslash
 *  \n	newline
 *  \r	carriage return
 *  \t	tab
 *  \b	word boundary
 *  \f	form feed
 */
//Assign the following three lines of text into the single variable myStr using escape sequences.
/**
    FirstLine
        \SecondLine
    ThirdLine
 */
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
/**
 * Change the provided string to a string with single quotes
 *  at the beginning and end and no escape characters.
 * 
 * Right now, the <a> tag in the string uses double quotes everywhere. 
 * You will need to change the outer quotes to single quotes so you can remove the escape characters.
 */
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
//when you need a literal quote: " or ' inside of your string
/**
 * In JavaScript, you can escape a quote from considering 
 * it as an end of string quote by placing a backslash (\) in front of the quote.
 */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//#5 Convert the assignments for a, b, and c to use the /= operator.
let ax = 48;
let bx = 108;
let cx = 33;
ax /= 12;
bx /= 4;
cx /= 11;
//#4 Convert the assignments for a, b, and c to use the *= operator.
let aaa = 5;
let bbb = 12;
let ccc = 4.6;
aaa *= 5;
bbb *= 3;
ccc *= 10;
//#3 Convert the assignments for a, b, and c to use the -= operator.
let aa = 11;
let bb = 9;
let cc = 3;
aa -= 6;
bb -= 15;
cc -= 1;
//#2 Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
/* * #1
 * var keyword can be easily overwritten,
 * Unlike var, when you use let, a variable with the same name can only be declared once.
 * It is common for developers to use uppercase variable
 * identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
 *
*/

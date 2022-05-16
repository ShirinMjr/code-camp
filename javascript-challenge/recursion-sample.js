/**
 * Question 1: Sum all numbers
 * Write a function called sumRange. It will take a number and return the sum of all numbers
 * from 1 up to the number passed in.
 * Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}
console.log(sumRange(3));

/**
 * Write a function called power which takes in a base and an exponent.
 * If the exponent is 0, return 1.
 * console.log(power(2, 4)); // 16
 * console.log(power(2, 3)); // 8
 * console.log(power(2, 2)); // 4 
 * console.log(power(2, 1)); // 2
 * console.log(power(2, 0)); // 1
 */

function power() {

}

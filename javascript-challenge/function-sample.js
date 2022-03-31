//Function sample code
/**
 * Variables which are declared without the let or const keywords are automatically 
 * created in the global scope. 
 * This can create unintended consequences elsewhere in your code or 
 * when running a function again. You should always declare your variables with let or const.
 * 
 * Variables which are declared within a function, 
 * as well as the function parameters, have local scope. 
 * That means they are only visible within that function.
 * 
 * It is possible to have both local and global variables with the same name.
 * When you do this, the local variable takes precedence over the global variable.
 * 
 * A function can include the return statement but it does not have to.
 * In the case that the function doesn't have a return statement,
 * when you call it, the function processes the inner code but the returned value is undefined.
 */
const outerWear = "T-Shirt";
console.log(outerWear);

function myOutfit() {
    const outerWear = "sweater";
    console.log(outerWear);
    return outerWear;
}

myOutfit();
console.log(outerWear);


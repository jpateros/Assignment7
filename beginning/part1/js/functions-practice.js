//STEP 1
function halfNumber(number) {
    var result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    document.write("Half of " + number + " is " + result + ".");
    return result;
}
halfNumber(2);
//STEP 2
function squareNumber(number) {
    var result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    document.write("The result of squaring the number " + number + " is " + result + ".");
    return result;
}
squareNumber(3);
//STEP 3
function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    console.log(num1 + " is " + result + "% of " + num2 + ".");
    document.write(num1 + " is " + result + "% of " + num2 + ".");
    return result;
}
percentOf(2, 4);
//STEP 4
function findModulus(num1, num2) {
    var result = num2 % num1;
    console.log(num1 + " is the modulus of " + num2 + " and " + num1 + ".");
    document.write(num1 + " is the modulus of " + num2 + " and " + num1 + ".");
    return result;
}
findModulus(4, 10);
//STEP 5
function sumOfNumbers() {
    var input = prompt("Enter numbers delimited by commas:");
    var nums = input.split(',');

    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += Number(nums[i].trim());
    }
    console.log("The sum of the numbers is: " + sum);
    document.write("The sum of the numbers is: " + sum);
    
    return sum;
}
sumOfNumbers()

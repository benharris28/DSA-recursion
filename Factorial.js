// Multiple by each 

// Base case
// The number is 1

let factorial = (num) => {
// base case
if (num === 1) {
    return num;
} else {
    return num * factorial(num - 1)
}

}

console.log(factorial(5));
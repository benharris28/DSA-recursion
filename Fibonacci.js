// Accept a number as parameter
// Base case should be that number
// Work forward, counting and summming numbers before it

let fibonacci = (n) => {
    // base case is 1
    if (n < 2) {
        return n;
    }
     else {
       return fibonacci(n - 1) + fibonacci(n - 2)
        
       
    }
}

console.log(fibonacci(7));

// I don't know how to print the array...
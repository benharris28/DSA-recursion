// Function that counts how many sheep jump over the fence
// Take number as input (number of sheep)
// 


const sheepCounter = function(number) {
    // Base case
    if (number === 0) {
        console.log("All Sheep Jumped Over the Fence")
    } else {
        console.log('Another sheep jumps over the fence')
        let counter = number - 1;
        sheepCounter(counter);
    }

    

}

sheepCounter(3);

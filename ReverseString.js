// Function that reverses a string
// Base case should be the last item in the string


let reverseString = (string) => {
    if (string === "") {
        return "";
        
    } else {
        console.log(string)
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

reverseString("Hello");
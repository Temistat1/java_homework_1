// Function with a conditional statement
function checkArgument(value) {
    if (value === "Apple") {
        console.log("It's an Apple!");
    } else if (value === "Banana") {
        console.log("It's a Banana!");
    } else if (value === "Orange") {
        console.log("It's an Orange!");
    } else {
        console.log("Unknown fruit.");
    }
}

// Test the function with different values
checkArgument("Apple");   // Output: "It's an Apple!"
checkArgument("Banana");  // Output: "It's a Banana!"
checkArgument("Grapes");  // Output: "Unknown fruit."

// try and catch 
console.log("1. try and catch ")
try {
    let goal = undefinedfunction();
} catch (error) {
    console.log("Error name: ", error.name)
    console.log("Error Message: ", error.message)
}

// try and catch and finally
console.log("2. try and catch and finally")
try {
    const result = 10/0;
    console.log(result);

    JSON.parse("{ Invalid JSON}")
} catch (error) {
    console.error("Error aa gya: ", error.message )
} finally {
    console.log("Execution Finished.")
}

// Throwing Custom Errors
console.log("3. Throwing Custom Errors")
function divide(a,b){
    if (b == 0) {
        throw new Error("Division Not possible with 0.")        
    }
    return a/b;
}

try {
    console.log(divide(10,0))
} catch (error) {
    console.log(error.message)
}

// Error Object Properties
console.log("Error Object Properties")
try {
    let num = x + 5; 
} catch (error) {
    console.log("Name:", error.name); 
    console.log("Message:", error.message); 
    console.log("Stack:", error.stack); 
}
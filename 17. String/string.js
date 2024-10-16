// quotes
console.log("string quotes");
let singleQuote = 'singleQuote';
let doubleQuote = 'doubleQuote';
console.log(singleQuote);
console.log(doubleQuote);

// Template String
console.log("Template String");
let tem = `he's good person!`;
console.log(tem);

// String Length
console.log("String Length");
let len = "hduysdgsdhsodsaxasoiasd";
console.log(len.length);

// string methods
console.log("string methods");
let methods = "Good one";
console.log("upper case: ", methods.toUpperCase());
console.log( "lower case:  ", methods.toLowerCase());
console.log( "index of:  ", methods.indexOf('one'));
console.log( "slice:  ", methods.slice(0,2));
console.log( "replace:  ", methods.replace("one", "Work"));
console.log( "split:  ", methods.split(","));

// Concatenating Strings
console.log("Concatenating Strings")
let con1 = "Good";
let con2 = "Work";
console.log(con1 + " " + con2);
console.log(`${con1} ${con2}`);

// string searching 
let js = "JavaScript counts positions from zero.";
console.log("index of: " + js.indexOf("counts"))
console.log("lastIndexOf: " + js.lastIndexOf("zero"))
console.log("search: " + js.search("from"))
console.log("match: " + js.match("from"))
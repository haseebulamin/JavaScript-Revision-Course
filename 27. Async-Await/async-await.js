// Basic Example of Async/Await
console.log("Basic Example of Async/Await");

async function fetchData() {
    return "Data has been fetched.";
}

fetchData().then(result => console.log(result));

// Using await to Pause Execution
console.log("Using await to Pause Execution");

function delay(rs) {
    return new Promise(resolve => setTimeout(resolve, rs)) 
}

async function fetch() {
    console.log("Fetching data...")
    await delay(2000);
    console.log("Data fetched.")
}

fetch();


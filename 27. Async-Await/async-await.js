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

// Real-world Example: Fetching Data with Async/Await
console.log("Real-world Example: Fetching Data with Async/Await");

async function useGetDate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log("data fetched:", data)
    } 
    catch (error) {
      console.log("Error Fetched: ", error);  
    }
}

useGetDate();

// Handling Multiple Async Calls
console.log("Handling Multiple Async Calls");

async function userData() {
    const data1 = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
    const data2 = await fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json());

    console.log("Data 1 fetched: ", data1);
    console.log("Data 2 fetched: ", data2);
}

userData();

// Error Handling with Async/Await
console.log("Error Handling with Async/Await");

async function userGetDate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok) throw new Error("Error get in response.");
        const data = await response.json();
        console.log("data fetched:", data)
    } 
    catch (error) {
      console.log("Error Fetched: ", error);  
    }
}

userGetDate();
console.log("Error Handling with Async/Await");

async function userGetDate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok) throw new Error("Error get in response.");
        const data = await response.json();
        console.log("data fetched:", data)
    } 
    catch (error) {
      console.log("Error Fetched: ", error);  
    }
}

userGetDate();

let asy = document.getElementById("async");

asy.style.backgroundColor = "tomato";
asy.style.padding = "100px";
asy.style.textAlign = "center";

asy.style.color = "green";
asy.style.fontSize = "100px"
asy.style.fontWeight = "800";
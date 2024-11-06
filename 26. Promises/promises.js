// promises

const myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve(console.log("Process resolved."));
  } else {
    reject(console.log("Process Rejected."));
  }
});

// catch and try
myPromise
  .then((result) => {
    console.log(result); // Output: "The operation was successful!"
  })
  .catch((error) => {
    console.error("error aa gya"); // Output (if rejected): "The operation failed!"
  });

  // promise all 
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.resolve("Promise 2 resolved");
const promise3 = Promise.resolve("Promise 3 resolved");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });

    // promise race 

const fastPromise = new Promise((resolve) => setTimeout(resolve, 100, "Fast Promise"));
const slowPromise = new Promise((resolve) => setTimeout(resolve, 500, "Slow Promise"));

Promise.race([fastPromise, slowPromise])
    .then((result) => {
        console.log("Race winner:", result); 
    });
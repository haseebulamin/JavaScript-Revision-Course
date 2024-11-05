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

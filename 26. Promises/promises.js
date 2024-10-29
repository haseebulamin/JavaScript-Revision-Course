// promises

const myPromise = new Promise((resolve, reject)=>{
  let success = false;

  if(success){
    resolve(console.log("Process resolved."))
  }
  else{
    reject(console.log("Process Rejected."))
  }
})


// 
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise1 = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise1.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
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
  document.getElementById("demo1").innerHTML = some;
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


// use callback for promise 
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo2").innerHTML = value;
}

// timeout 

setTimeout(() => {
  document.getElementById("demo3").innerHTML = "I love You theodore!!!";
},4000);

setTimeout(() => {
  document.getElementById("demo4").innerHTML = "I love You mahh theodore!!!";
},5000);
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
console.log("Start")

Promise.resolve().then(()=>{
    console.log("middle");
})
console.log("end")
var ADD  = (a,b)=>{
return new Promise((resolve,reject)=>{
if(typeof a ==="number"&&typeof b ==="number"){
    resolve(a+b);
}
else{
    reject("Numbers only could be added.");
}
})
}


ADD(4,5).then((res)=>{
    console.log(res);
    return ADD(res,3);
})
.then((messsage)=>{
    console.log("message",messsage);
})
.catch((error)=>{
    console.log(error);
})

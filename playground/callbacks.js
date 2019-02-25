var getuser = (id,callback)=>{

    var user ={
        id:id,
        name:"swaroop"
    }
    setTimeout(() => {
        callback(user);
    }, 2000);
}

getuser(3,(Userobj)=>{
    console.log(Userobj);
})

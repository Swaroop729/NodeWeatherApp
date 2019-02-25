const request = require('request')
var apikey = 'b76f7c8d4c992940b224fea71b1cd0b5'



// 
var weatherforecast = (lat,lng)=>{

var url = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`


return new Promise((resolve,reject)=>{
// console.log(url);
    request({
        url : url,
        json:true

    }
        
        ,(error,response,body)=>{

            // console.log(JSON.stringify(body.currently,undefined,2));
            if(error){
                reject(`Couldn't connect to forecast.io servers!!`);
            }
            else{
                resolve(
                {
                    Weather : body.hourly.summary,
                    temperature :  body.currently.temperature   
                })
            }
    })
})
}

module.exports={
    weatherforecast
}
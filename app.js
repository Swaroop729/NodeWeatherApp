
const yargs = require('yargs');
const geocode = require('./geocode/geocodeAddress');
const wetherfc = require('./weatherforecast/weatherforecast');

// yargs.commmand('a','Find the Address Lon and Lat ',{

// })
var args = yargs
.options({
    address:{
    alias:'a',
    describe : 'Address Fetching...',
    demand:true,
    string:true
    }
})
.help()
.alias('help','h')
.argv;


geocode.geocode(args.address)
.then((message)=>{
    console.log((message.address));
    console.log((message.latitude));
    console.log((message.longitude));
   return wetherfc.weatherforecast(message.latitude,message.longitude)})
.then((res)=>{
    
    // console.log("req : " ,JSON.stringify(res,undefined,2) );
    console.log((res.Weather));
    console.log((res.temperature));
}) 
.catch((error)=>{
    console.log(error);
})
    // console.log( `Address  : ${address}`)    
   
        // console.log(JSON.stringify(results,undefined,2) );




//         return new Promise ((resolve,reject)=>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                     resolve(`Sumarry of Weather in your area : ${Weather}`);
//                     resolve(`Temperature in your area : ${temperature}`);
//             }
//         });
//     }
// });

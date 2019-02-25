
const request = require('request');
const geocode = (address,callback)=>{

   
    return new Promise((resolve,reject)=>{
    

        var encodedaddress = encodeURI(address);
        var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=AIzaSyAXbsCcXYE6KkTLqFeU66aZhwZFFQuBBEc`
        
    request(
        {
            url:url,
            json:true
        }
        
        ,(error,response,body)=>{
        // console.log(body);
        // console.log(JSON.stringify(response,undefined,2) );
        // console.log(JSON.stringify(response.results[0].formatted_address,undefined,2) );

            if(error){
                reject("Unable to connect to servers to fetch latitude and longitude now !!")
            }
            else if(body.status=="ZERO_RESULTS"){
                reject("Please give more generalized address to fetch the address!!")
            }
            else if(body.status=="OVER_QUERY_LIMIT"){
                reject("The Limit for querying has been finished please disconnect and connect again!!")
            }
            else if (body.status=="OK"){
                resolve(
                {
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng,

                });
                // console.log(JSON.stringify(`Address  : ${body.results[0].formatted_address}`) );
                // console.log(JSON.stringify(`Latitude  : ${body.results[0].geometry.location.lat}`) );
                // console.log(JSON.stringify(`Longitue  : ${body.results[0].geometry.location.lng}`) );
            }
        });
            
    })


}


module.exports={
    geocode,
}
//   import Axios from 'axios';
const Axios = require('axios');
const yargs = require('yargs');
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


var encodedaddress = encodeURI(args.address);
var Locationurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=AIzaSyAXbsCcXYE6KkTLqFeU66aZhwZFFQuBBEc`

Axios.get(Locationurl)
.then((response)=>{
    console.log(response.data.results[0].formatted_address)
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var apikey = 'b76f7c8d4c992940b224fea71b1cd0b5'
    var WeatherForecasturl = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`
    return Axios.get(WeatherForecasturl)
    .then((res)=>{
        console.log((res.data.currently.temperature));
        console.log((res.data.hourly.summary));
    })
    .catch((error)=>{
        console.log(error);
    })
})
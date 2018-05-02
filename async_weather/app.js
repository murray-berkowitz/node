const request = require('request')
const yargs = require('yargs')

const argv = yargs.options({
    address: {
        alias: 'a',
        demand: true,
        describe: 'Enter address for weather',
        string: true
    }
}).help().argv

let {address} = argv

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCG02KvcwFIlnRU5-hUvxpEivQ2-wwqyL4`,
    json: true
}, (err, res, body)=>{
    if(err){
        console.log(err)
    }
    else if(body.status === "ZERO_RESULTS"){
        console.log('Cant find address')
    }
    else {
        console.log(`Address: ${body.results[0].formatted_address}`)
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
    }
})


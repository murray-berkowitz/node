const request = require('request')

const geocodeAddress = (address, callback) => {
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCG02KvcwFIlnRU5-hUvxpEivQ2-wwqyL4`,
        json: true
    }, (err, res, body)=>{
        if(err){
            callback('Cant connect to requested server')
        }
        else if(body.status === "ZERO_RESULTS"){ //unique to google maps api
            callback('Cant find address')
        }
        else if(body.status === "OK"){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = {
    geocodeAddress
}
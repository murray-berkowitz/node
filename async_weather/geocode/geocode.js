const request = require('request')
const Promise = require('bluebird')

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCG02KvcwFIlnRU5-hUvxpEivQ2-wwqyL4`,
            json: true
        }, (err, res, body)=>{
            if(err){
                reject('Cant connect to requested server')
            }
            else if(body.status === "ZERO_RESULTS"){ //unique to google maps api
                reject('Cant find address')
            }
            else if(body.status === "OK"){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
}

const fetchWeather = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/91fd4fe3960adb52e622da2782ab82d6/${lat},${lng}`,
            json: true
        }, (err, res, body) => {
            if(!err && res.statusCode === 200) {
                resolve([res, body])
            }
            else {
                reject('Unable to fetch weather')
            }
        })
    })
}

module.exports = {
    geocodeAddress,
    fetchWeather
}
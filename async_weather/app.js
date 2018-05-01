const request = require('request')

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street&key=AIzaSyCG02KvcwFIlnRU5-hUvxpEivQ2-wwqyL4',
    json: true
}, (err, res, body)=>{
    console.log(JSON.stringify(body, undefined, 2))
})


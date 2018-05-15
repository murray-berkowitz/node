const yargs = require('yargs')

const {geocodeAddress, fetchWeather} = require('./geocode/geocode')

const argv = yargs.options({
    address: {
        alias: 'a',
        demand: true,
        describe: 'Enter address for weather',
        string: true
    }
}).help()
.alias('help', 'h')
.argv
let {address} = argv

geocodeAddress(address)
.then(data => {
    console.log(data)
    return fetchWeather(data.latitude, data.longitude)
})
.then(weaterData => console.log(weaterData.currently.temperature))
.catch(err => console.log(err))



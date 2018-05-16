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
.then(([{statusCode}, weaterData]) => {
    console.log(`Returned with status ${statusCode}. Temperature at ${weaterData.currently.temperature} degrees`)
})
.catch(err => console.log(err))
const yargs = require('yargs')

const {geocodeAddress} = require('./geocode/geocode')

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

geocodeAddress(address, (err, results) => {
    if(err){
        console.log(err)
    }
    else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})



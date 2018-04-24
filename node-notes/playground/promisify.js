const {promisify} = require('util')

let nonPromise = (e, callback) => {
    if(e) {
        let data = {
            name: 'murray',
            age: 24
        }
        callback(null, data)
    }
    else {
        callback('you fucked up', null)
    }
}

let promisified = promisify(nonPromise)

debugger
promisified(true)
.then(data => console.log(data))
.catch(err => console.log(err))

promisified(false)
.then(data => console.log(data))
.catch(err => console.log("Catch block!",err))
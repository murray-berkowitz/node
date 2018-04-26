let square = x => {
    return x*x
} //statement syntax

// square = x => x*x //shorthand 

console.log(square(9))

let user = {
    name: 'Murray',
    sayHi: () => {
        console.log('hi', this.name, arguments)
    },
    sayHiAlt() {
        console.log('hi', this.name, arguments)
    }  //ES6 allows us to just define a function without using : or function
}

user.sayHi()
user.sayHiAlt(1, 2 ,3)
let x = 5
let y = 2
let z = x/y
console.log("Division: "+z)

let a = x%y
console.log("Modulo: "+ a)

let b = 3
b++
console.log("Increment: "+b)

let c = 4
c--
console.log("Decrement: "+c)

let w = x**2
console.log("Exponent: "+w)

let n=100+50*3
let m=(100+50)*3
console.log(n,m)

let j = 123e5
console.log(j)
let k = 123e-5
console.log(k)

let f = 0.2 + 0.1
console.log(f)

let g = (0.2*10 +0.1*10)/10
console.log(g)

let u = "10"
let i = u+c
console.log(i)

let t = "the result is: " + x +y
console.log(t)

let r = x+y+u
console.log(r)

let q = 100/"Test"
console.log(isNaN(q))

// Switch base
let myNumber = 32 
console.log(myNumber.toString(32))
console.log(myNumber.toString(16))
console.log(myNumber.toString(12))
console.log(myNumber.toString(10))
console.log(myNumber.toString(8))
console.log(myNumber.toString(2))

const lotsOfDecimal = 1.54649879543213654897
console.log(lotsOfDecimal)
const twoDecimalPlaces=lotsOfDecimal.toFixed(2)
console.log(twoDecimalPlaces)
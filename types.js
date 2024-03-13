
// string
const string = "The revolution will not be televised."
console.log(string)

const single = 'Single quotes'
const double = "Double quotes"
const backtick = `Backtick`

console.log(single, double, backtick)

const name = "Chris"
const greeting = `Hello, ${name}`
console.log(greeting)

const one = "Hello, "
const two = "how are you?"
const joined = `${one}${two}`
console.log(joined)

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text)
console.log(text.length)
console.log(text.charAt(0))
console.log(text.charCodeAt(0))
console.log(text.at(2))
console.log(text.at(-2))
console.log(text.slice(7,13))
console.log(text.slice(7))
console.log(text.slice(-12))
console.log(text.substr(7,2))

console.log(text.toLowerCase())

let text1 = "   Test 123   "
console.log(text1)
console.log(text1.trim())
console.log(text1.trimStart())
console.log(text1.trimEnd())

let number = "5"
console.log(number.padStart(4,"0"))
console.log(number.padStart(4,"x"))

let zahl = 5
let zahlText = zahl.toString()
console.log(zahlText.padStart(3,"0"))

console.log(text1.repeat(2))

let replace = "Please visit Microsoft or Microsoft!"
console.log(replace.replace("Microsoft","W3Schools"))
console.log(replace.replace(/MICROSOFT/i,"W3Schools"))
console.log(replace.replace(/Microsoft/g,"W3Schools"))
console.log(replace.replaceAll("Microsoft", "W3Schools"))

console.log(text.split(""))
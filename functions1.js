const Person = require('./classes') 
let sumOfFunction = (a,b)=>a+b

console.log(sumOfFunction(5,50))

let day = 'tuesday '
console.log(day.length)

console.log(day.slice(4,7)) //to get subString
console.log(day[5]) //gives characters

let splitDay = day.split("s")
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '24'
let diff = parseInt(nextDate) - parseInt(date) //convert to number
console.log(diff)

diff.toString() //number to String

let newQuote = day+ "is Funday"
console.log(newQuote)

//console.log(newQuote.indexOf("day", 5)) //gives index of where it starts. if there are 2 then you can add comma and number

let count = 0
let value = newQuote.indexOf("day")
while(value!==-1){
    count++
    value = newQuote.indexOf("day", value+1)
}
console.log(count) //gives oocurances of word

let person = new Person("Chris", "Edward")
console.log(person.fullName())




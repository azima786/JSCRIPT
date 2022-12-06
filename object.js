let person = {
    firstname :'Tim',
    lastName: 'Joe',
    age:24,
    fullName: function(){
     console.log(this.firstname + this.lastName)
    }

}

console.log(person.fullName()) //if its not string or number. if function give ()
console.log(person.firstname)
console.log(person['lastName'])
person.firstname='Tim Dane'
console.log(person.firstname)
person.gender = 'male'
console.log(person)
console.log('gender' in person)

for(let key in person){ //to print values of entire object
    console.log(person[key])
}


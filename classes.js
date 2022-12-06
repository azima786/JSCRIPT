module.exports = class Person{ //can be used for multiple entities. object cannot be recreated. 
    age=25
    get location (){
        return "Canada"
    }

    constructor(firstName, lastName){
        this.firstName= firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+" " + this.lastName)
    }

}

//You need to create object first to access its properties

// let person = new Person('Tommy', 'Jane')
// let person1 = new Person('Joshua', 'Jane')
// console.log(person.age)
// console.log(person.location)
// console.log(person.firstName)
// console.log(person.fullName())
// console.log(person1.fullName())


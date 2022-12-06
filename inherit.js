const person= require('./classes')


class pet extends person {
get location(){
    return "Blue Cross"
}
constructor(firstName, lastName){
    super(firstName, lastName)
}

}

let Pet = new pet('Sam','samuel')
console.log(Pet.fullName())
console.log(Pet.location)
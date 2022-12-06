var marks = [5,5,69,9,23,5]

marks[3]=14 //adds to index
marks.push(65) //adds at end
marks.unshift(12) //adds to first

console.log(marks)
console.log(marks.indexOf(69))
console.log(marks.includes(120))
console.log(marks.slice(2,5)) //will print from 2-4

var sum = 0
for(let i=0; i<marks.length; i++){
    sum+=marks[i]}
    console.log(sum)

    //iterate or update value
    let total = marks.reduce((sum, totalMarks)=> sum+totalMarks,0) //to get sum of marks
    console.log(total)

// var i=0
// while(i<marks.length){
   
//     console.log("while Loops" + marks[i]) 
//     i++
// }

var scores = [12,13,14,15,16]

//filter array based on condition
let newFilterScores = scores.filter(score=>score%2==0)
console.log(newFilterScores)
//print even numbers

let mappedArray = newFilterScores.map(score=> score*3)

let sumMappedArray = mappedArray.reduce((sum, val)=> sum+val, 0)
console.log(sumMappedArray)

var scores1 = [12,13,14,15,16]
var totalScore = scores.filter(score=>score%2==0).map(score=> score*3).reduce((sum, val)=> sum+val, 0)

console.log(totalScore)

let fruits = ["bananna", "mango", "pomegrante", "apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

var scores2 = [12,89,13,46,003,14,15,55,16]

console.log(scores2.sort((a,b)=>a-b))
console.log(scores2.sort((a,b)=>b-a))


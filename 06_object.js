var student = {
    stdName : 'mostafizur',
    age : 25,
    roll : 2,
    sub : ['math', 'physics', 'chemistry', 'ict'], // An object can hold an array
    goodStudent : true,
    info : {
        schoolName : 'Pilot High School',
        collageName : 'BAF Shaheen',
    },
    add : function(a, b) {
        console.log(a + b)
    }
}

console.log(student)

console.log(student.age) // property access method 1

console.log(student['roll']) // property access method 2

var subject = 'sub'
console.log(student[subject]) // property access method 3



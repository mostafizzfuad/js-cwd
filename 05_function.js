// example : 1
function hello() {
    console.log('hello world')
}
hello()



// example : 2
function sum (a, b) {
    return a + b
}

var result = sum(5, 2)
console.log(result)



// example : 3
var arr = [1, 2, 3, 4, 5]

function sumOfArr(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

var total = sumOfArr(arr)
console.log(total)
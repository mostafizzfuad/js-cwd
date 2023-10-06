var friends = ['mostafizur', 'siam', 'junnun', 'masud', 'fuad']
console.log(friends)

console.log(friends[1])
console.log(friends[3])

console.log(friends.length) // length of an array
console.log(friends[friends.length - 1]) // last element of an array

friends[3] = 'sabbir' // muted / re-assign
console.log(friends[3])


// push() : add new element in the last
// pop() : remove element from the last

// unshift() : add new element in the first
// shift() : remove element from the first


// example : An array can hold an object
var arr = [
    {
        stdName : 'mostafizur',
        age : 25,
        roll : 2,
        sub : ['math', 'physics', 'chemistry', 'ict'],
        goodStudent : true,
        info : {
            schoolName : 'Pilot High School',
            collageName : 'BAF Shaheen',
        },
        add : function(a, b) {
            console.log(a + b)
        }
    },
    {
        stdName : 'siam',
        age : 15,
        roll : 1,
        sub : ['math', 'physics', 'chemistry', 'ict'],
        goodStudent : true,
        info : {
            schoolName : 'Pilot High School',
            collageName : 'BAF Shaheen',
        },
        add : function(a, b) {
            console.log(a + b)
        }
    }
]

// console.log(arr)

console.log(arr[0].age)

console.log(arr[0].sub)
console.log(arr[0].sub[0])

console.log(arr[1].info)
console.log(arr[1].info.collageName)




// array & object practical example
var products = [
    {   
        id : 'abc123', 
        productName : 'Book',
        price : 250,
        totalSales : 500,
    },
    {
        id : 'abc456', 
        productName : 'T-shirt',
        price : 1250,
        totalSales : 100,
    },
    {
        id : 'abc789', 
        productName : 'Pen',
        price : 350,
        totalSales : 5000,
    },
]

var search = 'abc456'

for (var i = 0; i < products.length; i++) {
    var product = products[i]

    if (product.id === search) {
        console.log(product.productName)
    }
}
// метод filter 
const names = ['Jackw', 'David', 'Ola'];
const newNames = [];

const filterFoo = function (array) {
    for (let i = 0; i < array.length; i++) {    
        if (array[i].length < 4) {
          newNames.push(array[i]);
        }
    }
}
filterFoo(names);
console.log(newNames);

array33 = ['Mykola', 'Petro', 'Iv'];

const react = function(a) {
   return a + 'T'
}

const myFilter = function (array,callback) {
    const Name33 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            Name33.push(callback(array33[i]))
        }
    }
    return Name33;
}
console.log(myFilter(array33, react))

// метод map
const names1 = ['George', 'Wood', 'Function']
const newNames1 = [];

const mapFoo = function (array) {
    for (let i = 0; i < array.length; i++) {
        newNames1.push(array[i].length)
    }
}
mapFoo(names1)
console.log(newNames1)


var products = [{
    id: 0,
    name: 'Product 1'
    },{
    id: 1,
    name: 'Product 2'
    }];
console.log(products[0])

function mapCallback(product) {
    return product.id + 5
}

// const result = myMap(products, mapCallback);
        
function myMap(array, cb) {
    const resultArray = [];
    for(var i = 0; i < products.length; i++) {
        resultArray.push(cb(products[i]) );
    }
    return resultArray;
}
console.log(myMap(products, mapCallback)) 

// метод reduce
const arr = [1, 2, 3, 4, 10];

let sum = 0
const reduceFoo = function (array) {
    for (let i = 0; i<array.length; i++) {
        sum += array[i]
    }
}
reduceFoo(arr)
console.log(sum)

const arr22 = [2, 5, 8, 11]

const forReduce = function(a) {
    return a * 2;
}

const myReduce = function(array, callback, initialValue) {
    for(let i = 0; i<array.length; i++) {
        initialValue += callback(array[i])
    }
    return initialValue;
}
console.log(myReduce(arr22, forReduce, 10)) 

// метод forEach
const arr1 =  ["Bilbo", "Gandalf", "Nazgul"]

const forEachFoo = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        console.log(array[i].length)
    }
}
forEachFoo(arr1)

const arr11 = [17, 117, 177, 777];

const forMyEach = function(a) {
   return a + 10;
}

const myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}
myForEach(arr11, forMyEach);

// метод every
const arr2 = [11, 21, 31]; 
const newArr2 = []
const everyFoo = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
          newArr2.push(array[i])
        }
    }
    console.log(newArr2.length)
    if (newArr2.length === 0) {
            return false;
        } else {
            return true;
        }
}

console.log(everyFoo(arr2))

const arr44 =[22, 33, 44];

const forEvery = function (a) {
    return a * 4;
}
const myEvery = function (array, callback) {
    let newArr44 = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) > 200) {
            newArr44.push(callback(array[i]))
        }
    }
    if (newArr44.length === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(myEvery(arr44, forEvery))

// метод some
let arr3 = [1, 2, 3];
let newArr3 = [];

let someFoo = function(array) {
    for (let i = 0; i<array.length; i++) {
        if (array[i] === 2) {
            newArr3.push(array[i])
        } 
    }
    if (newArr3.length === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(someFoo(arr3))

const arr55 = [7, 77, 777];

const forSome = function(a) {
    return a + 3;
}

const mySome = function(array, callback) {
    let newArr55 = [];
    for (let i = 0; i<array.length; i++) {
        if (callback(array[i]) === 80) {
            newArr55.push(callback(array[i]));
        }
    }
    if(newArr55.length === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(mySome(arr55, forSome))
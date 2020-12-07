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

// метод forEach
const arr1 =  ["Bilbo", "Gandalf", "Nazgul"]

const forEachFoo = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        console.log(array[i].length)
    }
}
forEachFoo(arr1)

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
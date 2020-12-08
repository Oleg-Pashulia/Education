// метод filter 

const array33 = ['Mykola', 'Petro', 'Iv'];

const react = function(a) {
   return a.length < 3;
}

const myFilter = function (array,callback) {
    const Name33 = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array33[i])) {
            Name33.push(array33[i])
        }
    }
    return Name33;
}
console.log(myFilter(array33, react))

// метод map

let products = [{
    id: 0,
    name: 'Product 1'
    },
    {
    id: 1,
    name: 'Product 2'
    }];

function mapCallback(product) {
    return product.id * 5;
}
       
function myMap(array, cb) {
    const resultArray = [];
    for(var i = 0; i < products.length; i++) {
        resultArray.push(cb(products[i]) );
    }
    return resultArray;
}
console.log(myMap(products, mapCallback)) 

// метод reduce

const arr22 = [2, 5, 8, 11]

const forReduce = function(acc, cur) {
    return acc + cur;
}
const w = [['oleg', 21], ['mikola', 44]]

const fromObjToArr = function(acc, next) {
    acc[next[0]] = next[1];
    return acc;
}

function myReduce(array, reducer, initialValue) {
    let i;

    if (initialValue) {
        i = 0;
    } else {
        i = 1;
        initialValue = array[0];
    }
    let accumulator = initialValue;
    for (i; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array);
    }
    return accumulator;
}

const reducerResult = myReduce(arr22, forReduce);
console.log(reducerResult);
const reducer2Result = myReduce(w, fromObjToArr, {});
console.log(reducer2Result);

// метод forEach

const arr11 = [17, 117, 177, 777];

const forMyEach = function(a) {
   return alert(a + 10);
}

const myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
myForEach(arr11, forMyEach);

// метод every

const arr44 = [22, 33, 44, '12'];

const forEvery = function (a) {
    if (typeof a == 'string') {
        return a;
    };
}

const myEvery = function (array, callback) {
    let newArr44 = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr44.push(array[i])
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

const arr55 = [7, 77, 777];

const forSome = function(a) {
    return a > 10000000;
}

const mySome = function(array, callback) {
    let newArr55 = [];
    for (let i = 0; i<array.length; i++) {
        if (callback(array[i])) {
            newArr55.push(array[i]);
        }
    }
    if(newArr55.length === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(mySome(arr55, forSome))
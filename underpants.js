// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

/*

I: value
O: return value unchanged
C: 
E: 

*/


_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/*

I: value
O: string of what type the value is
C: 
E: 

*/

_.typeOf = function(value){
    if(typeof value === 'string'){
        return 'string';

    } else if (typeof value === 'undefined'){
        return 'undefined';

    } else if (typeof value === 'number'){
        return 'number';

    } else if (typeof value === 'boolean'){
        return 'boolean';

    } else if (typeof value === 'function'){
        return 'function';

    } else if (typeof value === 'object'){
        if (value === null){
            return 'null';

        } else if (Array.isArray(value) === true){
            return 'array';

        } else if (value instanceof Date){
            return 'date';

        } else {
            return 'object';

        }
    }

};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/*

I: an array and a number
O: 
C: 
E: 

*/

_.first = function(array, num){
    let output = [];

    if(Array.isArray(array) === false || num < 0){
        return [];
    } else if(num === NaN || num === undefined || num === 1){
        return array[0];

    } else if (num > 1){
        if(num > array.length){
            for(let i = 0; i < array.length; i++){
                output.push(array[i]);
            }
            return output;

        } else if(num < array.length){
            for(let j = 0; j < num; j++){
                output.push(array[j]);
            }
            return output;
        }
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/*

I: array and number
O: empty array or last element in array
C: 
E: negative number number greater than array.length

*/

_.last = function(array, num){
    // holder for multiple values
    let output = [];

    if(Array.isArray(array) === false || num < 0){
        return [];

    } else if (!num){
        return array[array.length - 1]

    } else {
        // number is less than array length
        if (num < array.length){
            // begin at num -1 index and loop to end of array.length
            for(let i = num - 1; i < array.length; i++){
                output.push(array[i]);
            }

        } else {
            // if number is larger than array.length, return all items (do not go by num)
            for(let i = 0; i < array.length; i++){
                output.push(array[i]);
            }

        }
    }
    if (array.length === 1){
        return array[array.length - 1];
    } else {
        return output;
    }
    
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
/*

I: an array and a value
O: index of array that is the FIRST occurance of value, -1 IF value is not array, 
C: 
E: multiple occurances? doesn't matter need first. what if val isn't in the array? -1

*/


_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        // first index to match value, returns index number
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/*

I: array and value
O: boolean of true or false
C: 
E: 

*/


_.contains = function(array, value){
    for(let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/*

I: collection (array or object); function
O: call function on each array index or object key value
C: 
E: 

*/

_.each = function(collection, func){
    // array?
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }

    } else { // assumes it is an object
        for(var key in collection){
            func(collection[key], key, collection);
        }
    }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*

I: array
O: new array of elements without dupes
C: use _.indexOf()
E: 

*/

_.unique = function(array){
    // new array to return
    let output = [];
    // for loop to itterate through array
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(array, array[i]) === -1){
            output.push(array[i]);
        } else if(_.indexOf(array, array[i]) === i){
            output.push(array[i]);
        }
    }


    return output;
}

// console.log(_.indexOf(["a", 1, 1, "a", "c", false, "b", 5, "c", null, false, null], 'a'))
// console.log(_.unique(["a", 1, 1, "a", "c", false, "b", 5, "c", null, false, null]))

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            newArr.push(array[i]);
        } 
    }
    return newArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/*

I: array
O: function
C: 
E: 

*/

_.reject = function(array, func){
    let output = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            output.push(array[i]);
        } 
    }
    return output;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/*

I: array & function
O: array that contains two arrays
C: 
E: an array of arrays

*/

_.partition = function(array, func){
    let output = [ [], [] ];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            output[0].push(array[i]);
        } else {
            output[1].push(array[i]);
        }
    }
    return output;
}

// console.log(_.partition([1,2,3,4,5], function(element,index,arr){ return element % 2 === 0; }));

/** _.map
* Arguments:
*   1) A collection // array OR object
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    let output = [];
    // if array
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection)){
                output.push(func(collection[i], i, collection));
            }
        }
    } else { // else object
        for(let key in collection){
           if(func(collection[key], key, collection)){
                output.push(func(collection[key], key, collection));
           } 
        }
    }
    return output;
    
};


// console.log(_.map([1,2,3,4], function(e){return e * 2})); // [2, 4, 6, 8]

// console.log(_.map({ a: 1, b: 2 }, function(e){ return e * 2})); // [2, 4]

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

/*

I: array of objects, a property
O: an array containing the value of the property for every element in the array
C: must use _.map()
E: 

*/


_.pluck = function(array, property){
    return _.map(array, function(array){
        return array[property];
    });
};

// _.pluck = function(array, property){
//     // holder for output array property values
//     let output = []

//     // iterate through array to access each object
//     for(let i = 0; i < array.length; i++){
//         output.push(array[i][property]);
//     }
//     return output;
// };


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

/*

I: a collection (array or object) and a function
O: boolean of true or false
C: 
E: 

*/

_.every = function(collection, func){
    if(Array.isArray(collection)){
        // determine if func wasn't provided
        if (func === undefined){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;
                }
                return true;
            }
        } else { // else callback func
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
            return true;
        }
    } else {
        // determine if func wasn't provided
        if (func === undefined){
            for(let key in collection){
                if(!collection[key]){
                    return false;
                } else {
                    return true;
                }
            }
        } else { // else callback func
            for(let key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
            return true;
        }
    }
}


// _.every([2, 4, 6], function(num){ return num % 2 === 0}); // returns true because every number is even
// _.every([2, 5, 6], function(num){ return num % 2 === 0}); // returns false because one number is not even

// _.every({ a: 2, b: 4 }, function(num){ return num % 2 === 0}); // returns true because every value is even
// _.every({ a: 2, b: 3}, function(num) { return num % 2 === 0}); // returns false because one value is not even

// // examples where there is no test function
// _.every([2, 4, 6]); // true because element is truthy
// _.every([2, null, 6]); // false because one of the elements is not truthy

// _.every({ a: 2, b: 4}); // true because each value is truthy
// _.every({ a: 2, b: null }); // false because one value is not truthy

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/*

I: a collection and function
O: boolean value of true or false
C: 
E: 

*/

_.some = function(collection, func){
    if(Array.isArray(collection)){
        // determine if func wasn't provided
        if (func === undefined){
            for(let i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                }
                return false;
            }
        } else { // else callback func
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
                }
            }
            return false;
        }
    } else {
        // determine if func wasn't provided
        if (func === undefined){
            for(let key in collection){
                if(collection[key]){
                    return true;
                } else {
                    return false;
                }
            }
        } else { // else callback func
            for(let key in collection){
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
            return false;
        }
    }
}


/** _.reduce
 * 
 * WATCH VIDS IN SHARED DOC 
 * 
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let output;

    if(seed === undefined){
        output = array[0] // if no seed, its assigned the first item in array

        for(let i = 1; i < array.length; i++){
            output = func(output, array[i], i); 
        }

    } else { // else there is a seed value
        output = seed;
        for(let i = 0; i < array.length; i++){
            output = (func(output, array[i], i))
        }

    }

    return output;
}


/** _.extend    // Object.assign
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(target, ...objects){

    target = Object.assign(target, ...objects)

    return target;
}

/*

I: target possibly multiple objects
O: return target object with all object arguments added to it
C: 
E: 

*/


// _.extend = function(target, ...objects){
    
// }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
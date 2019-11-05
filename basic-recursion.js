'use restrict'

// reduce syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

function reduce(arr, fn, actual) {
    // if array is empty, return 
    if (arr.length <= 0) return actual

    // get the first item of array
    let current = arr[0];

    // remove one item from the array to get remaining items
    let remaining = arr.slice(1)

    return reduce(remaining, fn, fn(actual, current))
}

module.exports = reduce

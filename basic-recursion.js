'use restrict'

// reduce syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

/**
 * reduce(arr, fn, actual)
 * arr => initial array
 * fn => function thats count the recurrent of current item
 * actual => key-value array (item: times)
 */
function reduce(arr, fn, actual) {
    // if array is empty, return actual item
    if (arr.length <= 0) return actual

    // get the first item of array
    let current = arr[0];

    // remove one item from the array to get remaining items
    let remaining = arr.slice(1)

    // return number of times the item appears
    return reduce(remaining, fn, fn(actual, current))
}

module.exports = reduce

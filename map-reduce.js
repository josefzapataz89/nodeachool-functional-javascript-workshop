'use strict'

// reduce syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

module.exports = function arrayMap(arr, fn) {
    let result = []
    
    arr.reduce((previous, current, index, arr) => {
            result.push(fn(current))
        }, null)

    return result
}
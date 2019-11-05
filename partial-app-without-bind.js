'use strict'

const slice = Array.prototype.slice

function logger(namespace) { // recieve the prepend argument
    return function() {

        let argument = slice.call(arguments) // call and separate the arguments array

        console.log.apply(null, [namespace].concat(argument))
    }
}

module.exports = logger
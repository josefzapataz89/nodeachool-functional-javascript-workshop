'use strict'

// https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/

function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return

    return function() {
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while (typeof fn === 'function') {
        fn = fn()
    }

    return fn
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!

    return trampoline(function() {
        return repeat(operation, num)
    })
}
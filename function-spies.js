'use strict'

function Spy(target, method) {
    let result = {
        count: 0
    }

    let my_function = target[method]

    target[method] = function () {
        result.count++

        return my_function.apply(this, arguments)
    }
    
    return result
}

module.exports = Spy
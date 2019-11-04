'use strict'

function repeat(my_function, num) {
    if (num == 0)
        return 1

    my_function()

    return repeat(my_function, num -1)
}

module.exports = repeat

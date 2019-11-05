'use strict'

function repeat(operation, num) {
    if (num <= 0) return

    operation()
    
    // modify this so it can be interrupted
    if (num % 5 === 0) {
        setTimeout(() => {
            return repeat(operation, --num)
        }, null);
    }
    else {
        return repeat(operation, --num)
    }


}

module.exports = repeat
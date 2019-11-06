'use strict'

function curryN(fn, n) {
    // SOLUTION GOES HERE
    if (typeof n !== 'number')
        n = fn.length

    function genCurry(prev) {
        return function(arg) {
            let args = prev.concat(arg)
            if (args.length < n)
                return genCurry(args)

            return fn.apply(this, args)
        }
    }

    return genCurry([])
}

module.exports = curryN

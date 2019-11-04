'use strict'

function countWords(inputWords) {
    let result = {}

    inputWords.reduce((prev, current) => {
            return result[current] = (result[current] || 0) + 1
        }, null)

    return result
}

module.exports = countWords

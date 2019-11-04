'use strict'

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // return a list of valid users
        return submittedUsers.every(submitted => {
            // return the good users that exist into the submitted users
            return goodUsers.some(good => good.id === submitted.id )
        })
    };
}

module.exports = checkUsersValid

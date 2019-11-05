'use strict'

function loadUsers(userIds, load, done) {
    let users = []
    let count = 0

    userIds.forEach((id, idx) => {
        load(id, function(data){
            users[idx] = data
            count++

            if(count === users.length)
                return done(users)

        })
    })
}

module.exports = loadUsers
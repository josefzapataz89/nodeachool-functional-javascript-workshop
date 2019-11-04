'use strict'

function getShortMessages(messages) {
    
    let mesage_list = messages.filter(msg => msg.message && msg.message.length < 50)

    return mesage_list.map(msg => msg.message)
}

module.exports = getShortMessages

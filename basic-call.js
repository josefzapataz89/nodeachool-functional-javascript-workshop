'use strict'
/**
 * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:
 * {
 *      0: 'argument0',
 *      1: 'argument1', // etc
 *      length: 2 
 * 
 */



function duckCount() {
    // filter in arguments array of objects... Return the array length
    return Array.prototype.filter.call(arguments, (item) => {
            // return true when the object have the quack property
            return Object.prototype.hasOwnProperty.call(item, 'quack')
        }).length
}

module.exports = duckCount
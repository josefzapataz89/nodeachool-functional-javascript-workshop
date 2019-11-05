'use strict'

/**
 * 
 * @param namespace 
 * 
 * El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. 
 * El valor de this es ignorado cuando la función es llamada con el operador new.
 */

function logger(namespace) {
    return console.log.bind(null, namespace)
}

module.exports = logger
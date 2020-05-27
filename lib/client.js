const cepPromise = require('cep-promise')

/**
 * @param {String} cep - Cep value
 */
async function getCep(cep){
    return await cepPromise(cep)
}

module.exports = getCep
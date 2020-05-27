const cepPromisse = require('../lib/client');

/**
 * @param {String} cep - Cep value
  * @returns {Promise< {cep: string,state: string,city: string,street: string,neighborhood: string}> | Promise<any>} 
 */
const consultaCEP = async (cep) => {
    try {
      return await cepPromisse(cep)
    } catch (error) {
      return error;
    }
}

module.exports = consultaCEP;
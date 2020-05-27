const soapClient = require('../lib/client');

/**
 * @param {String} env - Set type Production or Developer
 * @param {String} cep - Cep value
  * @returns {Promise< {
      bairro: String,
      cep: String,
      cidade: String,
      complemento2: String,
      end: String,
      uf: String
      }>} 
 */
const consultaCEP = async (env, cep) => {
    const client = await soapClient(env)
    return new Promise((resolve, reject) => {
      client.consultaCEP({ cep }, (err, result) => {
        if (err) {
          reject(err.root.Envelope.Body.Fault.faultstring)
            ? { error: err.root.Envelope.Body.Fault.faultstring }
            : err
        }
        resolve(result.return)
      })
    })
  }

module.exports = consultaCEP;
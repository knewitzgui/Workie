const soapClient = require('../lib/client');

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
var formatCpfCnpj = require('./src/maskCpfCnpj');
var formatPhone = require('./src/maskPhone');
var formatCep = require('./src/maskCep');
var consultaCep = require('./src/consultaCep');

// consultaCep('dev', '93315400')
//   .then(address => console.log(address))
//   .catch(err => console.log(err))
// console.log(formatPhone(51993150226))
// console.log(formatCpfCnpj(22185237012));
// console.log(formatCep(93315400));
// console.log(consultaCep(93315400));
module.exports = {
    formatCep,
    formatPhone,
    formatCpfCnpj,
    consultaCep,
}
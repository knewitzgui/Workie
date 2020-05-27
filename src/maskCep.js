/**
 * @param {String} value - Cep value
 * @returns {String} - Return formatted zip code
 */
var cep = function(value){
    value = value.toString();
    value = value.replace(/\D/g,"")
    value = value.replace(/^(\d{5})(\d)/,"$1-$2")
    return value
}

module.exports = cep;
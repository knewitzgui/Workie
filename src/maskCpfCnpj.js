/**
 * @param {String} value - Cpf or Cnpj value
 * @returns {String} - Return formatted cpf or cnpj
 */
var cpfCnpj = function(value){
    value = value.toString();
    if(value.length == 11){
        value = value.replace(/\D/g,"")
		value = value.replace(/(\d{3})(\d)/,"$1.$2")
		value = value.replace(/(\d{3})(\d)/,"$1.$2")
		value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    }else if(value.length == 14){
        value = value.replace(/\D/g,"")
        value = value.replace(/^(\d{2})(\d)/,"$1.$2")
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
        value = value.replace(/\.(\d{3})(\d)/,".$1/$2")
        value = value.replace(/(\d{4})(\d)/,"$1-$2")
    }else{
        return {
            error: 'Check the number of characters'
        }
    }

    return value;
}

module.exports = cpfCnpj;
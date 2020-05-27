/**
 * @param {String} value - Phone value
 * @returns {String} - Return formatted phone
 */
var phone = function(value){
    value = value.toString();
    value = value.replace(/\D/g,"")
    value = value.replace(/^(\d)/,"($1")
    value = value.replace(/(.{3})(\d)/,"$1)$2")
    if(value.length == 9) {
        value = value.replace(/(.{1})$/,"-$1")
    } else if (value.length == 10) {
        value = value.replace(/(.{2})$/,"-$1")
    } else if (value.length == 11) {
        value = value.replace(/(.{3})$/,"-$1")
    } else if (value.length == 12) {
        value = value.replace(/(.{4})$/,"-$1")
    } else if (value.length > 12) {
        value = value.replace(/(.{4})$/,"-$1")
    }
    return value;
}

module.exports = phone;
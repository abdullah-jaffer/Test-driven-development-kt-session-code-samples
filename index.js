const postAPI = require('./service');

module.exports = (value) => {
    let result = '';
    if(value%3===0) result += 'Fizz';
    if(value%5===0) result += 'Buzz';
    if(result == '') return value.toString();
    else return result;
}
const request = require('superagent');

const fetchQuotes = async() => {
    const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes');
    return body[0];

}

module.exports = {
    fetchQuotes
}
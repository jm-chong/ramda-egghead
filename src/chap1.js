const R = require('ramda');

const person = {
  id: 1,
  name: 'Joe'
};

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`;
const getUrlFromPerson = R.compose(
  generateUrl,
  R.propOr('default', 'id')
);
const getUpdatedPerson = R.converge(R.assoc('avatar'), [
  getUrlFromPerson, // url value
  R.identity // person object
]);

const result = getUpdatedPerson(person);
console.log(result);

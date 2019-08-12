const R = require('ramda');

const person = {
  name: 'Sally Jones'
};

// const getName = R.prop('name');
const getName = R.propOr('Default', 'name');
const getUpperName = R.pipe(
  getName,
  R.tryCatch(R.toUpper, R.always('Default'))
);
const result = getUpperName(undefined);
console.log(result);

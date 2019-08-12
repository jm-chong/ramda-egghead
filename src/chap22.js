const {
  identity,
  tap,
  compose,
  fromPairs,
  map,
  split,
  tail
} = require('ramda');

const queryString = '?page=2&pageSize=10&total=203';
const log = tap(console.log);

const parseQs = compose(
  fromPairs,
  log,
  map(split('=')),
  log,
  split('&'),
  log,
  tail
);

const result = parseQs(queryString);
console.log(result);

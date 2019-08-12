const { toPairs, map, join, compose, concat } = require('ramda');

const qsObj = {
  somethingElse: 'value',
  page: '2',
  pageSize: '10',
  total: '205'
};

// '?page=2&pageSize=10&total=203'
const createQs = compose(
  concat('?'),
  join('&'),
  map(join('=')),
  toPairs
);
const result = createQs(qsObj);
console.log(result);

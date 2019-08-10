const R = require('ramda');

const product = {
  name: 'widge',
  price: 10,
  avgRating: 4.5,
  shippingwWeight: '2 lbs',
  shippingCost: 2,
  shippingMethod: 'UPS'
};

// pick, pickAll, pickBy
// const getProps = R.pickAll(['name', 'price', 'category']);
// const getProps = R.pickBy(val => Number(val));
// const getProps = R.pickBy((val, key) => R.contains('shipping', key));

// omit
// const getProps = R.omit(['shippingWeight', 'shippingCost']);
const getProps = R.pickBy((val, key) => !R.contains('shipping', key));
const result = getProps(product);
console.log(result);

const { unnest, prop, map, compose, pluck, chain, uniq } = require('ramda');

const product = {
  name: 'Sample Data',
  sizes: [
    {
      name: 'L',
      colors: [
        {
          name: 'Red'
        },
        {
          name: 'Blue'
        }
      ]
    },
    {
      name: 'M',
      colors: [
        {
          name: 'Green'
        },
        {
          name: 'Yellow'
        }
      ]
    },
    {
      name: 'S',
      colors: [
        {
          name: 'Orange'
        },
        {
          name: 'Purple'
        },
        {
          name: 'Blue'
        }
      ]
    }
  ]
};

const getSizes = prop('sizes');
// const sizes = getSizes(product);

const getColors = chain(prop('colors'));
// const colors = getColors(sizes);

const getColorNames = pluck('name');
// const colorNames = getColorNames(colors);

const getUniqueColors = compose(
  uniq,
  getColorNames,
  getColors,
  getSizes
);

const result = getUniqueColors(product);
console.log(result);

const { find, propEq, useWith, identity } = require('ramda');

const countries = [
  { cc: 'GB', flag: '🇬🇧' },
  { cc: 'US', flag: '🇺🇸' },
  { cc: 'CA', flag: '🇨🇦' },
  { cc: 'FR', flag: '🇫🇷' }
];

// const getCountry = (cc, list) => find(propEq('cc', cc), list);
const getCountry = useWith(find, [propEq('cc'), identity]);
// const getCountry = useWith(find, [propEq('cc')]);

const result = getCountry('FR', countries);
console.log(result);

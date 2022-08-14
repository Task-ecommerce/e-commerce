import data from '../../data.json';

const priceData = [
  {
    id: 1,
    title: 'Lower than $20',
  },
  {
    id: 2,
    title: '$20 - $100',
  },
  {
    id: 3,
    title: '$100 - $200',
  },
  {
    id: 4,
    title: 'More than $200',
  },
  {
    id: 5,
    title: 'Get all Price',
  },
];

const categories = data.products
  .map((product) => {
    return product.category;
  })
  .reduce((acc, curr) => {
    return acc.concat(curr);
  })
  .filter((item, index, array) => {
    return array.indexOf(item) === index;
  })
  .sort();

export { priceData, categories };

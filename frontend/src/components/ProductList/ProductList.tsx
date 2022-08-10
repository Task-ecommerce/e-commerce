import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import Product from '../Product/Product';
import useFilter from '../../hooks/useFilter';
import { categories, priceData } from '../helpers/data';
import {
  Box,
  HeaderDiv,
  ImgContainer,
  List,
  ListContainer,
  MainContainer,
  MidContainer,
  PriceDiv,
  PriceList,
} from './ProductList.style';

const ProductList = () => {
  const [productList, setProductList] = useState(data.products);
  const [priceFilter, handlePriceFilter] = useFilter({});
  const [categoryFilter, setCategoryFilter] = useState([] as string[]);

  const handleCategory = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, categories[index]]);
    } else {
      setCategoryFilter(
        categoryFilter.filter((item: string) => item !== categories[index])
      );
    }
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    handlePriceFilter({ name, checked });
  };

  useEffect(() => {
    const keys = Object.keys(priceFilter);
    console.log(keys);
    if (!categoryFilter.length && !keys.length) {
      setProductList(data.products);
    }
    if (categoryFilter.length && keys.length) {
      const filteredProducts = data.products.filter((product) => {
        return categoryFilter.some((value) => product.category.includes(value));
      });

      setProductList(filteredProducts);
      keys.forEach((key) => {
        switch (key) {
          case 'Lower than $20':
            setProductList((prev) =>
              prev.filter((product) => product.price < 20)
            );
            break;
          case '$20 - $100':
            setProductList((prev) =>
              prev.filter(
                (product) => product.price >= 20 && product.price <= 100
              )
            );
            break;
          case '$100 - $200':
            setProductList((prev) =>
              prev.filter(
                (product) => product.price >= 100 && product.price <= 200
              )
            );
            break;
          case 'More than $200':
            setProductList((prev) =>
              prev.filter((product) => product.price > 200)
            );
            break;

          default:
            break;
        }
      });
    }

    if (categoryFilter.length && !keys.length) {
      const filteredProducts = data.products.filter((product) => {
        return categoryFilter.some((value) => product.category.includes(value));
      });

      setProductList(filteredProducts);
    }

    if (!categoryFilter.length && keys.length) {
      keys.forEach((key) => {
        switch (key) {
          case 'Lower than $20':
            setProductList(
              data.products.filter((product) => product.price < 20)
            );
            break;
          case '$20 - $100':
            setProductList(
              data.products.filter(
                (product) => product.price >= 20 && product.price <= 100
              )
            );
            break;
          case '$100 - $200':
            setProductList(
              data.products.filter(
                (product) => product.price >= 100 && product.price <= 200
              )
            );
            break;
          case 'More than $200':
            setProductList(
              data.products.filter((product) => product.price > 200)
            );
            break;
        }
      });
    }
  }, [priceFilter, categoryFilter]);
  return (
    <MainContainer>
      <HeaderDiv>
        <h3>Photography/ Premium Photos</h3>
        <div>
          <button>Sort By</button>
          <select>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </HeaderDiv>
      <MidContainer>
        <div>
          <h3>Category</h3>
          <Box>
            {categories.map((category, index) => {
              return (
                <ListContainer key={index}>
                  <List>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCategory(e, index)}
                      name={category}
                      id="category"
                    />
                    <label htmlFor="category">{category}</label>
                  </List>
                </ListContainer>
              );
            })}
          </Box>
          <PriceDiv>
            <h3>Price Range</h3>
            <ListContainer>
              {priceData.map((price) => {
                return (
                  <PriceList key={price.id}>
                    <input
                      type="checkbox"
                      name={price.title}
                      id="price"
                      onChange={(e) => handlePrice(e)}
                    />
                    <label htmlFor="price">{price.title}</label>
                  </PriceList>
                );
              })}
            </ListContainer>
          </PriceDiv>
        </div>
        <ImgContainer>
          {productList.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ImgContainer>
      </MidContainer>
      <div>Pagination</div>
    </MainContainer>
  );
};

export default ProductList;

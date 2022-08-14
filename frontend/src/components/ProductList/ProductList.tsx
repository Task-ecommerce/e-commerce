import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import Product from '../Product/Product';
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
import styled from 'styled-components';

const SortSelect = styled.select`
  border: none;
  outline: none;
  cursor: pointer;
`;
const SortBy = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ProductList = () => {
  const [productList, setProductList] = useState(
    data.products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  );
  const [priceFilter, setPriceFilter] = useState([] as string[]);
  const [categoryFilter, setCategoryFilter] = useState([] as string[]);
  const [sortFilter, setSortFilter] = useState('name');

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
    const { checked, value } = e.target;
    if (checked) {
      setPriceFilter([value]);
    }
  };

  const handleSelect = (e: any) => {
    console.log(e.target.value);
    setSortFilter(e.target.value);
  };

  const sorted = [...productList].sort((a, b): any => {
    if (sortFilter === 'name') {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    if (sortFilter === 'price') {
      return a.price - b.price;
    }
  });

  useEffect(() => {
    const keys = priceFilter;

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
  }, [priceFilter, categoryFilter, sortFilter]);

  return (
    <MainContainer>
      <HeaderDiv>
        <h3>Photography/ Premium Photos</h3>
        <div>
          <SortBy>Sort By</SortBy>
          <SortSelect onChange={handleSelect}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </SortSelect>
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
                      type="radio"
                      name="price"
                      value={price.title}
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
          {sorted.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ImgContainer>
      </MidContainer>
    </MainContainer>
  );
};

export default ProductList;

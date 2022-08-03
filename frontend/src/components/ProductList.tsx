import React, { useState } from 'react';
import data from '../data.json';
import Product from './Product';
import styled from 'styled-components';

const MidContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2;
`;

const MainContainer = styled.div`
  padding: 0 90px;
`;

const ListContainer = styled.ul`
  padding: 0;
`;

const List = styled.li`
  list-style-type: none;
  & > input {
    margin: 0 0.4rem 0 0;
  }
`;

const PriceList = styled.li`
  list-style-type: none;
  margin: 1rem 0;
  & > input {
    margin: 0 0.4rem 0 0;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductList = () => {
  const [productList, setProductList] = useState(data.products);
  const category: (string | undefined)[] = [];

  productList.map((item) => {
    !category.includes(item.category) && category.push(item.category);
  });

  const PriceDiv = styled.div`
    margin-top: 3rem;
  `;

  console.log(productList);

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
          <div>
            <h3>Category</h3>
            {category.map((category) => {
              return (
                <ListContainer>
                  <List>
                    <input type="checkbox" name="" id="category" />
                    <label htmlFor="category">{category}</label>
                  </List>
                </ListContainer>
              );
            })}
          </div>
          <PriceDiv>
            <h3>Price Range</h3>
            <ListContainer>
              <PriceList>
                <input type="checkbox" name="" id="price1" />
                <label htmlFor="price1">Lower than $20</label>
              </PriceList>
              <PriceList>
                <input type="checkbox" name="" id="price2" />
                <label htmlFor="price2">$20 - $100</label>
              </PriceList>
              <PriceList>
                <input type="checkbox" name="" id="price3" />
                <label htmlFor="price3">$100 - $200</label>
              </PriceList>
              <PriceList>
                <input type="checkbox" name="" id="price4" />
                <label htmlFor="price4">More than $200</label>
              </PriceList>
            </ListContainer>
          </PriceDiv>
        </div>
        <ImgContainer>
          {productList.slice(0, 6).map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ImgContainer>
      </MidContainer>
      <div>Pagination</div>
    </MainContainer>
  );
};

export default ProductList;

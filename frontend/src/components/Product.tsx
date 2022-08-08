import React, { useMemo } from 'react';
import styled from 'styled-components';

const ImgCard = styled.div`
  margin: 1rem;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 380px;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Bestseller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  padding: 0rem 2rem;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Category = styled.p`
  color: #656565;
  text-transform: capitalize;
  /* margin-top: 0.1rem; */
  margin: 0.1rem 0 0 0;
`;

const Price = styled.p`
  color: #656565;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.1rem 0 0 0;
`;

const Name = styled.h3`
  margin: 0.1rem 0 0 0;
`;

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    category: string[];
    image: {
      src: string;
    };
    bestseller: boolean;
  };
};

const Product = (props: ProductProps) => {
  const { name, image, category, price, bestseller } = props.product;

  return (
    <ImgCard>
      <ImgDiv>
        <img src={image.src} alt="" />
        <Button>ADD TO CART</Button>
        <Bestseller>{bestseller && 'Bestseller'}</Bestseller>
      </ImgDiv>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>${price}</Price>
    </ImgCard>
  );
};

export default Product;

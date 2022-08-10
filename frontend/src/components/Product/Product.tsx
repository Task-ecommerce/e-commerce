import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
  ImgCard,
  ImgDiv,
  Button,
  Bestseller,
  Category,
  Name,
  Price,
} from './Product.style';

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

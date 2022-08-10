import styled from 'styled-components';

export const ImgCard = styled.div`
  margin: 1rem;
`;

export const ImgDiv = styled.div`
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
export const Bestseller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  padding: 0rem 2rem;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Category = styled.p`
  color: #656565;
  text-transform: capitalize;
  /* margin-top: 0.1rem; */
  margin: 0.1rem 0 0 0;
`;

export const Price = styled.p`
  color: #656565;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.1rem 0 0 0;
`;

export const Name = styled.h3`
  margin: 0.1rem 0 0 0;
`;

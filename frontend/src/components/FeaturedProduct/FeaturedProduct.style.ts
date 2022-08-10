import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 90px;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;

  & > button {
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1.5rem;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 553px;
  background-color: red;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoTag = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 0rem 2rem;
`;

export const CategoryDiv = styled.h3`
  color: #656565;
  text-transform: capitalize;
`;

export const DescImg = styled.img`
  width: 117px;
  height: 147px;
  margin: 0rem 0rem 0rem 1rem;
`;
export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  & p {
    width: 90%;
  }
`;

export const RecommendationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const Details = styled(RecommendationDiv)`
  font-size: 0.9rem;
  width: 50%;
  & > h3 {
    font-size: 18.72px;
  }
  & > p {
    text-align: end;
  }
`;

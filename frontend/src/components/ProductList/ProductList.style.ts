import styled from 'styled-components';

export const MidContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  grid-gap: 5rem;
`;

export const MainContainer = styled.div`
  padding: 0 90px;
`;

export const ListContainer = styled.ul`
  padding: 0;
`;

export const List = styled.li`
  list-style-type: none;
  & > input {
    margin: 0 0.4rem 0 0;
  }
`;

export const PriceList = styled.li`
  list-style-type: none;
  margin: 1rem 0;
  & > input {
    margin: 0 0.4rem 0 0;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceDiv = styled.div`
  margin-top: 3rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

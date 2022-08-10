import React, { ReactElement } from 'react';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { Store, Title, Wrapper } from './Navbar.style';

interface Props<T> {
  title: T;
}
type OptionValue = string;

function Navbar<T extends OptionValue>({ title }: Props<T>): ReactElement {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Store>
        <MdOutlineLocalGroceryStore size={30} />
      </Store>
    </Wrapper>
  );
}

export default Navbar;

import React from 'react';
import MenuOption from './menuOption/MenuOption';
import { Container } from './MenuStyles';

function Menu() {
  return <Container>
      <MenuOption link="WHO WE ARE"/>
      <MenuOption link="PRODUCTS"/>
      <MenuOption link="CONTACT US"/>
      </Container>;
}

export default Menu;

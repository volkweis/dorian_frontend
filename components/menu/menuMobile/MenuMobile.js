import React, { useState } from 'react';
import { Container, HiddenMenu, ButtonMenu, OptionContainer } from './MenuMobileStyles';
import Image from 'next/image';
import MenuOption from '../menuOption/MenuOption';

function MenuMobile() {
  const [mobileVisible, setMobileVisible] = useState('0');
  const [displayText, setDisplayText] = useState('none');

  const toggleMobileMenu = () => {
    if (mobileVisible === '0'){
      setMobileVisible('15em');
      setDisplayText('block');
    }
    else {
      setMobileVisible('0');
      setDisplayText('none');
    }
  };

  return (
    <Container>
      <ButtonMenu>
        <Image
          onClick={toggleMobileMenu}
          src="/menu_icon.png"
          width="25px"
          height="25px"
          alt="Menu"
        />
      </ButtonMenu>
      <HiddenMenu isVisible={mobileVisible}>
        <OptionContainer displayText={displayText}><MenuOption link="WHO WE ARE"/></OptionContainer>
      </HiddenMenu>
    </Container>
  );
}

export default MenuMobile;

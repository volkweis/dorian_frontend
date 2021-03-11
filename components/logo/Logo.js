import React from 'react';
import Image from 'next/image';
import { Container } from './LogoStyles';

function Logo() {
  return (
    <Container>
      <Image src="/logo.png" width="150px" height="83px" alt="Dorian Audio Technologies" />
    </Container>
  );
}

export default Logo;

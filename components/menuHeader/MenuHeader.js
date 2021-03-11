import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import MenuMobile from '../menu/menuMobile/MenuMobile';
import { Container } from './MenuHeaderStyles';

function MenuHeader() {
  return (
    <Container>
      <Logo />
      <Menu />
      <MenuMobile />
    </Container>
  );
}

export default MenuHeader;

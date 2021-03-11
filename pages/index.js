import Head from 'next/head';
import MenuHeader from '../components/menuHeader/MenuHeader';
import { Container } from '../styles/indexStyles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DORIAN Audio Technologies</title>
      </Head>
      <MenuHeader></MenuHeader>
    </Container>
  );
}

import Nav from '@/components/nav/Nav';
import Main from '@/components/main/Main';
import Carousel from '@/components/carousel/Carousel';

// type="first" es el primer carousel y second el segundo

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <Carousel type="first" />
      <Carousel type="second" />
    </div>
  );
}

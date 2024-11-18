import Advantages from '@/components/Advantages/Advantages';
import Hero from '@/components/Hero/Hero';
import Instruments from '@/components/Instruments/Instruments';
import MustHave from '@/components/MustHave/MustHave';
import Working from '@/components/Working/Working';

export default function Home() {
  return (
    <>
      <Hero />
      <Instruments />
      <Working />
      <MustHave />
      <Advantages />
    </>
  );
}

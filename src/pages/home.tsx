import Carousel_image from '../components/carousel/carousel_image.tsx';
import CardPictureLayout from '../components/card_pictures/card_picture_layout.tsx';
import Filter from '../components/filter/filter.tsx';

export default function Home() {
  return (
    <main className='px-20 py-5'>
      {/*Carousel*/}
      <Carousel_image />

      {/*Filter*/}
      <Filter 
        clear={"Limpar Filtro"}
        year={"Ano"}
        category={"Categoria"}
      />
      
      {/* Cards Pictures */}
      <section className='columns-3 gap-5 space-y-5'>
        <CardPictureLayout />
      </section>
    </main>
  );
}
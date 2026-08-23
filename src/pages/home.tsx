import { useState, useEffect } from 'react';
import CardPictureLayout from '../components/card_pictures/card_picture_layout';
import Carousel_image from '../components/carousel/carousel_image.tsx';
import Filter from '../components/filter/filter.tsx';

import { obterPinturasHome } from '../data/cards_filter.ts';
import type { PictureCardData } from '../types/cards';

export default function Home() {
  // Strict typing for picture objects
  const [cards, setCards] = useState<PictureCardData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch and process pictures with Pinterest dimensions on mount
  useEffect(() => {
    obterPinturasHome()
      .then((pinturas) => {
        setCards(pinturas);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>  
      {/*Carousel*/}
      <Carousel_image />
      {/*End of Carousel*/}

      {/*Filter*/}
      <Filter 
      clear={"Limpar Filtro"}
      year={"Ano"}
      category={"Categoria"}/>
      {/*End of Filter*/}
      
      {/*Card Dislpay*/} 
      <div className="py-4 px-4 min-h-screen w-full">
        <div className="w-[97%] mx-auto">        
          
          {loading ? (
            <div className="text-white text-center py-12 text-lg">
              Carregando galeria...
            </div>
          ) : (
            <div className="columns-3 gap-8 w-full">
              {cards.map((card) => (
                <CardPictureLayout 
                  key={card.id}
                  image={card.image} 
                  dimension={card.dimension} 
                  hover={card.hover} // Passes the painting title dynamically for the hover overlay
                />
              ))}
            </div>
          )}
          
        </div>
        {/*End of Card Display*/}
      </div>
    </main>
  );
}
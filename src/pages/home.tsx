import { useState, useEffect } from 'react';
import CardPictureLayout from '../components/card_pictures/card_picture_layout';
import Carousel from '../components/carousel/carousel.tsx';
import { HiMagnifyingGlass, HiArrowDownRight } from "react-icons/hi2";

import { obterPinturasHome } from '../data/cards_filter.ts';
import { type PictureCardData } from '../types/cards';

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
      <Carousel />
      {/*End of Carousel*/}

      {/*Filter Tab*/}
      <div className="w-[97%] flex justify-between h-7 mx-auto mt-3 rounded-lg px-3"> 
        <div className="px-4 bg-gray-300 rounded-full gap-1 flex items-center">
          <HiMagnifyingGlass className="text-gray-500" />
          <input placeholder="Search..." className="bg-transparent border-none focus:outline-none" />  
        </div>
        <section className="flex gap-2 cursor-pointer">
          <div className="px-4 bg-gray-300 text-gray-700 rounded-full"> 
            Limpar filtros</div>
          
          <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
             Ano <HiArrowDownRight /></div>
          
          <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
             Categoria <HiArrowDownRight /></div>
        </section>
      </div>
      {/*End of Filter Tab*/}

      {/*Card Display*/} 
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
      </div>
      {/*End of Card Display*/}
    </div>
  );
}
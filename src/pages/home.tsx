import { useState, useEffect } from 'react';
import CardPictureLayout from '../components/card_pictures/card_picture_layout';
import { buscarCardsAleatorios, type CardData } from '../data/cards_picture';
import Carousel from '../components/carousel/carousel.tsx';
import { HiMagnifyingGlass, HiArrowDownRight } from "react-icons/hi2";

export default function Home() {
  // State to store the array of cards that will be rendered on the screen
  const [cards, setCards] = useState<CardData[]>([]);

  // Runs once when the component mounts to fetch and set the initial randomized cards
  useEffect(() => {
    const dadosGerados = buscarCardsAleatorios();
    setCards(dadosGerados);
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
        <section className="flex gap-2">
          <div className="px-4 bg-gray-300 text-gray-700 rounded-full"> 
            Limpar filtros</div>
          
          <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
             Ano <HiArrowDownRight /></div>
          
          <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
             Categoria <HiArrowDownRight /></div>
        </section>
      </div>
      {/*End of Filter Tab*/}

      {/*Card Dislpay*/} 
      <div className="py-4 px-4 min-h-screen w-full">
        
        {/* max-w-[1000px] mx-auto: Restricts the grid's maximum width and centers it. 
          This prevents the 3 columns from stretching excessively on large screens, 
          creating large, elegant outer side margins.
        */}
        <div className="w-[97%] mx-auto">        
          {/* columns-3 gap-8: Forces a strict 3-column layout using CSS Columns. 
            The gap-8 property creates a distinct, wide spacing between the columns.
          */}
          <div className="columns-3 gap-8 w-full">
            {cards.map((card) => (
              <CardPictureLayout 
                key={card.id}
                image={card.image} 
                dimension={card.dimension} 
              />
            ))}
          </div>
        </div>
      </div>
      {/*End of Card Dislpay*/}
    </div>
  );
}
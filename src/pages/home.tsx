import { useState, useEffect } from 'react';
import CardLayout from '../components/card_pictures/card_picture_layout';
import { buscarCardsAleatorios, type CardData } from '../data/cards_picture';

export default function Home() {
  // State to store the array of cards that will be rendered on the screen
  const [cards, setCards] = useState<CardData[]>([]);

  // Runs once when the component mounts to fetch and set the initial randomized cards
  useEffect(() => {
    const dadosGerados = buscarCardsAleatorios();
    setCards(dadosGerados);
  }, []);

  return (
    <div className="py-8 px-4 min-h-screen w-full">
      
      {/* max-w-[1000px] mx-auto: Restricts the grid's maximum width and centers it. 
        This prevents the 3 columns from stretching excessively on large screens, 
        creating large, elegant outer side margins.
      */}
      <div className="w-full max-w-[1000px] mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-white">Meu Pinterest Clone</h1>
        
        {/* columns-3 gap-8: Forces a strict 3-column layout using CSS Columns. 
          The gap-8 property creates a distinct, wide spacing between the columns.
        */}
        <div className="columns-3 gap-8 w-full">
          {cards.map((card) => (
            <CardLayout 
              key={card.id}
              image={card.image} 
              dimension={card.dimension} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
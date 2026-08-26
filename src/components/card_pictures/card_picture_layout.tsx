import { useMemo } from 'react';
import card_style from '../../../public/card_hover.module.css';

/* Importando Mock */
import { card_picture } from '../../data/card_picture_mock'; // mock

// Function to generate a random height
function getRandomHeight(min = 230, max = 540) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function CardPictureLayout() {
  // Memoizes the array calculation to prevent re-shuffling and height re-computation on component re-renders
  const cardsRandomWithHeight = useMemo(() => {
    return [...card_picture] // Mock list copy
      .sort(() => Math.random() - 0.5) // Randomly shuffles the list order
      // ex: 0.2: 0.2 - 0.5 = -0.3 (Negative number -> swaps order)
      // ex: 0.8: 0.8 - 0.5 = +0.3 (Positive number -> keeps order)
      .map((picture) => ({ // Maps over the picture array
        ...picture, // Copies all card properties
        height: getRandomHeight(230, 540), // Adds the dynamic height
      }));
  }, []);

  return (
    <>
      {cardsRandomWithHeight.map((picture) => (
        <div 
          key={picture.id} 
          className="group relative break-inside-avoid mb-5 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          style={{ height: `${picture.height}px` }}
        >
          {/* Main image */}
          <img 
            src={picture.url_image} 
            alt={picture.message_hover} 
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Hover overlay */}
          <div 
            className={`absolute bottom-0 inset-x-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card_style.GlassEffect}`}
          >
            <p className="font-overpass text-gray-900 font-bold text-base">
              {picture.message_hover}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
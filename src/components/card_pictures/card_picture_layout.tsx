import { useMemo } from 'react';
import card_style from "../../styles/card_hover.module.css";
import { useNavigate } from 'react-router-dom';

/* Importando Mock e Tipos */
import { card_picture } from '../../data/card_picture_mock';
import type { CardPictureItem } from '../../data/card_picture_mock';

function getRandomHeight(min = 230, max = 540) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Interface para Props (memberName é opcional)
interface CardPictureFilterLayoutProps {
  memberName?: string;
}

export default function CardPictureLayout({ memberName }: CardPictureFilterLayoutProps) {
  const navigate = useNavigate();

  // Filter and add a random height
  const cardsRandomWithHeight = useMemo(() => {
    // If memberName exists, filter the author's works. Otherwise, get all of them.
    const filteredPictures = memberName
      ? card_picture.filter((picture) => picture.author.includes(memberName))
      : card_picture;

    return [...filteredPictures]
      .sort(() => Math.random() - 0.5)
      .map((picture: CardPictureItem) => ({
        ...picture,
        height: getRandomHeight(230, 540),
      }));
    }, [memberName]); // Recalculates if the memberName prop changes

  
  return (
    <section>
      {cardsRandomWithHeight.map((picture) => (
        <div 
          key={picture.id} 
          onClick={() => {
            navigate(`/projectpage/${picture.id}`);
            window.scrollTo(0, 0);
          }}
          className="group relative break-inside-avoid mb-5 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          style={{ height: `${picture.height}px` }}
        >
          {/* Main image */}
          <img 
            src={picture.url_cover} 
            alt={picture.name} 
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Hover overlay */}
          <div 
            className={`absolute bottom-0 inset-x-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card_style.GlassEffect}`}
          >
            <p className="text-gray-900 font-bold text-base">
              {picture.name}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
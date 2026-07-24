import { useMemo } from 'react';

import card_style from '../../../public/card_hover.module.css'; // CSS 

interface CardPictureProps {
  image: string;
  dimension: 'small' | 'medium' | 'large';
  hover: string; 
}

function getRandomHeight(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getHeight = (dimension: 'small' | 'medium' | 'large'): number => {
  const heights = {
    small: getRandomHeight(230, 260),
    medium: getRandomHeight(330, 360),
    large: getRandomHeight(510, 540),
  };
  return heights[dimension] || heights.medium;
};

export default function CardPictureLayout({ image, dimension, hover }: CardPictureProps) {
  const cardHeight = useMemo(() => getHeight(dimension), [dimension]);

  return (
    <div 
      style={{ height: `${cardHeight}px` }}
      className="relative isolate w-full mb-8 break-inside-avoid overflow-hidden rounded-3xl cursor-pointer group transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl transform-gpu"
    >
      <img 
        src={image} 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        alt={hover} 
      />

      {/* 2. Aplique a classe do styles aqui também */}
      <div 
        className={`absolute -bottom-[1px] -left-[1px] -right-[1px] h-16 rounded-b-3xl flex items-center px-6 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 ${card_style.GlassEffect}`}
      >
        <span className="text-zinc-800 font-bold text-base truncate">
          {hover}
        </span>
      </div>
    </div>
  );
}
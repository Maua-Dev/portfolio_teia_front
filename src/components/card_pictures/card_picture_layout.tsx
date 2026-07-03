import { useMemo } from 'react';

interface CardPictureProps {
  image: string;
  dimension: 'small' | 'medium' | 'large';
}

/**
 * Generates a random integer between a minimum and maximum value (inclusive).
 * Used to give the Pinterest grid a dynamic, organic feel.
 */
function getRandomHeight(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Maps the abstract dimension type ('small', 'medium', 'large') 
 * to a specific random pixel height range based on the Figma design.
 */
const getHeight = (dimension: 'small' | 'medium' | 'large'): number => {
  const heights = {
    small: getRandomHeight(230, 260),
    medium: getRandomHeight(330, 360),
    large: getRandomHeight(510, 540),
  };
  return heights[dimension] || heights.medium;
};

export default function CardPictureLayout({ image, dimension }: CardPictureProps) {
  /* * useMemo is CRITICAL here: It memorizes the random height calculation.
   * Without it, the card would recalculate a new height on EVERY re-render,
   * causing the layout to dangerously jump or flicker when the state updates.
   */
  const cardHeight = useMemo(() => getHeight(dimension), [dimension]);

  return (
    <div 
      // Injects the fixed pixel height directly into the DOM element
      style={{ height: `${cardHeight}px` }}
      /* * mb-8: Controls the vertical gap between cards in the same column.
       * break-inside-avoid: Essential for CSS Columns; prevents the card 
       * from being split or torn in half across columns.
       */
      className="w-full mb-8 break-inside-avoid overflow-hidden rounded-3xl"
    >
      <img 
        src={image} 
        /* * object-cover: Fills the entire container width and height 
         * perfectly without distorting or stretching the image aspect ratio.
         */
        className="w-full h-full object-cover" 
        alt="Card content" 
      />
    </div>
  );
}
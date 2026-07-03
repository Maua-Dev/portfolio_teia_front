import smallImg from '../assets/teste_cards_pictures/small.jpg';
import mediumImg from '../assets/teste_cards_pictures/medium.jpg';
import largeImg from '../assets/teste_cards_pictures/large.jpg';

// Defines the strict type structure for a single card's data
export interface CardData {
  id: string;
  image: string;
  dimension: 'small' | 'medium' | 'large';
}

// Holds both local assets (processed by Vite) and external placeholder URLs for testing
const listaImagens = [
  smallImg,
  mediumImg,
  largeImg,
  "https://picsum.photos/id/1015/500/700",
  "https://picsum.photos/id/1016/500/600",
  "https://picsum.photos/id/1018/500/800",
  "https://picsum.photos/id/152/500/700",
  "https://picsum.photos/id/234/500/500",
  "https://picsum.photos/id/267/500/800",
  "https://picsum.photos/id/324/500/600",
  "https://picsum.photos/id/454/500/700",
  "https://picsum.photos/id/522/500/600",
  "https://picsum.photos/id/619/500/800",
  "https://picsum.photos/id/742/500/700",
  "https://picsum.photos/id/836/500/500"
];

/**
 * Shuffles the image pool and randomly assigns a dimension to each image.
 * Returns an array of formatted CardData objects ready for React rendering.
 */
export const buscarCardsAleatorios = (): CardData[] => {
  const tamanhos: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
  
  // Shuffles the array using a simple random sort (-0.5 to 0.5) to mix up local and external images
  const imagensEmbaralhadas = [...listaImagens].sort(() => Math.random() - 0.5);

  // Maps each image to the expected CardData layout structure
  return imagensEmbaralhadas.map((img, index) => {
    // Randomly selects an index from the 'tamanhos' array (0, 1, or 2)
    const tamanhoAleatorio = tamanhos[Math.floor(Math.random() * tamanhos.length)];
    
    return {
      // Combines loop index and dimension to create a perfectly unique 'key' prop for React
      id: `card-${index}-${tamanhoAleatorio}`, 
      image: img, 
      dimension: tamanhoAleatorio,
    };
  });
};
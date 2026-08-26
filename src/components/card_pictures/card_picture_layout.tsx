import { useMemo } from 'react';
import card_style from '../../../public/card_hover.module.css';

interface CardPictureItem {
  id: string;
  url_image: string;
  message_hover: string;
  categorias: string[];
  ano: string;
}

// Mock repository
const card_picture: CardPictureItem[] = [
  {
    id: "picture-1",
    url_image: "https://picsum.photos/id/1015/500/700",
    message_hover: "Feira de Tecidos",
    categorias: ["Paisagem", "Natureza"],
    ano: "2025-06-15"
  },
  {
    id: "picture-2",
    url_image: "https://picsum.photos/id/1016/500/600",
    message_hover: "Cidade de Noite",
    categorias: ["Urbano", "Fotografia"],
    ano: "2026-01-10"
  },
  {
    id: "picture-3",
    url_image: "https://picsum.photos/id/1018/500/800",
    message_hover: "Montanhas Nevadas",
    categorias: ["Paisagem", "Inverno"],
    ano: "2024-12-25"
  },
  {
    id: "picture-4",
    url_image: "https://picsum.photos/id/152/500/700",
    message_hover: "Abstrato Moderno",
    categorias: ["Abstrato", "Pintura"],
    ano: "2025-03-20"
  },
  {
    id: "picture-5",
    url_image: "https://picsum.photos/id/1025/500/750",
    message_hover: "O Abraço da Natureza",
    categorias: ["Fotografia", "Retrato"],
    ano: "2025-08-12"
  },
  {
    id: "picture-6",
    url_image: "https://picsum.photos/id/1043/500/650",
    message_hover: "Texturas de Rust",
    categorias: ["Abstrato", "Conceitual"],
    ano: "2026-02-04"
  },
  {
    id: "picture-7",
    url_image: "https://picsum.photos/id/1084/500/800",
    message_hover: "O Guardião da Floresta",
    categorias: ["Natureza", "Minimalista"],
    ano: "2024-10-30"
  },
  {
    id: "picture-8",
    url_image: "https://picsum.photos/id/1069/500/700",
    message_hover: "Caminho das Águas",
    categorias: ["Paisagem", "Fotografia"],
    ano: "2025-11-14"
  },
  {
    id: "picture-9",
    url_image: "https://picsum.photos/id/1081/500/600",
    message_hover: "Simetria Urbana",
    categorias: ["Urbano", "Arquitetura"],
    ano: "2026-03-01"
  }
];

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
    <div>
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
    </div>
  );
}
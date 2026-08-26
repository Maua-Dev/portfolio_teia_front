import { useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface IconCardItem {
  id: string | number;
  icon: ReactNode;
  message: string;
}

interface CarouselIconsLayoutProps {
  items: IconCardItem[];
}

export default function CarouselIconsLayout({ items: initialItems }: CarouselIconsLayoutProps) {
  // Mantém a lista no estado local para podermos reordenar dinamicamente
  const [items, setItems] = useState<IconCardItem[]>(initialItems);

  // Rola para a direita: tira o primeiro item e manda pro final
  const handleNext = () => {
    setItems((prevItems) => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  // Rola para a esquerda: tira o último item e traz pro começo
  const handlePrev = () => {
    setItems((prevItems) => {
      const last = prevItems[prevItems.length - 1];
      const rest = prevItems.slice(0, prevItems.length - 1);
      return [last, ...rest];
    });
  };

  return (
    <div className="flex items-center justify-between w-full gap-4 py-6">
      {/* Botão Esquerda */}
      <button 
        onClick={handleNext}
        className="p-2 text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer z-10 shrink-0"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Container de Cards (Sempre exibindo 4 por vez de forma limpa) */}
      <div className="flex gap-4 overflow-hidden w-full py-2">
        {items.map((item) => (
          <div
            key={item.id}
            /* Garantia matemática de 4 cards por tela */
            className="flex flex-col items-center justify-start p-4 text-white shrink-0 w-[calc((100%-3*1rem)/4)] hover:scale-105 transition-all duration-300"
          >
            {/* Ícone */}
            <div className="mb-4 text-white stroke-white [&>svg]:stroke-white">
              {item.icon}
            </div>
            
            {/* Mensagem */}
            <p className="text-center text-base font-medium leading-relaxed">
              {item.message}
            </p>
          </div>
        ))}
      </div>

      {/* Botão Direita */}
      <button 
        onClick={handlePrev}
        className="p-2 text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer z-10 shrink-0"
        aria-label="Próximo"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
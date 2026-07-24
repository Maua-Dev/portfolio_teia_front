import { cardsService } from '../services/api';
import type { PictureCardData, MemberCardData } from '../types/cards';

/**
 * Service to fetch and process picture cards for the Home page Pinterest grid.
 */
export const obterPinturasHome = async (): Promise<PictureCardData[]> => {
  try {
    const dadosCrus = await cardsService.listar('picture');
    const tamanhos: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
    
    // Shuffle arrays to keep the feed layout dynamic
    const embaralhados = [...dadosCrus].sort(() => Math.random() - 0.5);

    return embaralhados.map((item) => {
      // Assign a random aspect ratio dimension for Pinterest grid styling
      const tamanhoAleatorio = tamanhos[Math.floor(Math.random() * tamanhos.length)];
      
      return {
        id: item.id,
        image: String(item.url_image),
        tipo: 'picture',
        dimension: tamanhoAleatorio,
        hover: item.hover,
        categorias: item.categorias || [],
        ano: item.ano || ''
      };
    });
  } catch (error) {
    console.error("Erro ao obter e processar pinturas para a Home:", error);
    return [];
  }
};

/**
 * Service to fetch and sort member cards for the Members page.
 */
export const obterMembrosPagina = async (): Promise<MemberCardData[]> => {
  try {
    const dadosCrus = await cardsService.listar('member');
    
    // Sort members alphabetically by name (hover property)
    const ordenados = [...dadosCrus].sort((a, b) => 
      a.hover.localeCompare(b.hover)
    );

    return ordenados.map((item) => ({
      id: item.id,
      image: String(item.url_image),
      tipo: 'member',
      hover: item.hover
    }));
  } catch (error) {
    console.error("Erro ao obter e processar membros:", error);
    return [];
  }
};
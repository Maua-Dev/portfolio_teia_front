import { useState, useEffect } from 'react';

// Banner
import Banner from "../components/banner/banner";

// Banner Asset
import member_banner from '../assets/members_banner/members_banner.png';

// Member Card Layout
import CardMambersLayout from "../components/card_members/card_members_layout";

// Data and Type imports
import { obterMembrosPagina } from '../data/cards_filter';
import type { MemberCardData } from '../types/cards';

import Filter from '../components/filter/filter.tsx';

export default function Members() {
  // Strict typing for member objects
  const [membros, setMembros] = useState<MemberCardData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch and alphabetize members on mount
  useEffect(() => {
    obterMembrosPagina()
      .then((dadosMembros) => {
        setMembros(dadosMembros);
      })
      .catch((err) => {
        console.error("Erro ao carregar membros:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen w-full pb-12">
      <Banner 
        image={member_banner}
        altText="Members banner"
      />
      
      <Filter 
            clear={"Limpar Filtro"}
            year={"Ano"}
            category={"Categoria"}/>

      <section className="pt-4 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          
          {loading ? (
            <div className="text-white text-center py-12 text-lg">
              Carregando membros...
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
              {membros.map((membro) => (
                <CardMambersLayout 
                  key={membro.id} 
                  image={membro.image} 
                  name={membro.hover} // Mapping 'hover' property as member's name
                />
              ))}
            </div>
          )}
          
        </div>
      </section>
    </section>
  );
}
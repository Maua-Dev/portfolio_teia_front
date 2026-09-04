import { useParams } from 'react-router-dom';
import { User, Tag } from 'lucide-react';
import { card_picture } from '../../src/data/card_picture_mock';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = card_picture.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-gray-500 font-overpass">Projeto não encontrado.</p>
      </main>
    );
  }

  const { capa, obras, titulo, texto, autor, categorias } = project;
  const [primeiraObra, ...restoObras] = obras;

  return (
    <main className="flex flex-col gap-10 max-w-5xl mx-auto px-6 py-10">

      {/* Capa */}
      <figure className="w-full">
        <img
          src={capa}
          alt={`Capa do projeto ${titulo}`}
          className="w-full h-[420px] object-cover rounded-3xl"
        />
      </figure>

      {/* Primeira obra + título/texto lado a lado */}
      <article className="flex flex-wrap gap-8 items-start">
        <figure className="flex-1 min-w-[280px]">
          <img
            src={primeiraObra}
            alt={titulo}
            className="w-full h-[360px] object-cover rounded-2xl"
          />
        </figure>

        <section className="flex-1 min-w-[280px] flex flex-col gap-4">
          <p className="text-6xl font-bold font-overpass text-gray-900">
            {titulo}
          </p>
          <p className="text-base font-overpass text-gray-700 leading-relaxed">
            {texto}
          </p>
        </section>
      </article>

      {/* Resto das obras, centralizadas, uma embaixo da outra */}
      {restoObras.length > 0 && (
        <div className="flex flex-col items-center gap-6">
          {restoObras.map((obra, index) => (
            <img
              key={index}
              src={obra}
              alt={`${titulo} - obra ${index + 2}`}
              className="w-full max-w-3xl h-[380px] object-cover rounded-2xl"
            />
          ))}
        </div>
      )}

      {/* Tags de autores */}
      <div className="flex flex-wrap gap-3">
        {autor.map((nome, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50"
          >
            <User size={16} className="text-gray-600" />
            <span className="text-sm font-overpass font-medium text-gray-800">
              {nome}
            </span>
          </div>
        ))}
      </div>

      {/* Tags de categorias */}
      <div className="flex flex-wrap gap-3">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50"
          >
            <Tag size={16} className="text-gray-600" />
            <span className="text-sm font-overpass font-medium text-gray-800">
              {cat}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
/* Import images */
import borrado from "../assets/Cards/picture/borrado.jpg"
import feira_de_artes from "../assets/Cards/picture/feira_de_artes.jpg"
import luz from "../assets/Cards/picture/luz.jpg"
import museu from "../assets/Cards/picture/museu.jpg"
import museu2 from "../assets/Cards/picture/museu2.jpg"
import quadros from "../assets/Cards/picture/quadros.jpg"
import riscado from "../assets/Cards/picture/riscado.jpg"
import verde from "../assets/Cards/picture/verde.jpg"

/* Interface */
interface CardPictureItem {
  id: string;
  url_image: string;
  message_hover: string;
  categorias: string[];
  ano: string;
}


// Mock repository
export const card_picture: CardPictureItem[] = [
  {
    id: "picture-1",
    url_image: borrado,
    message_hover: "Feira de Tecidos",
    categorias: ["Paisagem", "Natureza"],
    ano: "2025-06-15"
  },
  {
    id: "picture-2",
    url_image: feira_de_artes,
    message_hover: "Cidade de Noite",
    categorias: ["Urbano", "Fotografia"],
    ano: "2026-01-10"
  },
  {
    id: "picture-3",
    url_image: luz,
    message_hover: "Montanhas Nevadas",
    categorias: ["Paisagem", "Inverno"],
    ano: "2024-12-25"
  },
  {
    id: "picture-4",
    url_image: museu,
    message_hover: "Abstrato Moderno",
    categorias: ["Abstrato", "Pintura"],
    ano: "2025-03-20"
  },
  {
    id: "picture-5",
    url_image: museu2,
    message_hover: "O Abraço da Natureza",
    categorias: ["Fotografia", "Retrato"],
    ano: "2025-08-12"
  },
  {
    id: "picture-6",
    url_image: quadros,
    message_hover: "Texturas de Rust",
    categorias: ["Abstrato", "Conceitual"],
    ano: "2026-02-04"
  },
  {
    id: "picture-7",
    url_image: riscado,
    message_hover: "O Guardião da Floresta",
    categorias: ["Natureza", "Minimalista"],
    ano: "2024-10-30"
  },
  {
    id: "picture-8",
    url_image: verde,
    message_hover: "Caminho das Águas",
    categorias: ["Paisagem", "Fotografia"],
    ano: "2025-11-14"
  }
];
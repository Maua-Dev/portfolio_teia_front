/* Import images */
import borrado from "../assets/Cards/picture/borrado.jpg"
import feira_de_artes from "../assets/Cards/picture/feira_de_artes.jpg"
import luz from "../assets/Cards/picture/luz.jpg"
import museu from "../assets/Cards/picture/museu.jpg"
import museu2 from "../assets/Cards/picture/museu2.jpg"
import quadros from "../assets/Cards/picture/quadros.jpg"
import riscado from "../assets/Cards/picture/riscado.jpg"
import verde from "../assets/Cards/picture/verde.jpg"
import sleepyernie from "../assets/test_carousel/sleepyernie.jpg"
import slipigirl from "../assets/test_carousel/slipigirl.jpg"
import dnsrmans from "../assets/test_carousel/dnsrmans.jpg"
import crmodoc from "../assets/test_carousel/crmodoc.jpg"
import bydrvr from "../assets/test_carousel/bydrvr.jpg"



/* Interface */
interface CardPictureItem {
  id: string;
  url_image: string;
  message_hover: string;
  categorias: string[];
  ano: string;
  capa: string;
  obras: string[]; 
  titulo: string;
  texto: string;
  autor: string[];
}


// Mock repository
export const card_picture: CardPictureItem[] = [
  {
    id: "picture-1",
    url_image: borrado,
    message_hover: "Feira de Tecidos",
    categorias: ["Paisagem", "Natureza"],
    ano: "2025-06-15",
    capa: borrado,
    obras: [],
    titulo: "Feira de Tecidos: Sentir no tato as memórias de outras vidas",
    texto: "No dia a dia, as pessoas se afastam de suas origen e se tornam indiferentes com a história a sua votla diante da pressão do cotidiano, a Feira de Tecidos é um projeto focado em trazer de volta as pessoas perdidas em suas rotinas ao mundo da arte e da celebração de diversas culturas por meio da exibição feita pelo grupo de alunos, que achou por meio de tecidos a forma mais unica conquistar e conversar com o público.",
    autor: ["john_doe"],
  },
  {
    id: "picture-2",
    url_image: feira_de_artes,
    message_hover: "Cidade de Noite",
    categorias: ["Urbano", "Fotografia"],
    ano: "2026-01-10",
    capa: feira_de_artes,
    obras: [],  
    titulo: "Cidade de Noite",
    texto: "A cidade de noite é um cenário vibrante e dinâmico, onde a luz e a sombra se entrelaçam para criar uma atmosfera única. Este projeto explora a essência da vida urbana através de retratos que capturam a essência da cidade em suas horas mais intensas.",
    autor: ["jane_doe"],
  },
  {
    id: "picture-3",
    url_image: luz,
    message_hover: "Montanhas Nevadas",
    categorias: ["Paisagem", "Inverno"],
    ano: "2024-12-25",
    capa: slipigirl,
    obras: [sleepyernie, dnsrmans, crmodoc, bydrvr], 
    titulo: "Montanhas Nevadas",
    texto: "As montanhas nevadas são um espetáculo da natureza, oferecendo vistas deslumbrantes e uma sensação de tranquilidade. Este projeto captura a beleza serena das montanhas cobertas de neve, destacando a majestade e a grandiosidade do inverno.",
    autor: ["alice_smith"],
  },
  {
    id: "picture-4",
    url_image: museu,
    message_hover: "Abstrato Moderno",
    categorias: ["Abstrato", "Pintura"],
    ano: "2025-03-20",
    capa: museu,
    obras: [],
    titulo: "Abstrato Moderno",
    texto: "O Abstrato Moderno é uma expressão artística que desafia as convenções tradicionais da pintura. Este projeto explora formas, cores e texturas de maneira inovadora, convidando o espectador a interpretar e se conectar com a obra de uma forma pessoal e única.",
    autor: ["bob_jones"],
  },
  {
    id: "picture-5",
    url_image: museu2,
    message_hover: "O Abraço da Natureza",
    categorias: ["Fotografia", "Retrato"],
    ano: "2025-08-12",
    capa: museu2,
    obras: [],
    titulo: "O Abraço da Natureza",
    texto: "O Abraço da Natureza é um projeto fotográfico que captura momentos íntimos entre seres humanos e o ambiente natural. Através de retratos sensíveis, este trabalho busca transmitir a conexão profunda e o respeito que devemos ter pela natureza.",
    autor: ["carol_white"],
  },
  {
    id: "picture-6",
    url_image: quadros,
    message_hover: "Texturas de Rust",
    categorias: ["Abstrato", "Conceitual"],
    ano: "2026-02-04",
    capa: quadros,
    obras: [],
    titulo: "Texturas de Rust",
    texto: "Texturas de Rust é um projeto que explora a beleza encontrada na deterioração e no desgaste. Através de fotografias e pinturas, este trabalho destaca as texturas únicas e os padrões que surgem com o tempo, celebrando a estética do envelhecimento e da imperfeição.",
    autor: ["david_brown"],
  },
  {
    id: "picture-7",
    url_image: riscado,
    message_hover: "O Guardião da Floresta",
    categorias: ["Natureza", "Minimalista"],
    ano: "2024-10-30",
    capa: riscado,
    obras: [],
    titulo: "O Guardião da Floresta",
    texto: "O Guardião da Floresta é um projeto que busca sensibilizar o público sobre a importância da preservação ambiental. Através de ilustrações minimalistas e fotografias, este trabalho destaca a beleza e a fragilidade das florestas, incentivando a conscientização e a ação em prol do meio ambiente.",
    autor: ["emma_green"],
  },
  {
    id: "picture-8",
    url_image: verde,
    message_hover: "Caminho das Águas",
    categorias: ["Paisagem", "Fotografia"],
    ano: "2025-11-14",
    capa: verde,
    obras: [],
    titulo: "Caminho das Águas",
    texto: "Caminho das Águas é um projeto fotográfico que explora a beleza e a diversidade dos cursos d'água ao redor do mundo. Através de imagens capturadas em diferentes regiões, este trabalho busca transmitir a importância da água para a vida e a necessidade de sua preservação.",
    autor: ["frank_black"],
  }
];
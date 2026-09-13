/* Import images */
import one from "../assets/Cards/member/1.jpg"
import two from "../assets/Cards/member/2.jpg"
import three from "../assets/Cards/member/3.jpg"
import four from "../assets/Cards/member/4.jpg"
import five from "../assets/Cards/member/5.jpg"
import six from "../assets/Cards/member/6.jpg"
import seven from "../assets/Cards/member/7.jpg"
import eight from "../assets/Cards/member/8.jpg"
import nine from "../assets/Cards/member/9.jpg"
import ten from "../assets/Cards/member/10.jpg"
import eleven from "../assets/Cards/member/11.jpg"
import twelve from "../assets/Cards/member/12.jpg"



/* Interface */
export interface CardMember{
    id: string;
    url_image: string;
    name: string;
    intro: string;
}

// Mock repository
export const card_member : CardMember[] = [
  {
    id: "1",
    url_image: one,
    name: "José Silva",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "2",
    url_image: two,
    name: "Maria Souza",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "3",
    url_image: three,
    name: "Vitor Soller",
    intro: `Ex-presidente da Dev Community e entusiasta de cloud computing, transformo 
            ideias complexas em arquiteturas escaláveis na AWS. Entre um deploy e outro, garanto 
            que o time siga as melhores práticas de desenvolvimento sem deixar a infraestrutura cair.`
  },
  {
    id: "4",
    url_image: four,
    name: "Ana Clara",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "5",
    url_image: five,
    name: "Lucas Oliveira",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "6",
    url_image: six,
    name: "Juliana Mendes",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "7",
    url_image: seven,
    name: "Gabriel Santos",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "8",
    url_image: eight,
    name: "Beatriz Rocha",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "9",
    url_image: nine,
    name: "Costa Felipe",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "10",
    url_image: ten,
    name: "Pedro Pedra",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "11",
    url_image: eleven,
    name: "Carlos Eduardo",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
  {
    id: "12",
    url_image: twelve,
    name: "Petra",
    intro: `Minha grande paixão é o Design de Exposições e a criação de espaços 
            imersivos. Acredito que o ambiente físico e a iluminação ditam a 
            forma como absorvemos a arte e a informação. Apresento meus estudos 
            e projetos de cenografia, que vão desde o planejamento de galerias 
            de arte minimalistas até a ideação de instalações interativas, 
            projeções sensoriais e arquitetura efêmera. Meu objetivo é projetar 
            narrativas espaciais que conectem o público à obra de forma profunda 
            e inesquecível.`
  },
];
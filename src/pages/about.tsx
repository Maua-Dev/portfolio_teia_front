import Banner from "../components/banner/banner";
import member_banner from "../assets/members_banner/members_banner.png";

// Carousel icons
import CarouselIconsLayout, { type IconCardItem } from '../components/carousel/carousel_icons_layout';

// Import additional Lucide icons to expand the carousel
import { 
  StickyNotes, 
  Users, 
  PenTool,
  Factory  
} from 'lucide-react';

export default function About(){
    const Cards: IconCardItem[] = [
        {
            id: 1,
            icon: <Factory className="w-12 h-12" />,
            message: 'Produção',
        },
        {
            id: 2,
            icon: <StickyNotes className="w-12 h-12" />,
            message: 'Documentação',
        },
        {
            id: 3,
            icon: <PenTool className="w-12 h-12" />,
            message: 'Design Visual',
        },
        {
            id: 4,
            icon: <Users className="w-12 h-12" />,
            message: 'Administração',
        }

        /* Add more icons
        {
            id: 5,
            icon: <Megaphone className="w-12 h-12" />,
            message: 'Comunicação e Marketing estratégico',
        },
        {
            id: 6,
            icon: <Briefcase className="w-12 h-12" />,
            message: 'Gestão de projetos e Parcerias',
        },
        {
            id: 7,
            icon: <Calendar className="w-12 h-12" />,
            message: 'Organização de eventos e workshops',
        },
        {
            id: 8,
            icon: <Handshake className="w-12 h-12" />,
            message: 'Relacionamento com a comunidade Mauá',
        },*/
    ];
    
    return(
        <main>
            <Banner 
                image={member_banner}
                altText="Members banner"
            />

            <section className="bg-[#242152] text-white px-20 py-15 w-full">
                <h1 className="text-5xl font-bold tracking-wide pl-15">
                    Sobre Nós
                </h1>
                
                <hr className="my-6 border-2 border-white w-full" />

                <p className="w-full text-4xl font-normal leading-[2.3] text-zinc-100 pt-2">
                    A Teia Criativa é a entidade estudantil oficial do curso de Design do Instituto Mauá de Tecnologia (IMT). 
                    Sua história e identidade nasceram da vontade de utilizar o design expositivo não apenas como estética, 
                    mas como uma ferramenta poderosa de conexão, expressão e transformação social e visual.
                </p>
            </section>

            <section className="bg-[#9B202E] text-white px-30 py-15 w-full">
                <div className="grid grid-cols-[260px_1fr] gap-y-12 items-center">
                    <h1 className="text-6xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
                        Missão
                    </h1>
                    <p className="text-xl leading-[2.5] pl-12">
                        Desenvolver soluções criativas e inovadoras por meio da colaboração entre membros, 
                        promovendo aprendizado prático e impacto real em projetos de design e tecnologia.
                    </p>

                    <h1 className="text-6xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
                        Visão
                    </h1>
                    <p className="text-xl leading-[2.5] pl-12">
                        Ser referência dentro e fora da Mauá como uma entidade que forma profissionais criativos, 
                        preparados para o mercado e capazes de transformar ideias em experiências relevantes.
                    </p>

                    <h1 className="text-6xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
                        Valores
                    </h1>

                    <p className="text-xl leading-[2.5] pl-12">
                        Colaboração, Criatividade, Evolução contínua, Protagonismo, Comprometimento, Foco no usuário.
                    </p>
                </div>
            </section>

            <section className="bg-[#242152] text-white px-20 py-15 w-full">
                <h1 className="text-5xl font-bold tracking-wide leading-[1.2] pl-15">
                    Estrutura <br/>Organizacional
                </h1>

                <hr className="my-6 border-2 border-white w-full" />

                <p className="text-xl leading-[2.5] pl-15 mb-6">
                    Para garantir que seus projetos se materializem com profissionalismo, a equipe é dividida em frentes estratégicas:
                </p>

                {/* Pass data to the layout component */}
                <CarouselIconsLayout items={Cards} />
            </section>
        </main>
    );
}
import Banner from "../components/banner/banner";
import member_banner from "../assets/members_banner/members_banner.png"
import anelmob from "../assets/logo/anelmob.png"
import esfsolid from "../assets/logo/esfsolid.png"
import formflor from "../assets/logo/formflor.png"
import logotipo48 from "../assets/logo/logotipo48.png"

interface TimelineItem {
    year: number;
    title: string;
    description: string;
    image: string;
}

// Carousel icons
import CarouselIconsLayout, { type IconCardItem } from '../components/carousel/carousel_icons_layout';

// Import de mais ícones do Lucide para expandir o carrossel
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
            icon: <Factory  className="w-12 h-12" />,
            message: 'Produção',
        },
        {
            id: 2,
            icon: <StickyNotes className="w-12 h-12" />,
            message: 'Documentação',
        },
        {
            id: 3,
            icon: <PenTool   className="w-12 h-12" />,
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
        <>
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
                    <h1 className="text-5xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
                        Missão
                    </h1>
                    <p className="text-xl leading-[2.5] pl-12">
                        Desenvolver soluções criativas e inovadoras por meio da colaboração entre membros, 
                        promovendo aprendizado prático e impacto real em projetos de design e tecnologia.
                    </p>

                    <h1 className="text-5xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
                        Visão
                    </h1>
                    <p className="text-xl leading-[2.5] pl-12">
                        Ser referência dentro e fora da Mauá como uma entidade que forma profissionais criativos, 
                        preparados para o mercado e capazes de transformar ideias em experiências relevantes.
                    </p>

                    <h1 className="text-5xl font-bold tracking-wide border-r-2 border-white/80 pr-8 h-full flex items-center">
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

                {/* Passando os dados para o layout */}
                <CarouselIconsLayout items={Cards} />
            </section>


            <section className="bg-[#9B202E] flex flex-col text-white px-20 py-15 w-full">
                
                <h1 className="text-5xl font-bold tracking-wide pl-15">
                    Teia ao longo da história
                </h1>

                <hr className="my-6 border-2 border-white w-full" />

                <section className="flex flex-wrap justify-center pt-10">
                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                            <img src={formflor} alt="Forma Floral Intrincada" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                            <img src={anelmob} alt="Anel de Möbius" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                            <img src={esfsolid} alt="Esfera Sólida" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                            <img src={logotipo48} alt="Logotipo 1948" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
                
                <section className="relative flex flex-wrap justify-center items-center py-6">
                    <div className="absolute left-44 right-44 h-0.5 bg-blue-400 z-0" />

                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-4 h-4 rounded-full bg-blue-400 z-10" />
                    </div>
                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-4 h-4 rounded-full bg-blue-400  z-10" />
                    </div>
                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-4 h-4 rounded-full bg-blue-400 z-10" />
                    </div>
                    <div className="w-1/4 flex justify-center px-4">
                        <div className="w-4 h-4 rounded-full bg-blue-400 z-10" />
                    </div>
                </section>
                
                <section className="flex flex-wrap justify-center">
                    <div className="w-1/4 flex flex-col items-center px-4 text-center">
                        <span className="font-bold text-lg mb-1">2006</span>
                        <h3 className="font-bold text-lg mb-2">Forma Floral Intrincada</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                            A origem da identidade visual representada pela complexidade das linhas orgânicas.
                            Uma estrutura detalhada que simboliza o início de uma evolução clássica e simétrica.
                        </p>
                    </div>

                    <div className="w-1/4 flex flex-col items-center px-4 text-center">
                        <span className="font-bold text-lg mb-1">2010</span>
                        <h3 className="font-bold text-lg mb-2">Anel de Möbius</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                            A transição para a fluidez e a continuidade. O design se simplifica em uma
                            forma matemática contínua e minimalista.
                        </p>
                    </div>

                    <div className="w-1/4 flex flex-col items-center px-4 text-center">
                        <span className="font-bold text-lg mb-1">2020</span>
                        <h3 className="font-bold text-lg mb-2">Esfera Sólida</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                            O contraste entre o estático e o dinâmico. Uma esfera perfeita e colorida
                            que se destaca sobre uma superfície de frequências visuais.
                        </p>
                    </div>

                    <div className="w-1/4 flex flex-col items-center px-4 text-center">
                        <span className="font-bold text-lg mb-1">2026</span>
                        <h3 className="font-bold text-lg mb-2">Logotipo 1948</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                            A era digital e a desconstrução geométrica. A evolução final atinge a
                            tridimensionalidade em blocos pixelados e vibrantes.
                        </p>
                    </div>
                </section>
                
            </section>

        </>
    );
}
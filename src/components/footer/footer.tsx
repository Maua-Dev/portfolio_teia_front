import { useNavigate } from "react-router-dom";
import bg_colored_bg from "../../assets/footer_bg/bg_colored_img.png"
import logo_teia from "../../assets/logo/logo_nm.png"

export default function Footer(){
    const navigate = useNavigate();

    return(
        <footer
            className="w-full text-white"
            style={{
                backgroundImage: `url(${bg_colored_bg})`,
                backgroundSize: "100% 300%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* * Flex container with divide-x restored exactly as the Figma design.
              * We use shrink-0 on columns to completely protect them from compressing.
              */}
            <div className="flex mt-4 items-stretch divide-x divide-white/50 px-10 py-5 w-full justify-between">
                
                {/* Coluna 1: Logo */}
                <div className="flex flex-col justify-center gap-2 pr-5 w-[20%] shrink-0">
                    <div 
                        onClick={() => navigate("/")} 
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <img 
                            src={logo_teia} 
                            alt="logo_teia_criativa" 
                            onClick={() => navigate("/")} 
                            className="cursor-pointer h-24 w-auto object-contain transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                        />
                    </div>
                    <p className="font-overpass text-xs mt-2">Teia Criativa - Portifólio</p>
                </div>

                {/* Coluna 2: Navegação */}
                <div className="flex flex-col gap-2 px-6 w-[15%] shrink-0">
                    <h4 className="font-overpass font-bold mb-1">Navegação</h4>
                    <span onClick={() => navigate("/")} className="cursor-pointer font-overpass duration-300 ease-in-out hover:text-white hover:-translate-y-1 hover:scale-110 text-xs">Home</span>
                    <span onClick={() => navigate("/members")} className="cursor-pointer font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xs">Membros</span>
                    <span onClick={() => navigate("/about")} className="cursor-pointer font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xs">Sobre Nós</span>
                    <span onClick={() => navigate("/contact")} className="cursor-pointer font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xs">Contato</span>
                </div>

                {/* Coluna 3: Contato */}
                <div className="flex flex-col gap-2 px-6 w-[22%] shrink-0">
                    <h4 className="font-overpass font-bold mb-1">Contato</h4>
                    <span className="font-overpass text-xs select-all">teiacriativa.maua@gmail.com</span>
                    <span className="font-overpass text-xs select-all">teiacriativa.maua</span>
                </div>

                {/* Coluna 4: Endereço */}
                <div className="flex flex-col gap-2 px-6 w-[25%] shrink-0">
                    <h4 className="font-overpass font-bold mb-1">Endereço</h4>
                    <span className="font-overpass text-xs select-all leading-relaxed">
                        Praça Mauá, 1 - Mauá, São Caetano do Sul - SP, 09580-900
                    </span>
                    <span className="font-overpass text-xs">Seg - Sex, 9h ás 18h</span>
                </div>

                {/* Coluna 5: Mapa (Com a barrinha divisória restaurada à esquerda) */}
                <div className="pl-6 flex items-center justify-center w-[18%] shrink-0">
                    <iframe
                        title="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2532.5964419798634!2d-46.57539064738934!3d-23.64876780103283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce434992a4cad7%3A0x75aa65b7b5099c2!2sInstituto%20Mau%C3%A1%20de%20Tecnologia!5e0!3m2!1spt-BR!2sus!4v1783026731096!5m2!1spt-BR!2sus"
                        className="w-[220px] h-[130px] rounded-lg border-0 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-105"
                    />
                </div>
            </div>

            {/* Linha divisória horizontal inferior */}
            <div className="border-t border-white/40 mx-10" />

            {/* Copyright */}
            <div className="text-center py-3">
                <p className="font-overpass text-xs">
                    @2026 Teia Criativa | Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};
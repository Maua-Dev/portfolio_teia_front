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
            <div className="flex mt-4 flex-wrap items-stretch divide-x divide-white/50 px-10 py-5 ">
                
                <div className="flex flex-col justify-center gap-2">
                    <div 
                        onClick={() => navigate("/")} 
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <img src={logo_teia} alt="logo_teia_criativa" onClick={() => navigate("/")} className="cursor-pointer  h-25 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"/>
                    </div>
                    <p className="font-overpass text-xs mt-2">Teia Criativa - Portifólio</p>
                </div>

                <div className="flex flex-col mt-4 gap-2 px-5">
                    <h4 className="font-overpass font-bold mb-1">Navegação</h4>
                    <span onClick={() => navigate("/")} className="cursor-pointer font-overpass duration-300  ease-in-out hover:text-white hover:-translate-y-1 hover:scale-110  text-xs">Home</span>
                    <span onClick={() => navigate("/members")} className="cursor-pointer font-overpass transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-xs">Membros</span>
                    <span onClick={() => navigate("/about")} className="cursor-pointer font-overpass transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-xs">Sobre Nós</span>
                    <span onClick={() => navigate("/contact")} className="cursor-pointer font-overpass transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-xs">Contato</span>
                </div>

                <div className="flex flex-col gap-2 mt-4 px-5">
                    <h4 className="font-overpass font-bold mb-1">Contato</h4>
                    <span className="font-overpass text-xs select-all">teiacriativa.maua@gmail.com</span>
                    <span className="font-overpass text-xs select-all">teiacriativa.maua</span>
                </div>

                <div className="flex flex-col gap-2 mt-4 px-5">
                    <h4 className="font-overpass font-bold mb-1">Endereço</h4>
                    <span className="font-overpass text-xs select-all">
                        Praça Mauá, 1 - Mauá, São Caetano do Sul - SP, 09580-900
                    </span>
                    <span className="font-overpass text-xs">Seg - Sex, 9h ás 18h</span>
                </div>

                <div className="pl-3 mt-4 flex items-center">
                    <iframe
                        title="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2532.5964419798634!2d-46.57539064738934!3d-23.64876780103283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce434992a4cad7%3A0x75aa65b7b5099c2!2sInstituto%20Mau%C3%A1%20de%20Tecnologia!5e0!3m2!1spt-BR!2sus!4v1783026731096!5m2!1spt-BR!2sus"
                        className="w-[220px] h-[130px] rounded-lg border-0 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-105"
                    />
                </div>
            </div>

            <div className="border-t border-white/40 mx-10" />

            <div className="text-center py-1">
                <p className="font-overpass text-sm">
                    @2026 Teia Criativa | Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};
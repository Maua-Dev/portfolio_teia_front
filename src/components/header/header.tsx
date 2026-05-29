import logo_teia from "../../assets/logo/logo_teia_criativa.png"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    return(
        <header className="flex justify-between items-center h-[100px] border-b-2 border-white border-b-gray-300">
            <section className="flex justify-between items-center ml-10 gap-6 h-[94px]">
                <img src={logo_teia} alt="logo_teia_criativa" onClick={() => navigate("/")} className="cursor-pointer max-h-full"/>
                
                <div onClick={() => navigate("/")} className="font-overpass cursor-pointer">Home</div>
                <div onClick={() => navigate("#")} className="font-overpass cursor-pointer">Membros</div>
                <div onClick={() => navigate("/about")} className="font-overpass cursor-pointer">Sobre nós</div>
                <div onClick={() => navigate("#")} className="font-overpass cursor-pointer">Contato</div>
                <div onClick={() => navigate("#")} className="font-overpass cursor-pointer">pt/en</div>
            </section>

            <div onClick={() => navigate("#")} className="font-overpass mr-15">Login</div>
        </header>
    );
};
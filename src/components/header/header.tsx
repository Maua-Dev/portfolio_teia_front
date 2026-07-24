import logo_teia from "../../assets/logo/logo_teia_criativa.png"
import { useNavigate } from "react-router-dom";


export default function Header(){
    const navigate = useNavigate();

    return(
        <header className="flex justify-between items-center h-[100px] border-b-2 border-white border-b-gray-300">
            <section className="flex justify-between items-center ml-10 gap-6 h-[94px]">
                <img src={logo_teia} alt="logo_teia_criativa" onClick={() => navigate("/")} className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer max-h-full"/>
                
                <div onClick={() => navigate("/")} className={`font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer 
                ${ location.pathname === "/" ? "-translate-y-1" : "" }`}> Home </div>
                
                <div onClick={() => navigate("/members")} className={`font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer 
                ${ location.pathname === "/members" ? "-translate-y-1" : "" }`}> Membros </div>
                
                <div onClick={() => navigate("/about")} className={`font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer 
                ${ location.pathname === "/about" ? "-translate-y-1" : "" }`}> Sobre nós</div>
                
                <div onClick={() => navigate("/contact")} className={`font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer 
                ${ location.pathname === "/contact" ? "-translate-y-1" : "" }`}> Contato</div>
                
                <div className="font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-300 cursor-pointer">pt/en</div>
            </section>
            <div className="font-overpass transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-300 cursor-pointer mr-15">Login</div>
        </header>
    );
};

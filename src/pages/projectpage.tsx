import { card_picture, type CardPictureItem } from '../../src/data/card_picture_mock';
import { useParams } from "react-router-dom"
import { FaRegUser } from "react-icons/fa6";
import { LuTag } from "react-icons/lu";  

export default function ProjectPage() {

    const { id } = useParams<{ id: string }>();

    const  project : CardPictureItem = card_picture.find((proj) => proj.id === id) || card_picture[0]; 
    const [frstimg, ...lstimg] = project.obras
    return(
        <main className='flex flex-col items-center'> 
            <figure className='w-[95%] mt-10 h-120 rounded-3xl '> 
                <img
                    src={project.url_cover}
                    alt={project.name}
                    className="w-full h-120 rounded-3xl object-cover "
                />

            </figure>
            <section className='flex justify-center mt-10'>
                <figure className='w-140 m-10 rounded-4xl object-cover h-170 overflow-hidden'>
                    <img src={frstimg}
                    alt={"Primeira Obra"}
                    className='w-full h-full'
                    />
                </figure>
                <article className='flex flex-col'>
                    <h1 className=' w-210 h-auto text-[100px] mt-20 font-bold'> {project.titulo}</h1>
                    <div className='overflow-y-auto h-auto mb-10 shadow-xl p-4 rounded-3xl'>
                        <h2 className=' w-200 h-auto '>{project.texto}</h2>
                    </div>
                </article>
            </section>
            <section className='flex flex-col mt-10'>
                {lstimg.map((obras) =>(
                    <img
                        src={obras}
                        className='m-5 rounded-3xl overflow-hidden '
                    ></img>
                    
                ))}
            </section>
            <section className='w-250 flex flex-wrap  mb-20'>
                {project.author.map((autores) =>(
                    <div className='shadow-3xl flex justify-center font-bold rounded-4xl border-2 gap-2 border-gray-400 border-solid mt-10 mr-10 px-2 py-1 w-auto h-8'>
                        <FaRegUser />
                        {autores}
                    </div>
                    
                ))}
                {project.categorias.map((cat) =>(
                    <div className='shadow-3xl flex justify-center font-bold rounded-4xl border-2 gap-2 border-gray-400 border-solid mt-10 mr-10 px-2 py-1 w-auto h-8'>
                        <LuTag />
                        {cat}
                    </div>
                    
                ))}
            </section> 

        </main>

    );
}
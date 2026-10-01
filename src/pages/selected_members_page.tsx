// Import react
import { useParams } from "react-router-dom"

/* Import Props */
import type { CardMember } from "../data/card_member_mock" // Props

/* Import mock */
import { card_member } from "../data/card_member_mock" // mock


/* Components */
import CardPictureLayout from "../components/card_pictures/card_picture_layout"

export default function Selected_Member_Page (){
    // get variable route(object)
    // Destructure the 'id' from the object returned by useParams
    const { id } = useParams<{ id: string }>();

    const member : CardMember = card_member.find((item) => item.id === id) || card_member[0];

    return (
        <main className='px-20 py-5'>
            <section>
                <div className="flex gap-15">
                    <img 
                        src={member.url_image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover rounded-3xl" 
                    />

                    <div className="flex flex-col gap-3 mt-10">
                        <h1>{member.name}</h1>
                        <p>
                            {member.intro} 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mt-10">
                    <h2>Integrante dos Projetos ... </h2>

                    <div className="columns-3 gap-5 space-y-5">
                        <CardPictureLayout memberName={member.name}/>
                    </div>
                </div>
            </section>
        </main>
    )
}
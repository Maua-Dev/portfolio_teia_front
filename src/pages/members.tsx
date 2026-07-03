// Banner
import Banner from "../components/banner/banner";

// Card Users
import member_banner from '../assets/members_banner/members_banner.png'

// Member Card Layout
import CardMambersLayout from "../components/card_members/card_members_layout";

// Members test
import { listaMembros } from '../data/members';

export default function Members() {
  return (
    <section className="min-h-screen w-full pb-12">
      <Banner 
        image={member_banner}
        altText="Members banner"
      />

      <section className="pt-4 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
            {listaMembros.map((membro) => (
              <CardMambersLayout 
                key={membro.id} 
                image={membro.image} 
                name={membro.name} 
              />
            ))}
          </div>
          
        </div>
      </section>
      
    </section>
  );
}
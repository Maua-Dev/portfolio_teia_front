/*  Components  */
// Banner
import Banner from "../components/banner/banner";
import Filter from "../components/filter/filter";
import CardMambersLayout from "../components/card_members/card_members_layout";

/* images */
// Banner Asset
import member_banner from '../assets/members_banner/members_banner.png';

export default function Members() {
  return (
      <main className='px-20 py-5'>
        <Banner
          image={member_banner}
          altText="Members banner"
        />

        {/*Filter*/}
        <Filter 
          clear={"Limpar Filtro"}
          year={"Ano"}
          category={"Categoria"}
        />

        <section className="grid grid-cols-4 gap-5">
          <CardMambersLayout />
        </section>
        
      </main>
  );
}
/*  Components  */
// Banner
import Banner from "../components/banner/banner";
import Filter from "../components/filter/filter";

/* images */
// Banner Asset
import member_banner from '../assets/members_banner/members_banner.png';

export default function Members() {
  return (
      <main>
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
        
      </main>
  );
}
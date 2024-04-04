import { CardsTratamiento } from "../../Components/Cards Tratamientos/CardsTratamientos";
import { Cards } from "../../Components/Cards planes/CardsPlanes";
import SectionOne from "../SectionOne/SectionOne";

function Home() {
  return (
    <div>
      <SectionOne />
      <CardsTratamiento/>
      <Cards />
    </div>
  );
}
export default Home;

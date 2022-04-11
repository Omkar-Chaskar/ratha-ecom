import "../styles.css";
import CatagoriesCard from "../Components/Catagories-card";
import HomeCard from "../Components/Home-card";
import Collection from "../Components/Collection";

export default function Home() {
  return (
    <div className="Home">
      <CatagoriesCard />
      <HomeCard />
      <Collection />
    </div>
  );
}

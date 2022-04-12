import "../styles.css";
import {CatagoriesCard, HomeCard ,Collection }from "../Components/index";

export default function Home() {
  return (
    <div className="Home">
      <CatagoriesCard />
      <HomeCard />
      <Collection />
    </div>
  );
}

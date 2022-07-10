import "../styles.css";
import {CatagoriesCard, HomeCard ,Collection }from "../Components/index";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="Home">
      <CatagoriesCard />
      <HomeCard />
      <Collection />
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}

import Banner from "./Banner";
import Business from "./Business";
import Course from "./Course";
import LandingDesign from "./LandingDesign";
import Marque from "./Marque";
import Plugin from "./Plugin";
import ReadyMade from "./ReadyMade";
import Template from "./Template";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marque />
      <Business />
      <Template />
      <ReadyMade />
      <Course />
      <LandingDesign />
      <Plugin />
    </div>
  );
};

export default Home;

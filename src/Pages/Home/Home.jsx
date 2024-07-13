import Banner from "./Banner";
import Business from "./Business";
import Course from "./Course";
import Discount from "./Discount";
import LandingDesign from "./LandingDesign";
import Marque from "./Marque";
import Plugin from "./Plugin";
import PurchaseCourse from "./PurchaseCourse";
import QuestionAns from "./QuestionAns";
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
      <PurchaseCourse />
      <Discount />
      <QuestionAns/>
    </div>
  );
};

export default Home;

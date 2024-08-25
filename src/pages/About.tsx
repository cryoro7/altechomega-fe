import CustomBreadcrumb from "../components/CustomBreadcrumb";
import Developers from "./about/Developers";
import OurSolutions from "./home/OurSolutions";
import ThreePoints from "./home/ThreePoints";

export default function About() {
  return (
    <>
      <CustomBreadcrumb img="/home/office1.jpg" title="About" />
      <Developers />
      <ThreePoints />
      <OurSolutions />
    </>
  );
}

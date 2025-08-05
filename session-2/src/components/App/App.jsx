import "./app.css";
import Header from "../appHeader/Header";
import MainHero from "../appMain/sections/Hero/MainHero";
import MainPrograms from "../appMain/sections/Programs/MainPrograms";
import MainTrainers from "../appMain/sections/Trainers/MainTrainers";
import MainTestimonials from "../appMain/sections/Testimonials/MainTestimonials";
import MainSidebar from "../appMain/sections/Sidebar-About/MainSidebar-Main";
import Footer from "../appFooter/Footer";
function App() {
  return (
    <div>
      <Header />
      <MainHero />
      <MainPrograms />
      <MainTrainers />
      <MainTestimonials />
      <MainSidebar/>
      <Footer />
    </div>
  );
}
export default App;

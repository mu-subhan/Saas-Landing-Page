import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Price from "./sections/Price";
import Testimonials from "./sections/Testimonials";

const App = () =>{
  return (
    <main className="overflow-hidden">
    <Header/>
    <Hero/>
    <Features/>
    <Price/>
    <Faq/>
    <Testimonials/>
    <Download/>
    </main>
  )
}
export default App;
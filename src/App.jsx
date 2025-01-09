import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Price from "./sections/Price";

const App = () =>{
  return (
    <main className="overflow-hidden">
    <Header/>
    <Hero/>
    <Features/>
    <Price/>
    <Faq/>
    </main>
  )
}
export default App;
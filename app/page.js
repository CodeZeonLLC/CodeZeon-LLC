import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Approach from "./components/Approach";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import HomeFaq from "./components/HomeFaq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <Approach />
        <WhoWeWorkWith />
        <HomeFaq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Approach from "./components/Approach";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import GlobalPartnership from "./components/GlobalPartnership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { buildPageMetadata, site } from "./data/site";

export const metadata = {
  ...buildPageMetadata({
    title: "Software, design, and business technology",
    description: site.description,
    path: "/",
  }),
  title: {
    absolute: `${site.name} — Software, design, and business technology`,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <Approach />
        <WhoWeWorkWith />
        <GlobalPartnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import React from "react";
/* Components */
import {
  Hero,
  Story,
  Services,
  FeaturedProducts,
  Contact,
  MapAddress,
  ScrollButton,
} from "../components";

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Story />
      <Services />
      <MapAddress />
      <Contact />
      <ScrollButton />
    </main>
  );
}

export default HomePage;

import React from "react";
/* Components */
import {
  Hero,
  Story,
  Services,
  FeaturedProducts,
  Contact,
  MapAddress,
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
    </main>
  );
}

export default HomePage;

import React from "react";
/* Components */
import {
  Hero,
  Story,
  Services,
  FeaturedProducts,
  Contact,
} from "../components";

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Story />
      <Services />
      <Contact />
    </main>
  );
}

export default HomePage;

import React from "react";
import Carousel from "react-bootstrap/Carousel";

/* Images for the carousel*/
import alambic from "../assets/images/alambic.webp";
import baies from "../assets/images/baies.webp";
import bottle from "../assets/images/bottle.webp";
import bottles from "../assets/images/bottles.webp";
import drink from "../assets/images/drink.webp";
import event from "../assets/images/event.webp";

function Sliders() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='d-block w-100' src={alambic} alt='alambic still pot' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={baies} alt='baies de genièvre' />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={bottles}
          alt="Bouteilles de gin C'est Nous"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={bottle}
          alt="Étiquetage et préparation à la main d'une bouteille de gin C'est Nous"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={drink}
          alt="Verre de gin tonic C'est Nous"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={event}
          alt="Julie et Dave, les fondateurs de C'est Nous"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;

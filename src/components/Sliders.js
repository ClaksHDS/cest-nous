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
        <img className='d-block w-100' src={bottles} alt='bouteille de gin' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={bottle} alt='bouteille de gin' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={drink} alt='bouteille de gin' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={event} alt='bouteille de gin' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/carrossel.css';

export default function Carrossel() {
  return (
    <Carousel 
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
    stopOnHover={true}
    showStatus={false}
    >
      <div>
        <img className="carousel-image" src="src/Imagens/8530597.jpg" />
      </div>
      <div>
        <img className="carousel-image" src="src/Imagens/6534710.jpg" />
      </div>
      <div>
        <img className="carousel-image" src="src/Imagens/7818109.jpg" />
      </div>
    </Carousel>
  );
}
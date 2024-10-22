import Carousel from 'react-bootstrap/Carousel';

function CarouselImage({ image }) {
  return (
    <Carousel className='productImage' fade={true} indicators={false}>
      <Carousel.Item interval={2000}>
        <img src={image[0]} alt={image[0]} className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={image[1]} alt={image[1]} className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={image[2]} alt={image[2]} className="carousel-image" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;

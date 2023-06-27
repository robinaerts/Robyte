import { Carousel } from "react-responsive-carousel";

export default function ProductCarousel(props) {
  return (
    <>
      //{" "}
      <Carousel showArrows={true}>
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
        //{" "}
      </Carousel>
    </>
  );
}

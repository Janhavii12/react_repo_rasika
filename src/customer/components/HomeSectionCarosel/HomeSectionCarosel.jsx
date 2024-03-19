import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";

import { data } from "../../../Data/data";

const HomeSectionCarosel = () => {


  const responsive = {
    0: { items: 1 },
    720: { items:  2},
    1024: { items: 4},
  };

  const items = data.map((item) => <HomeSectionCard product={item}/> );
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          autoPlay
          autoPlayInterval={700}
          infinite
        />
        
      
      </div>
    </div>
  );
};

export default HomeSectionCarosel;

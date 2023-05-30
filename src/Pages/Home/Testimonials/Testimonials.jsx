import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    
    const [reviews, setReviews] = useState([]);

useEffect(() => {
  fetch('reviews.json') 
    .then((res) => res.json())
    .then((data) => setReviews(data));
}, []);

    return (
        <div>
            <div>
                <SectionTitle heading="Testimonials" subHeading='What Our Client Say'></SectionTitle>
            </div>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
               reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="flex flex-col items-center mx-24 my-16">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
                
                  
                
            }
      </Swiper>
            
            </div>
            
        </div>
    );
};

export default Testimonials;
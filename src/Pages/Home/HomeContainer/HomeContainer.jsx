import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import MenuCard from "../MenuCard/MenuCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <MenuCard></MenuCard>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomeContainer;
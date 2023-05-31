import React from 'react';
import Cover from '../../Component/Cover/Cover';
import cover from '../../assets/menu/cover.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../Shared/useMenu/useMenu';
import MenuCategory from '../../Component/MenuCategory/MenuCategory';
import SectionTitle from '../../Component/SectionTitle';

const Menu = () => {
    const [menu]=useMenu();
    const soup =menu.filter(item => item.category=="soup")
    const salad =menu.filter(item => item.category== "salad")
    const offered =menu.filter(item => item.category=="offered")
    const pizza =menu.filter(item => item.category=="pizza")
    const dessert =menu.filter(item => item.category=="dessert")
    return (
        <div className='flex flex-col gap-10'>
         <Cover img={cover} title="OUR MENU" text="Welcome to our Menu Items"></Cover>
         <SectionTitle heading="Todays Offer" subHeading="Donot miss out"></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <Cover  img={saladimg} title="Salad" text="Welcome to our salad Items"></Cover>
        <MenuCategory items={salad}></MenuCategory>
        <Cover img={pizzaimg} title="OUR Pizza" text="Welcome to our Pizza Items"></Cover>
        <MenuCategory items={pizza}></MenuCategory>
        <Cover img={dessertimg} title="OUR Dessert" text="Welcome to our Dessert Items"></Cover>
        <MenuCategory items={dessert}></MenuCategory>
        </div>
    );
};

export default Menu;
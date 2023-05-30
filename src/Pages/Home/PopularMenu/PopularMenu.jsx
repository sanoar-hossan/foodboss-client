import { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem";
import useMenu from "../../../Shared/useMenu/useMenu";


const PopularMenu = () => {
const [menu]=useMenu();
const soupItems=menu.filter(item=>item.category == 'soup')



    return (
        <div>
           <div className="grid md:grid-cols-2 gap-6">
            {
                soupItems.map(item=>(<MenuItem
                key={item._id}
                item={item}
                ></MenuItem>))
            }
           </div>
        </div>
    );
};

export default PopularMenu;
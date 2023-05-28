import { useState } from "react";
import MenuItem from "../../../Shared/MenuItem";


const PopularMenu = () => {
const [menu,setMenu]=useState([])
fetch("menu.json")
.then(res =>res.json())
.then(data=>{
    const soupItems=data.filter(item=>item.category == 'soup')
    setMenu(soupItems)
})

    return (
        <div>
           <div className="grid md:grid-cols-2 gap-6">
            {
                menu.map(item=>(<MenuItem
                key={item._id}
                item={item}
                ></MenuItem>))
            }
           </div>
        </div>
    );
};

export default PopularMenu;
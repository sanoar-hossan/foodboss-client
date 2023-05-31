import React from 'react';
import MenuItem from '../../Shared/MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div className='py-6'>
            <div className="grid md:grid-cols-2 gap-6">
            {
                items.map(item=>(<MenuItem
                key={item._id}
                item={item}
                ></MenuItem>))
            }
            
           </div>
           <div className="btn btn-outline border-0 border-b-4 border-orange-600 justify-center flex  mt-4">Order Your Favourite Food</div>
        </div>
           
    );
};

export default MenuCategory;
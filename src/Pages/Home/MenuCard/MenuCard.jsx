import SectionTitle from "../../../Component/SectionTitle";
import useMenu from "../../../Shared/useMenu/useMenu";


const MenuCard = () => {
    const [menu]=useMenu();
    const salad=menu.filter(item=>item.category == "salad");
    
    return (
       <>
       <div><SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try Out"></SectionTitle></div>
        <div className="grid md:grid-cols-3 gap-5 py-6">
            {
                salad.map(itemsalad=> <div key="item._id" className="card w-96 py-6   bg-base-100 shadow-xl">
                <figure><img src={itemsalad.image} alt="Shoes" /></figure>
                <div className="card-body ">
                  <h2 className="card-title justify-center">{itemsalad.name}</h2>
                  <p className="justify-center py-6">{itemsalad.recipe}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary ">Add to Cart</button>
                  </div>
                </div>
              </div>)
            }
            
        </div>
        </>
    );
};

export default MenuCard;
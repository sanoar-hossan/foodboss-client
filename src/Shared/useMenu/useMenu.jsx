import { useEffect, useState } from "react";

const useMenu= ()=>{
    const [menu,setMenu]=useState([])
    
    useEffect(()=>{
        fetch("menu.json")
.then(res =>res.json())
.then(data=>{
    //const soupItems=data.filter(item=>item.category == 'soup')
    setMenu(data)
})
    },[])
return [menu]
}
export default useMenu;
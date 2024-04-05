import { useState } from "react";

const NavBar=()=>{
    const [navOptions, setNavOptions] = useState([
        {title:"Inicio",isActive:true,url:''},
		{title:"Nosotros",isActive:false,url:'about'},
		{title:"Servicios",isActive:false,url:'services'},
		{title:"Reseñas",isActive:false,url:'reviews'},
		{title:"Contacto",isActive:false,url:'contact'}
    ] )

    const setActive=(id:number)=>{
        const newItems= navOptions.map( item=>{ return {title:item.title,isActive:false,url:item.url}})
        newItems[id].isActive= true
        setNavOptions(newItems)
    }
  
    return(
        <section className="md:w-full flex flex-col overflow-x-auto md:flex-row justify-normal overflow-hidden md:max-w-[900px] md:h-[60px] rounded-xl mx-auto">
            {navOptions.map( (item,index,array)=>{
            return(
                <a 
                href={`/${item.url}`}
                key={index}
                className={`text-[24px] md:text-[36px] font-bold cursor-pointer px-4 hover:bg-[#75B4A8] hover:text-white relative
                            ${item.isActive?"bg-[#75B4A8] text-white":"bg-[#ffff] text-[#75B4A8]"}
                            ${index==0?'rounded-l-xl':''}
                            ${index==array.length-1?'rounded-r-xl':''}
                            `}
                >
                    {item.title}
                    <div className="w-full h-full absolute left-0 top-0 opacity-40"
                         onClick={()=>setActive(index)}>
                    </div>
                </a>)
            })}
        </section>
    )   
}

export default NavBar
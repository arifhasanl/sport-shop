import { useEffect, useState } from "react";
import Subcategory from "./Subcategory";


const Category = () => {
    const [toys,setToys]=useState([]);
    const[active,setActive]=useState('football');
    console.log(active);
    useEffect(()=>{
       active? fetch(`http://localhost:5000/toysCetegory?category=${active}`)
       .then(res=>res.json())
       .then(data=>setToys(data)): fetch(` http://localhost:5000/toys`)
       .then(res=>res.json())
       .then(data=>setToys(data))
    },[active])
    return (
        <div className="bg-[#001632]">
            <h3 className="text-center text-4xl text-orange-500  font-bold pt-20 mb-10">Shop by Category</h3>
            <div className="text-center mb-10">
                
                <button className={`font-semibold border-4 mr-3 text-[#34ffea] text-2xl py-2 px-3  border-orange-500 rounded-sm ${active=='football'?'  text-white':''}`} onClick={()=>setActive('football')}>Football</button>

                <button  className={`font-semibold border-4 mr-3 text-[#34ffea] text-2xl py-2 px-3  border-orange-500 rounded-sm ${active=='cricket'?'border-4 border-[#34ffea]   text-white':''}`}  onClick={()=>setActive('cricket')}>Cricket</button>
                <button  className={`font-semibold border-4  text-[#34ffea] text-2xl py-2 px-3  border-orange-500 rounded-sm ${active=='voliball'?'  text-white':''}`}  onClick={()=>setActive('voliball')}>Voliball</button>
            </div>
            <div className="grid px-8 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                toys.map(toy=><Subcategory key={toy._id}toy={toy}></Subcategory>)
            }
            </div>
        </div>
    );
};

export default Category;
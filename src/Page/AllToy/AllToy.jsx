import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";


const AllToy = () => {
    const [toys,setToys]=useState([]);
    useEffect(()=>{
       fetch(`http://localhost:5000/toysCetegory?category=all`)
       .then(res=>res.json())
       .then(data=>setToys(data))
    },[])
    return (
        <div className="bg-[#001632] px-4 mb-10">
            <h1 className="text-center text-[#34ffea] text-4xl pt-10 pb-10 font-bold">All Toys</h1>
            <div className="grid md:grid-cols-2 gap-6">
            {
                toys.map(toy=><SingleToy key={toy._id} toy={toy}></SingleToy>)
            }
            </div>
        </div>
    );
};

export default AllToy;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MytoyTable from "./MytoyTable";
import EditToy from "../EditToy/EditToy";


const Mytoy = () => {
    const {user,loading}=useContext(AuthContext);
    const [toys,setToys]=useState([])
   const [load,setLoad]=useState(false);
   const [toyId,setToyId]=useState('');
   const [isOpen,setIsOpen]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
      
},[loading,load])
    return (
        <div className="overflow-x-auto bg-[#002b9d] pt-10 pb-10">
            <EditToy setIsOpen={setIsOpen} isOpen={isOpen}toyId={toyId} setLoad={setLoad}></EditToy>
             <h1 className="text-4xl font-bold mb-6 text-center text-[#34ffea]">My Toys</h1>
            <table className="table w-full">
               
                <thead>
                    <tr className="text-white text-2xl font-semibold">
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               {
                toys?.map(toy=><MytoyTable setLoad={setLoad} isOpen={isOpen} setIsOpen={setIsOpen} setToyId={setToyId} key={toy._id}toys={toys} setToys={setToys} toy={toy}></MytoyTable>)
               }
            </table>
        </div>
    );
};

export default Mytoy;
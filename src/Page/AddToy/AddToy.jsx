import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { parse } from "postcss";
// import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import './Addtoy.css'

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleToys = (event) => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const retting = form.retting.value;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);

        const category = form.select.value;
        const description = form.description.value;
        const toyInfo = {
            toyName,
            img,
            email,
            sellerName,
            retting,
            quantity,
            price,
            category,
            description
        }
        fetch('http://localhost:5000/addtoy',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toyInfo)
        }).then(res=>res.json())
            .then(data=>{
                form.reset()
                console.log(data)
              if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon:  'login success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
            })




       
    }

    return (
        <div className='bg-[#001632] p-7 pb-24'>
            {/* <Helmet>
                    <title>cat shop toys | addtoys</title>
                </Helmet> */}
            <form onSubmit={handleToys}>
                <div className='lg:grid grid-cols-2 gap-7'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Toy Name:</label>
                        <input className='w-full h-10 rounded-md' type="text" name="name" placeholder='name:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Toy Image Link:</label>
                        <input className='w-full h-10 rounded-md' type="text" name="img" placeholder='img link:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Email:</label>
                        <input className='w-full h-10 rounded-md' defaultValue={user?.email} type="email" name="email" placeholder='email:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Seller Name:</label>
                        <input className='w-full h-10 rounded-md' defaultValue={user?.displayName} type="text" name="sellerName" placeholder='Seler Name:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Retting:</label>
                        <input className='w-full h-10 rounded-md' type="text" name="retting" placeholder='retting:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Quantity:</label>
                        <input className='w-full h-10 rounded-md' type="text" name="quantity" placeholder='Quantity:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Price:</label>
                        <input className='w-full h-10 rounded-md' type="text" name="price" placeholder='price:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Category:</label>
                        <select className='w-full h-10 rounded-md' name="select" >
                            <option value="football">Football</option>
                            <option value="cricket">Cricket</option>
                            <option value="voliball">Voliball</option>
                        </select>
                    </div>

                </div>
                <div className="mt-5">
                    <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Description:</label>
                    <textarea name="description" id="" placeholder="description" className="w-full h-20 rounded-lg"></textarea>
                </div>
                <div className="flex w-full justify-center pt-5">
               < div className='addtoy-btn  pt-10'>

                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit

                    </button>
                </div>
        </div>
            </form >
        </div >
    );
};

export default AddToy;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Category from '../Home/Category/Category';
import ToyModal from '../Home/Category/Modal/toyModal';
import EditModal from './EditModal';

const EditToy = ({toyId,isOpen,setIsOpen,setLoad}) => {
    const navigate=useNavigate();
    const [toy,setToy]=useState('');
   useEffect(()=>{
        fetch(`http://localhost:5000/toydetail/${toyId}`)
        .then(res=>res.json())
        .then(data=>setToy(data))
   },[toyId])
    const {  toyName, img,  retting,sellerName,email, quantity, price, category, description } = toy;

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const retting = form.retting.value;
        const quantity = form.quantity.value;
        const price=parseFloat(form.price.value);
        const select = form.select.value;
        const description = form.description.value;
        const UpdateToy = {
            toyName,
            img,
            email,
            sellerName, 
            quantity,
            price,
            select,
            description,
            retting,
        }
        console.log(UpdateToy);
        fetch(`http://localhost:5000/updateToy/${toyId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'toy updated succesfully',
                    })
                    navigate('/mytoy')
                    setIsOpen(false)
                    setLoad(true)
                }
            })
            .catch(error => {
                console.log(error);
            })
            
    }

    return (
      <>
        <EditModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className=' px-4 pb-20'>
        <div className=" text-end">
                    <button
                     className='bg-red-800 rounded-md px-5 pb-2 text-white'
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      Close
                    </button>
                  </div>
            {/* <Helmet>
                    <title>cat shop toys | addtoys</title>
                </Helmet> */}
            <form onSubmit={handleUpdate}>
                <div className='lg:grid grid-cols-2 gap-7'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Toy Name:</label>
                        <input className='w-full h-10 rounded-md ' defaultValue={toyName} type="text" name="name" placeholder='name:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Toy Image Link:</label>
                        <input className='w-full h-10 rounded-md' defaultValue={img} type="text" name="img" placeholder='img link:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Email:</label>
                        <input className='w-full h-10 rounded-md' defaultValue={email} type="email" name="email" placeholder='email:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Seller Name:</label>
                        <input className='w-full h-10 rounded-md' defaultValue={sellerName} type="text" name="sellerName" placeholder='Seler Name:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Retting:</label>
                        <input className='w-full h-10 rounded-md'defaultValue={retting} type="text" name="retting" placeholder='retting:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Quantity:</label>
                        <input className='w-full h-10 rounded-md' type="text" defaultValue={quantity} name="quantity" placeholder='Quantity:' id="" required />
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-7 mt-4'>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Price:</label>
                        <input className='w-full h-10 rounded-md' type="text"defaultValue={price} name="price" placeholder='price:' id="" required />
                    </div>
                    <div>
                        <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Category:</label>
                        <select className='w-full h-10 rounded-md'defaultValue={category} name="select" >
                            <option value="football">Football</option>
                            <option value="cricket">Cricket</option>
                            <option value="voliball">Voliball</option>
                        </select>
                    </div>

                </div>
                <div className="mt-5">
                    <label className='block text-white font-medium text-2xl mb-1' htmlFor="">Description:</label>
                    <textarea name="description" id="" defaultValue={description} placeholder="description" className="w-full h-20 rounded-lg"></textarea>
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
        </EditModal>
      </> 
    );
};

export default EditToy;
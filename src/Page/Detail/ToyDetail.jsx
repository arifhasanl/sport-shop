
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

import ToyModal from '../Home/Category/Modal/toyModal';
import { useEffect, useState } from 'react';

const ToyDetails = ({toyId,isOpen,setIsOpen}) => {
    const [data,setData]=useState('');
    function closeModal() {
        setIsOpen(false)
      }
   useEffect(()=>{
        fetch(`http://localhost:5000/toydetail/${toyId}`)
        .then(res=>res.json())
        .then(data=>setData(data))
   },[toyId])
    const { img, price, retting, toyName, sellerName,description } = data;

    return (
       <ToyModal isOpen={isOpen} setIsOpen={setIsOpen}>
         <div className=''>
            <div className=" ">
                <div className=''>
                    <img className='rounded-lg  ' src={img} alt="" />
                </div>
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-2xl text-[#002b9d] font-semibold">{toyName}</h2>
                        <div className='flex'>
                            <Rating
                                placeholderRating={retting}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}

                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar ></FaStar>}
                            >
                            </Rating>
                            <p className='ml-3'>{retting}</p>
                        </div>
                    </div>
                    <h3 className='text-1xl font-semibold'>SellerName:{sellerName}</h3>
                    <p><sapn className="text-1xl font-semibold mb-3">Price:</sapn> ${price}</p>
                    <p><sapn className="text-1xl font-semibold">Description:</sapn>{description}</p>
                    
                </div>
                <div className="mt-4 text-end">
                    <button
                     className='bg-red-800 rounded-md px-5 py-2 text-white'
                      onClick={()=>closeModal()}
                    >
                      Close
                    </button>
                  </div>
            </div>
        </div>
       </ToyModal>
    );
};

export default ToyDetails;
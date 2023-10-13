import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ToyDetails from "../Detail/ToyDetail";
import './singleToy.css'

const SingleToy = ({toy}) => {
    const { toyName, img, retting, price, _id } = toy;
    const retingNumber = parseFloat(retting);
    const [isOpen, setIsOpen] = useState(false);
    const [toyId,setToyId]=useState('');
    
    const handleModal=(id)=>{
        setIsOpen(!isOpen);
        setToyId(id)
    }
    return (
        <div className="card w-full shadow-lg shadow-[#34ffea] border-4 border-[#34ffea] glass drop-shadow-2xl">
            <img  src={img} className='rounded-md w-full h-80' alt="" />
            <ToyDetails isOpen={isOpen}setIsOpen={setIsOpen} toyId={toyId}></ToyDetails>
            <div className="card-body">
                <div className='flex w-full justify-between'>
                    <h2 className="card-title text-white text-2xl font-semibold">{toyName}</h2>
                    <div className='flex'>
                        <Rating
                            placeholderRating={retingNumber}
                            readonly
                            emptySymbol={<FaRegStar className='text-white'></FaRegStar>}

                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar className=''></FaStar>}
                        >
                        </Rating>
                        <p className='text-end text-white'>{toy?.retting}</p>
                    </div>
                </div>

                <p className='text-white'><span className='text-2xl  font-semibold'>Price:</span>${price}</p>
                <div className="detail-btn card-actions justify-end">
                    
                
                 <button onClick={()=>handleModal(_id)}  className=''>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         Details

                    </button>

                 
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
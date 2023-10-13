import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MytoyTable = ({toy,setToys,toys,setLoad,setToyId,isOpen,setIsOpen}) => {
    

    const hanadleUpdate=(_id)=>{
        setIsOpen(!isOpen)
        setToyId(_id)
    }
    const handleDeleteItem=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            
            if (result.isConfirmed) {
                setLoad(true)
                    fetch(`http://localhost:5000/toyDelete/${id}`,{
                        method:'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remaining=toys.filter(toy=>toy._id!==id);
                              setToys(remaining)
                        }
                        
                    })
                 
                
            }
          })
    }
    return (
              <tbody>
                <tr className='text-white'>
                    <th>{toy?.sellerName}</th>
                    <th>{toy?.toyName}</th>
                    <th>{toy.select}</th>
                    <th>{toy.price}</th>
                    <th>{toy.quantity}</th>
                    <th> <button  onClick={()=>hanadleUpdate(toy?._id)} className='px-5 p-2 text-white  bg-green-600 rounded-md'>Eid</button></th>
                    <th><button onClick={()=>handleDeleteItem(toy?._id)} className='px-5 p-2 text-white  bg-red-600 rounded-md'>Delete</button></th>
                </tr>

            </tbody>
    );
};

export default MytoyTable;
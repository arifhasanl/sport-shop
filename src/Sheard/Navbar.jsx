

// import logo from '../assets/image/logo.jpg'
// import { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const {user,logOut}=useContext(AuthContext);
//     const handleLogOut=()=>{
//         logOut()
//         .then(result=>{
//             console.log(result);
//         })
//         .catch(error=>{
//             console.log(error);
//         })
//     }
//     return (
//         <div>
//             <div className="navbar bg-[#001632]">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white text-2xl">
//                             <li className='text-white'><Link>Home</Link></li>
//                             <li className='text-white'>
//                                 <Link>Blogs</Link>
//                             </li>
//                             <li className='text-white'><Link>All Toys</Link></li>
//                            {
//                             user&&<>
//                             <li className='text-white'><Link to={'/alltoys'}>My Toys</Link></li>
//                             <li className='text-white'><Link to={'/addtoys'}>Add A Toy</Link></li>
//                             </>
//                            }
//                         </ul>
//                     </div>
//                     <img className='w-16 h-16 rounded-full' src={logo} alt="" />
//                     <h4 className='text-2xl  text-[#34ffea] md:text-4xl  font-bold'>Cat-Toys</h4>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1  text-white">
//                         <li className='text-white'><Link to={'/'}>Home</Link></li>
//                         <li className='text-white'>
//                             <Link to={'/blog'}>Blogs</Link>
//                         </li>
//                         <li className='text-white'><Link to={'/alltoys'}>All Toys</Link></li>
//                         {
//                             user&&<>
//                             <li className='text-white'><Link to={'/mytoys'}>My Toys</Link></li>
//                             <li className='text-white'><Link to={'/addtoys'}>Add A Toy</Link></li>
//                             </>
//                            }
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                 {
//                         user&&<>
//                         <div className="tooltip tooltip-bottom mr-3" data-tip={user?.displayName}>
//                         <button ><img  className="w-[60px] h-[60px] rounded-full" src={user?.photoURL} alt="" /></button>
//                         </div>
//                         </>
//                     }
//                     {
//                         user?<Link onClick={handleLogOut}   className="px-4 py-1 border rounded-md  text-[#34ffea] border-[#fff] mr-3" >LogOut</Link>:<Link  className="px-4 py-1 border border-4 text-[#34ffea] rounded-md border-[#fff] " to={'/login'}>Login</Link>
//                     }


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaWindowClose } from 'react-icons/fa';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
const Header = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className='hidden md:block'>

                <div className='container  mx-auto flex box justify-between overflow-hidden h-16 items-center bg-[#001632]'>
                    <div className="header-logo ml-4 pt-2">
                        <h3 className='text-4xl  font-bold text-[#34ffea] logo'>SPORT TOY</h3>
                    </div>
                    <div className="header-menu font-bold text-white">
                        <nav>
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to={'/blog'}>Blog</ActiveLink>
                            <ActiveLink to={'/alltoy'}>All toys</ActiveLink>
                            {
                            user&&<>
                           <ActiveLink to={'/mytoy'}>My toys</ActiveLink>
                           <ActiveLink to={'/addtoy'}>Add toy</ActiveLink>
                            </>
                           }
                        </nav>
                    </div>
                    <div className='login-bar flex items-center gap-1 mr-4'>
                        <div className=' pt-1'>
                            {
                                user && <>
                                    <div className="tooltip tooltip-bottom mr-3" data-tip={user?.displayName}>
                                        <button ><img className="w-[50px] h-[50px] rounded-full" src={user?.photoURL} alt="" /></button>
                                    </div>
                                </>
                            }

                        </div>

                        <div>

                            {
                                user ? <Link onClick={handleLogOut} className="px-4 py-1 border rounded-md  text-[#34ffea] border-orange-500 border-4 mr-3" >LogOut</Link> : <Link className="px-4 py-1 border border-4 text-[#34ffea] rounded-md border-orange-500 border-2 " to={'/login'}>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=' block md:hidden bg-slate-600'>
                <div className='container   mx-auto flex box justify-between overflow-hidden items-center '>
                    <div className="header-logo  pt-2">
                        <h3 className='text-2xl   font-bold text-[#34ffea] logo'>SPORT TOY</h3>
                    </div>
                    <div className='mr-4'>
                        <div className='text-white header-bar-icon' onClick={() => setOpen(!open)}>
                            {
                                open ? <  FaWindowClose></FaWindowClose> : <FaBars></FaBars>
                            }
                        </div>

                    </div>
                </div>
                <div className={open ? 'block mt-10' : 'hidden'}>
                    <div className='flex justify-between'>
                        <div className="header-menu font-bold text-white  pb-4">
                            <nav className='responsive flex gap-2 flex-col'>
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to={'/blog'}>Blog</ActiveLink>
                            <ActiveLink to={'/alltoy'}>All toys</ActiveLink>
                            {
                            user&&<>
                           <ActiveLink to={'/mytoy'}>My toys</ActiveLink>
                           <ActiveLink to={'/addtoy'}>Add toy</ActiveLink>
                            </>
                           }
                            </nav>
                        </div>
                        <div className='login-bar  flex  gap-1 mr-4'>
                            <div>
                                {
                                    user && <>
                                        <div className="tooltip tooltip-bottom mr-3" data-tip={user?.displayName}>
                                            <button ><img className="w-[60px] h-[60px] rounded-full" src={user?.photoURL} alt="" /></button>
                                        </div>
                                    </>
                                }

                            </div>

                            <div>

                                {
                                    user ? <Link onClick={handleLogOut} className="px-4 py-1 border rounded-md  text-[#34ffea] border-orange-500 border-4 mr-3" >LogOut</Link> : <Link className="px-4 py-1 border border-4 text-[#34ffea] rounded-md border-orange-500 " to={'/login'}>Login</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
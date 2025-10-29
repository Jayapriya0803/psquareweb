import { useState } from "react";
import { NavLink } from "react-router";
import { FaTimes,FaBars } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen,setmenuOpen]= useState(false);
    const base='transition hover:text-green-400';
    const active='text-blue-400 font-semibold';
    return (
        <nav className='bg-green-200 border-b border-green-700 shadow-md sticcky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
                <NavLink to='/'className='flex items-center gap-2 text-lg fond-bold text-green-600'>
                    <img src="/favicon.ico" width={50} height={50} />
                    <span>P Square</span>
                </NavLink>
                {/*Desktop Menu */}
            <div className='hidden md:flex items-center gap-6'>
                <div className='space-x-4 text-5m text-gray-300'>
                    <NavLink className={({isActive})=>isActive? active:base} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/products'>Products</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/feedback'>Feedback</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/contactus'>Contact Us</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/login'>Login</NavLink>
                </div>
            </div>
               <div className='md:hidden flex items-center gap-4'>
                <button 
                 onClick={()=>setmenuOpen(!menuOpen)}
                 className='text-green-400 text-xl' title='Menu' cursor-pointer>
                    {menuOpen ? <FaTimes />: <FaBars />}
                </button>

            </div>
            </div>
            {/* Mobile Menu */}
               {
                menuOpen && (
                <div className='md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center'>
                    <NavLink className={({isActive})=>isActive? active:base} to='/' onClick={()=>setmenuOpen(false)}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/products' onClick={()=>setmenuOpen(false)}>Products</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/feedback' onClick={()=>setmenuOpen(false)}>Feedback</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/contactus' onClick={()=>setmenuOpen(false)}>Contact Us</NavLink>
                    <NavLink className={({isActive})=>isActive? active:base} to='/login' onClick={()=>setmenuOpen(false)}>Login</NavLink>
                </div>
                )
            }
        </nav>
      );
}
export default Navbar;
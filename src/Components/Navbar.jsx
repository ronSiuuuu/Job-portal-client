import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Utilities/AuthProvider/AuthContext';

const Navbar = () => {
  
  const {user,logOut}=useContext(AuthContext);
  const [isHover,setisHover]= useState(false);

  const links = <ul className='space-x-4'>
  <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/myApplication'}>My Application </NavLink>
  <NavLink to={'/addJobs'}>Add Jobs</NavLink>
  <NavLink to={'/myPosted'}>My posted Job</NavLink>
  
  </ul>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Job Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
    user? <div className='relative' onMouseEnter={()=> setisHover(true)}
     onMouseLeave={()=>setisHover(false)}
    > 
  <img className='w-12 h-12 rounded-full' src={user?.photoUrl} alt="" />

   {
     isHover&& <div className='bg-gray-300 p-3 rounded-md -ml-22 absolute '>
        <p>{user?.displayName}</p>
      
        <button className='hover:bg-red-500 hover:text-white hover:scale-3d btn rounded-full' onClick={()=> logOut()}>signOut</button>
      </div>
   }
     </div>
  
      :<div>
        <Link to={'/login'}><button className='btn bg-red-500 rounded-full text-white'>login</button></Link>
        <Link  to={'/register'}><button className='btn bg-red-500 rounded-full text-white'>register</button></Link>
      </div>
    }
 

  
  </div>
</div>
    );
};

export default Navbar;
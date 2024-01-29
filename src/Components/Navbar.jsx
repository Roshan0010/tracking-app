'use cleint'
import React,{useContext, useEffect, useState} from 'react'
import { TrackingContext } from '../../Conetxt/Tracking'
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const [state,setState]=useState(false);
  const {currentUser,connectWallet,checkWalletConnected}=useContext(TrackingContext);

  
  const navigation=[
    {title:"Home",path:"#"},
    {title:"Services",path:"#"},
    {title:"Contact Us",path:"#"},
    {title:"Erc20",path:"#"},
  ];

 
  

  return (
    <nav className={`bg-gray-800  md:text-sm lg:text-xl  ${
      state
      ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:mx-2 md:mt-0 "
      : ""  
    }`}
    >
      <div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 flex
      
      md:flex md:px-8   '>
        <div className='flex items-center justify-between rounded-lg
        py-5 md:block '>
        <a href="javascript:void(0)">
          <img src={'https://res.cloudinary.com/ddi6pgru6/image/upload/v1706533368/Syncro_1_jeskuq.jpg'}
            width={120}
            height={30}
            alt='FLoat UI logo'
          />
        </a>
 
        </div>
        <div className='flex w-full  justify-between'>
          {
          navigation.map((item,idx)=>(
            
            <div key={idx} className=''>
            <a href={item.path} >
              {item.title}
              </a>
            </div>
          ))
        }
        </div>
        <div className='w-[20rem] text-center py-2 rounded-lg  bg-[#265470] justify-center item-center'>
          {
            currentUser ? (
              <>
              { currentUser.slice(0,25)}..
              </>
               
            ):
            (
              <button
              onClick={()=>connectWallet()}>

              <FaUserAlt className=''/>

              </button>

            )
          }
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar;
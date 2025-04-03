import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLightMode } from "react-icons/md";
import { UserContext } from '../Context/UserContext';
import { MdDarkMode } from "react-icons/md"

const Navbar = () => {
  const {setLightMode, lightMode} = useContext(UserContext)
  const setHandleClick = ()=>{
    setLightMode(!lightMode);
    console.log("Mode changed")
  }
  return (
    <div className={`flex justify-between items-center ${lightMode ? 'bg-slate-400 text-black' : 'bg-gray-500 text-white'} p-4`}>
        <div className='text-2xl font-bold'>My App</div>
        <nav className='flex space-x-8 items-center '>
          
            <Link to="/" className=''>Home</Link>
            <Link to="/card" className=''>Card</Link>
            
        </nav>
        <button onClick={setHandleClick} className='w-10 h-10 bg-slate-100 p-1 rounded-full flex items-center justify-center'>
              {lightMode?<MdDarkMode size={25} className="text-gray-900"/>:<MdLightMode className='text-gray-800' size={25}/>}
            </button>
    </div>
  )
}

export default Navbar
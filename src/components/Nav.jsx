import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='bg-black text-white px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] w-screen'>

    
    <nav className='flex justify-between items-center '>
        <div>
            <h1> ER </h1>
        </div>
        <div>
        <ul className='flex gap-12  my-9'>
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/proyectos"> Proyectos</Link>
            </li>
            <li>
                <Link to="/contacto"> Contacto</Link>
            </li>
        </ul>
        </div>
    </nav>
    
    </div>
  )
}

export default Nav
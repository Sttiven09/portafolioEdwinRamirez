import React from 'react';
import { Link } from 'react-router-dom'
import { GoMarkGithub, GoMail, GoPerson } from "react-icons/go";

function Footer() {
    return (
        <div className='bg-black text-white  px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] w-screen'>
        <footer className='flex justify-between items-center '>
        <div>
        <h1> ER </h1>
        </div>

        <div className=' bg-black'> 
            <ul className='flex gap-12  my-9'>
            <li>
                <Link to=""> <GoPerson /></Link>
            </li>
            <li>
                <Link to="https://github.com/Sttiven09"> <GoMarkGithub /></Link>
            </li>
            <li>
                <Link to="/"> <GoMail /></Link>
            </li>
            
                
            </ul>
        </div>
        <div>
        ©Edwin Ramírez 2023
        </div>

        
        </footer>

    </div>
    )
}

export default Footer
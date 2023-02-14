import React from 'react'
import Modal from '../components/modal'

function Proyectos() {
    return (
    <>
    <div className='section bg-black '>
    <section className='text-white w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex justify-around'>
    
    <div className="mx-16 my-14  bg-contain rounded-full">
    <h1 className='text-4xl mx-2 my-6 text-center font-bold font-Press'>Titulo del proyecto</h1>
    <img src="https://www.latercera.com/resizer/cp51O-H5P5z6o7ZD5Tp2RpJo7ew=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/O5T6ZF7OAZEHXLNMFCHMWDAQX4.jpg" alt="" />
    <div className='mx-20 my-6'><Modal/></div>
    </div>
    <div className='bg-contain w-full h-full mx-22 my-40 text-white'> 
    
    
    </div>
    </section>
    </div>
        </>      
        
    )
}

export default Proyectos
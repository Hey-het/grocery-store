import Image from 'next/image';
import React from 'react';

export default function CategoryPage(){
    return (
        <>
        <div className='container  p-10 mx-auto'>
            <h1 className='text-3xl font-semibold py-5'>Explore Categories</h1>
            <div className='grid grid-cols-7 items-center gap-10'>
                <div className=''>
                    <Image src='/assests/category1.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category2.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category3.png' className='hover:scale-110 hover:border-green-400 hover:border-2  border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category4.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category5.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent  hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category6.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
                <div className=''>
                    <Image src='/assests/category7.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div>
               
            </div>
        </div>
            
        </>
    );
}

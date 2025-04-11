"use client"
import Image from 'next/image';
import GlobleApi from '@/utils/GlobleApi';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CategoryPage() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);

    async function getCategoryList() {
        try {
            const response = await GlobleApi.getCategory();
            console.log("api response" + response.data);
            setCategoryList(response.data || []);
        } catch (error) {
            console.log("error in getCategoryList" + error);
        }
    }
    return (

        <>
            <div className='container  p-10 mx-auto'>
                <h1 className='text-3xl font-semibold py-5'>Explore Categories</h1>
                <div className='grid grid-cols-7 items-start justify-center gap-10 pt-5'>
                    {categoryList?.data?.length > 0 ? (
                        categoryList.data.map((category, index) => (
                            <Link href={"/product-category/"+category?.title} 
                            key={index} 
                            className='bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center cursor-default hover:bg-gray-200'
                            >
                          
                                <Image
                                    src={category?.img?.url || '/assets/basket1.png'}
                                    className='hover:scale-110 hover:transition-transform cursor-pointer'
                                    alt="category"
                                    width={100}
                                    height={100}
                                />

                                <p className='p-2'>{category?.title || "No Title"}</p>
                    
                            </Link>
                        ))
                    ) : (
                        <div className='flex flex-row items-center justify-end'>
                            <div className='absolute animate-spin  rounded-full h-28 w-28 border-t-4 border-b-4 border-purple-500'></div>
                            <img
                                src='https://www.svgrepo.com/svg/509001/avatar-thinking-9.svg'
                                className='rounded-full h-24 w-24'
                                alt='Category'
                            />
                            <p className='pt-5'>Vegetable</p>
                        </div>
                    )}

                    {/* <div className=''>
                    <Image src='/assests/category7.png' className='hover:scale-110 hover:border-green-400 hover:border-2 border-transparent hover:transition-transform cursor-pointer' alt='' width={1000} height={50} />
                </div> */}

                </div>
            </div>

        </>
    );
}

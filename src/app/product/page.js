import { Button } from "@/Components/ui/button";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import ProductDetail from '@/Components/ProductDetail'



export default function Product({ product }) {
    return (
        <>
            {/* <div className="container py-10 px-2"> */}
            {/* <div className="grid grid-cols-4 items-center gap-20"> */}
            <div className='Product_col outline p-4 outline-slate-200'>
                <div className="bg-gray-100 mb-4 p-4">
                    <Image src={product?.img?.url || '/assets/basket1.png'}
                        className='bg-gray-100 mb-4 p-5 cursor-pointer hover:scale-110 hover:transition-transform'
                        alt='Product Image'
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex items-center mt-2.5 mb-5 justify-center gap-8">
                    <div className="flex">
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            {product?.rating || "No Title"}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center ml-5">
                    <h3>{product?.title || "No Title"}</h3>
                    <div className="flex gap-4 justify-end">
                        {product?.disprice && (
                            <h1 className="text-end font-semibold text-lg">
                                £{product?.disprice}
                            </h1>
                        )}

                        <h1 className={`text-end font-semibold text-lg ${product?.disprice && "line-through text-gray-400"}`}>
                            £{product?.price}</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center py-2 px-0 ">
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button className="bg-green-600 mt-5 text-white">
                            Add To Cart<ShoppingBagIcon size={28} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>Yes I am sure</DialogDescription>
                            </DialogHeader>
                            <ProductDetail product={product}/>
                        </DialogContent>
                    </Dialog>

                    {/* <Button className="bg-green-600 mt-5 text-white">Add To Cart<ShoppingBagIcon size={28} /></Button> */}
                    <a className="flex justify-end mt-5">
                        <HeartIcon width={25} className="hover:text-red-600 cursor-pointer" />
                    </a>

                   
                </div>
            </div>
        </>
    );
}
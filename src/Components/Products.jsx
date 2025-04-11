
import Product from "@/app/product/page";
// import { Button } from "@/Components/ui/button";
// import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";


export default async function ProductPage({getProduct}) {

    return (
        <>
            <div className="container py-10 px-2 mx-auto">
                <div className="grid grid-cols-4 items-center gap-20">
                    {getProduct?.map((product, index )=>{
                        return <Product key={index} product={product} />
                     })}
                               
                </div>
            </div>
        </>
    );
}
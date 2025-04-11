"use client"
import Image from "next/image";
import { Star } from "lucide-react";
import { HeartIcon, ShoppingBagIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/Components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import GlobleApi from "@/utils/GlobleApi";
export default function ProductDetail({ product }) {
    const jwt = sessionStorage.getItem("jwt")
    const router = useRouter();
    const [quantity , setQuantity] = useState(1);
    const [productTotalPrice, setProductTotalPrice] = useState(
      product?.disprice 
      ? product?.disprice
      : product?.price
    );
    function AddToCart() {
      if (!jwt) {
        router.push("/sign-in")
        return;
      }
    
      console.log("product:", product);
      console.log("quantity:", quantity);
    }
    


  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Image + Button Section */}
      <div className="flex flex-col items-center justify-between">
        <Image
          src={product?.img?.url || '/assets/basket1.png'}
          alt="Product"
          width={250}
          height={250}
          className="rounded-xl object-cover"
        />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 items-center">
          <button 
        //  type="submit"
         onClick={()=>AddToCart()}
          
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded flex items-center mx-auto">
            <ShoppingBagIcon size={20} /> Add To Cart
          </button>
          <a className="flex justify-end gap-2 mt-2">
            <HeartIcon className="hover:bg-red-600 cursor-pointer w-6 h-6" />
            <ViewfinderCircleIcon className="hover:bg-gray-600 cursor-pointer w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="space-y-5">
        <p className="font-semibold">{product?.title || "No Title"}</p>

        <div className="flex gap-4 ">
          {product?.disprice && (
            <p className="text-end font-semibold text-lg">
              £{product?.disprice}
            </p>
          )}
          /
          <p className={`text-end font-semibold text-lg ${product?.disprice && "line-through text-gray-400"}`}>
            £{product?.price}</p>
        </div>

        {/* Color Selection */}
        <div>
          <h3 className="font-medium mb-2">Select Color:</h3>
          <div className="flex gap-2">
            <div className="bg-black w-6 h-6 rounded-full border cursor-pointer" />
            <div className="bg-red-500 w-6 h-6 rounded-full border cursor-pointer" />
            <div className="bg-blue-500 w-6 h-6 rounded-full border cursor-pointer" />
            <div className="bg-yellow-400 w-6 h-6 rounded-full border cursor-pointer" />
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-medium mb-2">Select Size:</h3>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">S</button>
            <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">M</button>
            <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">L</button>
            <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">XL</button>
            <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">XXL</button>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <Button className="bg-gray-200 px-3 py-1 rounded text-gray-700">−</Button>
          <span className="font-medium">1</span>
          <Button className="bg-gray-200 px-3 py-1 rounded text-gray-700">+</Button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Rating:</span>
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Description */}
        <div>
          <h3 className="font-medium">Product Description:</h3>
          {/* <p className="text-gray-600 text-sm">
            This is a sample product description.
          </p> */}
        </div>
      </div>
    </div>
  );
}

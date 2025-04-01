
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import Carousel from '@/components/ui/carousel';
import Badge from '@/components/ui/badge';

import { Button } from '@/Components/ui/button';
import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="container mx-auto ">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className="Banner-1 p-10">
                                <div className="grid grid-cols-2 gap-4 bg-gradient-to-r from-[#8FF385] via-[#CCDE85] to-[#F1DA95] h-px[500] pb-6 pt-5">
                                    <div className="row-span-1 p-12">
                                        <Badge variant="outline" className="text-sm border-gray-950">Sale up to 20% Off{""}</Badge>
                                        <h1 className="text-6xl font-bold py-6">Get Fresh Organic Food Everyday </h1>
                                        <p>Making Grocery Food Errands Worth Your While</p>
                                        <Button className="bg-green-600 mt-5">Buy Button</Button>
                                    </div>
                                    <div className="row-span-1">
                                        <Image
                                            src='/assests/banner1.png' width={1000} height={600}
                                            alt="banner"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="Banner-2 p-10">
                                <div className="grid grid-cols-2  bg-gradient-to-r from-[#F1DA95] via-[#CCDE85] to-[#8FF385] h-px[700] pb-6 pt-5">
                                    <div className="row-span-1 p-12">
                                        <Badge variant="outline" className="text-sm border-gray-950">Sale up to 20% Off{""}</Badge>
                                        <h1 className="text-6xl font-bold py-6">Get Fresh Organic Food Everyday </h1>
                                        <p>Making Grocery Food Errands Worth Your While</p>
                                        <Button className="bg-green-600 mt-5">Buy Button</Button>
                                    </div>
                                    <div className="row-span-1">
                                        <Image
                                            src='/assests/banner2.png' width={1000} height={600}
                                            alt="banner"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="Banner-3 p-10">
                                <div className="grid grid-cols-2 gap-4 bg-gradient-to-r from-[#8FF385] via-[#CCDE85] to-[#F1DA95] h-px[700] pb-6 pt-5 ">
                                    <div className="row-span-1 p-12">
                                        <Badge variant="outline" className="text-sm border-gray-950">Sale up to 20% Off{""}</Badge>
                                        <h1 className="text-6xl font-bold py-6">Get Fresh Organic Food Everyday </h1>
                                        <p>Making Grocery Food Errands Worth Your While</p>
                                        <Button className="bg-green-600 mt-5">Buy Button</Button>
                                    </div>
                                    <div className="row-span-1">
                                        <Image
                                            src='/assests/banner3.png' width={1000} height={600}
                                            alt="banner"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </>
    );
}
import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"
import { Badge } from "@/Components/ui/badge";

import { Button } from '@/Components/ui/button';
import Image from 'next/image';


export default function Banner() {
    return (
        <div className="container mx-auto">
            <Carousel>
                <CarouselContent>
                    {["banner1.png", "banner2.png", "banner3.png"].map((banner, index) => (
                        <CarouselItem key={index}>
                            <div className={`Banner-${index + 1} p-10`}>
                                <div className={`grid grid-cols-2 gap-4 bg-gradient-to-r ${index % 2 === 0 ? "from-[#8FF385] via-[#CCDE85] to-[#F1DA95]" : "from-[#F1DA95] via-[#CCDE85] to-[#8FF385]"} h-px[700] pb-6 pt-5`}>
                                    <div className="row-span-1 p-12">
                                        <Badge variant="outline" className="text-sm border-gray-950">Sale up to 20% Off</Badge>
                                        <h1 className="text-6xl font-bold py-6">Get Fresh Organic Food Everyday</h1>
                                        <p>Making Grocery Food Errands Worth Your While</p>
                                        <Button className="bg-green-600 mt-5">Buy Button</Button>
                                    </div>
                                    <div className="row-span-1">
                                        <Image
                                            src={`/assests/${banner}`} width={1000} height={600}
                                            alt={`banner-${index + 1}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

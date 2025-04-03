import { ReceiptRefundIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { HeadphonesIcon, HelpingHandIcon, Receipt, ReceiptEuro, Rocket } from "lucide-react";

export default function PaymentMethod() {
    return (
        <>
            <div className="container p-10 mx-auto">
                <div className="grid grid-cols-4 gap-10">
                    <div className="grid grid-cols-3 bg-green-100 py-5 rounded-xl">
                        <div className="flex justify-center">
                        <Rocket size={50} className="bg-green-500 text-white p-2 rounded-lg"/>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-semibold">Free Shipping</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 bg-green-100 py-5 rounded-xl">
                        <div className="flex justify-center">
                        <ReceiptRefundIcon width={50} className="bg-green-500 text-white p-2 rounded-lg"/>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-semibold">Easy Return</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 bg-green-100 py-5 rounded-xl">
                        <div className="flex justify-center">
                        <ShieldCheckIcon width={50} className="bg-green-500 text-white p-2 rounded-lg"/>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-semibold">Secure Payment</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 bg-green-100 py-5 rounded-xl">
                        <div className="flex justify-center">
                        <HeadphonesIcon size={50} className="bg-green-500 text-white p-2 rounded-lg"/>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-semibold">24 Hours Support</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                   
                </div>

            </div>
        </>
    );
}
'use client'
import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserCircleIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from "@/Components/ui/button"
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const navigation = [
  // { name: 'Product', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function HeaderPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const isBrowser = typeof window !== "undefined";
  // const isLogin = isBrowser && window.sessionStorage.getItem("jwt") ? true : false;
  // const user = isBrowser ? JSON.stringify(sessionStorage.getItem("user")) : null;
  // const jwt = isBrowser ? JSON.stringify(sessionStorage.getItem("jwt")) : null;

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    const storedJwt = sessionStorage.getItem("jwt");
    const storedUser = sessionStorage.getItem("user");

    if (storedJwt) {
      setIsLogin(true);
      setJwt(storedJwt);
      setUser(storedUser);
    }
  }, []);


  const router = useRouter();

  function onSignOut() {
    // sessionStorage.clear();
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("user");
    window.location.reload();
    router.push("/sign-in")
  }

  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50 p-2 ml-3">
        <nav aria-label="Global" className="container  flex items-center justify-between py-6 mx-auto">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <Image src="/assests/logo.png" width={150} height={50}
                alt='logo' className='ml-12 ' />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-2 mr-15">
            <a className=''>
              <MagnifyingGlassIcon width={22} className=' cursor-pointer hover:scale-110 hover:transition-transform' />
            </a>

            <a className=''>
              <ShoppingBagIcon width={22} className=' cursor-pointer hover:scale-110 hover:transition-transform' />
            </a>
            <a className=' '>
              <Badge className="bg-green-500 cursor-pointer flex items-center rounded-full hover:scale-110 hover:transition-transform">0</Badge>
            </a>


              {/* {!isLogin ? (
                  <Link href="/sign-in">
                    <Button className="bg-green-600 hover:bg-green-500 shadow-lg">
                      Log In
                    </Button>
                  </Link>
                ) : 
                (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <UserCircleIcon
                        width={22}
                        className=" cursor-pointer hover:scale-110 hover:transition-transform" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>My Orders</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onSignOut()}>LogOut</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              } */}

              {!isLogin ? (
                <Link href="/sign-in">
                  <Button className="bg-green-600 hover:bg-green-500 shadow-lg">Log In</Button>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <UserCircleIcon
                      width={22}
                      className="cursor-pointer hover:scale-110 hover:transition-transform"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>My Orders</DropdownMenuItem>
                    <DropdownMenuItem onClick={onSignOut}>LogOut</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

          </div>

        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6 flex gap-2">
                  <a className="bg-gray-200 p-1 rounded-full">
                    <MagnifyingGlassIcon
                      width={22}
                      className="cursor-pointer hover:scale-110 hover:transition-transform" />
                  </a>

                  <a className="bg-gray-200 p-2 rounded-full">
                    <ShoppingBagIcon
                      width={22}
                      className="cursor-pointer hover:scale-110 hover:transition-transform" />
                  </a>
                  <a className='bg-gray-200 p-2 rounded-full'>
                    <Badge className="cursor-pointer flex items-center rounded-full hover:scale-110 hover:transition-transform">5</Badge>
                  </a>
                  <div className="bg-gray-200 p-1 rounded-full">

                    <UserCircleIcon
                      width={22}
                      className="cursor-pointer hover:scale-110 hover:transition-transform" />


                  </div>
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.122rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.122rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

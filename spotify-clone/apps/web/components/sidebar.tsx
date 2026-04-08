"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

import React, { useState } from "react"
import { LuPlus } from "react-icons/lu"
import { MdOutlineLibraryMusic } from "react-icons/md"
export default function Sidebar() {
    const [sidebaropen,setsidebaropen] = useState(false);
  return (
    <div>
      <aside className={`fixed top-15 left-2 h-[90vh] w-75 overflow-y-auto rounded-lg bg-background p-2 
      ${sidebaropen?"translate-0" : "-translate-x-full"} lg:translate-0`}>
    <div className="flex justify-between text-primary-text items-center p-2 mb-4 ">
        <h2 className="font-bold <Button>
     </Button>bold">Your library</h2>
        <Link href="upload-song">
        <LuPlus/>
        </Link>

    </div>
    <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
        <Image src="/images/hello.jpeg" alt="cover-image" height={300} width={300} className="w-10 h-10 rounded-md"></Image>\
        <div>
            <p className="text-primary-text font-semibold">Midnight Echoes</p>
            <p className="text-secondary-text text-sm">By Neon Skyline</p>
        </div>
    </div>
    <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg-translate-x-full hover:bg-hover">
        <Image src="/images/hello.jpeg" alt="cover-image" height={300} width={300} className="w-10 h-10 rounded-md"></Image>\
        <div>
            <p className="text-primary-text font-semibold">Midnight Echoes</p>
            <p className="text-secondary-text text-sm">By Neon Skyline</p>
        </div>
    </div><div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
        <Image src="/images/hello.jpeg" alt="cover-image" height={300} width={300} className="w-10 h-10 rounded-md"></Image>\
        <div>
            <p className="text-primary-text font-semibold">Midnight Echoes</p>
            <p className="text-secondary-text text-sm">By Neon Skyline</p>
        </div>
    </div><div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
        <Image src="/images/hello.jpeg" alt="cover-image" height={300} width={300} className="w-10 h-10 rounded-md"></Image>\
        <div>
            <p className="text-primary-text font-semibold">Midnight Echoes</p>
            <p className="text-secondary-text text-sm">By Neon Skyline</p>
        </div>
    </div><div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
        <Image src="/images/hello.jpeg" alt="cover-image" height={300} width={300} className="w-10 h-10 rounded-md"></Image>\
        <div>
            <p className="text-primary-text font-semibold">Midnight Echoes</p>
            <p className="text-secondary-text text-sm">By Neon Skyline</p>
        </div>
    </div>
     </aside>
   <button 
   onClick={() =>setsidebaropen(!sidebaropen)}
   className="fixed bottom-5 left-5 grid place-items-center h-12 w-12 bg-background lg:hidden rounded-full z-50 cursor-pointer">
    <MdOutlineLibraryMusic/>
    </button>
    </div>
   

  )
}

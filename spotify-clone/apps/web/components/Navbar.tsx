import React from 'react'
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import Link from "next/link"
import { GoSearch } from "react-icons/go"
import { MdHomeFilled } from "react-icons/md"
export default function Navbar() {
  return (
    <nav className="h-16 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
    <div className="flex gap-6 items-center">
      <Image src="/images/logo.png" alt="logo" height={500} width={500} className="h-9 w-9"/>
    <Link href="/" className="bg-background text-white text-2xl grid place-items-center rounded-full w-11 h-11">
      <MdHomeFilled/>
    </Link>
    <div className="bg-background flex items-center h-11 w-96 px-3 gap-3 text-primary-text rounded-full">
      <GoSearch className="text-primary-text shrink-0"/>
      <input type="text" placeholder="What song do you want to play? " className="h-full w-full outline-none placeholder:text-primary-text "/>
    </div>
    </div>
      <div className="flex items-center gap-8">
        <div className="lg:flex hidden gap-2 text-primary-text border-r-2 font-bold border-primary-text pr-6">
          <a href="#" className="hover: text-secondary-text">
            Premium
          </a>
          <a href="#" className="hover:text-primary-text">
            Support
          </a>
          <a href="#" className="hover:text-primary-text">
            Download
          </a>
        </div>
        <div>
        <Link href="/login" className="h-11 bg-white text-gray-950 place-items-center  rounded-full hover:bg-secondary-text font-bold grid px-8">Logout </Link>
        </div>
      </div>
  </nav>
  )
}

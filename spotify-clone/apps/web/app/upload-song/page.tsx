
import Image from "next/image"
import Link from "next/link"
export default function Signup() {
  return (
    <div className="flex justify-center h-screen items-center w-full bg-hover">
        <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
            <Image src="/images/logo.png" alt="logo" height={500} width={500} className="h-11 w-11"/>
            <h2 className="font-bold text-center text-2xl text-white mb-8 my-2">Upload to Spotify</h2>
            <form >
                <input type="text" placeholder="Title" className="outline-none border-2
               border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
                <input type="text" placeholder="Artist" className="outline-none border-2
               border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
                <label htmlFor="audio" className="block py-2 text-secondary-text">Audio</label>
                <input id ="audio"type="file" placeholder="Artist" className="outline-none border-2
              border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
                <label htmlFor="cover" className="block py-2 text-secondary-text">Cover Image</label>
                <input id="cover"type="file" placeholder="Artist" className="outline-none border-2
               border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
           <button className="bg-primary py-3 rounded-full font-bold w-full cursor-pointer">Add Song</button> 
           
            </form>
        </div>
    </div>
  )
}

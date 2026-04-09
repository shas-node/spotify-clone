
import Image from "next/image"
import Link from "next/link"
export default function Login() {
  return (
    <div className="flex justify-center h-screen items-center w-full bg-hover">
        <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
            <Image src="/images/logo.png" alt="logo" height={500} width={500} className="h-11 w-11"/>
            <h2 className="font-bold text-center text-2xl text-white mb-8 my-2">Log in to Spotify</h2>
            <form >
              <input type="text" placeholder="Your email" className="outline-none border-2
               border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
           <input type="text" placeholder="Your password" className="outline-none border-2
               border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6"/>
           <button className="bg-primary py-3 rounded-full font-bold w-full cursor-pointer">Continue</button> 
           <div className="text-secondary-text text-center my-6">
            <span>Dont have an account?</span>
            <Link href="signup" className="ml-2 text-white underline hover:text-primary">
            Sign up now
            </Link>
            </div>
            </form>
        </div>
    </div>
  )
}

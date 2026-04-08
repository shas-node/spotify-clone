import Navbar from "@/components/Navbar"
import Sidebar from "@/components/sidebar"
import CardSongs from "@/components/songs"
export default function Page() {
  return (
   <div className="min-h-screen">
    <Navbar/>
    <main>
    <Sidebar/>
    <div>
      <CardSongs/>
    </div>
    </main>
</div>
  )
}

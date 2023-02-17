import DesktopNav from "@/components/DesktopNav"
import MobileNav from "@/components/MobileNav"
import Kanban from "@/components/Kanban"
import KanbanMobile from "@/components/KanbanMobile"

export default function Home() {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
      <Kanban />
      <KanbanMobile />
    </div>
  )
}

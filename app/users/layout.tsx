import Sidebar from "@/components/sidebar/Sidebar";
import DesktopSidebar from "@/components/sidebar/DesktopSidebar";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Sidebar>
            <div className="h-full">
                <main className="lg:pl-20 h-full">
                    {children}
                </main>
            </div>
        </Sidebar>
    )
}
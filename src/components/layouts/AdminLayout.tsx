import { 
    SidebarInset, 
    SidebarProvider, 
    SidebarTrigger
} from "@/components/ui/sidebar";
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from "./components/admin-sidebar";


const AdminLayout = () => {
    
    const defaultOpen = localStorage.getItem('sidebar_state') === 'true'
    console.log('defaultOpen:', defaultOpen)

    return (
        <>
            <SidebarProvider
                defaultOpen={true}
                style={
                    {
                      "--sidebar-width": "calc(var(--spacing) * 62)",
                    } as React.CSSProperties
                }
            >
                <AdminSidebar />
                <SidebarInset>
                    <SidebarTrigger />
                    <div className="p-2 pt-5">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>

        </>
        
    )
}

export default AdminLayout;
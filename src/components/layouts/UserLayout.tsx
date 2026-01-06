import {  
    SidebarInset,
    SidebarProvider, 
    SidebarTrigger
} from "@/components/ui/sidebar";
import { Outlet } from 'react-router-dom';
import { AppSidebar } from "./components/admin-sidebar";


const UserLayout = () => {
    
    const defaultOpen = localStorage.getItem('sidebar_state') === 'true'
    console.log('defaultOpen:', defaultOpen)

    return (
        <SidebarProvider
            defaultOpen={true}
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 62)",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <SidebarTrigger />
                <div className="p-3">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default UserLayout;
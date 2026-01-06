import { 
    SidebarInset, 
    SidebarProvider, 
    SidebarTrigger
} from "@/components/ui/sidebar";
import { Outlet } from 'react-router-dom';
import { AppSidebar } from "./components/admin-sidebar";


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
                <AppSidebar />
                <SidebarInset>
                    <SidebarTrigger />
                    {/* <Outlet /> */}
                </SidebarInset>
            </SidebarProvider>

        </>
        
    )
}

export default AdminLayout;
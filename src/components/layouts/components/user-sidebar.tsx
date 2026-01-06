import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {  
    LayoutDashboard, 
    ShoppingBasket,
    Calendar,
    Inbox, 
    Search,
    Plus, 
} from "lucide-react"
import { Link } from "react-router-dom"
   

const items = [
    {
        id: "dashbord",
        title: "Tableau de bord",
        link: "#",
        icon: LayoutDashboard,
    },
    {
        id: "products",
        title: "Produits",
        link: "#",
        icon: ShoppingBasket,
    },
    {
        id: "calendar",
        title: "Calendrier",
        link: "#",
        icon: Calendar,
    },
    {
        id: "message",
        title: "Messages",
        link: "#",
        icon: Inbox,
    },
    {
        id: "search",
        title: "Rechercher",
        link: "#",
        icon: Search,
    },
]


export function UserSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.slice(0, 3).map((item) => (
                            <SidebarMenuItem key={item.id}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.link}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Autres</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.slice(3, 6).map((item) => (
                            <SidebarMenuItem key={item.id}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.link}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel asChild>Projects</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Project">
                        <Plus /> 
                        <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent />
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
  }
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {  
    LayoutDashboard, 
    ChartBarStacked,
    ShoppingBasket,
    Users,
    ChartNoAxesCombined,
    Split,
    Speech,
    Calendar,
    Inbox, 
    Search, 
    Settings 
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
        id: "category",
        title: "Categories",
        link: "#",
        icon: ChartBarStacked,
    },
    {
        id: "products",
        title: "Produits",
        link: "#",
        icon: ShoppingBasket,
    },
    {
        id: "users",
        title: "Utilisateurs",
        link: "users",
        icon: Users,
    },
    {
        id: "analystics",
        title: "Analyses",
        link: "#",
        icon: ChartNoAxesCombined,
    },
    {
        id: "didi",
        title: "Didi",
        link: "#",
        icon: Split,
    },
    {
        id: "dinos",
        title: "Dinos",
        link: "#",
        icon: Speech,
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
    {
        id: "settings",
        title: "Settings",
        link: "#",
        icon: Settings,
    },
]


export function AdminSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.slice(0, 7).map((item) => (
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
                        {items.slice(8, 11).map((item) => (
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
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
  }
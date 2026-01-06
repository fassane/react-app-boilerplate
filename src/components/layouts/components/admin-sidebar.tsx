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
        url: "#",
        icon: LayoutDashboard,
    },
    {
        id: "category",
        title: "Categories",
        url: "#",
        icon: ChartBarStacked,
    },
    {
        id: "products",
        title: "Produits",
        url: "#",
        icon: ShoppingBasket,
    },
    {
        id: "users",
        title: "Utilisateurs",
        url: "#",
        icon: Users,
    },
    {
        id: "analystics",
        title: "Analyses",
        url: "#",
        icon: ChartNoAxesCombined,
    },
    {
        id: "didi",
        title: "Didi",
        url: "#",
        icon: Split,
    },
    {
        id: "dinos",
        title: "Dinos",
        url: "#",
        icon: Speech,
    },
    {
        id: "calendar",
        title: "Calendrier",
        url: "#",
        icon: Calendar,
    },
    {
        id: "message",
        title: "Messages",
        url: "#",
        icon: Inbox,
    },
    {
        id: "search",
        title: "Rechercher",
        url: "#",
        icon: Search,
    },
    {
        id: "settings",
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]


export function AppSidebar() {
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
                                    <Link to={item.url}>
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
                                    <Link to={item.url}>
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
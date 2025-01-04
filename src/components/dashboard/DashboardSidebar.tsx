import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Overview",
    icon: BarChart3,
    path: "/",
  },
  {
    title: "Products",
    icon: Package,
    path: "/products",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/customers",
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 px-4">
        <h2 className="text-lg font-semibold">Qkao Express</h2>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
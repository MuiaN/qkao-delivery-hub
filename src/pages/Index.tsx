import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BarChart3, Package, ShoppingCart, Users } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: BarChart3,
    description: "10% increase from last month",
  },
  {
    title: "Products",
    value: "256",
    icon: Package,
    description: "12 new products added",
  },
  {
    title: "Orders",
    value: "1,234",
    icon: ShoppingCart,
    description: "156 orders pending",
  },
  {
    title: "Customers",
    value: "3,456",
    icon: Users,
    description: "89 new customers this week",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your Qkao Express dashboard
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
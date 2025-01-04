import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductsTable } from "@/components/products/ProductsTable";
import { useState } from "react";
import { ProductDialog } from "@/components/products/ProductDialog";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Omit<Product, "id">) => {
    const newProduct = {
      ...product,
      id: crypto.randomUUID(),
    };
    setProducts((prev) => [...prev, newProduct]);
    setIsDialogOpen(false);
  };

  const handleEditProduct = (product: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p))
    );
    setEditingProduct(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">
              Manage your product inventory and categories
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
              <p className="text-xs text-muted-foreground">
                {products.length === 1 ? "1 product" : `${products.length} products`} in inventory
              </p>
            </CardContent>
          </Card>

          <ProductsTable 
            products={products} 
            onEdit={(product) => setEditingProduct(product)} 
          />
        </div>

        <ProductDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen}
          onSubmit={handleAddProduct}
        />

        {editingProduct && (
          <ProductDialog 
            open={true}
            onOpenChange={() => setEditingProduct(null)}
            onSubmit={handleEditProduct}
            defaultValues={editingProduct}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Products;
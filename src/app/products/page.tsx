
"use client";

import { useState, useMemo } from "react";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import type { Product } from "@/types";

export default function ProductsPage() {
  const allProducts = useMemo(() => getProducts(), []);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [allProducts]);

  useMemo(() => {
    let products = allProducts;
    if (searchTerm) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category !== "all") {
      products = products.filter((p) => p.category === category);
    }
    setFilteredProducts(products);
  }, [searchTerm, category, allProducts]);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Our Product Catalog
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
          Browse our extensive collection of high-quality surgical instruments and medical equipment.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by product name..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-semibold">No products found</h2>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

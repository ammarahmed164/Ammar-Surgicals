
"use client";

import { useState, useEffect } from "react";
import { productRecommendations, ProductRecommendationsOutput } from "@/ai/flows/product-recommendations";
import { getProductById } from "@/lib/products";
import ProductCard from "./ProductCard";
import type { Product } from "@/types";
import { Skeleton } from "./ui/skeleton";

interface ProductRecommendationsProps {
  viewingHistory: string[];
  currentProductId: string;
}

export default function ProductRecommendations({ viewingHistory, currentProductId }: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [reason, setReason] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      if (viewingHistory.length === 0) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result: ProductRecommendationsOutput = await productRecommendations({ viewingHistory });
        
        const recommendedProducts = result.recommendedProducts
          .map(id => getProductById(id))
          .filter((p): p is Product => p !== undefined && p.id !== currentProductId); // Filter out undefined and current product
          
        setRecommendations(recommendedProducts.slice(0,3)); // Limit to 3 recommendations
        setReason(result.reason);

      } catch (e) {
        console.error("Failed to get product recommendations:", e);
        setError("Could not load recommendations at this time.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, [viewingHistory, currentProductId]);
  
  if (!loading && recommendations.length === 0) {
    return null; // Don't render anything if no recommendations
  }

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl font-headline">
        You Might Also Like
      </h2>
      
      {loading ? (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
             <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[256px] w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="mt-8 text-center text-destructive">{error}</p>
      ) : (
        <>
          <p className="mt-4 mb-8 text-center text-muted-foreground md:text-lg">
            {reason}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

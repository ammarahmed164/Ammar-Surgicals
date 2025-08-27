
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById, getProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useViewingHistory } from "@/hooks/use-viewing-history";
import ProductRecommendations from "@/components/ProductRecommendations";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  const { addProductToHistory, getViewingHistory } = useViewingHistory();

  useEffect(() => {
    if (product) {
      addProductToHistory(product.id);
    }
  }, [product, addProductToHistory]);

  if (!product) {
    notFound();
  }
  
  const viewingHistory = getViewingHistory();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative">
                    <Image
                      src={img}
                      alt={`${product.name} - image ${index + 1}`}
                      data-ai-hint={product.aiHint}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="outline">{product.category}</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mt-2 font-headline">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mt-4">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-muted-foreground text-lg">{product.description}</p>
          <Button size="lg" className="w-full md:w-auto">Add to Cart</Button>
          <Separator />
          
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="font-medium text-foreground">{key}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24">
         <ProductRecommendations viewingHistory={viewingHistory} currentProductId={product.id} />
      </div>
    </div>
  );
}

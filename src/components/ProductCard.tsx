
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint={product.aiHint}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <CardTitle className="text-lg font-bold leading-tight line-clamp-2">
            {product.name}
          </CardTitle>
          <p className="mt-2 text-2xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <Button className="w-full">View Details</Button>
        </CardFooter>
      </Link>
    </Card>
  );
}

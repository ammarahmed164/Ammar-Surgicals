
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Shopping Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                         <CardTitle>Your Items ({totalItems})</CardTitle>
                         <Button variant="outline" size="sm" onClick={clearCart}>Clear Cart</Button>
                    </div>
                </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] hidden md:table-cell">Image</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="hidden md:table-cell">
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />
                        </TableCell>
                        <TableCell>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                        </TableCell>
                        <TableCell className="text-center">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 mx-auto"
                          />
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
             <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg">Proceed to Checkout</Button>
                </CardFooter>
             </Card>
          </div>
        </div>
      )}
    </div>
  );
}

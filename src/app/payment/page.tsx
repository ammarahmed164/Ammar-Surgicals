
"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PaymentPage() {
  const { cartItems, totalPrice, totalItems } = useCart();

  if (totalItems === 0) {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some products to your cart before proceeding to payment.</p>
            <Button asChild>
                <Link href="/products">Continue Shopping</Link>
            </Button>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Order Summary */}
        <div className="order-2 md:order-1">
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Payment Form Placeholder */}
        <div className="order-1 md:order-2">
            <Card>
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>Enter your payment information below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="h-14 w-full rounded-md border border-input bg-background/50 flex items-center justify-center">
                            <p className="text-sm text-muted-foreground">Payment Provider UI (e.g., Stripe) goes here</p>
                        </div>
                         <p className="text-xs text-center text-muted-foreground">
                            This is a placeholder. No real payment will be processed.
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* This button simulates a successful payment and redirects to the final checkout page */}
                    <Button asChild className="w-full" size="lg">
                        <Link href="/checkout">Pay ${totalPrice.toFixed(2)}</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>

      </div>
    </div>
  );
}

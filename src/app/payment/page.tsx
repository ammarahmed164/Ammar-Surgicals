
"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/user-context";
import { AlertTriangle, CreditCard } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


// SVG Icons for Payment Methods
const VisaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none" role="img">
    <path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#3A4276"/>
    <path d="M35 1C19.5 1 18.5 23 3 23" stroke="white" strokeWidth="2"/>
    <path d="M28 20L31 5" stroke="white" strokeWidth="2"/>
  </svg>
);

const MastercardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none" role="img">
    <circle cx="15" cy="12" r="7" fill="#EB001B"/>
    <circle cx="23" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8"/>
  </svg>
);


export default function PaymentPage() {
  const { cartItems, totalPrice, totalItems } = useCart();
  const { user } = useUser();

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
                    <CardDescription>Enter your card information to complete the purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!user ? (
                        <div className="text-center py-8">
                             <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
                            <h3 className="text-xl font-semibold">Please Log In</h3>
                            <p className="text-muted-foreground mt-2 mb-6">You need to be logged in to proceed with the payment.</p>
                            <Button asChild>
                                <Link href="/login">Login to Continue</Link>
                            </Button>
                        </div>
                    ) : (
                       <div className="space-y-6">
                           <div className="flex items-center gap-4">
                                <CreditCard className="h-6 w-6 text-muted-foreground" />
                                <span className="font-semibold">Pay with Credit/Debit Card</span>
                           </div>
                           <div className="flex items-center gap-2">
                            <VisaIcon />
                            <MastercardIcon />
                           </div>

                           <Separator />

                            <div className="space-y-4 animate-fade-in">
                                <div className="space-y-2">
                                    <Label htmlFor="cardName">Name on Card</Label>
                                    <Input id="cardName" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cardNumber">Card Number</Label>
                                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry Date</Label>
                                        <Input id="expiry" placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input id="cvc" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                       </div>
                    )}
                </CardContent>
                <CardFooter>
                    {user ? (
                        <Button asChild className="w-full" size="lg">
                            <Link href="/checkout">Pay ${totalPrice.toFixed(2)}</Link>
                        </Button>
                    ) : (
                        <Button className="w-full" size="lg" disabled>
                           Pay ${totalPrice.toFixed(2)}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}

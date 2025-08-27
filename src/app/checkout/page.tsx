
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutPage() {
  const { clearCart, cartItems } = useCart();
  const router = useRouter();
  
  // Make a copy of cartItems before it's cleared to display on this page.
  const finalCartItems = [...cartItems];

  useEffect(() => {
    // Only clear the cart if there were items in it when the page loaded.
    if (finalCartItems.length > 0) {
      clearCart();
    } else {
      // If the cart was already empty, redirect to the homepage.
      // This prevents direct access to the thank you page.
      router.push('/');
    }
    
    // The empty dependency array `[]` ensures this effect runs only once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the user somehow navigated here with an empty cart,
  // render nothing while we redirect them.
  if (finalCartItems.length === 0) {
      return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="max-w-lg w-full text-center p-8">
        <CardHeader>
            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          <CardTitle className="text-3xl font-bold mt-6">Thank You For Your Order!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">
            Your purchase was successful. A confirmation has been sent to your email.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

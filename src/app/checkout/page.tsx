
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutPage() {
  const { clearCart, totalItems, cartItems } = useCart();
  const router = useRouter();
  
  // A copy of cartItems is made before it's cleared.
  const finalCartItems = [...cartItems];

  useEffect(() => {
    // Redirect to home if the cart was already empty when the page loads.
    // This prevents direct access to the page without items.
    if (finalCartItems.length === 0) {
      router.push('/');
      return;
    }
    
    // Clear the cart once the checkout page is displayed.
    clearCart();

    // The empty dependency array `[]` ensures this effect runs only once when the component mounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (finalCartItems.length === 0) {
      // Render nothing or a loading state while redirecting
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

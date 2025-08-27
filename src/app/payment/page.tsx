
"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/user-context";
import { AlertTriangle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";


// SVG Icons for Payment Methods
const VisaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 384 219" fill="none">
    <path fill="#1A1F71" d="M379.3 1.5A8.3 8.3 0 0 0 371 .8L292.5 9.2a21.4 21.4 0 0 0-21 16.8l-37.4 171.2a15.8 15.8 0 0 0 15.5 19.3h73.4a15.8 15.8 0 0 0 15.5-12.8l9-41.2h44.1l5.4 24.8a8.3 8.3 0 0 0 8.2 6.5h33.8a8.3 8.3 0 0 0 8.3-9.9L379.3 1.5zM309 133.5l14.3-65.7L337.5 133h-28.4z"></path>
    <path fill="#1A1F71" d="M165.5 197.1h39.6L242 19.3h-39.6L165.5 197zm-67-177.8h-41L27.2 144.1c-1.3 6.2-6.5 10.8-12.8 10.8H.8l37 1.8.8.4 46.5-177.8h41L85.1 197h39.8L165.4 19.3z"></path>
    <path fill="#F7A600" d="M12.6 154.9c-6.3 0-11.5-4.6-12.8-10.8L0 144.5l-.3-.4L0 144l.3-.4c1.6-7.1 7.8-12.4 15.2-12.4h11.2L12.6 154.9z"></path>
  </svg>
);

const UnionPayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 1000 1000" fill="none">
    <g clipPath="url(#clip0_105_2)">
    <path fill="#004791" d="M1000 484.5H0v30.9h1000z"/>
    <path fill="#ee2f36" d="M1000 515.5H0v120.3h1000z"/>
    <path fill="#00793d" d="M1000 635.8H0V762h1000z"/>
    <path fill="url(#paint0_linear_105_2)" d="M500 0c-44.4 0-80.4 36-80.4 80.4v183.3h160.7V80.4C580.4 36 544.4 0 500 0z"/>
    <path fill="url(#paint1_linear_105_2)" d="M500 762c44.4 0 80.4-36 80.4-80.4V263.7H419.6V681.6c0 44.4 36 80.4 80.4 80.4z"/>
    <path fill="url(#paint2_linear_105_2)" d="M919.6 500c0-44.4-36-80.4-80.4-80.4H263.7v160.7h575.5c44.4 0 80.4-36 80.4-80.3z"/>
    <path fill="url(#paint3_linear_105_2)" d="M80.4 500c0 44.4 36 80.4 80.4 80.4h658.8V419.6H160.8c-44.4 0-80.4 36-80.4 80.4z"/>
    <path fill="#fff" d="M500 263.7h-80.4c-88.7 0-160.7 72-160.7 160.7v-80.4c0-44.4-36-80.4-80.4-80.4h-38v316.8h38c44.4 0 80.4-36 80.4-80.4v-80.4c0-88.7 72-160.7 160.7-160.7h80.4v160.7h-80.4c-44.4 0-80.4 36-80.4 80.4v80.4c0 88.7 72 160.7 160.7 160.7h80.4c88.7 0 160.7-72 160.7-160.7v80.4c0 44.4 36 80.4 80.4 80.4h38V163.2h-38c-44.4 0-80.4 36-80.4 80.4v80.4c0 88.7-72 160.7-160.7 160.7h-80.4v-160.7h80.4c44.4 0 80.4-36 80.4-80.4v-80.4C660.7 335.7 588.7 263.7 500 263.7z"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_105_2" x1="419.6" x2="580.4" y1="131.8" y2="131.8" gradientUnits="userSpaceOnUse">
    <stop stopColor="#E01E26"/>
    <stop offset=".24" stopColor="#E01E26"/>
    <stop offset=".53" stopColor="#E01E26"/>
    <stop offset=".78" stopColor="#E01E26"/>
    <stop offset="1" stopColor="#E01E26"/>
    </linearGradient>
    <linearGradient id="paint1_linear_105_2" x1="419.6" x2="580.4" y1="512.8" y2="512.8" gradientUnits="userSpaceOnUse">
    <stop stopColor="#0079C1"/>
    <stop offset=".24" stopColor="#0079C1"/>
    <stop offset=".53" stopColor="#0079C1"/>
    <stop offset=".78" stopColor="#0079C1"/>
    <stop offset="1" stopColor="#0079C1"/>
    </linearGradient>
    <linearGradient id="paint2_linear_linear_105_2" x1="866.5" x2="866.5" y1="419.6" y2="580.4" gradientUnits="userSpaceOnUse">
    <stop stopColor="#E01E26"/>
    <stop offset="1" stopColor="#0079C1"/>
    </linearGradient>
    <linearGradient id="paint3_linear_105_2" x1="133.5" x2="133.5" y1="419.6" y2="580.4" gradientUnits="userSpaceOnUse">
    <stop stopColor="#E01E26"/>
    <stop offset="1" stopColor="#0079C1"/>
    </linearGradient>
    <clipPath id="clip0_105_2">
    <path fill="#fff" d="M0 0h1000v1000H0z"/>
    </clipPath>
    </defs>
    </svg>
);

const JazzCashIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" fill="none">
    <circle cx="64" cy="64" r="64" fill="#ED1C24"/>
    <path d="M57.5 40.5L34 58.5L50.5 73.5L32 89.5L68 64.5L57.5 40.5Z" fill="white"/>
    <path d="M72 88.5L95.5 70.5L79 55.5L97.5 39.5L61.5 64.5L72 88.5Z" fill="white"/>
  </svg>
);

const EasyPaisaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" fill="none">
    <circle cx="64" cy="64" r="64" fill="#00B24D"/>
    <path d="M40 40H88V52H52V64H84V76H52V88H88V100H40V40Z" fill="white"/>
  </svg>
);

export default function PaymentPage() {
  const { cartItems, totalPrice, totalItems } = useCart();
  const { user } = useUser();
  const [paymentMethod, setPaymentMethod] = useState("visa");

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

  const showCardForm = paymentMethod === 'visa' || paymentMethod === 'unionpay';
  const showWalletForm = paymentMethod === 'jazzcash' || paymentMethod === 'easypaisa';

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
                    <CardDescription>Choose your preferred payment method.</CardDescription>
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
                           <RadioGroup 
                                defaultValue="visa" 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                value={paymentMethod}
                                onValueChange={setPaymentMethod}
                            >
                                <Label htmlFor="visa" className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[[data-state=checked]]:border-primary">
                                    <RadioGroupItem value="visa" id="visa" />
                                    <VisaIcon />
                                    <span className="font-semibold">Visa</span>
                                </Label>
                                <Label htmlFor="unionpay" className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[[data-state=checked]]:border-primary">
                                    <RadioGroupItem value="unionpay" id="unionpay" />
                                    <UnionPayIcon />
                                    <span className="font-semibold">UnionPay</span>
                                </Label>
                                <Label htmlFor="jazzcash" className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[[data-state=checked]]:border-primary">
                                    <RadioGroupItem value="jazzcash" id="jazzcash" />
                                    <JazzCashIcon />
                                    <span className="font-semibold">JazzCash</span>
                                </Label>
                                <Label htmlFor="easypaisa" className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[[data-state=checked]]:border-primary">
                                    <RadioGroupItem value="easypaisa" id="easypaisa" />
                                    <EasyPaisaIcon />
                                    <span className="font-semibold">EasyPaisa</span>
                                </Label>
                           </RadioGroup>

                           <Separator />

                           {showCardForm && (
                            <div className="space-y-4 animate-fade-in">
                                <p className="font-medium">Enter Card Details</p>
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
                           )}

                           {showWalletForm && (
                             <div className="space-y-4 animate-fade-in">
                                <p className="font-medium">Enter Wallet Details</p>
                                <div className="space-y-2">
                                    <Label htmlFor="walletNumber">Wallet Number</Label>
                                    <Input id="walletNumber" placeholder="0300 1234567" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="walletPin">4-Digit PIN</Label>
                                    <Input id="walletPin" type="password" placeholder="****" />
                                </div>
                            </div>
                           )}
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

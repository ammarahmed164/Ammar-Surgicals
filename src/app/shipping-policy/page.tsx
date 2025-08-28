
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingPolicyPage() {
  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Shipping Policy</CardTitle>
            <CardDescription>
              Thank you for choosing AmmarSurgicals. We are committed to delivering your order accurately, in good condition, and always on time.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Order Processing</h2>
              <p>
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. Please note that potential delays may occur due to a high volume of orders or postal service problems that are outside of our control.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Shipping Rates & Delivery Estimates</h2>
              <p>
                Shipping charges for your order will be calculated and displayed at checkout. We offer several shipping options to meet your needs.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
                <li><strong>Overnight Shipping:</strong> 1-2 business days (subject to availability)</li>
              </ul>
              <p>
                Delivery delays can occasionally occur. We are not responsible for delays caused by the carrier.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">International Shipping</h2>
              <p>
                We offer international shipping to most countries. Shipping charges and delivery times for your order will be calculated and displayed at checkout.
              </p>
              <p>
                Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. AmmarSurgicals is not responsible for these charges if they are applied and are your responsibility as the customer.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">How do I check the status of my order?</h2>
              <p>
                When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
              </p>
              <p>
                If you haven’t received your order within 10 days of receiving your shipping confirmation email, please contact us at support@ammarsurgicals.com with your name and order number, and we will look into it for you.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Shipping to P.O. Boxes</h2>
              <p>
                Some carriers have limitations around shipping to P.O. Boxes. If we determine that our carrier cannot deliver to your P.O. Box, we will contact you for an alternative shipping address.
              </p>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Damages and Issues</h2>
              <p>
                Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right. Please refer to our Return Policy for more information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

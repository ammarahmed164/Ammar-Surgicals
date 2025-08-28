
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';

export default function TermsOfServicePage() {
  // Using a state for the date to avoid server/client mismatch in a server component that is rendered on client
  const [lastUpdated] = React.useState(new Date().toLocaleDateString());

  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Terms of Service</CardTitle>
            <CardDescription>Last updated: {lastUpdated}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
              <p>
                By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of the site constitutes acceptance of those changes.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">2. Use of Our Service</h2>
              <p>
                Our services are intended for use by medical professionals and authorized distributors. You agree to use our site for lawful purposes only. You must not use our site in any way that is fraudulent or harmful.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account and password.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">3. Products and Pricing</h2>
              <p>
                All products listed are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order.
              </p>
              <p>
                All prices are shown in U.S. dollars and are subject to change without notice.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of AmmarSurgicals and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of AmmarSurgicals.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
              <p>
                In no event shall AmmarSurgicals, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">6. Disclaimer</h2>
              <p>
                The information and products on this website are intended for use by qualified medical professionals. AmmarSurgicals is not liable for any misuse of surgical instruments or for any medical outcomes. It is the responsibility of the medical professional to ensure the proper use and sterilization of the instruments.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
                <p>
                If you have any questions about these Terms, please contact us.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="prose prose-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of the site constitutes acceptance of those changes.
        </p>

        <h2>2. Use of Our Service</h2>
        <p>
          Our services are intended for use by medical professionals and authorized distributors. You agree to use our site for lawful purposes only. You must not use our site in any way that is fraudulent or harmful.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account and password.
        </p>

        <h2>3. Products and Pricing</h2>
        <p>
          All products listed are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order.
        </p>
        <p>
          All prices are shown in U.S. dollars and are subject to change without notice.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of AmmarSurgicals and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of AmmarSurgicals.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall AmmarSurgicals, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
        
        <h2>6. Disclaimer</h2>
        <p>
          The information and products on this website are intended for use by qualified medical professionals. AmmarSurgicals is not liable for any misuse of surgical instruments or for any medical outcomes. It is the responsibility of the medical professional to ensure the proper use and sterilization of the instruments.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us.
        </p>
      </div>
    </div>
  );
}

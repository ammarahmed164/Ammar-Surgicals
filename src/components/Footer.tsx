
import Link from "next/link";
import { Stethoscope, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AmmarSurgicals</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Precision Instruments for Life-Saving Procedures.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy" className="text-sm hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Github className="h-5 w-5" /></Link>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Linkedin className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AmmarSurgicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";
import { Stethoscope, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Stethoscope className="h-8 w-8" />
              <span className="text-xl font-bold">AmmarSurgicals</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Precision Instruments for Life-Saving Procedures.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms-of-service" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <Link href="https://github.com/ammarahmed164" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></Link>
              </Button>
               <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <Link href="https://www.instagram.com/ammarahmed2037/" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <Link href="www.linkedin.com/in/ammar-ahmed-838656368" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} AmmarSurgicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

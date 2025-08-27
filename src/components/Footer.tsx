
import Link from "next/link";
import { Stethoscope, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white dark:from-blue-950 dark:to-background border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-12 mb-8">
          
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AmmarSurgicals</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Precision Instruments for Life-Saving Procedures.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-semibold mb-4 text-foreground tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground tracking-wider uppercase text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-foreground tracking-wider uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-3">
              <Link href="https://github.com/ammarahmed164" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
               <Link href="https://www.instagram.com/ammarahmed2037/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent">
                  <Instagram className="h-5 w-5" />
                   <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ammar-ahmed-838656368" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent">
                  <Linkedin className="h-5 w-5" />
                   <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Separator />
        <div className="pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AmmarSurgicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

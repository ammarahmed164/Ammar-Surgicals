
"use client";

import Link from "next/link";
import {
  Stethoscope,
  Search,
  User,
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  Mail,
  HelpCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: ShoppingBag },
  { href: "/about", label: "About", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">AmmarSurgicals</span>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-8"
                  onClick={() => setIsOpen(false)}
                >
                  <Stethoscope className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">AmmarSurgicals</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "flex items-center gap-3 rounded-md p-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex w-full items-center justify-center md:justify-start">
          <nav className="hidden items-center gap-4 text-sm md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  pathname === href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-4 ml-auto">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[200px] md:w-[250px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

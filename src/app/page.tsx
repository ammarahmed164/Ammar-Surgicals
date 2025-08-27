
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Gem, ThumbsUp, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getProducts().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-screen flex items-center justify-center text-center">
          <Image
            src="/Home.png"
            alt="Operating room"
            data-ai-hint="operating room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-primary-foreground animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
              The Art of Precision
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl mt-4 [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]">
              Empowering Surgeons with Instruments of Unrivaled Quality and Innovation.
            </p>
            <Button asChild size="lg" className="mt-8 transition-transform duration-300 hover:scale-105">
              <Link href="/products">
                Discover Our Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="featured-products" className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline">
              Featured Products
            </h2>
            <p className="mt-4 mb-12 text-center text-muted-foreground md:text-xl">
              Discover our top-selling surgical instruments.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
               <Button asChild variant="outline">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline">
              Our Commitment to Excellence
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">Uncompromising Quality</h3>
                <p className="mt-2 text-muted-foreground">
                  Every instrument is crafted from the finest materials and subjected to rigorous quality control.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                  <Gem className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">Surgical Precision</h3>
                <p className="mt-2 text-muted-foreground">
                  Engineered for accuracy and reliability in the most critical moments.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                  <ThumbsUp className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">Trusted by Professionals</h3>
                <p className="mt-2 text-muted-foreground">
                  The preferred choice for surgeons and healthcare providers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

         <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
               <Image
                src="https://picsum.photos/600/400"
                alt="About AmmarSurgicals"
                data-ai-hint="medical team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                About AmmarSurgicals
              </h2>
              <p className="mt-4 text-muted-foreground">
                For over 20 years, AmmarSurgicals has been at the forefront of surgical instrument innovation. Our mission is to empower medical professionals with the highest quality tools, enhancing patient outcomes and advancing the field of surgery. We blend traditional craftsmanship with cutting-edge technology to create instruments that are not only effective but also a natural extension of the surgeon's hand.
              </p>
              <Button asChild className="mt-6">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

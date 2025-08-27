
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Gem, ThumbsUp, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getProducts().slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* HERO */}
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
           <Image
              src="/Home2.png"
              alt="Surgical instruments on a tray"
              data-ai-hint="surgical instruments tray"
              fill
              priority
              className="object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline leading-tight drop-shadow-lg 
                           bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
              The Art of Precision
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl mt-6 text-neutral-200 drop-shadow-md">
              Empowering Surgeons with Instruments of Unrivaled Quality and
              Innovation.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 hover:scale-105 transition-transform duration-300 rounded-full shadow-lg"
            >
              <Link href="/products">
                Discover Our Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-center font-headline"
            >
              Featured Products
            </motion.h2>
            <p className="mt-4 mb-12 text-center text-muted-foreground md:text-lg">
              Discover our top-selling surgical instruments, trusted by professionals worldwide.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-16">
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* EXCELLENCE SECTION */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center font-headline">
              Our Commitment to Excellence
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10" />,
                  title: "Uncompromising Quality",
                  desc: "Every instrument is crafted from the finest materials and subjected to rigorous quality control.",
                },
                {
                  icon: <Gem className="h-10 w-10" />,
                  title: "Surgical Precision",
                  desc: "Engineered for accuracy and reliability in the most critical moments.",
                },
                {
                  icon: <ThumbsUp className="h-10 w-10" />,
                  title: "Trusted by Professionals",
                  desc: "The preferred choice for surgeons and healthcare providers worldwide.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg"
                >
                  <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -top-8 -left-8 w-full h-full bg-primary/10 rounded-3xl transform -rotate-6 z-0"></div>
                        <Image
                            src="/about2.png"
                            alt="AmmarSurgicals Team"
                            data-ai-hint="diverse medical team"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl relative z-10"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg max-w-none text-muted-foreground"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-foreground">
                            Pioneering Surgical Excellence
                        </h2>
                        <p className="mt-4 leading-relaxed">
                          For over two decades, AmmarSurgicals has been at the forefront of surgical instrument innovation. Our mission is to empower medical professionals with the highest quality tools, enhancing patient outcomes and advancing the field of surgery.
                        </p>
                        <p className="mt-4 leading-relaxed">
                          We blend traditional craftsmanship with cutting-edge technology to create instruments that are not only effective but also a natural extension of the surgeon's hand.
                        </p>
                        <Button asChild className="mt-6 rounded-xl" size="lg">
                            <Link href="/about">Learn Our Story</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

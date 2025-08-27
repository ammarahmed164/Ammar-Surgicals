
import Image from "next/image";
import { Stethoscope, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
            About AmmarSurgicals
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Pioneering the future of surgical precision with a legacy of excellence.
          </p>
        </section>

        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://picsum.photos/800/600"
              alt="AmmarSurgicals Team"
              data-ai-hint="diverse medical professionals"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Story</h2>
            <p>
              Founded in 2001, AmmarSurgicals began with a simple yet powerful vision: to equip medical professionals with instruments that are as reliable and precise as their own hands. From a small workshop of dedicated craftsmen, we have grown into a globally recognized brand synonymous with quality and innovation in the surgical field.
            </p>
            <p>
              Our journey has been one of continuous learning and adaptation, always staying at the forefront of medical technology while honoring the timeless principles of exceptional craftsmanship. We believe that the right tool can make a critical difference, and it is this belief that drives us to perfection every single day.
            </p>
          </div>
        </section>

        <section className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg">
              <Target className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-headline text-foreground">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To enhance patient outcomes by providing surgeons with superior quality, innovative, and reliable surgical instruments.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Eye className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-headline text-foreground">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To be the world's most trusted partner in the operating room, shaping the future of surgical care through continuous innovation.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Users className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-headline text-foreground">Our Values</h3>
              <p className="mt-2 text-muted-foreground">
                Integrity, Precision, Quality, Collaboration, and an unwavering commitment to the healthcare community we serve.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold text-center font-headline text-foreground">Our Journey</h2>
          <div className="mt-8 relative">
             <div className="border-l-2 border-primary absolute h-full top-0 left-1/2 -ml-px"></div>
              <div className="mb-8 flex justify-between items-center w-full">
                <div className="order-1 w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-card border rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="font-bold text-lg">2001 - The Beginning</h3>
                  <p className="text-sm text-muted-foreground">AmmarSurgicals is founded with a focus on handcrafted general surgical instruments.</p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                <div className="order-1 w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 bg-card border rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="font-bold text-lg">2010 - Innovation</h3>
                  <p className="text-sm text-muted-foreground">Introduced our first line of titanium instruments and expanded into specialized fields.</p>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full">
                <div className="order-1 w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-card border rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="font-bold text-lg">2020 - Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Established distribution networks in over 50 countries, becoming a trusted global brand.</p>
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

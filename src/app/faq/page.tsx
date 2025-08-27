
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What materials are your instruments made from?",
    answer: "Our instruments are primarily crafted from high-grade German and Japanese stainless steel, as well as titanium for specialized applications. We ensure all materials meet rigorous international standards for medical devices."
  },
  {
    question: "Are your instruments reusable?",
    answer: "Most of our instruments are designed to be reusable and can be sterilized using standard hospital procedures like autoclaving. Single-use items are clearly marked as such in the product description."
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a lifetime warranty against manufacturing defects on all our reusable instruments. This covers defects in material and workmanship. The warranty does not cover damage from misuse, improper cleaning, or normal wear and tear."
  },
  {
    question: "How do I place an order?",
    answer: "You can place an order directly through our website by adding items to your cart and proceeding to checkout. For bulk orders or institutional purchases, please contact our sales team through the contact page for a personalized quote."
  },
  {
    question: "What are the shipping options and times?",
    answer: "We offer standard (5-7 business days) and expedited (2-3 business days) shipping within the continental US. International shipping times vary by destination. All orders are typically processed within 24-48 hours."
  },
  {
    question: "Do you offer repairs or sharpening services?",
    answer: "Yes, we offer comprehensive repair and sharpening services for our instruments to help extend their lifespan and maintain optimal performance. Please contact our support team to arrange a service."
  },
];


export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Find answers to common questions about our products, services, and policies.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
             <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

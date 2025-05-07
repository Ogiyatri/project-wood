"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const faqs = [
  {
    question: "What types of wood do you use in your products?",
    answer: "We work with a wide range of premium hardwoods, including oak, walnut, maple, cherry, and mahogany. We also offer exotic options like teak and zebra wood for special projects. All our timber is responsibly sourced from sustainably managed forests."
  },
  {
    question: "How long does a custom project typically take?",
    answer: "The timeline varies depending on the complexity and scope of your project. Small custom pieces may take 4-6 weeks, while larger projects like full room furnishings could take 8-12 weeks. During your initial consultation, we'll provide a detailed timeline specific to your project."
  },
  {
    question: "Do you provide warranties on your products?",
    answer: "Yes, we stand behind the quality of our work. All our products come with a 25-year warranty against manufacturing defects. This reflects our confidence in the craftsmanship and materials used in every piece we create."
  },
  {
    question: "Can I request custom modifications to existing designs?",
    answer: "Absolutely! We specialize in customization. Whether you want to adjust dimensions, change wood species, modify features, or combine elements from different designs, our team can work with you to create exactly what you envision."
  },
  {
    question: "How should I care for my wooden furniture?",
    answer: "We provide detailed care instructions with every purchase. Generally, wooden furniture should be kept away from direct sunlight and heat sources, cleaned with a soft, slightly damp cloth, and periodically treated with appropriate wood conditioners or oils. We're always available to provide specific advice for your pieces."
  },
  {
    question: "Do you offer delivery and installation services?",
    answer: "Yes, we provide white-glove delivery and professional installation for all our products. Our team ensures your furniture is properly placed and set up in your space. For international clients, we coordinate with trusted shipping partners to ensure safe delivery."
  }
]

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-amber-800 dark:text-amber-500 font-medium mb-3">
            FAQ
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Find answers to common questions about our products, processes, and
            services. If you don&quot;t see your question here, feel free to
            contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm px-6"
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Can&quot;t find the answer you&quot;re looking for? Contact our
              customer support team.
            </p>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              <MessageSquare className="mr-2 h-4 w-4" /> Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection
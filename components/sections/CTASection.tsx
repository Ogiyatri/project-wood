import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CTASection = () => {
  return (
    <section className="py-16 bg-amber-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Space with Timeless Wood Craftsmanship?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s create something beautiful together. Whether you&apos;re
            looking for ready-made pieces or a custom solution, our team is
            ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-amber-800 hover:bg-amber-100"
            >
              Browse Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-amber-800 hover:bg-amber-100"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection
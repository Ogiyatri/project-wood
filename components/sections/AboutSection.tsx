import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg"
                alt="Wood processing facility"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-64 h-64 rounded-lg overflow-hidden shadow-xl z-0 hidden md:block"
              style={{
                background:
                  "url(https://images.pexels.com/photos/5976796/pexels-photo-5976796.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div>
            <h2 className="text-amber-800 dark:text-amber-500 font-medium mb-3">
              About Us
            </h2>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Premium Wood Suppliers Since 1998
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              AbusWood began as a small timber yard with a vision to provide the
              highest quality wood products to our customers. Today, we’ve grown
              into an industry leader, yet we maintain the same dedication to
              quality and attention to detail that defined our humble
              beginnings.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our team of wood specialists brings decades of experience and a
              deep understanding of timber. We source sustainable wood from
              responsibly managed forests, ensuring that each piece not only
              meets the highest quality standards but also honors our commitment
              to environmental stewardship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-playfair text-4xl font-bold text-amber-700 dark:text-amber-500 mb-2">
                  25+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Years of Excellence
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-playfair text-4xl font-bold text-amber-700 dark:text-amber-500 mb-2">
                  50K+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Orders Delivered
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-playfair text-4xl font-bold text-amber-700 dark:text-amber-500 mb-2">
                  100+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Wood Varieties
                </p>
              </div>
            </div>

            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import Image from "next/image"
import { 
  Award, 
  Leaf, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Users 
} from "lucide-react"

const features = [
  {
    icon: <Award className="h-8 w-8 text-amber-700" />,
    title: "Premium Quality",
    description: "Only the finest materials and superior craftsmanship in every piece we create."
  },
  {
    icon: <Leaf className="h-8 w-8 text-amber-700" />,
    title: "Sustainable Practices",
    description: "Responsibly sourced wood and eco-friendly production methods."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-amber-700" />,
    title: "25-Year Warranty",
    description: "We stand behind our products with an industry-leading guarantee."
  },
  {
    icon: <Clock className="h-8 w-8 text-amber-700" />,
    title: "Timeless Designs",
    description: "Classic aesthetics that transcend trends and remain beautiful for generations."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-700" />,
    title: "Custom Solutions",
    description: "Bespoke designs tailored to your specific needs and preferences."
  },
  {
    icon: <Users className="h-8 w-8 text-amber-700" />,
    title: "Expert Consultation",
    description: "Personalized guidance from our team of wood specialists."
  }
]

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-amber-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-amber-800 dark:text-amber-500 font-medium mb-3">
            Why Choose Us
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
            The Woodland Difference
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            We combine time-honored traditions with innovative techniques to
            deliver exceptional wood products that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
          {/* Features Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-playfair text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
                <blockquote className="flex-grow italic text-gray-700 dark:text-gray-300 text-lg mb-6">
                  &quot;The custom dining table Woodland crafted for us is
                  absolutely stunning. The attention to detail is remarkable,
                  and the quality is evident in every inch. It&quot;s not just
                  furniture—it&apos;s a family heirloom.&quot;
                </blockquote>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                        alt="Client portrait"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Thompson</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Interior Designer, Portland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-amber-200 dark:bg-amber-900/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection
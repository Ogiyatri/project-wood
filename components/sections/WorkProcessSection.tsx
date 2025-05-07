"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

const steps = [
  {
    id: "concept",
    title: "Initial Consultation & Design",
    description: "We begin with an in-depth consultation to understand your vision, preferences, and requirements. Our designers then create custom concepts tailored to your needs.",
    image: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg"
  },
  {
    id: "selection",
    title: "Material Selection",
    description: "We carefully select premium timber based on your project specifications, considering factors like durability, grain pattern, color, and sustainability.",
    image: "https://images.pexels.com/photos/6419168/pexels-photo-6419168.jpeg"
  },
  {
    id: "crafting",
    title: "Crafting & Construction",
    description: "Our master craftsmen transform raw timber into exquisite pieces using a combination of traditional woodworking techniques and modern precision tools.",
    image: "https://images.pexels.com/photos/3637618/pexels-photo-3637618.jpeg"
  },
  {
    id: "finishing",
    title: "Finishing & Detailing",
    description: "Each piece receives multiple layers of hand-applied finishes to enhance the wood's natural beauty and ensure long-lasting protection and durability.",
    image: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg"
  },
  {
    id: "delivery",
    title: "Delivery & Installation",
    description: "Your completed project is carefully packaged, delivered, and installed by our professional team, ensuring everything is perfect down to the last detail.",
    image: "https://images.pexels.com/photos/5711773/pexels-photo-5711773.jpeg"
  }
]

const WorkProcessSection = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id)
  
  const currentStep = steps.find(step => step.id === activeStep) || steps[0]

  return (
    <section id="work-process" className="py-24 bg-gray-100 dark:bg-gray-900/70">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-amber-800 dark:text-amber-500 font-medium mb-3">Our Process</h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
            From Concept to Creation
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Discover our meticulous approach to crafting exceptional wood products, where every step is executed with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={cn(
                "relative py-6 px-4 cursor-pointer transition-all",
                activeStep === step.id
                  ? "bg-amber-700 text-white rounded-lg shadow-md"
                  : "hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm rounded-lg"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-center mb-3">
                <div 
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-bold",
                    activeStep === step.id
                      ? "bg-white text-amber-700"
                      : "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500"
                  )}
                >
                  {index + 1}
                </div>
                <h4 className="font-medium">{step.title}</h4>
              </div>
              
              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-300 dark:bg-gray-700 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white text-center px-6">
                  {currentStep.title}
                </h3>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h4 className="text-xl font-semibold text-amber-700 dark:text-amber-500 mb-4">
                Step {steps.findIndex(s => s.id === activeStep) + 1}: {currentStep.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {currentStep.description}
              </p>
              
              <h5 className="font-medium mb-4">Key Aspects:</h5>
              <ul className="space-y-3">
                {currentStep.id === "concept" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Personalized consultation with our design experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Custom 3D renderings of your project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Detailed project scope and timeline planning</span>
                    </li>
                  </>
                )}
                
                {currentStep.id === "selection" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Access to rare and exotic wood species</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Sustainable sourcing from certified forests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Expert guidance on wood characteristics and performance</span>
                    </li>
                  </>
                )}
                
                {currentStep.id === "crafting" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Traditional joinery techniques for superior strength</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Precision cutting and assembly by master craftsmen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Regular quality checks throughout construction</span>
                    </li>
                  </>
                )}
                
                {currentStep.id === "finishing" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Multiple sanding stages using progressively finer grits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Hand-applied finishes using premium oils and sealants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Meticulous attention to detail in final inspections</span>
                    </li>
                  </>
                )}
                
                {currentStep.id === "delivery" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Secure packaging to prevent damage during transport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>White-glove delivery and professional installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Post-installation care instructions and support</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcessSection
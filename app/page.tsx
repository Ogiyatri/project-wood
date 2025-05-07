import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProductsSection from "@/components/sections/ProductsSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
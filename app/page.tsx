import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { VSLSection } from "@/components/sections/vsl"
import { NichesSection } from "@/components/sections/niches"
import { BenefitsSection } from "@/components/sections/benefits"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { ArticlesSection } from "@/components/sections/articles"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Qué es - Hero + VSL */}
      <HeroSection />
      <VSLSection />
      {/* Para quién es */}
      <NichesSection />
      {/* Qué gana el cliente */}
      <BenefitsSection />
      {/* Casos de éxito - Videos, Reseñas, Logos */}
      <CaseStudiesSection />
      {/* Artículos de interés */}
      <ArticlesSection />
      {/* FAQ y CTA */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

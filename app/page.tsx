import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { SolutionsSection } from "@/components/sections/solutions"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { ImpactSection } from "@/components/sections/impact"
import { ComparisonSection } from "@/components/sections/comparison"
import { SocialProofSection } from "@/components/sections/social-proof"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <SolutionsSection />
            <HowItWorksSection />
            <ImpactSection />
            <ComparisonSection />
            <SocialProofSection />
            <CTASection />
            <Footer />
        </main>
    )
}

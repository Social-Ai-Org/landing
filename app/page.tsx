import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero'
import { LogosStripSection } from '@/components/sections/logos-strip'
import { SolutionsSection } from '@/components/sections/solutions'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { ImpactSection } from '@/components/sections/impact'
import { ComparisonSection } from '@/components/sections/comparison'
import { CTASection } from '@/components/sections/cta'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <LogosStripSection />
            <SolutionsSection />
            <HowItWorksSection />
            <ImpactSection />
            <ComparisonSection />
            <CTASection />
            <Footer />
            <WhatsAppButton />
        </main>
    )
}

import { Header } from '@/components/nlp/Header';
import { WhatIsNlpSection } from '@/components/nlp/WhatIsNlpSection';
import { KeyConceptsSection } from '@/components/nlp/KeyConceptsSection';
import { HealthApplicationsSection } from '@/components/nlp/HealthApplicationsSection';
import { Footer } from '@/components/nlp/Footer';

export default function NlpInfographicPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <WhatIsNlpSection />
        <KeyConceptsSection />
        <HealthApplicationsSection />
      </main>
      <Footer />
    </div>
  );
}

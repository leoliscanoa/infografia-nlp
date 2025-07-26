import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';
import { NlpConceptImage } from './NlpConceptImage';

interface ConceptCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
  imageSrc: string;
}

export const ConceptCard: FC<ConceptCardProps> = ({ icon: Icon, title, description, imageSrc }) => {
  return (
    <article className="group bg-card rounded-xl p-6 shadow-lg border border-border/50 transition-all duration-300 ease-in-out hover:shadow-accent/20 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
      <NlpConceptImage conceptDescription={description} imageSrc={imageSrc} />
      <div className="flex items-center gap-4 mt-6 mb-3">
        <div className="bg-accent/10 p-2 rounded-lg">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold font-headline text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    </article>
  );
};

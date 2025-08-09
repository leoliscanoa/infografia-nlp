import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';
import { NlpConceptImage } from './NlpConceptImage';
import { Button } from '@/components/ui/button';
import { Youtube, Globe } from 'lucide-react';

interface ConceptCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const ConceptCard: FC<ConceptCardProps> = ({ icon: Icon, title, description, imageSrc, link }) => {
  const isYoutubeLink = link.includes('youtu.be');
  const LinkIcon = isYoutubeLink ? Youtube : Globe;

  return (
    <article className="group bg-card rounded-xl p-6 shadow-lg border border-border/50 transition-all duration-300 ease-in-out hover:shadow-accent/20 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50 flex flex-col">
      <NlpConceptImage conceptDescription={description} imageSrc={imageSrc} />
      <div className="flex items-center gap-4 mt-6 mb-3">
        <div className="bg-accent/10 p-2 rounded-lg">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold font-headline text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground text-base leading-relaxed flex-grow">{description}</p>
      <div className="mt-6 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="group/button animate-pulse hover:animate-none">
            <LinkIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/button:scale-110" />
            Saber más
          </Button>
        </a>
      </div>
    </article>
  );
};

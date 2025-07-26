import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';

interface HealthAppCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
  reverseOrder: boolean;
}

export const HealthAppCard: FC<HealthAppCardProps> = ({ icon: Icon, title, description, reverseOrder }) => {
  return (
    <article className="grid md:grid-cols-3 gap-8 md:gap-12 items-center group">
      <div className={`flex justify-center items-center ${reverseOrder ? 'md:order-last' : ''}`}>
        <div className="icon-container bg-background p-6 rounded-full shadow-lg flex justify-center items-center h-32 w-32 border-2 border-primary/50 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:border-primary">
          <Icon className="h-16 w-16 text-primary transition-colors duration-300" />
        </div>
      </div>
      <div className="md:col-span-2 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-foreground font-headline mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

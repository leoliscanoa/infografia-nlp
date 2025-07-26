import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-card/50 mt-12 border-t border-border">
      <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
        <p>&copy; 2024 Infografía de NLP. Creado para fines educativos y de divulgación.</p>
        <p className="text-sm mt-2">Diseñado con Next.js, Tailwind CSS y Lucide React.</p>
      </div>
    </footer>
  );
};

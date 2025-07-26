import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-card/50 mt-12 border-t border-border">
      <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
        <p>&copy; 2025 Infografía de NLP. Creado para fines educativos.</p>
        <p className="text-sm mt-2">Andrés Leonardo Liscano</p>
      </div>
    </footer>
  );
};

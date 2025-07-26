import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="py-16 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
          Procesamiento del Lenguaje Natural (NLP)
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Una guía visual para entender cómo las máquinas comprenden nuestro lenguaje y su impacto en la industria de la salud.
        </p>
      </div>
    </header>
  );
};

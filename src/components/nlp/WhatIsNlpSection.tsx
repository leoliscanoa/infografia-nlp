import { MessageCircle } from 'lucide-react';
import type { FC } from 'react';

export const WhatIsNlpSection: FC = () => {
  return (
    <section id="what-is-nlp" className="mb-20 md:mb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground font-headline mb-4">¿Qué es el NLP?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            El Procesamiento del Lenguaje Natural (NLP o PLN) es una rama de la Inteligencia Artificial que le da a las computadoras la habilidad de{' '}
            <strong className="text-primary">entender, interpretar y generar lenguaje humano</strong>. Su objetivo es simple pero poderoso: cerrar la brecha de comunicación entre nosotros y las máquinas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Piensa en ello como enseñarle a una máquina a leer, escuchar y escribir como una persona, permitiendo interacciones mucho más naturales e intuitivas.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse [animation-delay:150ms]"></div>
            <MessageCircle className="w-32 h-32 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

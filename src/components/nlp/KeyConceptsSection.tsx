import type { FC } from 'react';
import { ConceptCard } from './ConceptCard';
import { Scissors, Anchor, Smile, Tag, Folders, PenSquare } from 'lucide-react';

const concepts = [
  {
    icon: Scissors,
    title: 'Tokenización',
    description: 'Es el primer paso. Consiste en dividir un texto en unidades más pequeñas llamadas "tokens", que pueden ser palabras, frases o símbolos. Es como desarmar una oración en sus ladrillos fundamentales.',
  },
  {
    icon: Anchor,
    title: 'Lematización y Derivación',
    description: 'Son técnicas para reducir las palabras a su forma raíz. Por ejemplo, "corriendo", "corrió" y "corre" se simplifican a "correr". Esto ayuda a agrupar palabras con el mismo significado.',
  },
  {
    icon: Smile,
    title: 'Análisis de Sentimientos',
    description: 'Clasifica un texto como positivo, negativo o neutral. Es fundamental para entender la opinión de clientes sobre un producto o la percepción pública de una marca.',
  },
  {
    icon: Tag,
    title: 'Reconocimiento de Entidades (NER)',
    description: 'Identifica y clasifica información clave en el texto, como nombres de personas, organizaciones, lugares, fechas y más. Ayuda a estructurar información no estructurada.',
  },
  {
    icon: Folders,
    title: 'Modelado de Tópicos',
    description: 'Descubre los temas principales o "tópicos" latentes en una gran colección de documentos. Es ideal para organizar y resumir grandes volúmenes de texto, como artículos de noticias o correos.',
  },
  {
    icon: PenSquare,
    title: 'Generación de Lenguaje (NLG)',
    description: 'Es el proceso inverso: la máquina genera texto coherente y relevante a partir de datos. Es la tecnología detrás de los chatbots, los resúmenes automáticos y las respuestas de asistentes virtuales.',
  },
];

export const KeyConceptsSection: FC = () => {
  return (
    <section id="key-concepts" className="mb-20 md:mb-32">
      <h2 className="text-3xl font-bold text-center text-foreground font-headline mb-12">
        Conceptos Clave del NLP
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {concepts.map((concept, index) => (
          <ConceptCard key={index} {...concept} />
        ))}
      </div>
    </section>
  );
};

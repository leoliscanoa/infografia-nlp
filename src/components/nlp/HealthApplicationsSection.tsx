import type { FC } from 'react';
import { HealthAppCard } from './HealthAppCard';
import { HeartPulse, FileText, Bot } from 'lucide-react';

const applications = [
  {
    icon: HeartPulse,
    title: '1. Apoyo en el Diagnóstico Médico y Análisis de Imágenes',
    description: 'El NLP analiza automáticamente historiales clínicos, notas de médicos y reportes de laboratorio para identificar síntomas y factores de riesgo. Al combinarse con modelos de visión por computadora (análisis multimodal), puede interpretar hallazgos en radiografías o tomografías, sugiriendo diagnósticos y ayudando a detectar enfermedades como la sepsis de forma temprana.',
    reverseOrder: false,
  },
  {
    icon: FileText,
    title: '2. Automatización de Documentación y Codificación Médica',
    description: 'La documentación consume mucho tiempo de los médicos. El NLP automatiza tareas como la transcripción de consultas de audio a texto y la generación de resúmenes. Además, asigna automáticamente códigos de facturación (como ICD-10) a partir de las notas clínicas, reduciendo errores administrativos y liberando a los profesionales para que se centren en el paciente.',
    reverseOrder: true,
  },
  {
    icon: Bot,
    title: '3. Interacción y Monitoreo Personalizado del Paciente',
    description: 'Los chatbots y asistentes virtuales impulsados por NLP pueden responder preguntas frecuentes de pacientes, realizar triajes iniciales y ofrecer orientación. También se utiliza para analizar datos de wearables y comentarios en redes sociales, permitiendo un monitoreo continuo de la salud del paciente y una mejor comprensión de su experiencia y satisfacción con el servicio.',
    reverseOrder: false,
  },
];

export const HealthApplicationsSection: FC = () => {
  return (
    <section id="nlp-in-health" className="bg-card/70 rounded-2xl py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground font-headline mb-16">
          Aplicaciones Prácticas en la Industria de la Salud
        </h2>
        <div className="space-y-16">
          {applications.map((app, index) => (
            <HealthAppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};

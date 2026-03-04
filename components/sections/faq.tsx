"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo funciona el agente de IA?",
    answer: "Nuestro agente de IA utiliza procesamiento de lenguaje natural avanzado para mantener conversaciones fluidas con tus leads. Analiza las respuestas, identifica señales de compra y califica automáticamente cada prospecto según los criterios que definas para tu negocio."
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer: "La configuración básica se completa en menos de 24 horas. Conectamos tu cuenta de WhatsApp Business, Facebook o Instagram, personalizamos las respuestas según tu negocio y empiezas a recibir leads calificados inmediatamente."
  },
  {
    question: "¿Puedo personalizar las respuestas del agente?",
    answer: "Sí, totalmente. Puedes definir el tono de voz, las preguntas de calificación, los criterios de filtrado y las respuestas específicas. El agente se adapta a tu marca y objetivos de negocio."
  },
  {
    question: "¿Qué canales de comunicación soportan?",
    answer: "Actualmente soportamos WhatsApp Business, Facebook Messenger, Instagram Direct y formularios web. Estamos constantemente añadiendo nuevas integraciones según las necesidades de nuestros clientes."
  },
  {
    question: "¿Cómo sé que un lead está calificado?",
    answer: "Recibes una notificación instantánea cuando el agente identifica un lead calificado. Incluye toda la información de la conversación, puntuación de calificación y recomendaciones para el siguiente paso."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, no hay contratos de permanencia. Puedes cancelar tu suscripción cuando quieras sin penalizaciones. Creemos que la calidad de nuestro servicio debe ser suficiente para que quieras quedarte."
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Absolutamente. Cumplimos con GDPR y todas las normativas de protección de datos. Utilizamos encriptación de extremo a extremo y nunca compartimos tu información con terceros."
  },
  {
    question: "¿Ofrecen soporte en español?",
    answer: "Sí, todo nuestro equipo de soporte habla español nativo. Además, el agente de IA puede comunicarse en español, inglés, portugués y otros idiomas según tus necesidades."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Preguntas{" "}
            <span className="text-[#C85BFF]">Frecuentes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes más preguntas?{" "}
            <a href="mailto:info@socialai.com" className="text-primary hover:underline">
              Escríbenos
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

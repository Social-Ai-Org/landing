"use client"

import { TrendingDown, Clock, Zap, Shield, BarChart3, Users } from "lucide-react"
import { LogoIcon } from "../logo"

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Costos Operativos hasta 70%",
    description: "Elimina tareas repetitivas y reduce la necesidad de personal para operaciones rutinarias. Tu equipo se enfoca en lo estratégico.",
    highlight: "-70%",
    highlightLabel: "Costos"
  },
  {
    icon: Clock,
    title: "Respuesta Instantánea 24/7",
    description: "Tus clientes reciben atención inmediata a cualquier hora. Sin esperas, sin horarios, sin días festivos.",
    highlight: "24/7",
    highlightLabel: "Disponibilidad"
  },
  {
    icon: Zap,
    title: "Velocidad de Procesamiento",
    description: "Lo que antes tomaba horas ahora se hace en segundos. Procesa cientos de conversaciones simultáneamente.",
    highlight: "100x",
    highlightLabel: "Más Rápido"
  },
  {
    icon: BarChart3,
    title: "Escalabilidad Sin Límites",
    description: "Crece tu operación sin aumentar proporcionalmente los costos. Atiende 10 o 10,000 clientes con la misma infraestructura.",
    highlight: "∞",
    highlightLabel: "Escalable"
  },
  {
    icon: Shield,
    title: "Consistencia Garantizada",
    description: "Cada interacción sigue tus estándares de calidad. Sin errores humanos, sin variaciones, sin días malos.",
    highlight: "100%",
    highlightLabel: "Consistente"
  },
  {
    icon: Users,
    title: "Mejora la Experiencia del Cliente",
    description: "Respuestas precisas y personalizadas que aumentan la satisfacción y fidelización de tus clientes.",
    highlight: "+85%",
    highlightLabel: "Satisfacción"
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-14 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            ¿Qué Ganas Con{" "}
            <span className="text-[#C85BFF]">Social AI</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Resultados tangibles y medibles desde el primer día de implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Highlight badge */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#12071F] to-[#FF7A00] text-white px-4 py-2 rounded-full">
                <span className="font-bold text-lg">{benefit.highlight}</span>
                <span className="text-xs ml-1 opacity-80">{benefit.highlightLabel}</span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
            <LogoIcon className="w-8 h-8" />
            <span className="text-foreground font-medium">
              Empresas que implementaron Social AI vieron resultados en menos de 7 días
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

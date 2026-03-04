"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", label: "Todos" },
  { id: "ai", label: "Inteligencia Artificial" },
  { id: "leads", label: "Generación de Leads" },
  { id: "sales", label: "Ventas" },
]

const articles = [
  {
    id: 1,
    category: "ai",
    title: "AI Gets Real For Customer Service In 2026",
    excerpt: "2026 será el año en que la IA se vuelve práctica para atención al cliente. Forbes analiza cómo las empresas están automatizando interacciones con resultados reales.",
    readTime: "5 min",
    featured: true,
    source: "Forbes",
    url: "https://www.forbes.com/sites/forrester/2025/12/10/ai-gets-real-for-customer-service-in-2026/"
  },
  {
    id: 2,
    category: "ai",
    title: "Beyond the Bot: Building Empathetic Customer Experiences with Agentic AI",
    excerpt: "McKinsey explora cómo la IA agéntica está transformando los centros de contacto con experiencias empáticas y automatización inteligente.",
    readTime: "8 min",
    featured: true,
    source: "McKinsey",
    url: "https://www.mckinsey.com/capabilities/operations/our-insights/beyond-the-bot-building-empathetic-customer-experiences-with-agentic-ai"
  },
  {
    id: 3,
    category: "sales",
    title: "3 Estrategias para Aumentar las Ventas con IA en 2025",
    excerpt: "Automatización de procesos, personalización escalable y conversaciones dinámicas por WhatsApp. Guía práctica para implementar IA en tu equipo comercial.",
    readTime: "6 min",
    featured: false,
    source: "AtomChat",
    url: "https://atomchat.io/blog/estrategias-para-aumentar-las-ventas-con-ia-en-2025/"
  },
  {
    id: 4,
    category: "ai",
    title: "Agentes de IA en Ventas: Todo lo que Necesitas Saber",
    excerpt: "IBM explica cómo los agentes de IA actúan de forma autónoma analizando datos de ventas, priorizando leads y sugiriendo los próximos pasos en negociaciones.",
    readTime: "7 min",
    featured: false,
    source: "IBM",
    url: "https://www.ibm.com/es-es/think/topics/ai-agents-in-sales"
  },
  {
    id: 5,
    category: "leads",
    title: "Why Some Sales Teams Are Growing Alongside AI",
    excerpt: "Contrario a las predicciones, los equipos de ventas están creciendo junto a la IA. Harvard Business Review analiza por qué la IA potencia en vez de reemplazar.",
    readTime: "5 min",
    featured: false,
    source: "Harvard Business Review",
    url: "https://hbr.org/2025/09/why-some-sales-teams-are-actually-growing-alongside-ai"
  }
]

export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(a => a.category === activeCategory)

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Blog</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Artículos de{" "}
            <span className="text-[#C85BFF]">Interés</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Recursos y guías para mejorar tu proceso de ventas
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredArticles.slice(0, 2).map((article) => (
            <Link 
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-primary p-8 md:p-10 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {article.source}
              </div>
              <div className="mt-8">
                <p className="text-xs text-primary-foreground/60 mb-2">{article.readTime} lectura</p>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-accent font-medium">
                  <span>Leer artículo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.filter(a => !a.featured).map((article) => (
            <Link
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                  {article.source}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                <span>Leer artículo</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

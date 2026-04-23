import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const articles = [
  {
    title: "Почему физические записи помогают мышлению",
    category: "Психология",
    image: "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/ccdae968-941d-4603-bb30-2f1992779f10.jpg",
  },
  {
    title: "Как Scriptonite создаёт свои тексты",
    category: "Творчество",
    image: "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/0e0bb172-853e-4bfa-b68d-8abd96b8db2b.jpg",
  },
  {
    title: "Эстетика тьмы в современной культуре",
    category: "Культура",
    image: "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/8ffa5c2f-cbf7-4ca5-a3cf-9c9c1fdd3a01.jpg",
  },
  {
    title: "Блокнот как арт-объект",
    category: "Дизайн",
    image: "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/8d55aa3d-053f-4e27-a016-41969a9713f6.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              О блокноте
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-serif text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Читай. Думай. Записывай.
            </motion.h2>
          </div>
          <motion.a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Все материалы
            <span>→</span>
          </motion.a>
        </div>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="relative py-6 flex items-center justify-between gap-8 group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              data-clickable
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    className="absolute inset-0 bg-secondary rounded-xl z-0"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-center gap-6 flex-1 px-4">
                <span className="text-muted-foreground text-sm font-mono w-6">0{i + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">{article.category}</p>
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-foreground transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 px-4">
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0"
                      initial={{ opacity: 0, x: 20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.span
                  className="text-muted-foreground group-hover:text-foreground transition-colors text-lg"
                  animate={{ x: hoveredIndex === i ? 4 : 0 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

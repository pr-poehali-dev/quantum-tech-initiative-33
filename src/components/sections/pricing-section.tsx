import { motion } from "framer-motion"

const editions = [
  {
    name: "Стандарт",
    price: "790",
    description: "Блокнот формата A5, 80 листов, мягкая обложка с авторским принтом.",
    features: [
      "Формат A5",
      "80 листов, 80 г/м²",
      "Мягкая обложка",
      "Авторский принт Scriptonite",
      "Пронумерованный экземпляр",
    ],
    highlighted: false,
    cta: "Заказать",
  },
  {
    name: "Коллекционный",
    price: "1 490",
    description: "Лимитированный A5 в твёрдой обложке с золотым тиснением. Всего 100 штук.",
    features: [
      "Формат A5",
      "120 листов, 100 г/м²",
      "Твёрдая обложка с тиснением",
      "Золотые детали оформления",
      "Сертификат подлинности",
      "Именная нумерация",
    ],
    highlighted: true,
    cta: "Заказать коллекционный",
  },
  {
    name: "Большой",
    price: "990",
    description: "Просторный формат A4 для тех, кому нужно больше места для мыслей.",
    features: [
      "Формат A4",
      "80 листов, 80 г/м²",
      "Мягкая обложка",
      "Авторский принт Scriptonite",
      "Пронумерованный экземпляр",
    ],
    highlighted: false,
    cta: "Заказать",
  },
]

export function PricingSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Выбери свой экземпляр
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Каждый блокнот — часть истории.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editions.map((edition, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-8 flex flex-col relative overflow-hidden ${
                edition.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.99 }}
            >
              {edition.highlighted && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs uppercase tracking-widest bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                    Хит
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm uppercase tracking-widest mb-3 ${edition.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {edition.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-semibold">{edition.price}</span>
                  <span className={`text-sm ${edition.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>₽</span>
                </div>
                <p className={`text-sm mt-3 leading-relaxed ${edition.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {edition.description}
                </p>
              </div>

              <ul className="space-y-2 flex-1 mb-8">
                {edition.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className={`text-xs ${edition.highlighted ? "text-accent" : "text-primary"}`}>✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium text-sm transition-all hover:opacity-90 ${
                  edition.highlighted
                    ? "bg-accent text-accent-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {edition.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

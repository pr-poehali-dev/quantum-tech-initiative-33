import { motion } from "framer-motion"

const carouselImages = [
  "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/0e0bb172-853e-4bfa-b68d-8abd96b8db2b.jpg",
  "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/c1808a84-7147-4932-854a-8f6fe0fc2847.jpg",
  "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/8ffa5c2f-cbf7-4ca5-a3cf-9c9c1fdd3a01.jpg",
  "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/ccdae968-941d-4603-bb30-2f1992779f10.jpg",
  "https://cdn.poehali.dev/projects/107a5fbc-5eb4-4c86-bcc2-a021dfbe4054/files/8d55aa3d-053f-4e27-a016-41969a9713f6.jpg",
]

export function CarouselSection() {
  const items = [...carouselImages, ...carouselImages]

  return (
    <section className="bg-secondary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано для тех, кто думает иначе.
        </motion.h2>
        <motion.p
          className="text-muted-foreground mt-3 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Блокнот Scriptonite — не просто бумага. Это манифест.
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[360px] aspect-square rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Scriptonite ${(i % carouselImages.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

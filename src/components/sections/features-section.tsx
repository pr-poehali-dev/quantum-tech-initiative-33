import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function InkAnimation() {
  const [opacity, setOpacity] = useState(0.2)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => (prev === 0.2 ? 1 : 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-serif text-6xl md:text-8xl text-foreground"
        animate={{ opacity }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        ✦
      </motion.span>
    </div>
  )
}

function PaperAnimation() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev === 0 ? -5 : 0))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div
        className="w-24 h-32 bg-foreground/10 rounded-sm border border-foreground/20 relative flex items-center justify-center"
        animate={{ rotate: rotation }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="absolute left-4 right-4 h-px bg-foreground/20" style={{ top: `${20 + i * 15}%` }} />
        ))}
      </motion.div>
    </div>
  )
}

function LimitedIndicator() {
  const [count, setCount] = useState(47)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 40 ? prev - 1 : 47))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-serif font-medium text-foreground">{count}</span>
      <span className="text-sm text-muted-foreground uppercase tracking-widest">осталось экземпляров</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          animate={{ width: `${(count / 100) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему этот блокнот
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <InkAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Авторский дизайн</h3>
              <p className="text-muted-foreground text-sm mt-1">Обложка создана под вдохновением визуального мира Скриптонита.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <PaperAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Качественная бумага</h3>
              <p className="text-muted-foreground text-sm mt-1">80 г/м², без просвечивания — для чернил, карандаша и маркеров.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <LimitedIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Лимитированный тираж</h3>
              <p className="text-muted-foreground text-sm mt-1">Каждый экземпляр пронумерован. Коллекционная вещь.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

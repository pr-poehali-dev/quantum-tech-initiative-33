import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="bg-secondary px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.h2
              className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Scriptonite.<br />
              <em className="italic text-muted-foreground">Блокнот.</em>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-sm max-w-xs leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Лимитированное издание. Авторский дизайн. Для тех, кто пишет — руками.
            </motion.p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Навигация</p>
            <ul className="space-y-2">
              {["О блокноте", "Галерея", "Тарифы", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Связь</p>
            <ul className="space-y-2">
              {["Telegram", "Instagram", "VK"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Scriptonite. Все права защищены.</p>
          <p className="text-xs text-muted-foreground">Лимитированный тираж · Официальный магазин</p>
        </div>
      </div>
    </footer>
  )
}

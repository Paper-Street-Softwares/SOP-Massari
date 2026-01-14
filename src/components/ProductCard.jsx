import React from 'react'
import { motion } from 'framer-motion'
import { Sprout, CheckCircle2, ArrowRight } from 'lucide-react'
import ButtonReflexo from './interactives/ButtonReflexo'
import content from '../content/content'

function ProductCard({ target, tagline, name, description, usage }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col h-full"
      >
        {/* Decorative top strip */}
        <div className="h-2 w-full bg-gradient-to-r from-primaryDark to-primaryDark/80" />

        <div className="p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-center gap-2 mb-4">
            <div className="bg-secondary/50 p-2 rounded-xl text-primaryDark group-hover:bg-primaryDark group-hover:text-white transition-colors duration-700">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="text-paragraph1 font-bold uppercase tracking-wider text-muted-corOutrosTextosPreto border border-border px-3 py-1 rounded-lg max-w-[200px]">
              {target}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-corTitulosPreto mb-2 group-hover:text-primaryDark transition-colors duration-700">
            {name}
          </h3>

          <p className="text-accent font-medium italic mb-4 font-display text-lg">
            "{tagline}"
          </p>

          <p className="text-muted-corOutrosTextosPreto mb-6 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto space-y-4 pt-6 border-t border-border/50">
            <div>
              <h4 className="text-sm font-semibold text-corOutrosTextosPreto flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-primaryDark" />
                Modo de Usar
              </h4>
              <p className="text-sm text-muted-corOutrosTextosPreto">{usage}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 px-8 py-4 border-t border-border/50 flex justify-between items-center">
          <span className="text-sm font-semibold text-primaryDark/80">
            Saiba mais
          </span>
          <ButtonReflexo
            padding="px-3 py-2"
            icon={<ArrowRight className="w-4" />}
            link={content.texts.links.ctaWhatsapp}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default ProductCard

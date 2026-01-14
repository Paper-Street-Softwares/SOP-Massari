import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { motion } from 'framer-motion'
import content from '../../content/content'
import ProductCard from '../ProductCard'

const products = Object.values(content.texts.guidance.cards)

function GuidanceSection({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      break

    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      break

    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
  }

  return (
    <SectionArea data-theme={colorMode} className={backgroundMode}>
      <SectionWrapper>
        <section id="products" className="relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl -z-10" />

          <div>
            {/* Cabeçalho */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span
                className={`${textDestaque} font-bold tracking-wider uppercase text-sm mb-2 block`}
              >
                Nosso Catálogo
              </span>

              <h1
                className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
              >
                Soluções completas para o desempenho do rebanho
              </h1>

              <p className={`font-secondFont font-light ${textOpacity}`}>
                Tecnologia nutricional desenvolvida para cada fase e necessidade
                da sua produção.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-secondFont">
              {products?.map((product, index) => (
                <ProductCard
                  key={index}
                  target={product.badge.text}
                  name={product.title}
                  tagline={product.highlight}
                  description={product.description}
                  usage={product.usage.text}
                  colorMode={colorMode}
                />
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default GuidanceSection

import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { motion } from 'framer-motion'
import { Microscope, Leaf } from 'lucide-react'

function DiferenceProducts({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    textDestaque,
    textDestaqueNegative,
    cardBgLeft,
    cardBgRight,
    borderLeft,
    borderRight,
    iconLeft,
    iconRight,
    bulletLeft,
    bulletRight

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-white'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      textDestaqueNegative = 'text-green-600'
      cardBgLeft = 'bg-secondary/20'
      cardBgRight = 'bg-green-600/5'
      borderLeft = 'border-secondary'
      borderRight = 'border-green-600/20'
      iconLeft = 'bg-primaryDark/10 text-primaryDark'
      iconRight = 'bg-green-600/10 text-green-600'
      bulletLeft = 'text-green-600'
      bulletRight = 'text-primaryDark'
      break

    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      textDestaqueNegative = 'text-green-500'
      cardBgLeft = 'bg-dark'
      cardBgRight = 'bg-dark'
      borderLeft = 'border-primaryLight/20'
      borderRight = 'border-primaryLight/20'
      iconLeft = 'bg-primaryLight/10 text-primaryLight'
      iconRight = 'bg-primaryLight/10 text-primaryLight'
      bulletLeft = 'text-primaryLight'
      bulletRight = 'text-primaryLight'
      break

    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      textDestaqueNegative = 'text-green-500'
      cardBgLeft = 'bg-secondary/20'
      cardBgRight = 'bg-green-600/5'
      borderLeft = 'border-secondary'
      borderRight = 'border-green-600/20'
      iconLeft = 'bg-primary/10 text-primaryDark'
      iconRight = 'bg-green-600/10 text-green-600'
      bulletLeft = 'text-green-600'
      bulletRight = 'text-primaryDark'
  }

  return (
    <SectionArea data-theme={colorMode} className={backgroundMode}>
      <SectionWrapper>
        <section>
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <span
              className={`${textDestaque} font-bold tracking-wider uppercase text-sm mb-2 block`}
            >
              Saiba Diferenciar
            </span>
            <h1
              className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
            >
              A Ciência da Nutrição: Probióticos vs Prebióticos
            </h1>
            <p className={`font-secondFont font-light ${textOpacity}`}>
              Entenda a diferença e como cada um atua para potencializar a saúde
              do seu rebanho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 font-secondFont">
            {/* Probióticos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 border ${cardBgLeft} ${borderLeft} relative overflow-hidden group transition-colors`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${iconLeft} rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110`}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${iconLeft}`}
                >
                  <Microscope className="w-6 h-6" />
                </div>
                <h1
                  className={`text-3xl font-display font-bold ${textDestaque}`}
                >
                  Probióticos
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>O que são?</h1>
                  <p className={textOpacity}>
                    Microrganismos vivos (bactérias e leveduras) adicionados à
                    alimentação.
                  </p>
                </div>

                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>Função Principal</h1>
                  <p className={textOpacity}>
                    Equilíbrio da microbiota intestinal e ruminal, favorecendo
                    as "bactérias do bem".
                  </p>
                </div>

                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>Benefícios</h1>
                  <ul className={`space-y-2 ${textOpacity}`}>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletLeft} mt-1`}>•</span> Aumentam a
                      digestão e aproveitamento dos nutrientes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletLeft} mt-1`}>•</span> Melhoram o
                      ganho de peso e produção
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletLeft} mt-1`}>•</span> Reforçam a
                      imunidade natural
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Prebióticos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 border ${cardBgRight} ${borderRight} relative overflow-hidden group transition-colors`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${iconRight} rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110`}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${iconRight}`}
                >
                  <Leaf className="w-6 h-6" />
                </div>
                <h1
                  className={`text-3xl font-display font-bold ${textDestaqueNegative}`}
                >
                  Prebióticos
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>O que são?</h1>
                  <p className={textOpacity}>
                    Fibras e compostos não digeríveis que alimentam as bactérias
                    benéficas.
                  </p>
                </div>

                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>Função Principal</h1>
                  <p className={textOpacity}>
                    Estimular o crescimento das bactérias boas e melhorar o
                    ambiente intestinal.
                  </p>
                </div>

                <div>
                  <h1 className={`font-bold mb-2 ${text}`}>Benefícios</h1>
                  <ul className={`space-y-2 ${textOpacity}`}>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletRight} mt-1`}>•</span> Reduzem a
                      presença de bactérias patogênicas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletRight} mt-1`}>•</span> Melhoram
                      desempenho produtivo e reprodutivo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${bulletRight} mt-1`}>•</span>{' '}
                      Fortalecem o sistema imunológico
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default DiferenceProducts

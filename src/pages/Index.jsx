import { lazy, Suspense } from 'react'

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'
import StepsNovoTemplate from '../components/sections/StepsNovoTemplate'
import FaqNovoTemplate from '../components/sections/FaqNovoTemplate'

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import('../components/sections/FeaturesNovaTemplate'),
)
// const FeaturesSemImage = lazy(() =>
//   import('../components/sections/FeaturesSemImage')
// )
const CtaNovoTemplate = lazy(
  () => import('../components/sections/CtaNovoTemplate'),
)
const AboutNovoTemplate = lazy(
  () => import('../components/sections/AboutNovoTemplate'),
)

const SocialMediaTemplate = lazy(
  () => import('../components/sections/SocialMediaTemplate'),
)
const FooterNovoTemplate = lazy(
  () => import('../components/sections/FooterNovoTemplate'),
)
const WhatsappAnimated = lazy(
  () => import('../components/interactives/WhatsAppAnimated'),
)
import { useContext } from 'react'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'
import GuidanceSection from '../components/sections/GuidanceSection'
import DiferenceProducts from '../components/sections/DiferenceProducts'

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        <NavbarNovaTemplate colorMode={colorMode} />

        <main>
          {/* LCP — NÃO usar lazy */}
          <HeroTemplateNovo colorMode={colorMode} />
          {/* Lazy sections */}
          <Suspense fallback={null}>
            <FeaturesNovaTemplate colorMode={colorMode} />
            <GuidanceSection colorMode={colorMode} />
            <DiferenceProducts colorMode={colorMode} />
            {/* <FeaturesSemImage colorMode={colorMode} /> */}
            <AboutNovoTemplate colorMode={colorMode} ButtonModal={true} />
            <SocialMediaTemplate colorMode={colorMode} />
            <CtaNovoTemplate colorMode={colorMode} />
            <StepsNovoTemplate colorMode={colorMode} />
            <FaqNovoTemplate colorMode={colorMode} />
            <FooterNovoTemplate
              colorMode={colorMode}
              mapa={false}
              phoneSecond={false}
              expediente={false}
              adress={false}
              email={false}
              emailSecond={false}
            />
            <WhatsappAnimated colorMode={colorMode} />
          </Suspense>
        </main>
      </ColorModeProvider>
    </>
  )
}

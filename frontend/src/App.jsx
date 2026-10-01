import { useState, lazy, Suspense } from "react";
import LazySection from "./component/LazySection.jsx"
const CosmicIntro = lazy(() => import("./component/CosmicIntro.jsx"))
const HeroSection = lazy(() => import("./component/HeroSection.jsx"))
const WorkSection = lazy(() => import("./component/WorkSection.jsx"))
const AboutSection = lazy(() => import("./component/AboutSection.jsx"))
const Architecture = lazy(() => import("./component/Architecture.jsx"))
const ContactSection = lazy(() => import("./component/ContactSection.jsx"))

const App = () => {
  const [heroArriving, setHeroArriving] =
    useState(false);

  const [showCosmic, setShowCosmic] =
    useState(true);

  const [cosmicFading, setCosmicFading] =
    useState(false);

  const handleTransitionStart = () => {
    setHeroArriving(true);
    setCosmicFading(true);
  };

  const handleComplete = () => {
    setShowCosmic(false);
  };

  return (
    <>

      <div
        className={`portfolio-page ${!showCosmic
          ? "portfolio-scrollable"
          : ""
          }`}
      >
        <div
          className={`hero-layer ${heroArriving
            ? "hero-arriving"
            : ""
            }`}
        >
          <HeroSection />
        </div>
        <LazySection>
          <Suspense fallback={null}>
            <div className="work-layer">
              <WorkSection />
            </div>
            <AboutSection />
            <Architecture />
            <ContactSection />
          </Suspense>
        </LazySection>
      </div>

      {showCosmic && (
        <div
          className={`cosmic-layer ${cosmicFading
            ? "cosmic-fading"
            : ""
            }`}
        >
          <CosmicIntro
            onTransitionStart={
              handleTransitionStart
            }
            onComplete={
              handleComplete
            }
          />
        </div>
      )}
    </>
  );
};

export default App;
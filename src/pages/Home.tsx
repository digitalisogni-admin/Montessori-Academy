import Hero from '../components/Hero';
import Announcements from '../components/Announcements';
import SubjectGrid from '../components/SubjectGrid';
import Certifications from '../components/Certifications';
import TuitionCalendar from '../components/TuitionCalendar';
import InteractiveToolPreview from '../components/InteractiveToolPreview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: {
      fr: 'Accueil',
      en: 'Home',
      it: 'Home'
    },
    description: {
      fr: 'Découvrez des ressources pédagogiques interactives, laboratoires virtuels et leçons pour apprendre autrement.',
      en: 'Discover interactive educational resources, virtual labs, and lessons to learn differently.',
      it: 'Scopri risorse educative interattive, laboratori virtuali e lezioni per imparare diversamente.'
    }
  });

  return (
    <main>
      <Hero />
      <Announcements />
      <Certifications />
      <SubjectGrid />
      <TuitionCalendar />
      <InteractiveToolPreview />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </main>
  );
}

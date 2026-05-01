import Hero from '../components/Hero';
import Announcements from '../components/Announcements';
import SubjectGrid from '../components/SubjectGrid';
import Certifications from '../components/Certifications';
import TuitionCalendar from '../components/TuitionCalendar';
import InteractiveToolPreview from '../components/InteractiveToolPreview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

export default function Home() {
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

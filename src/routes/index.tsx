import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';
import Hospital from '@/pages/hospital';
import CollegeRedirect from '@/components/CollegeRedirect'; // Import the redirect component
import Farms from '@/pages/works/farms';
import LeprosyCare from '@/pages/works/leprosy-care';
import VisionCenters from '@/pages/works/vision-centers';
import ChildrensHome from '@/pages/works/childrens-home';
import Gallery from '@/pages/gallery';
import Appointment from '@/pages/appointment';
import Newsletter from '@/pages/newsletter';
import Donate from '@/pages/donate';
import Contact from '@/pages/contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hospital" element={<Hospital />} />
      <Route path="/college" element={<CollegeRedirect />} /> {/* Redirect to external site */}
      <Route path="/works/farms" element={<Farms />} />
      <Route path="/works/leprosy-care" element={<LeprosyCare />} />
      <Route path="/works/vision-centers" element={<VisionCenters />} />
      <Route path="/works/childrens-home" element={<ChildrensHome />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

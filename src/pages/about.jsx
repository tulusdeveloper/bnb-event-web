import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';

export default function About() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <AboutPage />
    </div>
  );
}
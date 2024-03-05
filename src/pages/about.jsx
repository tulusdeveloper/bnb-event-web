import AboutPage from './components/AboutPage';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function About() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      {/* <Header /> */}
      <AboutPage />
    </div>
  );
}
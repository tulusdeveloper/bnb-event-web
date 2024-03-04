import ServicesPage from './components/ServicesPage';
import Navbar from './components/Navbar';

export default function Services() {
    return (
        <div className="flex min-h-screen">
          <Navbar />
          <ServicesPage />
        </div>
      );
}

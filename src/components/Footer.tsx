import { Link } from 'react-router-dom';
import logoImage from '../assets/images/4K Logo.webp';

export default function Footer() {
  return (
    <div className="bg-brand-sand border-t border-black/10 py-8 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 tracking-wider">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Søren Kjeldsen Logo" 
              className="h-12 w-auto opacity-50 grayscale mix-blend-multiply mb-4 md:mb-0 hover:opacity-100 transition-opacity block"
            />
          </Link>
          <p>© {new Date().getFullYear()} SØREN KJELDSEN. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </div>
  );
}

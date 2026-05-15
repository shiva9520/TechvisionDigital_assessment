import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary-600" />
            <span className="font-bold text-xl text-slate-900">FresherKit</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

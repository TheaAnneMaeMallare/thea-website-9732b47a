
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Thea Anne Mae
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/#about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/#blog" className="hover:text-secondary transition-colors">Blog</Link>
          <Link to="/#certificates" className="hover:text-secondary transition-colors">Certificates</Link>
          <Link to="/#testimonials" className="hover:text-secondary transition-colors">Testimonials</Link>
          <Link to="/#contact" className="hover:text-secondary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

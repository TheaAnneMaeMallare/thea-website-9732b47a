
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-white backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/0a47a0be-ca01-4838-bb75-c1c07f789f5b.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-[#0EA5E9]">Thea Anne Mae</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-[#0EA5E9] hover:text-secondary transition-colors">About</a>
          <a href="#blog" className="text-[#0EA5E9] hover:text-secondary transition-colors">Blog</a>
          <a href="#testimonials" className="text-[#0EA5E9] hover:text-secondary transition-colors">Testimonials</a>
          <a href="#certificates" className="text-[#0EA5E9] hover:text-secondary transition-colors">Certificates</a>
          <a href="#contact" className="text-[#0EA5E9] hover:text-secondary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

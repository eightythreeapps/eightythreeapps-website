import { Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Logo width={100} height={32} className="h-8 w-auto" />
          </div>
          
          <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:hello@eightythreeapps.co.uk"
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              hello@eightythreeapps.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

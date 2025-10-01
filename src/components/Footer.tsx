import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--accent)' }}></div>
            <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
              EightyThree Apps
            </span>
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

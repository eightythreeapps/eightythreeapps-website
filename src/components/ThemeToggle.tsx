'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', newTheme);
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
        <Monitor className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
      </div>
    );
  }

  return (
    <div className="flex rounded-lg glass-card overflow-hidden">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 ${theme === 'light' ? 'glass' : ''}`}
        style={{ color: theme === 'light' ? 'var(--accent)' : 'var(--text-secondary)' }}
      >
        <Sun className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 ${theme === 'dark' ? 'glass' : ''}`}
        style={{ color: theme === 'dark' ? 'var(--accent)' : 'var(--text-secondary)' }}
      >
        <Moon className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 ${theme === 'system' ? 'glass' : ''}`}
        style={{ color: theme === 'system' ? 'var(--accent)' : 'var(--text-secondary)' }}
      >
        <Monitor className="w-5 h-5" />
      </button>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ThemeAwareAppIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function ThemeAwareAppIcon({ 
  width = 32, 
  height = 32, 
  className = "rounded-lg",
  alt = "App Icon"
}: ThemeAwareAppIconProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      const root = document.documentElement;
      const theme = root.getAttribute('data-theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (theme === 'dark' || (theme !== 'light' && systemPrefersDark)) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkTheme);
    };
  }, []);

  if (!mounted) {
    // Show light icon by default during SSR
    return (
      <Image 
        src="/AppIconLight-1024.png" 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
      />
    );
  }

  return (
    <Image 
      src={isDark ? "/AppIconDark-1024.png" : "/AppIconLight-1024.png"} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
    />
  );
}

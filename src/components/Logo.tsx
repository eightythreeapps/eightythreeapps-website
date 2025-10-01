'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function Logo({
  width = 120,
  height = 40,
  className = "",
  alt = "EightyThree Apps Logo"
}: LogoProps) {
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
    // Show light logo by default during SSR
    return (
      <Image
        src="/assets/logo-light.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    );
  }

  return (
    <Image
      src={isDark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

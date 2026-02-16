"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const initialTheme = savedTheme || systemPreference;

      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');

      // Create audio instance client-side
      const sound = new Audio('/toggle.mp3');
      sound.volume = 0.5;
      setAudio(sound);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Play sound if available
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="glass relative w-10 h-10 rounded-full p-0 border-0 transition-all duration-300 hover:scale-110"
    >
      <div className="relative">
        <Sun 
          className={`w-5 h-5 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`}
        />
        <Moon 
          className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

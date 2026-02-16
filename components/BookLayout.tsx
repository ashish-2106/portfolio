"use client"
import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, BadgeCheck, Volume2 } from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/Educationpage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/Contactpage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ThemeToggle } from './Themetoggle';
import { cn } from '../lib/utils';


const chapters = [
  { id: 'home', title: 'Title Page', component: HomePage, number: '' },
  { id: 'about', title: 'About', component: AboutPage, number: 'I' },
  { id: 'education', title: 'Education', component: EducationPage, number: 'II' },
  { id: 'experience', title: 'Experience', component: ExperiencePage, number: 'III' },
  { id: 'skills', title: 'Skills', component: ProjectsPage, number: 'IV' },
  { id: 'projects', title: 'Projects', component: SkillsPage, number: 'V' },
  { id: 'contact', title: 'Contact', component: ContactPage, number: 'VI' },
];

export const BookLayout = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 🔊 Load the page flip sound once
  const pageSound = typeof Audio !== "undefined" ? new Audio("/page-turn.mp3") : null;

  const playPageSound = () => {
    if (pageSound) {
      pageSound.currentTime = 0; // restart from beginning
      pageSound.volume = 0.6; // moderate volume
      pageSound.play().catch(() => {}); // prevent blocking errors
    }
  };

  const navigateToChapter = (index: number) => {
    if (index === currentChapter || isTransitioning) return;

    setIsTransitioning(true);
    playPageSound(); // 👈 Play sound on page change

    setTimeout(() => {
      setCurrentChapter(index);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      navigateToChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      navigateToChapter(currentChapter - 1);
    }
  };

  const pronounceName = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Ashish Jhajharia');
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const CurrentComponent = chapters[currentChapter].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/10 to-accent/10" />

      {/* Header */}
      <header className="relative z-10 p-6 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="book-page rounded-2xl px-8 lg:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-serif font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Ashish Jhajharia
                  </h1>
                  <BadgeCheck className="w-5 h-5 text-blue-500" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={pronounceName}
                    className="w-8 h-8 rounded-full p-0 hover:bg-accent/20 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-muted-foreground hover:text-accent" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute right-6 lg:right-12">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn(
        "relative z-10 transition-page",
        isTransitioning && "animate-page-turn"
      )}>
        <CurrentComponent />
      </main>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass rounded-full px-6 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevChapter}
              disabled={currentChapter === 0 || isTransitioning}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary disabled:opacity-50 border-0"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Previous</span>
            </Button>

            <div className="flex items-center gap-2">
              {chapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateToChapter(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-smooth",
                    currentChapter === index
                      ? "bg-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextChapter}
              disabled={currentChapter === chapters.length - 1 || isTransitioning}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary disabled:opacity-50 border-0"
            >
              <span className="hidden sm:inline text-sm">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chapter Indicator */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="glass rounded-xl p-3">
          <div className="text-center">
            <div className="text-xs text-muted-foreground/80 mb-1">Chapter</div>
            <div className="font-serif text-lg text-accent">
              {chapters[currentChapter].number || '—'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

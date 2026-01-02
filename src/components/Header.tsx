import { Link } from "react-router-dom";
import { Map, ExternalLink, Send, Menu, X } from "lucide-react";
import { CITYGO_MAIN_URL, CITYGO_TELEGRAM_URL, FORM_URL } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full transition-colors duration-300"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--blur-glass))',
          WebkitBackdropFilter: 'blur(var(--blur-glass))',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div 
              className="p-2 rounded-xl transition-colors"
              style={{
                background: 'hsl(var(--primary) / 0.12)',
                border: '1px solid hsl(var(--primary) / 0.2)',
              }}
            >
              <Map className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-lg gradient-text">CityGo</span>
              <span className="text-foreground font-medium ml-1 hidden sm:inline">Навигатор</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <a 
              href={CITYGO_MAIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="citygo-btn citygo-btn-ghost text-sm"
            >
              Главный сайт
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
            <a 
              href={CITYGO_TELEGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="citygo-btn citygo-btn-ghost text-sm"
            >
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </a>
            <ThemeToggle />
            <a 
              href={FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="citygo-btn btn-primary-gradient text-sm py-2 px-4"
            >
              Заполнить анкету
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[9999] transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          background: 'hsl(var(--background))',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div 
            className="flex items-center justify-between p-4"
            style={{ borderBottom: '1px solid var(--glass-border)' }}
          >
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div 
                className="p-2 rounded-xl"
                style={{
                  background: 'hsl(var(--primary) / 0.12)',
                  border: '1px solid hsl(var(--primary) / 0.2)',
                }}
              >
                <Map className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg gradient-text">CityGo</span>
            </Link>
            <button 
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 p-6">
            <a 
              href={CITYGO_MAIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl glass-card"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-medium">Главный сайт CityGo</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a 
              href={CITYGO_TELEGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl glass-card"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Send className="w-5 h-5 text-primary" />
                <span className="font-medium">Telegram-канал</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a 
              href={FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-gradient text-center p-4 rounded-xl font-semibold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Заполнить анкету CityGo
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { Map, ExternalLink, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CITYGO_MAIN_URL, CITYGO_TELEGRAM_URL, FORM_URL } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Map className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-lg gradient-text">CityGo</span>
              <span className="text-foreground font-medium ml-1 hidden sm:inline">Навигатор</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <a href={CITYGO_MAIN_URL} target="_blank" rel="noopener noreferrer">
                Главный сайт
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
              <a href={CITYGO_TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </a>
            </Button>
            <Button asChild size="sm" className="btn-primary-gradient py-2 px-4">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Заполнить анкету
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[9999] bg-background transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/30">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg gradient-text">CityGo</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
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

import { Link } from "react-router-dom";
import { Map, ExternalLink, Send } from "lucide-react";
import { CITYGO_MAIN_URL, CITYGO_LEGAL_URL, CITYGO_TELEGRAM_URL } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/30 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <Map className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold gradient-text">CityGo Навигатор</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CityGo. Все права защищены.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a 
              href={CITYGO_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Главный сайт
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href={CITYGO_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Send className="w-3 h-3" />
              Telegram
            </a>
            <a 
              href={CITYGO_LEGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Правовая информация
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

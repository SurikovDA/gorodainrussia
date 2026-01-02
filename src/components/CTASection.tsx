import { Send, FileText } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { CITYGO_TELEGRAM_URL, FORM_URL } from "@/lib/constants";

interface CTASectionProps {
  cityName?: string;
}

export const CTASection = ({ cityName }: CTASectionProps) => {
  return (
    <GlassCard className="text-center animate-slide-up">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="gradient-text">Получите план переезда</span>
          {cityName && (
            <span className="text-foreground block mt-1">в {cityName}</span>
          )}
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Заполните анкету CityGo и получите персональные рекомендации по переезду, подбору жилья и трудоустройству
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="citygo-btn btn-primary-gradient w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Заполнить анкету CityGo
          </a>
          <a 
            href={CITYGO_TELEGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="citygo-btn citygo-btn-ghost w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Перейти в Telegram
          </a>
        </div>
      </div>
    </GlassCard>
  );
};

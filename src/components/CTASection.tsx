import { Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <Button asChild size="lg" className="btn-primary-gradient w-full sm:w-auto px-8 py-6 text-base">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Заполнить анкету CityGo
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base border-border/50 hover:bg-muted/50">
            <a href={CITYGO_TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5 mr-2" />
              Перейти в Telegram
            </a>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

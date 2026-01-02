import { ExternalLink, Send, ArrowRight } from "lucide-react";
import { FORM_URL, CITYGO_TELEGRAM_URL } from "@/lib/constants";

interface CompactCTAProps {
  navigatorUrl?: string;
}

export const CompactCTA = ({ navigatorUrl = "/?mode=full" }: CompactCTAProps) => {
  return (
    <div className="mt-6 pt-5 border-t border-border/50">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <a
          href={navigatorUrl}
          className="citygo-btn citygo-btn-primary w-full sm:w-auto text-sm py-2.5 px-5"
        >
          Открыть полный навигатор
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="citygo-btn citygo-btn-secondary w-full sm:w-auto text-sm py-2.5 px-5"
        >
          Заполнить анкету
          <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href={CITYGO_TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="citygo-btn citygo-btn-ghost w-full sm:w-auto text-sm py-2.5 px-5"
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>
      </div>
    </div>
  );
};
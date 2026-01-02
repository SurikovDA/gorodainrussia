import { useEffect } from "react";
import { CITYGO_LEGAL_URL } from "@/lib/constants";

const Legal = () => {
  useEffect(() => {
    window.location.href = CITYGO_LEGAL_URL;
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">Перенаправление на правовую информацию...</p>
        <a 
          href={CITYGO_LEGAL_URL}
          className="text-primary hover:underline mt-2 block"
        >
          Нажмите здесь, если перенаправление не произошло
        </a>
      </div>
    </div>
  );
};

export default Legal;

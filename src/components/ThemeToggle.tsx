import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-xl transition-all duration-300",
        "bg-card/50 border border-border/50 hover:border-primary/30",
        "hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        className
      )}
      aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            theme === 'dark' 
              ? "opacity-100 rotate-0 scale-100 text-amber-400" 
              : "opacity-0 -rotate-90 scale-0"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            theme === 'light' 
              ? "opacity-100 rotate-0 scale-100 text-primary" 
              : "opacity-0 rotate-90 scale-0"
          )} 
        />
      </div>
    </button>
  );
};

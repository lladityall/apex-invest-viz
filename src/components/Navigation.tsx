import { Button } from "./ui/enhanced-button";
import { TrendingUp, Target, Award, BarChart3 } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: "home", label: "Home", icon: BarChart3 },
    { id: "prediction", label: "Stock Prediction", icon: TrendingUp },
    { id: "options", label: "F&O Calls", icon: Target },
    { id: "recommendations", label: "Recommendations", icon: Award },
  ];

  return (
    <nav className="bg-card/50 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DAY Finance
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(section.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
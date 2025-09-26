import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StockPrediction from "@/components/StockPrediction";
import OptionsTrading from "@/components/OptionsTrading";
import StockRecommendations from "@/components/StockRecommendations";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleGetStarted = () => {
    setActiveSection("prediction");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero onGetStarted={handleGetStarted} />;
      case "prediction":
        return <StockPrediction />;
      case "options":
        return <OptionsTrading />;
      case "recommendations":
        return <StockRecommendations />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      {renderSection()}
    </div>
  );
};

export default Index;

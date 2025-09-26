import { Button } from "./ui/enhanced-button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced
            </span>
            <br />
            <span className="text-foreground">Trading Intelligence</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI-driven stock predictions, F&O recommendations, 
            and intelligent portfolio management for superior returns.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="cta" 
              size="xl"
              onClick={onGetStarted}
              className="group"
            >
              Start Trading Smart
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="trading" size="xl">
              View Live Dashboard
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">AI Predictions</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning algorithms analyze market patterns for accurate stock price forecasting.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <Shield className="h-12 w-12 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">F&O Strategies</h3>
                <p className="text-muted-foreground text-sm">
                  Expert futures and options calls with precise entry and exit points.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <Zap className="h-12 w-12 text-warning mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized stock picks based on your risk profile and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-success rounded-full animate-pulse animation-delay-300" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-warning rounded-full animate-pulse animation-delay-700" />
    </section>
  );
};

export default Hero;
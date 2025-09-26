import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Badge } from "./ui/enhanced-badge";
import { Progress } from "@/components/ui/progress";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Award, Star, TrendingUp, Shield, Zap, Eye } from "lucide-react";
import StockSearch from "./StockSearch";

const radarData = [
  { subject: 'Growth', A: 120, B: 110, fullMark: 150 },
  { subject: 'Value', A: 98, B: 130, fullMark: 150 },
  { subject: 'Quality', A: 86, B: 95, fullMark: 150 },
  { subject: 'Momentum', A: 99, B: 85, fullMark: 150 },
  { subject: 'Size', A: 85, B: 90, fullMark: 150 },
  { subject: 'Volatility', A: 65, B: 85, fullMark: 150 },
];

const riskReturnData = [
  { risk: 5, return: 8, name: 'AAPL', size: 150 },
  { risk: 12, return: 15, name: 'TSLA', size: 120 },
  { risk: 8, return: 12, name: 'MSFT', size: 180 },
  { risk: 15, return: 18, name: 'NVDA', size: 100 },
  { risk: 6, return: 9, name: 'GOOGL', size: 160 },
  { risk: 20, return: 25, name: 'AMZN', size: 140 },
];

const recommendations = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    recommendation: 'STRONG BUY',
    price: 178.50,
    target: 195.00,
    upside: 9.24,
    riskScore: 7.2,
    confidence: 92,
    reasons: ['Strong Q4 earnings', 'iPhone demand surge', 'Services growth'],
    sector: 'Technology',
    marketCap: '2.8T'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    recommendation: 'BUY',
    price: 378.85,
    target: 410.00,
    upside: 8.22,
    riskScore: 6.8,
    confidence: 88,
    reasons: ['Cloud revenue growth', 'AI integration', 'Enterprise demand'],
    sector: 'Technology',
    marketCap: '2.8T'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    recommendation: 'HOLD',
    price: 722.48,
    target: 750.00,
    upside: 3.81,
    riskScore: 8.9,
    confidence: 75,
    reasons: ['AI boom continues', 'High valuation', 'Competition rising'],
    sector: 'Technology',
    marketCap: '1.8T'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    recommendation: 'BUY',
    price: 2680.30,
    target: 2850.00,
    upside: 6.33,
    riskScore: 7.5,
    confidence: 85,
    reasons: ['Search dominance', 'Cloud growth', 'YouTube strength'],
    sector: 'Technology',
    marketCap: '1.7T'
  },
];

const getRecommendationColor = (rec: string) => {
  switch (rec) {
    case 'STRONG BUY': return 'success';
    case 'BUY': return 'default';
    case 'HOLD': return 'secondary';
    case 'SELL': return 'destructive';
    default: return 'secondary';
  }
};

const StockRecommendations = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Smart <span className="bg-gradient-success bg-clip-text text-transparent">Stock Recommendations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered stock analysis combining fundamental, technical, and sentiment analysis for optimal portfolio allocation.
          </p>
        </div>

        {/* Stock Search */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Get Stock Recommendations</h3>
            <StockSearch 
              onStockSelect={(ticker) => {
                console.log('Selected ticker for recommendations:', ticker);
                // Here you would fetch recommendations for the selected ticker
              }}
              placeholder="Search for stock recommendations"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Factor Analysis */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-warning" />
                Multi-Factor Analysis
              </CardTitle>
              <CardDescription>Investment factor breakdown for top recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 150]}
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Radar
                      name="Top Pick"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary) / 0.3)"
                      strokeWidth={2}
                    />
                    <Radar
                      name="Market Avg"
                      dataKey="B"
                      stroke="hsl(var(--muted-foreground))"
                      fill="hsl(var(--muted-foreground) / 0.1)"
                      strokeWidth={1}
                      strokeDasharray="5 5"
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Risk-Return Matrix */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-info" />
                Risk-Return Matrix
              </CardTitle>
              <CardDescription>Portfolio positioning analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={riskReturnData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      dataKey="risk" 
                      name="Risk"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="return" 
                      name="Expected Return"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--card-foreground))'
                      }}
                      formatter={(value, name) => [
                        `${value}%`, 
                        name === 'risk' ? 'Risk Score' : 'Expected Return'
                      ]}
                    />
                    <Scatter 
                      dataKey="size" 
                      fill="hsl(var(--primary))"
                      fillOpacity={0.7}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations List */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Top Stock Recommendations
            </CardTitle>
            <CardDescription>AI-curated picks based on comprehensive analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {recommendations.map((stock) => (
                <div key={stock.symbol} className="p-6 bg-secondary/20 rounded-lg border border-border hover:shadow-card transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-xl font-bold">{stock.symbol}</div>
                        <div className="text-sm text-muted-foreground">{stock.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {stock.sector} • Market Cap: ${stock.marketCap}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant={getRecommendationColor(stock.recommendation)}>
                        {stock.recommendation}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-2">
                        Confidence: {stock.confidence}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Current Price</div>
                      <div className="text-lg font-bold">${stock.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Price Target</div>
                      <div className="text-lg font-bold text-success">${stock.target}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Upside Potential</div>
                      <div className="text-lg font-bold text-primary">+{stock.upside}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Risk Score</div>
                      <div className="flex items-center gap-2">
                        <Progress value={stock.riskScore * 10} className="flex-1" />
                        <span className="text-sm font-semibold">{stock.riskScore}/10</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Key Investment Reasons</div>
                    <div className="flex flex-wrap gap-2">
                      {stock.reasons.map((reason, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {reason}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="cta" size="sm" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Add to Portfolio
                    </Button>
                    <Button variant="trading" size="sm" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Detailed Analysis
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Set Alert
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StockRecommendations;
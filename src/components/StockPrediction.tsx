import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";

const stockData = [
  { time: '09:30', actual: 150, predicted: 148, volume: 1200 },
  { time: '10:00', actual: 152, predicted: 151, volume: 1400 },
  { time: '10:30', actual: 148, predicted: 149, volume: 1600 },
  { time: '11:00', actual: 155, predicted: 156, volume: 1800 },
  { time: '11:30', actual: 158, predicted: 157, volume: 2000 },
  { time: '12:00', actual: 162, predicted: 163, volume: 1700 },
  { time: '12:30', actual: 160, predicted: 161, volume: 1500 },
  { time: '13:00', actual: 165, predicted: 164, volume: 1900 },
];

const predictions = [
  { stock: 'AAPL', current: 178.50, predicted: 185.20, confidence: 87, action: 'BUY', change: 3.75 },
  { stock: 'GOOGL', current: 2680.30, predicted: 2590.15, confidence: 92, action: 'SELL', change: -3.37 },
  { stock: 'TSLA', current: 243.84, predicted: 267.50, confidence: 79, action: 'BUY', change: 9.70 },
  { stock: 'MSFT', current: 378.85, predicted: 395.20, confidence: 85, action: 'BUY', change: 4.31 },
];

const StockPrediction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            AI-Powered <span className="bg-gradient-primary bg-clip-text text-transparent">Stock Predictions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our advanced machine learning models analyze market patterns to predict stock movements with high accuracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Chart */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Real-time vs Predicted Price
              </CardTitle>
              <CardDescription>AAPL - Apple Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="time" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--card-foreground))'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={false}
                      name="Actual Price"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="hsl(var(--success))" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Predicted Price"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Volume Chart */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                Trading Volume
              </CardTitle>
              <CardDescription>Volume analysis for better predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="time" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--card-foreground))'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="hsl(var(--warning))" 
                      fill="hsl(var(--warning) / 0.3)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Predictions Table */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-warning" />
              Today's Predictions
            </CardTitle>
            <CardDescription>AI-generated buy/sell recommendations with confidence scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {predictions.map((pred) => (
                <div key={pred.stock} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg border border-border hover:shadow-card transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold">{pred.stock}</div>
                    <div className="text-sm text-muted-foreground">
                      Current: ${pred.current.toFixed(2)}
                    </div>
                    <div className="text-sm">
                      Target: <span className="font-semibold">${pred.predicted.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-1 text-sm ${pred.change > 0 ? 'text-success' : 'text-destructive'}`}>
                      {pred.change > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      {pred.change > 0 ? '+' : ''}{pred.change.toFixed(2)}%
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Confidence: {pred.confidence}%
                    </div>
                    
                    <Button 
                      variant={pred.action === 'BUY' ? 'success' : 'destructive'} 
                      size="sm"
                      className="min-w-16"
                    >
                      {pred.action}
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

export default StockPrediction;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Badge } from "./ui/enhanced-badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Target, ArrowUp, ArrowDown, Clock, DollarSign } from "lucide-react";

const optionsData = [
  { strike: 170, callOI: 15420, putOI: 8900, callVolume: 2340, putVolume: 1200 },
  { strike: 175, callOI: 22100, putOI: 12300, callVolume: 3456, putVolume: 1890 },
  { strike: 180, callOI: 18950, putOI: 15600, callVolume: 2890, putVolume: 2340 },
  { strike: 185, callOI: 12400, putOI: 19800, callVolume: 1890, putVolume: 3210 },
  { strike: 190, callOI: 8900, putOI: 24500, callVolume: 1230, putVolume: 4120 },
];

const foRecommendations = [
  {
    symbol: 'AAPL',
    type: 'CALL',
    strike: 180,
    expiry: '2024-03-15',
    premium: 4.50,
    target: 6.80,
    stopLoss: 3.20,
    probability: 75,
    timeLeft: '5 days',
    status: 'ACTIVE'
  },
  {
    symbol: 'GOOGL',
    type: 'PUT',
    strike: 2650,
    expiry: '2024-03-22',
    premium: 85.30,
    target: 125.00,
    stopLoss: 65.00,
    probability: 68,
    timeLeft: '12 days',
    status: 'ACTIVE'
  },
  {
    symbol: 'TSLA',
    type: 'CALL',
    strike: 250,
    expiry: '2024-03-08',
    premium: 12.80,
    target: 18.50,
    stopLoss: 9.60,
    probability: 82,
    timeLeft: '2 days',
    status: 'URGENT'
  },
];

const pnlData = [
  { name: 'Profitable Trades', value: 65, color: 'hsl(var(--success))' },
  { name: 'Loss Trades', value: 25, color: 'hsl(var(--destructive))' },
  { name: 'Breakeven', value: 10, color: 'hsl(var(--warning))' },
];

const OptionsTrading = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-success bg-clip-text text-transparent">F&O Trading</span> Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced futures and options strategies with precise entry, exit, and risk management recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Options Chain */}
          <Card className="lg:col-span-2 bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Options Chain Analysis
              </CardTitle>
              <CardDescription>Open Interest and Volume Analysis - AAPL</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={optionsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="strike" 
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
                    <Bar 
                      dataKey="callOI" 
                      fill="hsl(var(--success))"
                      name="Call OI"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar 
                      dataKey="putOI" 
                      fill="hsl(var(--destructive))"
                      name="Put OI"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* P&L Distribution */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-warning" />
                Trade Success Rate
              </CardTitle>
              <CardDescription>Last 30 days performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pnlData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pnlData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {pnlData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Recommendations */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-info" />
              Active F&O Recommendations
            </CardTitle>
            <CardDescription>Live options trading signals with entry and exit points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {foRecommendations.map((rec, index) => (
                <div key={index} className="p-6 bg-secondary/20 rounded-lg border border-border hover:shadow-card transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-xl font-bold">{rec.symbol}</div>
                      <Badge 
                        variant={rec.type === 'CALL' ? 'default' : 'destructive'}
                        className="flex items-center gap-1"
                      >
                        {rec.type === 'CALL' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {rec.type}
                      </Badge>
                      <Badge 
                        variant={rec.status === 'URGENT' ? 'destructive' : 'secondary'}
                      >
                        {rec.status}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Probability</div>
                      <div className="text-lg font-bold text-primary">{rec.probability}%</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-5 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Strike Price</div>
                      <div className="font-semibold">${rec.strike}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Premium</div>
                      <div className="font-semibold text-primary">${rec.premium}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Target</div>
                      <div className="font-semibold text-success">${rec.target}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Stop Loss</div>
                      <div className="font-semibold text-destructive">${rec.stopLoss}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Time Left</div>
                      <div className="font-semibold">{rec.timeLeft}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="success" size="sm">
                      Execute Trade
                    </Button>
                    <Button variant="trading" size="sm">
                      View Details
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

export default OptionsTrading;
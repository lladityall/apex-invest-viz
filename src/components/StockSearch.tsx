import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "./ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Building2 } from "lucide-react";

interface StockSearchProps {
  onStockSelect: (ticker: string) => void;
  placeholder?: string;
}

// Mock stock data - in a real app, this would come from Yahoo Finance API
const mockStockData = [
  { symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', exchange: 'NASDAQ' },
  { symbol: 'TSLA', name: 'Tesla, Inc.', exchange: 'NASDAQ' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', exchange: 'NASDAQ' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', exchange: 'NASDAQ' },
  { symbol: 'META', name: 'Meta Platforms, Inc.', exchange: 'NASDAQ' },
  { symbol: 'NFLX', name: 'Netflix, Inc.', exchange: 'NASDAQ' },
  { symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', exchange: 'NYSE' },
  { symbol: 'QQQ', name: 'Invesco QQQ Trust', exchange: 'NASDAQ' },
];

const StockSearch = ({ onStockSelect, placeholder = "Search ticker symbol..." }: StockSearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof mockStockData>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.length > 0) {
      setIsSearching(true);
      
      // Simulate API delay
      setTimeout(() => {
        const filteredResults = mockStockData.filter(stock => 
          stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stock.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
        setIsSearching(false);
      }, 300);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  };

  const handleSelectStock = (ticker: string) => {
    setQuery(ticker);
    setResults([]);
    onStockSelect(ticker);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 bg-card/50 border-border focus:border-primary"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>
      
      {results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-60 overflow-y-auto bg-card/95 backdrop-blur-sm border-border shadow-card">
          <CardContent className="p-0">
            {results.map((stock) => (
              <Button
                key={stock.symbol}
                variant="ghost"
                className="w-full justify-start p-3 h-auto rounded-none hover:bg-secondary/50"
                onClick={() => handleSelectStock(stock.symbol)}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">{stock.symbol}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-foreground">{stock.name}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Building2 className="h-3 w-3" />
                      {stock.exchange}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StockSearch;
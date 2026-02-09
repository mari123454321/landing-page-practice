const mockCryptoPrices = [
    { symbol: "ETH", name: "Ethereum", price: "$2,116.52", change: "+1.89%", color: "bg-purple-500/20", textColor: "text-purple-400" },
    { symbol: "SOL", name: "Solana", price: "$91.22", change: "-0.57%", color: "bg-blue-500/20", textColor: "text-blue-400", isNegative: true },
    { symbol: "BNB", name: "Binance", price: "$697.84", change: "+3.26%", color: "bg-yellow-500/20", textColor: "text-yellow-400" },
    { symbol: "XRP", name: "Ripple", price: "$1.44", change: "-1.88%", color: "bg-cyan-500/20", textColor: "text-cyan-400", isNegative: true },
]

import { TrendingUp } from 'lucide-react'

function CryptoCards() {
    return (
        <div className="hidden lg:block">
            <div className="glass rounded-2xl ">
                <div className="rounded-xl p-6 space-y-4">
                    {/* bitcoin card */}
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <span className="text-orange-500 text-xl font-bold">₿</span>
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">BTC/USD</p>
                                    <p className="text-xs text-muted-foreground">Bitcoin</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-foreground">$71,361</p>
                                <div className="flex items-center gap-1 justify-end">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <span className="text-primary text-sm font-medium">+2.45%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Crypto Cards Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {mockCryptoPrices.map((crypto) => (
                            <div key={crypto.symbol} className="bg-linear-to-br from-primary/20 to-primary/5 rounded-lg p-4 border border-border/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-8 h-8 rounded-full ${crypto.color} flex items-center justify-center`}>
                                        <span className={`${crypto.textColor} text-xs font-bold`}>{crypto.symbol}</span>
                                    </div>
                                    <span className="text-sm text-foreground">{crypto.symbol}/USD</span>
                                </div>
                                <p className="text-lg font-semibold text-foreground">{crypto.price}</p>
                                <span className={`text-xs ${crypto.isNegative ? 'text-red-500' : 'text-primary'}`}>
                                    24h: {crypto.change}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCards


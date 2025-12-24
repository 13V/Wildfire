import FlywheelDashboard from '@/components/FlywheelDashboard';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-mono">

            {/* Brutalist Header */}
            <div className="max-w-4xl w-full z-10 flex flex-col items-start gap-8">

                <div className="w-full flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase whitespace-nowrap">
                        Wildfire
                    </h1>
                    <span className="hidden md:block text-xs text-stone-500 mb-2">
                        PROTOCOL_V1.0
                    </span>
                </div>

                <p className="max-w-xl text-lg md:text-xl text-stone-400 leading-relaxed">
                    Turn trading volatility into permanent value. <br />
                    <span className="text-white">Burn. Buyback. Repeat.</span>
                </p>

                {/* Dashboard Component */}
                <div className="w-full my-8">
                    <FlywheelDashboard />
                </div>

                {/* Action Links */}
                <div className="flex gap-6 text-sm uppercase tracking-widest w-full justify-between md:justify-start">
                    <a
                        href="https://pump.fun/board"
                        target="_blank"
                        className="border-b border-white hover:bg-white hover:text-black transition-colors pb-1"
                    >
                        Ignite Position
                    </a>
                    <a
                        href="https://t.me/wildfire_bot"
                        target="_blank"
                        className="border-b border-stone-600 text-stone-400 hover:text-white hover:border-white transition-colors pb-1"
                    >
                        Telegram Bot
                    </a>
                </div>
            </div>

        </main>
    )
}

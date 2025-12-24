import FlywheelDashboard from '@/components/FlywheelDashboard';
import { Flame } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Ambient Background - Simplified */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none opacity-40" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-5xl w-full z-10 flex flex-col items-start gap-12">

                {/* Header Section */}
                <header className="w-full flex justify-between items-center">
                    <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                        <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
                            $WILDFIRE
                        </span>
                    </div>
                </header>

                {/* Hero Content */}
                <div className="w-full text-center md:text-left space-y-6">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                        WILDFIRE
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-400 font-light">
                        The autonomous protocol that turns trading volatility into permanent value. <br />
                        <span className="text-orange-500 font-bold"> Burn. Buyback. Repeat.</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <a
                            href="https://pump.fun/board"
                            target="_blank"
                            className="bg-white text-black px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
                        >
                            IGNITE POSITION <Flame size={18} className="text-orange-600" />
                        </a>
                    </div>
                </div>

                {/* Real-time Dashboard */}
                <div className="w-full">
                    <FlywheelDashboard />
                </div>

            </div>
        </main>
    )
}

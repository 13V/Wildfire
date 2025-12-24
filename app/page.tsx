import FlywheelDashboard from "@/components/FlywheelDashboard";
import { Flame, ArrowRight, Zap, TrendingUp } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-orange-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[400px] h-[400px] bg-red-700 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-black/50 backdrop-blur-md pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
                    <code className="text-orange-500 font-bold">$WILDFIRE</code>
                    <span className="ml-2 text-white/60">PROTOCOL_V1.0</span>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-white/80 hover:text-white transition-colors"
                        href="https://pump.fun/board"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <span className="font-bold text-orange-500">
                            ANTIGRAVITY
                        </span>
                    </a>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-orange-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-to-tl after:from-red-600 after:via-red-600 after:to-transparent after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <h1 className="relative text-6xl md:text-8xl font-black tracking-tighter text-center mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    WILDFIRE
                </h1>
                <p className="relative text-lg md:text-xl text-center max-w-2xl text-zinc-400 mb-10">
                    The autonomous protocol that turns trading volatility into permanent value.
                    <span className="block mt-2 text-orange-500 font-semibold">Burn. Buyback. Repeat.</span>
                </p>

                <div className="flex gap-4 relative">
                    <a href="https://pump.fun" target="_blank" className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-wide rounded hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] flex items-center gap-2">
                        Ignite Position <Flame size={18} className="group-hover:fill-current" />
                    </a>
                    <a href="#dashboard" className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-wide rounded hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                        Monitor Stats <TrendingUp size={18} />
                    </a>
                </div>
            </div>

            <div id="dashboard" className="w-full max-w-6xl mt-24 mb-32 z-10">
                <FlywheelDashboard />
            </div>

            <div className="z-10 mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
                <FeatureCard
                    title="Auto-Claim"
                    desc="Protocol automatically sweeps trading fees from the bonding curve instantly."
                    icon={<Zap className="text-yellow-400" />}
                />
                <FeatureCard
                    title="Buy Pressure"
                    desc="100% of claimed fees are routed to market-buy $WILDFIRE from the pool."
                    icon={<TrendingUp className="text-green-400" />}
                />
                <FeatureCard
                    title="Supply Burn"
                    desc="Bought tokens are sent to the incinerator, permanently reducing supply."
                    icon={<Flame className="text-orange-500" />}
                />
            </div>
        </main>
    );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="group rounded-lg border border-white/10 px-5 py-4 transition-colors hover:border-orange-500/50 hover:bg-orange-950/20">
            <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-3`}>
                {icon}
                {title}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {desc}
            </p>
        </div>
    )
}

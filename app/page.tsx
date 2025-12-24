"use client";

import FlywheelDashboard from '@/components/FlywheelDashboard';
import { Flame, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-orange-500/30">

            {/* Ambient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-5xl w-full z-10 flex flex-col items-start gap-12">

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full flex justify-between items-center"
                >
                    <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                        <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
                            $WILDFIRE PROTOCOL_V1
                        </span>
                    </div>
                    <div className="flex gap-4 text-xs font-mono text-zinc-500">
                        <span>ETHICAL DEFI</span>
                        <span>•</span>
                        <span>AUTONOMOUS</span>
                    </div>
                </motion.header>

                {/* Hero Content */}
                <div className="w-full text-center md:text-left space-y-8">
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_80px_rgba(255,100,0,0.2)]"
                        >
                            WILDFIRE
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-2xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-wide"
                        >
                            The autonomous protocol that turns trading volatility into permanent value.
                            <br />
                            <span className="text-orange-500 font-bold"> Burn. Buyback. Repeat.</span>
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start"
                    >
                        <a
                            href="https://pump.fun/board"
                            target="_blank"
                            className="group bg-white text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
                        >
                            IGNITE POSITION <Flame size={18} className="text-orange-600 group-hover:animate-pulse" />
                        </a>
                        <a
                            href="https://t.me/wildfire_bot"
                            target="_blank"
                            className="px-8 py-4 rounded-lg font-mono text-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-300 hover:text-white flex items-center justify-center gap-2 group"
                        >
                            TELEGRAM BOT <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Real-time Dashboard */}
                <div className="w-full">
                    <FlywheelDashboard />
                </div>

            </div>
        </main>
    )
}

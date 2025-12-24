"use client";

import { motion } from "framer-motion";
import { Flame, RefreshCcw, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export default function FlywheelDashboard() {
    const [feesClaimed, setFeesClaimed] = useState(0);
    const [tokensBurned, setTokensBurned] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_BOT_API_URL || 'http://localhost:3001';
                const res = await fetch(`${apiUrl}/api/stats`);
                const data = await res.json();
                setFeesClaimed(data.totalFeesClaimed);
                setTokensBurned(data.totalTokensBought);
            } catch (e) {
                console.warn('Bot API not reachable');
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
            <StatCard
                label="TOTAL FEES CLAIMED"
                value={`${feesClaimed.toFixed(2)} SOL`}
                icon={<DollarSign className="text-green-500" />}
                borderColor="border-green-500/30"
            />

            <div className="relative group p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-50 animate-pulse" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    <RefreshCcw size={32} className="text-orange-500 mb-2" />
                </motion.div>
                <h3 className="text-xs text-white/50 uppercase tracking-widest mb-1 z-10">Flywheel Status</h3>
                <span className="text-xl font-bold text-white z-10">ACTIVE</span>
            </div>

            <StatCard
                label="TOKENS INCINERATED"
                value={tokensBurned.toLocaleString()}
                icon={<Flame className="text-red-500" />}
                borderColor="border-red-500/30"
            />
        </div>
    );
}

function StatCard({ label, value, icon, borderColor }: { label: string, value: string, icon: React.ReactNode, borderColor: string }) {
    return (
        <div className={`p-6 rounded-xl border ${borderColor} bg-white/5 backdrop-blur-md flex flex-col justify-between items-start`}>
            <div className="flex w-full justify-between items-start mb-4">
                <span className="text-xs text-zinc-500 font-bold tracking-wider">{label}</span>
                {icon}
            </div>
            <span className="text-3xl font-bold text-white tracking-tighter">
                {value}
            </span>
        </div>
    )
}

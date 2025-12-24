"use client";

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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
            <StatCard
                label="FEES CLAIMED"
                value={`${feesClaimed.toFixed(2)} SOL`}
            />
            <StatCard
                label="TOKENS INCINERATED"
                value={tokensBurned.toLocaleString()}
            />
            <div className="md:col-span-2 border border-stone-800 p-4 flex items-center justify-between text-xs uppercase tracking-wider text-stone-500">
                <span>Status: Active</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Operational
                </span>
            </div>
        </div>
    );
}

function StatCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="p-8 border border-white/10 bg-black flex flex-col gap-2">
            <span className="text-xs text-stone-500 uppercase tracking-widest">{label}</span>
            <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                {value}
            </span>
        </div>
    );
}

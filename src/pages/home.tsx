import AppLayout from "@/layouts/AppLayout";
import ModeToggle from "@/components/ui/mode-toggle";
import { Rocket, Download, Users, Zap, Activity, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <AppLayout>
      <div className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-background">
        
        {/* Subtle Background Glow using ONLY your main color */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-main/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 relative z-10 py-12 md:py-20">

          {/* Header Controls */}
          <div className="absolute top-0 right-4 md:right-0">
            <ModeToggle />
          </div>

          <div className="text-center space-y-12">

            {/* Status Pill - Kept original green pulse, improved container */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium border border-line rounded-full px-5 py-2 bg-secondary/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-foreground/80">Next-Gen Bot Platform</span>
              </span>
            </div>

            {/* Branding - Restored your specific gradient */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
                CYPHER-X
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-foreground">
                The Ultimate WhatsApp Bot Experience
              </p>

              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                Deploy powerful CypherX and SPACE-MD bots with advanced features,
                multi-session support, and high reliability.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/deploy"
                className="group relative px-8 py-4 rounded-2xl bg-main text-background font-bold text-lg hover:opacity-90 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Quick Deploy</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <a
                href="/download"
                className="px-8 py-4 rounded-2xl border border-line hover:bg-secondary font-medium text-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-muted" />
                <span>Manual Install</span>
              </a>
            </div>

            {/* Stats Grid - Using Border Line and Main colors only */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              <StatCard 
                value="50K+" 
                label="Active Users" 
                icon={<Users className="w-5 h-5 text-main" />} 
              />
              <StatCard 
                value="300+" 
                label="Features" 
                icon={<Zap className="w-5 h-5 text-main" />} 
              />
              <StatCard 
                value="99.9%" 
                label="Uptime" 
                icon={<Activity className="w-5 h-5 text-main" />} 
              />
              <StatCard 
                value="24/7" 
                label="Availability" 
                icon={<ShieldCheck className="w-5 h-5 text-main" />} 
              />
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}

/* --- Components --- */

function StatCard({ value, label, icon }: { value: string; label: string, icon: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl border border-line bg-secondary/20 hover:bg-secondary/40 transition-colors text-center flex flex-col items-center justify-center gap-3">
      <div className="p-2 rounded-full bg-secondary/50">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-main">{value}</p>
        <p className="text-xs font-medium text-muted uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}

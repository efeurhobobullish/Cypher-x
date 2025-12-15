import AppLayout from "@/layouts/AppLayout";
import ModeToggle from "@/components/ui/mode-toggle";
import { Rocket, Download, Users, Zap, Activity, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <AppLayout>
      {/* Container with relative positioning for background effects */}
      <div className="relative min-h-[100dvh] w-full overflow-hidden bg-background selection:bg-main/20">
        
        {/* Abstract Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-main/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        {/* Optional: Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center min-h-[100dvh] py-20">
          
          {/* Header Actions */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10">
            <ModeToggle />
          </div>

          <div className="max-w-4xl mx-auto w-full text-center space-y-12">
            
            {/* Animated Status Pill */}
            <div className="flex justify-center fade-in-down">
              <span className="group relative inline-flex items-center gap-2 text-xs md:text-sm font-medium border border-main/20 rounded-full px-4 py-1.5 bg-background/50 backdrop-blur-md hover:border-main/50 transition-colors cursor-default">
                <span className="absolute inset-0 rounded-full bg-main/10 blur-md group-hover:bg-main/20 transition-all" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="relative text-foreground/80">Next-Gen Bot Platform</span>
              </span>
            </div>

            {/* Main Branding */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40">
                  CYPHER
                </span>
                <span className="text-main ml-2">-X</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-foreground/90">
                The Ultimate WhatsApp Bot Experience
              </p>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Deploy powerful <span className="text-foreground font-semibold">CypherX</span> and <span className="text-foreground font-semibold">SPACE-MD</span> bots with advanced automation, multi-session capabilities, and enterprise-grade reliability.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/deploy"
                className="group relative px-8 py-4 rounded-2xl bg-main text-white font-bold text-lg shadow-lg shadow-main/25 hover:shadow-main/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Rocket className="w-5 h-5" />
                <span>Quick Deploy</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <a
                href="/download"
                className="px-8 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary/50 font-semibold text-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-muted-foreground" />
                <span>Manual Install</span>
              </a>
            </div>

            {/* Stats Grid - Glass Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              <StatCard 
                value="50K+" 
                label="Active Users" 
                icon={<Users className="w-5 h-5 text-blue-500" />} 
              />
              <StatCard 
                value="300+" 
                label="Modules" 
                icon={<Zap className="w-5 h-5 text-yellow-500" />} 
              />
              <StatCard 
                value="99.9%" 
                label="Uptime" 
                icon={<Activity className="w-5 h-5 text-green-500" />} 
              />
              <StatCard 
                value="Secure" 
                label="Encryption" 
                icon={<ShieldCheck className="w-5 h-5 text-purple-500" />} 
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
    <div className="group relative p-4 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md hover:bg-secondary/40 transition-colors text-center flex flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Subtle hover glow inside card */}
      <div className="absolute inset-0 bg-gradient-to-tr from-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="p-2 rounded-full bg-secondary/50 mb-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}

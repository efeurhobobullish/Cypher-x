import AppLayout from "@/layouts/AppLayout";
import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";
import {
  Rocket,
  Download,
  Users,
  Zap,
  Activity,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import type { ReactNode } from "react";

export default function Home() {
  return (
    <AppLayout>
      <Pattern>
        <section className="relative min-h-[100dvh] overflow-hidden bg-background flex items-center justify-center">

          {/* Background Glow (unchanged colors) */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[360px] bg-main/10 blur-[110px] rounded-full" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-24">

            {/* Mode Toggle */}
            <div className="absolute right-4 top-4 md:right-0">
              <ModeToggle />
            </div>

            <div className="text-center space-y-14">

              {/* Status */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary/50 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-foreground/80">
                    Next-Gen Bot Platform
                  </span>
                </span>
              </div>

              {/* Branding */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
                  CYPHER-X
                </h1>

                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  The Ultimate WhatsApp Bot Experience
                </p>

                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
                  Deploy powerful CypherX and SPACE-MD bots with advanced features,
                  multi-session support, and high reliability.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href="/deploy"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-main px-8 py-4 text-lg font-bold text-background transition-all hover:opacity-90 w-full sm:w-auto"
                >
                  <Rocket className="h-5 w-5" />
                  <span>Quick Deploy</span>
                  <ChevronRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>

                <a
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line px-8 py-4 text-lg font-medium transition-colors hover:bg-secondary w-full sm:w-auto"
                >
                  <Download className="h-5 w-5 text-muted" />
                  <span>Manual Install</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
                <StatCard value="50K+" label="Active Users" icon={<Users />} />
                <StatCard value="300+" label="Features" icon={<Zap />} />
                <StatCard value="99.9%" label="Uptime" icon={<Activity />} />
                <StatCard value="24/7" label="Availability" icon={<ShieldCheck />} />
              </div>

            </div>
          </div>
        </section>
      </Pattern>
    </AppLayout>
  );
}

/* -------- Stat Card -------- */

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-secondary/20 p-5 text-center transition-colors hover:bg-secondary/40">
      <div className="rounded-full bg-secondary/50 p-2 text-main">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-main">{value}</p>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {label}
        </p>
      </div>
    </div>
  );
}
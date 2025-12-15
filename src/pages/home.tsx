import ModeToggle from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-10">

        {/* Top Right Toggle */}
        <div className="flex justify-end">
          <ModeToggle />
        </div>

        {/* Status */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 text-sm border border-line rounded-full px-4 py-2 bg-secondary/70">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Next-Gen Bot Platform
          </span>
        </div>

        {/* Branding */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
            CYPHER-X
          </h1>

          <p className="text-lg md:text-xl font-medium text-main/90">
            The Ultimate WhatsApp Bot Experience
          </p>

          <p className="text-muted max-w-xl mx-auto">
            Deploy powerful CypherX and SPACE-MD bots with advanced features,
            multi-session support, and high reliability.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/deploy"
            className="px-6 py-3 rounded-xl bg-main text-background font-medium hover:opacity-90 transition"
          >
            Quick Deploy
          </a>

          <a
            href="/download"
            className="px-6 py-3 rounded-xl border border-line font-medium hover:bg-secondary transition"
          >
            Manual Install
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          <Stat value="50K+" label="Active Users" />
          <Stat value="300+" label="Features" />
          <Stat value="99.9%" label="Uptime" />
          <Stat value="24/7" label="Availability" />
        </div>

      </div>
    </div>
  );
}

/* Small stat component */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center space-y-1">
      <p className="text-2xl font-bold text-main">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
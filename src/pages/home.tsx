import AppLayout from "@/layouts/AppLayout";
import  ModeToggle from "@/components/ui";
import { Github, Rocket } from "lucide-react";

export default function Home() {
  return (
    <AppLayout>
      <div className="min-h-[100dvh] relative z-10 flex items-center justify-center">

        <div className="max-w-2xl w-full text-center space-y-8">

          {/* Top actions */}
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/your-username/cypher-x-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 text-sm bg-secondary/70 hover:bg-secondary transition"
            >
              <Github size={16} />
              View on GitHub
            </a>

            <ModeToggle />
          </div>

          {/* Hero */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
              Cypher X Bot
            </h1>

            <p className="text-muted text-base md:text-lg">
              A powerful, automated bot built for speed, reliability, and seamless deployment.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="/deploy"
              className="inline-flex items-center gap-3 rounded-xl bg-main text-background px-6 py-3 font-medium hover:opacity-90 transition"
            >
              <Rocket size={18} />
              Deploy Cypher X
            </a>
          </div>

          {/* Footer hint */}
          <p className="text-xs text-muted">
            Built with modern tooling • Secure • Scalable
          </p>

        </div>

      </div>
    </AppLayout>
  );
}
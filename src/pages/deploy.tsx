import AppLayout from "@/layouts/AppLayout";

export default function Deploy() {
  return (
    <AppLayout>
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-12">

          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-main">
              One-Click Deployment
            </h1>
            <p className="text-muted">
              Deploy your bots instantly on your preferred platform
            </p>
          </div>

          {/* CypherX */}
          <Section title="CypherX Deployment">
            <DeployGrid>
              <DeployCard
                name="Heroku"
                description="Cloud platform deployment"
                action="Deploy Now"
                href="#"
              />
              <DeployCard
                name="Replit"
                description="Online IDE deployment"
                action="Run on Replit"
                href="#"
              />
              <DeployCard
                name="Railway"
                description="Modern deployment platform"
                disabled
                action="Coming Soon"
              />
            </DeployGrid>
          </Section>

          {/* SPACE-MD */}
          <Section title="SPACE-MD Deployment">
            <DeployGrid>
              <DeployCard
                name="Heroku"
                description="Cloud platform deployment"
                action="Deploy Now"
                href="#"
              />
              <DeployCard
                name="Replit"
                description="Online IDE deployment"
                action="Run on Replit"
                href="#"
              />
              <DeployCard
                name="Railway"
                description="Modern deployment platform"
                disabled
                action="Coming Soon"
              />
            </DeployGrid>
          </Section>

        </div>
      </div>
    </AppLayout>
  );
}

/* ---------------- Components ---------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-main text-center">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DeployGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

function DeployCard({
  name,
  description,
  action,
  href,
  disabled,
}: {
  name: string;
  description: string;
  action: string;
  href?: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={`border border-line rounded-2xl p-6 text-center space-y-4 transition ${
        disabled
          ? "opacity-50"
          : "hover:shadow-lg hover:border-main"
      }`}
    >
      <h3 className="text-xl font-semibold text-main">{name}</h3>
      <p className="text-sm text-muted">{description}</p>

      {disabled ? (
        <button
          disabled
          className="w-full py-2 rounded-xl border border-line text-muted cursor-not-allowed"
        >
          {action}
        </button>
      ) : (
        <a
          href={href}
          className="inline-block w-full py-2 rounded-xl bg-main text-background font-medium hover:opacity-90 transition"
        >
          {action}
        </a>
      )}
    </div>
  );
}
import { BottomTabs } from "@/components/ui";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-[100dvh] bg-background relative">

      {/* Page content */}
      <main className="pb-20 px-4">
        {children}
      </main>

      {/* Bottom navigation */}
      <BottomTabs />

    </div>
  );
}
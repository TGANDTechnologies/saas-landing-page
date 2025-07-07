import type { ReactNode } from "react";


export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      

      <main className="relative">
        {children}
      </main>

      
    </div>
  );
}

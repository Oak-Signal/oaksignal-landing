import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About OakSignal",
  description: "Learn about OakSignal's mission to provide modern digital tools for cadet units and youth organizations.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl">
      <div className="space-y-12">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About OakSignal</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
             OakSignal is an independently developed platform dedicated to modernizing the administrative and operational workflows of cadet units and youth organizations.
          </p>
        </section>

         {/* Disclaimer Section - Prominent */}
         <section className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-amber-600 dark:text-amber-500">⚠</span> Important Disclaimer
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            OakSignal is a privately developed software initiative and is <strong>not</strong> an official system of the Department of National Defence (DND), the Canadian Armed Forces (CAF), or the Cadets and Junior Canadian Rangers (CJCR). While our tools are designed to align with cadet program structures and policies, they are independent third-party solutions.
          </p>
        </section>

        {/* Mission / Who It's For */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Our Mission</h2>
          <p className="leading-7">
            The administrative burden on cadet instructors and volunteers is significant. Our mission is to reduce that burden through intuitive, reliable software. OakSignal exists to give time back to leaders so they can focus on what matters most: mentoring youth and delivering effective training.
          </p>
          <p className="leading-7">
            We operate with a strict multi-tenant architecture, ensuring that each unit&apos;s data is isolated, secure, and accessible only to authorized personnel.
          </p>
        </section>

        {/* Products Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Our Platform</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold text-lg mb-2">SignalsMaster <span className="text-xs font-medium text-green-700 dark:text-green-500">Ready for Beta</span></h3>
              <p className="text-sm text-muted-foreground mb-4">Naval Signal Flag Training</p>
              <p className="text-sm leading-relaxed">
                An interactive, mobile-friendly app for Sea Cadets to learn, practice, and master naval signal flags through quizzes, ranked mode, and formal exams. Currently single-tenant, with multi-tenant support in development.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold text-lg mb-2">CITADEL <span className="text-xs font-medium text-blue-700 dark:text-blue-400">Pre-Alpha</span></h3>
              <p className="text-sm text-muted-foreground mb-4">Inventory & Logistics</p>
              <p className="text-sm leading-relaxed">
                A multi-tenant inventory management platform (CIMS) that lets multiple cadet units track equipment, issuance, and returns with isolated data, role-based permissions, and a full audit trail. Currently in development.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pt-8 border-t">
          <p className="text-center text-muted-foreground">
            Interested in learning more or piloting OakSignal at your unit? <Link href="/#contact" className="text-primary hover:underline font-medium">Get in touch</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}

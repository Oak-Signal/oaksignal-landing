import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - OakSignal",
  description: "Common questions about OakSignal's status, security, and platform details.",
};

export default function FAQPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-3xl">
      <div className="space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Answers to common questions about the OakSignal platform.
          </p>
        </section>

        <div className="space-y-8">
          {/* Section: Official Status */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Official Status & Policy</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="official-status">
                <AccordionTrigger>Is OakSignal is part of the Department of National Defence?</AccordionTrigger>
                <AccordionContent>
                  No. OakSignal is an independently developed third-party platform. It is not owned, operated, or endorsed by the Department of National Defence (DND), the Canadian Armed Forces (CAF), or the Cadets and Junior Canadian Rangers (CJCR).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="policy-alignment">
                <AccordionTrigger>Does the platform follow cadet program policies?</AccordionTrigger>
                <AccordionContent>
                  Yes. We intentionally design our workflows and in-app user experience to align with cadet programs and their administration requirements (e.g., CATO, CJCR Gp Orders) to ensure the tools are relevant and useful for unit staff. 
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section: Data & Security */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Data & Security</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="data-ownership">
                <AccordionTrigger>Who owns the data entered into OakSignal?</AccordionTrigger>
                <AccordionContent>
                  The unit or organization (Tenant) retains ownership of their data. OakSignal acts as the data processor, hosting and securing the information on your behalf. We do not sell or share unit data with advertisers or third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-security">
                <AccordionTrigger>How is my data secured?</AccordionTrigger>
                <AccordionContent>
                  We utilize a strict multi-tenant architecture which ensures that each unit&apos;s data is logically isolated from others. Access is restricted to authorized user accounts authenticated via secure industry-standard protocols.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-residency">
                <AccordionTrigger>Where is the data hosted?</AccordionTrigger>
                <AccordionContent>
                  OakSignal&apos;s infrastructure is hosted in secure data centers. We prioritize keeping data within appropriate legal jurisdictions for Canadian organizations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section: Access & Cost */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Access & Availability</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-to-join">
                <AccordionTrigger>How can my unit start using OakSignal&apos;s products?</AccordionTrigger>
                <AccordionContent>
                  Access is currently by invitation or request only as we scale our infrastructure. If you are interested in a pilot program for your unit, please contact us.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost">
                <AccordionTrigger>Is there a cost to use OakSignal?</AccordionTrigger>
                <AccordionContent>
                   Our goal is to keep the platform accessible to cadet units. We are currently offering free access during our initial launch phase while we gather feedback and scale. In the future, we may introduce a subscription model to support ongoing development and maintenance, but we are committed to keeping it affordable for cadet units and youth organizations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

           {/* Section: Platform Details */}
           <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Platform Details</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products">
                <AccordionTrigger>What is the first project that is being developed by the team at OakSignal?</AccordionTrigger>
                <AccordionContent>
                  OakSignal is actively developing a mobile application called <strong>SignalsMaster</strong>, a software solution for mastering the International Code of Signals.
                </AccordionContent> 
              </AccordionItem>
              <AccordionItem value="products">
                <AccordionTrigger>What is currently being planned for the future?</AccordionTrigger>
                <AccordionContent>
                  In addition to SignalsMaster, we are planning a modern supply tool, labelled <strong>Cadet Inventory Management System</strong> designed specifically for the unique needs of cadet units. This will allow staff to track uniforms, equipment issuance, and stock levels with precision and ease, moving away from spreadsheets and paper logs.
                </AccordionContent> 
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </main>
  );
}

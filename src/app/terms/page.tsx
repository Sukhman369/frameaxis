import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        <div className="container-frame px-4 max-w-3xl">
          
          <Badge variant="brand" className="mb-4">Compliance</Badge>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-8">
            TERMS OF SERVICE
          </h1>
          
          <div className="bg-bg-surface border border-bg-border rounded-3xl p-8 space-y-6 text-sm text-text-secondary leading-relaxed shadow-sm">
            <p className="italic text-xs">Last Updated: July 15, 2026</p>
            
            <p>
              {"Welcome to FrameAxis! These Terms of Service outline the rules and regulations for the use of FrameAxis's Website and Editing Subscriptions."}
            </p>
            
            <p>
              {"By accessing this website, we assume you accept these terms and conditions. Do not continue to use FrameAxis if you do not agree to take all of the terms and conditions stated on this page."}
            </p>
            
            <h2 className="text-base font-bold text-text-primary mt-6">1. SUBSCRIPTION SUBSCRIPTION PLANS</h2>
            <p>
              {"Subscribers pay a flat recurring monthly/annual fee to acquire video editing resources. Sprints are executed queue-based on business days. Revisions can be requested endlessly as outlined per respective tier profiles. Subscription duration runs calendar month to calendar month and auto-renews unless paused or canceled ahead of renewal billing runs."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">2. UPLOAD & INGESTION LAWS</h2>
            <p>
              {"Clients represent and warrant that all raw recordings, images, vector icons, sound files, or font kits shared in the project briefs are either fully owned by them or are properly licensed. You assert full legal responsibility for any claims regarding copyright infringement stemming from materials supplied to our editor crews."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">3. DELAY WARRANTY & TURNAROUND EXCEPTIONS</h2>
            <p>
              {"While we strive to deliver first drafts inside 24/48/72 hours, delivery dates represent estimates and are contingent on file clarity, feedback response frequency, and client queue queueing volume. FrameAxis does not accept responsibility for monetary losses arising from delays in launch calendars."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">4. INTELLECTUAL PROPERTY & TRANSFER</h2>
            <p>
              {"Upon recipient fulfillment of matching subscription invoices, FrameAxis transfers all rights, interests, and title to the finalized edited videos to the subscriber. Re-renders or intermediate editing project archives (Premiere save files, AE layers, etc.) are kept in backup indices for 30 days post delivery."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">5. LIMITATION OF LIABILITY</h2>
            <p>
              {"In no event shall FrameAxis, nor any of its developers, editors, or officers, be held liable for anything arising out of or in any way connected with your use of this website or service."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">6. TERM REVISIONS</h2>
            <p>
              {"FrameAxis is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis."}
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

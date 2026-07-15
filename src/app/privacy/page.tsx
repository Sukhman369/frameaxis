import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        <div className="container-frame px-4 max-w-3xl">
          
          <Badge variant="brand" className="mb-4">Compliance</Badge>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-8">
            PRIVACY POLICY
          </h1>
          
          <div className="bg-bg-surface border border-bg-border rounded-3xl p-8 space-y-6 text-sm text-text-secondary leading-relaxed shadow-sm">
            <p className="italic text-xs">Last Updated: July 15, 2026</p>
            
            <p>
              {"At FrameAxis, accessible from https://frameaxis.com, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by FrameAxis and how we use it."}
            </p>
            
            <h2 className="text-base font-bold text-text-primary mt-6">1. INFORMATION WE COLLECT</h2>
            <p>
              {"The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."}
            </p>
            <p>
              {"If you contact us directly or fill out our project brief form, we may receive additional information about you such as your name, email address, phone number, the company name you represent, and the contents of the message and/or attachments you may send us."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">2. HOW WE USE YOUR INFORMATION</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, operate, and maintain our website assets</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website tool</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you regarding revisions, schedules, and estimates</li>
              <li>Prevent fraudulent submissions or rate limits overflow</li>
            </ul>

            <h2 className="text-base font-bold text-text-primary mt-6">3. VIDEO AND MEDIA DATA RIGHTS</h2>
            <p>
              {"When you upload raw video materials, style standards, or project briefs, FrameAxis acts strictly as a data processor. All uploaded files, intermediate sequences, and finalized edit outputs are proprietary assets covered under standard Non-Disclosure agreements from onboarding inception. We assert no rights of ownership over your submissions."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">4. THIRD-PARTY PRIVACY POLICIES</h2>
            <p>
              {"FrameAxis's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party services (such as Calendly or analytics matrices) for more detailed information."}
            </p>

            <h2 className="text-base font-bold text-text-primary mt-6">5. CONTACT US</h2>
            <p>
              {"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hello@frameaxis.com."}
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

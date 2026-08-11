import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/support' },
  title: 'Support - Fridge AI',
  description: 'Get help with Fridge AI. Contact our support team, find answers to common questions, and get assistance with technical issues.',
  openGraph: {
    title: 'Support - Fridge AI',
    description: 'Get help with Fridge AI.',
    url: 'https://www.getfridgeai.com/support',
    siteName: 'Fridge AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support - Fridge AI',
    description: 'Get help with Fridge AI.',
  },
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Support Center
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How Can We Help?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Issues
              </h3>
              <p className="text-gray-600 mb-4">
                Having trouble with the app? Check our FAQ or contact us directly.
              </p>
              <a href="#faq" className="text-green-600 hover:text-green-700 font-semibold">
                View FAQ →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Account & Billing
              </h3>
              <p className="text-gray-600 mb-4">
                Questions about subscriptions, refunds, or account management?
              </p>
              <a href="#billing" className="text-green-600 hover:text-green-700 font-semibold">
                Billing Help →
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="bg-green-50 p-8 rounded-2xl">
            <p className="text-gray-700 mb-4">
              For personalized support, reach out to our team directly:
            </p>
            <a
              href="mailto:support@getfridgeai.com"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Email: support@getfridgeai.com
            </a>
            <p className="text-gray-600 mt-4 text-sm">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                App not scanning photos correctly?
              </h3>
              <p className="text-gray-600">
                Make sure you have good lighting and that ingredients are clearly visible. Try taking photos from different angles. If issues persist, ensure you have the latest app version installed.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recipes don't match your dietary preferences?
              </h3>
              <p className="text-gray-600">
                Go to your app settings and update your dietary preferences. Our AI will then tailor recipes to your specific needs (vegan, keto, gluten-free, etc.).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                App crashes or won't open?
              </h3>
              <p className="text-gray-600">
                Try restarting your device first. If that doesn't work, reinstall the app from the App Store. Your subscription and account data will be preserved.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Subscription not showing as active?
              </h3>
              <p className="text-gray-600">
                Check your App Store subscription status. Sometimes there's a delay between purchase and activation. If the issue persists, contact us with your receipt.
              </p>
            </div>
          </div>
        </section>

        <section id="billing" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Billing & Subscription Help
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I cancel my subscription?
              </h3>
              <p className="text-gray-600">
                You can cancel anytime through your App Store settings. Go to Settings → Apple ID → Subscriptions → Fridge AI and select "Cancel Subscription."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I get a refund?
              </h3>
              <p className="text-gray-600">
                Refunds are handled by Apple through their standard refund process. Contact Apple Support with your purchase details for refund requests.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why was I charged twice?
              </h3>
              <p className="text-gray-600">
                Check your Apple ID subscription history to see all charges. If you see duplicate charges, contact Apple Support first, then reach out to us if needed.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Bug Reports
          </h2>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-gray-600 mb-4">
              Found a bug? Help us improve by reporting it. Include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>What you were doing when the bug occurred</li>
              <li>Steps to reproduce the issue</li>
              <li>Device type and iOS version</li>
              <li>Screenshots if possible</li>
            </ul>
            <a
              href="mailto:support@getfridgeai.com?subject=Bug Report"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Report a Bug
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Feature Requests
          </h2>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-gray-600 mb-4">
              Have an idea for improving Fridge AI? We'd love to hear it!
            </p>
            <a
              href="mailto:support@getfridgeai.com?subject=Feature Request"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Suggest a Feature
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
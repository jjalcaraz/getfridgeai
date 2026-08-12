import { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { homePageJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'Fridge AI - Turn Fridge Photos into Dinner with AI',
  description: 'Turn fridge photos into personalized recipes, nutrition details, and meal plans in seconds. Save time, reduce food waste, and eat healthier with Fridge AI.',
  authors: [{ name: 'Fridge AI' }],
  openGraph: {
    title: 'Fridge AI - Turn Fridge Photos into Dinner with AI',
    description: 'Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds.',
    url: 'https://www.getfridgeai.com',
    siteName: 'Fridge AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fridge AI - Turn Fridge Photos into Dinner with AI',
    description: 'Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds.',
  },
}

export default function RootPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Turn Fridge Photos into Dinner with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Personalized recipes, nutrition info, and meal planning in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/fridge-ai-food-recipes/id6739216407"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on iOS
            </a>
            <div className="bg-gray-200 text-gray-500 px-8 py-4 rounded-full font-semibold text-lg">
              Android Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">✓</span>
              <span>Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">✓</span>
              <span>No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">✓</span>
              <span>Secure Processing</span>
            </div>
            {/*
              REMOVED 2026-08-02: an "App Store Approved" badge.
              The app is in review, not approved. App Review does sometimes look
              at the marketing site, and a false approval claim next to a
              download link that doesn't resolve yet is a bad look at exactly
              the wrong moment.
              Restore this only once the app is genuinely live on the App Store.
            */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Snap Your Fridge
              </h3>
              <p className="text-gray-600">
                Take a photo of your fridge, freezer, or pantry
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Advanced AI identifies ingredients instantly
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get Recipes
              </h3>
              <p className="text-gray-600">
                3 personalized recipes you can cook right now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dinner in 10 Seconds
                </h3>
                <p className="text-gray-600">
                  No more meal planning stress - dinner decided instantly
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Save Money
                </h3>
                <p className="text-gray-600">
                  Reduce food waste by using what you already have
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nutrition Info
                </h3>
                <p className="text-gray-600">
                  Calories, protein, carbs for every meal included
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Personalized
                </h3>
                <p className="text-gray-600">
                  Recipes tailored to your dietary preferences and goals
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cost Calculation
                </h3>
                <p className="text-gray-600">
                  See cost estimates for every recipe you make
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            3-day free trial on all plans. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Monthly
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $9.99<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Unlimited fridge scans
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Personalized recipes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Nutrition information
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Cost calculations
                </li>
              </ul>
              <a
                href="https://apps.apple.com/us/app/fridge-ai-food-recipes/id6739216407"
                className="block w-full bg-black text-white text-center py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                  Start Free Trial
                </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Save 50%
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Annual
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $59.99<span className="text-lg text-gray-600">/year</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Everything in Monthly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Save $59.89 per year
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  New features first
                </li>
              </ul>
              <a
                href="https://apps.apple.com/us/app/fridge-ai-food-recipes/id6739216407"
                className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Busy Professionals
              </h3>
              <p className="text-gray-600">
                Want healthy, home-cooked meals without the planning stress
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Families
              </h3>
              <p className="text-gray-600">
                Reduce food waste and save money on groceries
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Health-Conscious
              </h3>
              <p className="text-gray-600">
                Track nutrition and macros with personalized recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does Fridge AI protect my privacy?
              </h3>
              <p className="text-gray-600">
                Your photos are processed securely and deleted after 30 days. We never sell your data, show ads, or use your information for any purpose other than generating recipes. Our privacy-first approach ensures your data remains completely private.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Yes, we use industry-standard encryption and security measures to protect your data. Our server is hosted on Render with SSL encryption, and we use Sentry for comprehensive error monitoring and security tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do subscriptions work?
              </h3>
              <p className="text-gray-600">
                Fridge AI offers a 3-day free trial, then $9.99/month or $59.99/year (save 50%). Payment is charged to your app store account, and you can cancel anytime through your device settings. No hidden fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel anytime through your App Store or Google Play account settings. If you cancel, you'll continue to have access until the end of your current billing period.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What dietary options does it support?
              </h3>
              <p className="text-gray-600">
                Fridge AI supports various dietary preferences including vegan, vegetarian, keto, gluten-free, and more. Our AI personalizes recipes based on your specific needs and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does the AI work?
              </h3>
              <p className="text-gray-600">
                We use advanced GPT-4o vision technology to analyze photos of your fridge, identify ingredients, and generate personalized recipes based on your dietary preferences and nutritional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Turn Your Fridge into Dinner?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Download Fridge AI today and stop planning, start cooking.
          </p>
          <a
            href="https://apps.apple.com/us/app/fridge-ai-food-recipes/id6739216407"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on iOS
          </a>
        </div>
      </section>

    </main>
    <JsonLd data={homePageJsonLd} />
  </>)
}

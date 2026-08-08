import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy - Fridge AI',
  description: 'Learn how Fridge AI protects your privacy and handles your data securely. Privacy-first approach with no ads or data selling.',
  keywords: 'privacy policy, data protection, security, GDPR, data handling, cookie policy',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last Updated: July 28, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              Fridge AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and related services.
            </p>
            <p className="text-gray-600">
              By using Fridge AI, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Photo Data
            </h3>
            <p className="text-gray-600 mb-4">
              When you use Fridge AI, you may choose to take photos of your fridge, freezer, or pantry. These photos are:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Processed securely on our servers</li>
              <li>Analyzed using AI to identify ingredients</li>
              <li>Used to generate personalized recipes</li>
              <li>Automatically deleted after 30 days</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Usage Data
            </h3>
            <p className="text-gray-600 mb-4">
              We collect anonymous usage data to improve our service, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>How often you use the app</li>
              <li>Features you interact with</li>
              <li>Performance and crash data</li>
              <li>App version and device information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Account Information
            </h3>
            <p className="text-gray-600 mb-4">
              If you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Email address (optional)</li>
              <li>Subscription status</li>
              <li>Payment information (processed securely by app stores)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Generate personalized recipes based on your photos</li>
              <li>Improve our AI algorithms and service quality</li>
              <li>Provide customer support</li>
              <li>Process subscriptions and payments</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>SSL encryption for all data transfers</li>
              <li>Secure cloud hosting on Render</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and authentication</li>
              <li>Automatic deletion of photo data after 30 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Don't Do
            </h2>
            <p className="text-gray-600 mb-4">
              Fridge AI is committed to privacy. We do not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Sell your personal data to third parties</li>
              <li>Show advertisements in our app</li>
              <li>Share your photos with other users</li>
              <li>Use your data for marketing purposes</li>
              <li>Track your location without permission</li>
              <li>Share your data with advertisers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>OpenAI:</strong> For AI-powered recipe generation</li>
              <li><strong>Render:</strong> For secure cloud hosting</li>
              <li><strong>RevenueCat:</strong> For subscription management</li>
              <li><strong>PostHog:</strong> For anonymous analytics</li>
              <li><strong>Sentry:</strong> For error monitoring and security</li>
            </ul>
            <p className="text-gray-600">
              These services have their own privacy policies and are committed to protecting your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of data collection</li>
              <li>Export your data</li>
              <li>Update your account information</li>
              <li>Cancel your subscription anytime</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-600 mb-4">
              We retain your data as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Photos:</strong> Automatically deleted after 30 days</li>
              <li><strong>Usage Data:</strong> Retained for service improvement (anonymized)</li>
              <li><strong>Account Data:</strong> Retained until account deletion</li>
              <li><strong>Payment Data:</strong> Processed by app stores, not stored by us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600">
              Fridge AI is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-600">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> support@getfridgeai.com<br />
              <strong>Website:</strong> https://getfridgeai.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
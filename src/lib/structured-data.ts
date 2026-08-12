const BASE_URL = 'https://www.getfridgeai.com'

const organization = {
  '@type': 'Organization' as const,
  '@id': `${BASE_URL}/#organization`,
  name: 'Fridge AI',
  url: BASE_URL,
  email: 'support@getfridgeai.com',
}

const website = {
  '@type': 'WebSite' as const,
  '@id': `${BASE_URL}/#website`,
  name: 'Fridge AI',
  url: BASE_URL,
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
}

const softwareApplication = {
  '@type': 'SoftwareApplication' as const,
  '@id': `${BASE_URL}/#application`,
  name: 'Fridge AI',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  installUrl: 'https://apps.apple.com/us/app/fridge-ai-food-recipes/id6739216407',
  description:
    'Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds. Save time, reduce food waste, and eat healthier with AI-powered recipe suggestions.',
  offers: [
    {
      '@type': 'Offer' as const,
      price: '9.99',
      priceCurrency: 'USD',
      description: 'Monthly subscription — $9.99 per month after a 3-day free trial.',
    },
    {
      '@type': 'Offer' as const,
      price: '59.99',
      priceCurrency: 'USD',
      description: 'Annual subscription — $59.99 per year after a 3-day free trial.',
    },
  ],
}

const faqPage = {
  '@type': 'FAQPage' as const,
  '@id': `${BASE_URL}/#faq`,
  mainEntity: [
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q1`,
      name: 'How does Fridge AI protect my privacy?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'Your photos are processed securely and deleted after 30 days. We never sell your data, show ads, or use your information for any purpose other than generating recipes. Our privacy-first approach ensures your data remains completely private.',
      },
    },
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q2`,
      name: 'Is my data secure?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'Yes, we use industry-standard encryption and security measures to protect your data. Our server is hosted on Render with SSL encryption, and we use Sentry for comprehensive error monitoring and security tracking.',
      },
    },
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q3`,
      name: 'How do subscriptions work?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'Fridge AI offers a 3-day free trial, then $9.99/month or $59.99/year (save 50%). Payment is charged to your app store account, and you can cancel anytime through your device settings. No hidden fees.',
      },
    },
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q4`,
      name: 'Can I cancel my subscription?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'Yes, you can cancel anytime through your App Store or Google Play account settings. If you cancel, you\'ll continue to have access until the end of your current billing period.',
      },
    },
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q5`,
      name: 'What dietary options does it support?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'Fridge AI supports various dietary preferences including vegan, vegetarian, keto, gluten-free, and more. Our AI personalizes recipes based on your specific needs and goals.',
      },
    },
    {
      '@type': 'Question' as const,
      '@id': `${BASE_URL}/#faq-q6`,
      name: 'How does the AI work?',
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: 'We use advanced GPT-4o vision technology to analyze photos of your fridge, identify ingredients, and generate personalized recipes based on your dietary preferences and nutritional goals.',
      },
    },
  ],
}

export const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organization, website],
}

export const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [softwareApplication, faqPage],
}

import type { JSX } from 'react'

export type BlogPost = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  Content: () => JSX.Element
  howTo?: {
    name: string
    description: string
    steps: Array<{ name: string; text: string }>
  }
}

const BASE_URL = 'https://www.getfridgeai.com'

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:text-green-700 underline"
    >
      {children}
    </a>
  )
}

const WhatToCookPost: BlogPost = {
  slug: 'what-to-cook-with-what-you-have',
  title: 'What to Cook With What You Already Have',
  description:
    'A simple, repeatable method for turning the odds and ends in your fridge into a real dinner.',
  datePublished: '2026-08-11',
  dateModified: '2026-08-11',
  Content: () => (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Start with the ingredient that will spoil soonest, build the rest of the
        meal around it, and use a quick cooking method. That is the whole
        framework.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        1. Find the ingredient that needs to be used first
      </h2>
      <p className="text-gray-600 mb-6">
        Open the fridge and pull out the three items closest to turning: wilting
        greens, leftover proteins, dairy near its date, or softening vegetables.
        One of these becomes the anchor.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        2. Choose one anchor and one supporting ingredient
      </h2>
      <p className="text-gray-600 mb-6">
        Pair the anchor with one complementary item. Chicken goes with rice,
        eggs go with spinach, tomatoes go with pasta, peppers go with beans. The
        goal is two ingredients that cook in roughly the same amount of time.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        3. Pick a cooking method that fits both
      </h2>
      <p className="text-gray-600 mb-6">
        Stir-fry, frittata, soup, fried rice, and sheet-pan roast all work
        because they forgive uneven ingredient sizes and use up small amounts.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        4. Add a flavor base you already own
      </h2>
      <p className="text-gray-600 mb-6">
        Garlic, onion, soy sauce, vinegar, lemon, dried herbs, or a spoonful of
        broth turn random ingredients into a coherent dish. Use what is in the
        pantry before buying anything new.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        5. Finish with a texture and a garnish
      </h2>
      <p className="text-gray-600 mb-6">
        A fried egg, toasted nuts, grated cheese, or a drizzle of hot sauce adds
        contrast and makes the dish feel intentional.
      </p>

      <section className="bg-gray-50 p-6 rounded-2xl mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Where this method falls short
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            It assumes the ingredients are still safe to eat. Always check
            smell, color, and texture before cooking.
          </li>
          <li>
            It does not tell you exact quantities or macros; it is a decision
            framework, not a recipe engine.
          </li>
          <li>
            It works best with whole ingredients, not heavily processed or
            pre-seasoned items with hidden components.
          </li>
        </ul>
      </section>
    </>
  ),
  howTo: {
    name: 'How to decide what to cook with what is already in your fridge',
    description:
      'A five-step method for building a meal from the ingredients you already own.',
    steps: [
      {
        name: 'Find the ingredient that needs to be used first',
        text: 'Open the fridge and pull out the three items closest to turning.',
      },
      {
        name: 'Choose one anchor and one supporting ingredient',
        text: 'Pair the anchor with one complementary item that cooks in about the same time.',
      },
      {
        name: 'Pick a cooking method that fits both',
        text: 'Use stir-fry, frittata, soup, fried rice, or sheet-pan roast.',
      },
      {
        name: 'Add a flavor base you already own',
        text: 'Use garlic, onion, soy sauce, vinegar, lemon, herbs, or broth.',
      },
      {
        name: 'Finish with a texture and a garnish',
        text: 'Top with a fried egg, nuts, cheese, or hot sauce for contrast.',
      },
    ],
  },
}

const FoodWastePost: BlogPost = {
  slug: 'how-much-food-the-average-household-wastes',
  title: 'How Much Food the Average Household Wastes, and What That Costs',
  description:
    'The latest U.S. government estimates of household food waste, translated into dollars and pounds.',
  datePublished: '2026-08-11',
  dateModified: '2026-08-11',
  Content: () => (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        A U.S. household of four throws away about <strong>$2,913</strong> of
        uneaten edible food each year, or roughly <strong>$56 per week</strong>.
        That represents about 11% of food spending, according to the EPA&apos;s 2024
        cost estimate.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        The headline numbers
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
        <li>
          <strong>$728</strong> per person per year in wasted edible food (EPA,
          2024).
        </li>
        <li>
          <strong>$56</strong> per week for a household of four (EPA, 2024).
        </li>
        <li>
          <strong>11%</strong> of food expenditures, on average (EPA, 2024).
        </li>
        <li>
          <strong>73 kg</strong> of food waste per person per year in U.S.
          households, per the UN Food Waste Index cited in the EPA strategy
          report.
        </li>
      </ul>
      <p className="text-gray-600 mb-6">
        The EPA analysis updated older USDA estimates that used 2010 price data.
        Because food prices have risen sharply, the 2010-based figures (often
        cited as ~$1,500 per family of four) now understate the current cost.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What kind of food is wasted most
      </h2>
      <p className="text-gray-600 mb-6">
        Produce, dry goods, and dairy & eggs make up the largest shares of
        residential food waste,{' '}
        <Cite href="https://refed.org/food-waste/consumer-food-waste/">
          according to ReFED&apos;s 2024 consumer waste analysis
        </Cite>
        . In total, U.S. consumers spent an estimated{' '}
        <strong>$259 billion</strong> on uneaten food in 2024.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        Important caveats
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>
          These are model-based estimates, not receipts from every household.
        </li>
        <li>
          &quot;Waste&quot; includes uneaten edible food and some inedible parts (peels,
          bones) depending on the data source.
        </li>
        <li>
          Households vary widely by size, income, location, and cooking habits.
          The average is not a prediction for any one family.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        Sources
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>
          <Cite href="https://www.epa.gov/land-research/estimating-cost-food-waste-american-consumers">
            EPA — Estimating the Cost of Food Waste to American Consumers
            (2024)
          </Cite>
        </li>
        <li>
          <Cite href="https://www.epa.gov/system/files/documents/2025-04/costoffoodwastereport_508.pdf">
            EPA — Cost of Food Waste Report (PDF)
          </Cite>
        </li>
        <li>
          <Cite href="https://refed.org/food-waste/consumer-food-waste/">
            ReFED — Consumer Food Waste Statistics & Solutions (2024)
          </Cite>
        </li>
        <li>
          <Cite href="https://www.epa.gov/system/files/documents/2025-02/14451_food-waste-strategy_v5_508.pdf">
            EPA/UN — National Strategy for Reducing Food Loss and Waste (2025)
          </Cite>
        </li>
      </ul>
    </>
  ),
}

const AiRecognitionPost: BlogPost = {
  slug: 'how-ai-ingredient-recognition-from-a-photo-works',
  title: 'How AI Ingredient Recognition from a Photo Actually Works, and Where It Fails',
  description:
    'A plain-language walk through the computer-vision pipeline that turns a fridge photo into an ingredient list.',
  datePublished: '2026-08-11',
  dateModified: '2026-08-11',
  Content: () => (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        A photo of your fridge is run through a vision model that finds objects,
        classifies them against a trained image library, and estimates portion
        sizes. The output is a best-guess list, not a guaranteed inventory.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        The three pipeline stages
      </h2>
      <p className="text-gray-600 mb-6">
        Modern image-based food recognition systems generally follow three
        phases: segmentation (finding each item in the photo), classification
        (naming what it is), and estimation (portions, calories, or nutrients),{' '}
        <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9776640/">
          as described in a 2022 systematic review of 159 studies
        </Cite>
        . Convolutional neural networks, the same family of models used in
        general computer vision, remain the dominant approach.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What the model actually &quot;sees&quot;
      </h2>
      <p className="text-gray-600 mb-6">
        The model does not read labels or understand recipes. It matches
        textures, shapes, and color patterns to examples it has already seen
        during training. A tomato is identified because it looks like thousands
        of other tomatoes in the training set.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        Where the recognition breaks down
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
        <li>
          <strong>Visually similar foods:</strong> Chicken and turkey, white rice
          and basmati, ground beef and ground turkey are commonly confused.
        </li>
        <li>
          <strong>Transformed foods:</strong> Caramelized onions, roasted
          vegetables, and anything covered in a uniform sauce lose the texture
          the model was trained on.
        </li>
        <li>
          <strong>Partial views and lighting:</strong> Shadows, glare, and
          items hidden behind others create gaps in the input image.
        </li>
        <li>
          <strong>Cultural and regional coverage:</strong>{' '}
          <Cite href="https://www.mdpi.com/2076-3417/15/14/7626">
            Food-recognition datasets remain skewed toward Western dishes
          </Cite>
          , with African and many Asian cuisines under-represented.
        </li>
        <li>
          <strong>Coarse labels:</strong> Most training data only provides a
          category (&quot;chicken&quot;) and not fine-grained details such as cut, marinate,
          or doneness.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What this means for Fridge AI
      </h2>
      <p className="text-gray-600 mb-6">
        Fridge AI uses GPT-4o vision to identify ingredients from fridge photos.
        The suggestions are generated estimates and can be wrong, including
        missed items, mislabeled items, and inaccurate calorie, macro, or cost
        estimates. Always verify the output before cooking or relying on it for
        dietary purposes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        Sources
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>
          <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9776640/">
            PMC — Applying Image-Based Food-Recognition Systems on Dietary
            Assessment
          </Cite>
        </li>
        <li>
          <Cite href="https://www.mdpi.com/2076-3417/15/14/7626">
            MDPI — Deep Learning in Food Image Recognition
          </Cite>
        </li>
        <li>
          <Cite href="https://thecuratedweekly.com/health/ai-photo-calorie-recognition-explained-2026/">
            The Curated Weekly — How AI photo recognition for food actually works
          </Cite>
        </li>
      </ul>
    </>
  ),
}

const ComparisonPost: BlogPost = {
  slug: 'fridge-ai-vs-manual-meal-planning',
  title: 'Fridge AI vs. Manual Meal Planning: An Honest Comparison',
  description:
    'What an AI recipe scanner does well, what it does not do, and where a human still wins.',
  datePublished: '2026-08-11',
  dateModified: '2026-08-11',
  Content: () => (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Fridge AI is faster at turning a fridge photo into recipe ideas, but it
        cannot match a human&apos;s judgment on freshness, personal taste, or a fully
        stocked pantry.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What Fridge AI does well
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
        <li>
          <strong>Speed:</strong> It suggests three recipes in seconds from a
          single photo.
        </li>
        <li>
          <strong>Less waste:</strong> It starts with what you already own,
          which nudges you to use food before it spoils.
        </li>
        <li>
          <strong>Dietary filtering:</strong> It can tailor suggestions toward
          vegan, keto, gluten-free, and other preferences.
        </li>
        <li>
          <strong>Nutrition and cost estimates:</strong> It provides rough
          calorie, macro, and cost numbers for each suggestion.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What manual planning still does better
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
        <li>
          <strong>Freshness checks:</strong> A person can see, smell, and touch
          ingredients. The app cannot tell whether food has spoiled.
        </li>
        <li>
          <strong>Family knowledge:</strong> A human knows who hates mushrooms,
          who is allergic to nuts, and what leftovers are already claimed.
        </li>
        <li>
          <strong>Pantry and freezer depth:</strong> A photo of the fridge does
          not show the spice rack, freezer, or planned grocery deliveries.
        </li>
        <li>
          <strong>Exact quantities:</strong> Manual planning can measure cups
          and servings; AI portion estimates are rough.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        What Fridge AI does not do
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
        <li>
          It is not a dietitian, nutritionist, or medical professional.
        </li>
        <li>
          It does not guarantee the safety, freshness, or accuracy of recipes or
          ingredient lists.
        </li>
        <li>
          It cannot detect hidden ingredients, cross-contamination, or the exact
          contents of packaged foods.
        </li>
        <li>
          It cannot verify that recipes meet every dietary restriction or
          allergy; filters are best-effort AI output.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        When to use which
      </h2>
      <p className="text-gray-600 mb-6">
        Use Fridge AI on busy nights when you have random ingredients and need
        inspiration fast. Use manual planning for special diets, batch cooking,
        or when you need precise portions and budgets. The two approaches work
        best together: the app gives you a starting point, and you apply your
        own judgment before cooking.
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Limitations are summarized from the{' '}
        <a href="/terms" className="text-green-600 hover:text-green-700 underline">
          Fridge AI Terms of Service
        </a>{' '}
        and AI Output Disclaimer.
      </p>
    </>
  ),
}

export const blogPosts: BlogPost[] = [
  WhatToCookPost,
  FoodWastePost,
  AiRecognitionPost,
  ComparisonPost,
]

export const postsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
)

export function articleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    image: `${BASE_URL}/blog/${post.slug}/opengraph-image`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@id': `${BASE_URL}/#organization`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  }
}

export function howToJsonLd(post: BlogPost) {
  if (!post.howTo) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${BASE_URL}/blog/${post.slug}#howto`,
    name: post.howTo.name,
    description: post.howTo.description,
    step: post.howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

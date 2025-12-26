'use client'

export default function FAQPage() {
  const faqs = [
    {
      category: 'Pricing & Packages',
      questions: [
        {
          q: 'How much does an MVP cost?',
          a: 'MVP costs typically range from $15,000 to $50,000, depending on complexity, features, and timeline. We offer three packages: Essential MVP ($15-25K), Growth MVP ($25-40K), and Enterprise MVP ($40-50K+). All include design, development, and launch support.'
        },
        {
          q: 'What\'s included in your pricing?',
          a: 'Our pricing includes everything from initial strategy session to post-launch support: product strategy, UX/UI design, full-stack development, quality assurance, deployment, basic analytics setup, and 30 days of post-launch support.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes! We offer flexible payment plans: 50% upfront, 25% at milestone, 25% at launch. For larger projects, we can discuss extended payment terms.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          q: 'How long does it take to build an MVP?',
          a: 'Most MVPs take 60-90 days from kickoff to launch. Our 3-phase process ensures efficient progress: Design & Define (2-3 weeks), Build & Launch (6-8 weeks), Market & Scale (2-3 weeks).'
        },
        {
          q: 'What\'s your development process?',
          a: 'We use agile methodology with 2-week sprints. Each sprint includes planning, development, demo, and review. You\'ll have visibility into progress through weekly updates and sprint demos.'
        }
      ]
    }
  ]

  return (
    <>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-12">
              Everything you need to know about working with Scale with Destiny
            </p>
            
            {faqs.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, fIdx) => (
                    <div key={fIdx} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
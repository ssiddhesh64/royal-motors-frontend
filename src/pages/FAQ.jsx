import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContentCta from '../components/ContentCta';
import faqCategories from '../data/faqData';

function FAQ() {
  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers about training, fees, RTO, and how we work. For anything specific, call or WhatsApp us."
        />

        <div className="space-y-8">
          {faqCategories.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <details
                    key={item.question}
                    name={`faq-${section.category}`}
                    className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-medium text-gray-800 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700 [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span
                        className="flex-shrink-0 text-xl leading-none text-blue-700 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="border-t border-gray-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          New to the process?{' '}
          <Link
            to="/how-it-works"
            className="text-blue-600 font-medium hover:underline"
          >
            See how it works
          </Link>{' '}
          or{' '}
          <Link
            to="/documents"
            className="text-blue-600 font-medium hover:underline"
          >
            check required documents
          </Link>
          .
        </div>

        <ContentCta whatsappMessage="Hi, I have a question for Royal Motor Training School (from FAQ page)." />
      </div>
    </section>
  );
}

export default FAQ;

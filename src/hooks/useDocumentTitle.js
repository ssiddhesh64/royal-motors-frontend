import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const routeMetadata = {
      '/': {
        title: 'Driving Lessons in Malad East | Royal Motor Training School',
        description:
          'Explore car and two-wheeler driving lessons at Royal Motor Training School in Malad East, Mumbai. Call or WhatsApp to ask about current fees and availability.',
      },
      '/services': {
        title: 'Driving Lessons & Services | Royal Motor Training School',
        description:
          'Explore car and two-wheeler lessons, licence guidance, and related services at Royal Motor Training School in Malad East, Mumbai.',
      },
      '/how-it-works': {
        title: 'How Driving Lessons Work | Royal Motor Training School',
        description:
          'Learn how to enquire, prepare documents, choose a training option, and practise for an RTO driving test.',
      },
      '/documents': {
        title: 'Driving Licence Documents | Royal Motor Training School',
        description:
          'Review a general document checklist for learner’s licence and driving training enquiries. Confirm current requirements with the RTO.',
      },
      '/faq': {
        title: 'Driving Lesson FAQs | Royal Motor Training School',
        description:
          'Answers to common questions about driving lessons, documents, fees, and RTO test preparation.',
      },
      '/gallery': {
        title: 'Training Gallery & Road Signs | Royal Motor Training School',
        description:
          'View driving training images and practise recognising common road signs.',
      },
      '/contact': {
        title: 'Contact Royal Motor Training School | Malad East',
        description:
          'Contact Royal Motor Training School in Malad East, Mumbai by phone or WhatsApp, or view the location and opening hours.',
      },
      '/mocktest': {
        title: 'RTO Learner Licence Mock Test | Royal Motor Training School',
        description:
          'Practise learner’s licence theory questions with a free online mock test. For practice only; the official RTO exam is separate.',
      },
    };

    const metadata = routeMetadata[location.pathname] || {
      title: 'Royal Motor Training School | Malad East, Mumbai',
      description:
        'Driving lessons and learner licence guidance in Malad East, Mumbai.',
    };

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metadata.description);
  }, [location.pathname]);
}

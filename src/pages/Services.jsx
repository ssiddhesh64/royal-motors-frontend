import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import services from '../data/servicesData';
import { whatsappUrl } from '../constants/contact';

const ServiceCard = React.memo(({ service }) => (
  <div
    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    aria-labelledby={`service-${service.id}-title`}
  >
    <h3 id={`service-${service.id}-title`} className="text-xl font-bold text-slate-900">
      {service.name}
    </h3>

    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{service.desc}</p>

    <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Listed fee</p>
        <p className="mt-1 text-2xl font-bold text-blue-900" aria-label={`Listed fee: ${service.price}`}>
          {service.price}
        </p>
      </div>
      <a
        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        aria-label={`Enquire about ${service.name} on WhatsApp`}
        href={whatsappUrl(`Hi Royal Motor Training School, I would like to enquire about ${service.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Enquire <FaArrowRight aria-hidden="true" />
      </a>
    </div>
  </div>
));

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

function Services({ isPage = false }) {
  const Heading = isPage ? 'h1' : 'h2';

  return (
    <section className="py-10 px-6 bg-white" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">Training and support</p>
          <Heading id="services-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </Heading>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Choose a training or support service and contact us to confirm current fees and availability.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {
  isPage: PropTypes.bool,
};

export default Services;

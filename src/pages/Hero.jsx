import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import drivingImg from '../assets/driving.webp';
import { whatsappUrl } from '../constants/contact';

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <img
        src={drivingImg}
        alt="A learner driver practising in a training car with an instructor"
        width="1536"
        height="1024"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/15" />

      <div className="mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[38rem] lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
            Royal Motor Training School · Malad East, Mumbai
          </p>
          <h1 className="mb-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn to drive with confidence.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            Practical driving lessons for cars and two-wheelers, with guidance
            for each step of the learning process.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore training <FaArrowRight aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl('Hi, I would like to enquire about driving lessons.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaWhatsapp aria-hidden="true" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

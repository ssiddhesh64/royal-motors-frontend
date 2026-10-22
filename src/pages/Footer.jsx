import { Link } from 'react-router-dom';
import RoyalLogo from '../components/Royal';
import { PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from '../constants/contact';

function Footer() {
  return (
    <footer className="mt-0 bg-slate-950 px-6 py-12 text-slate-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <RoyalLogo darkText="#FFFFFF" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Driving lessons and learner licence guidance in Malad East, Mumbai.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/documents"
                  className="hover:text-white transition text-sm"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/mocktest"
                  className="hover:text-white transition text-sm"
                >
                  Mock Test
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition text-sm"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

          <p className="text-sm leading-relaxed">
            Sheetal Dwar Bldg, Shivaji Chowk,
            <br />
            Daftary Road, Malad East,
            <br />
            Mumbai – 400097
          </p>
          <a className="mt-3 inline-block text-sm hover:text-white" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-green-700 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Royal Motor Training School. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;

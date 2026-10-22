import { useEffect, useRef, useReducer } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import RoyalLogo from './Royal';
import { isNavigationMenuOpen, navigationMenuReducer } from '../utils/navigationMenu';

const navigation = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/how-it-works', 'How It Works'],
  ['/faq', 'FAQ'],
  ['/documents', 'Documents'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
  ['/mocktest', 'Mock Test'],
];

function Navbar() {
  const location = useLocation();
  const [menuOpenPath, dispatchMenu] = useReducer(navigationMenuReducer, null);
  const locationKeyRef = useRef(location.key);
  const menuOpen = isNavigationMenuOpen(
    menuOpenPath,
    location.pathname,
    location.key
  );
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        dispatchMenu({ type: 'close' });
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (locationKeyRef.current !== location.key) {
      locationKeyRef.current = location.key;
      if (menuOpenPath) menuButtonRef.current?.focus();
    }
  }, [location.key, menuOpenPath]);

  const renderLink = ([path, label]) => (
    <Link
      key={path}
      to={path}
      onClick={() => {
        dispatchMenu({ type: 'close' });
        menuButtonRef.current?.focus();
      }}
      aria-current={location.pathname === path ? 'page' : undefined}
      className={`nav-link w-full justify-start lg:w-auto ${location.pathname === path ? 'nav-link-active' : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          aria-label="Royal Motor Training School home"
        >
          <RoyalLogo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map(renderLink)}
        </div>

        <Link
          to="/contact"
          className="hidden shrink-0 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 lg:inline-flex"
        >
          Enquire Now
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 lg:hidden"
          onClick={() =>
            dispatchMenu({
              type: 'toggle',
              pathname: location.pathname,
              locationKey: location.key,
            })
          }
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        ref={menuRef}
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-slate-200 bg-white px-5 py-4 shadow-xl lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navigation.map(renderLink)}
          <Link
            to="/contact"
            onClick={() => {
              dispatchMenu({ type: 'close' });
              menuButtonRef.current?.focus();
            }}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-500 px-5 font-semibold text-white hover:bg-blue-900"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

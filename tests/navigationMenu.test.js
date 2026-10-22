import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isNavigationMenuOpen,
  navigationMenuReducer,
} from '../src/utils/navigationMenu.js';

test('opens and closes the mobile menu for the current route', () => {
  const openPath = navigationMenuReducer(null, {
    type: 'toggle',
    pathname: '/services',
    locationKey: 'service-page',
  });

  assert.equal(
    isNavigationMenuOpen(openPath, '/services', 'service-page'),
    true
  );
  assert.equal(navigationMenuReducer(openPath, { type: 'close' }), null);
});

test('toggling the open route closes the menu and a different route is closed', () => {
  const openPath = navigationMenuReducer(null, {
    type: 'toggle',
    pathname: '/contact',
    locationKey: 'contact-page',
  });

  assert.equal(
    navigationMenuReducer(openPath, {
      type: 'toggle',
      pathname: '/contact',
      locationKey: 'contact-page',
    }),
    null
  );
  assert.equal(isNavigationMenuOpen(openPath, '/faq', 'faq-page'), false);
  assert.equal(
    isNavigationMenuOpen(openPath, '/contact', 'restored-contact-page'),
    false
  );
});

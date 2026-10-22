import assert from 'node:assert/strict';
import test from 'node:test';
import { validateEnquiryForm } from '../src/utils/contactForm.js';

test('requires a name and an Indian mobile number', () => {
  assert.deepEqual(validateEnquiryForm({ name: '  ', phone: '' }), {
    name: 'Name is required',
    phone: 'Phone number is required',
  });
});

test('rejects malformed mobile numbers', () => {
  for (const phone of ['1234567890', '987654321', '987654321a']) {
    assert.equal(
      validateEnquiryForm({ name: 'Asha', phone }).phone,
      'Enter a valid 10-digit Indian mobile number'
    );
  }
});

test('accepts a valid name and 10-digit Indian mobile number', () => {
  assert.deepEqual(
    validateEnquiryForm({ name: '  Asha Rao  ', phone: '9876543210' }),
    {}
  );
});

export function validateEnquiryForm(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }

  return errors;
}

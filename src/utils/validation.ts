/**
 * Form validation primitives used by Sign In and Sign Up.
 *
 * Returns `null` on success or an end-user-facing error string on failure.
 * Strings live here so they can be tested in isolation and translated later.
 */

/**
 * Permissive RFC 5322 subset — anything that looks like `local@domain.tld`.
 * Avoids the trap of overly strict regexes rejecting valid addresses.
 */
const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRequired(value: string | undefined, fieldLabel: string): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldLabel} is required`;
  }
  return null;
}

export function validateEmail(value: string | undefined): string | null {
  const required = validateRequired(value, 'Email');
  if (required) return required;
  if (!EMAIL_RX.test(value!.trim())) return 'Enter a valid email address';
  return null;
}

export function validatePassword(value: string | undefined): string | null {
  const required = validateRequired(value, 'Password');
  if (required) return required;
  if (value!.length < 8) return 'Password must be at least 8 characters';
  return null;
}

export function validateName(value: string | undefined): string | null {
  const required = validateRequired(value, 'Name');
  if (required) return required;
  if (value!.trim().length < 2) return 'Enter your full name';
  return null;
}

export function validateMatch(
  password: string | undefined,
  confirmation: string | undefined,
): string | null {
  const required = validateRequired(confirmation, 'Confirm password');
  if (required) return required;
  if (password !== confirmation) return 'Passwords do not match';
  return null;
}

/** Loose phone validator: at least 7 digits, +/spaces/dashes allowed. */
export function validatePhone(value: string | undefined): string | null {
  const required = validateRequired(value, 'Phone');
  if (required) return required;
  const digits = value!.replace(/[^\d]/g, '');
  if (digits.length < 7) return 'Enter a valid phone number';
  return null;
}

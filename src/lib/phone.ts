/**
 * Formats a raw phone string into Brazilian format: (XX) XXXXX-XXXX
 */
export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

/**
 * Validates a phone string has 10-11 digits (Brazilian landline or mobile).
 */
export const isValidPhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
};

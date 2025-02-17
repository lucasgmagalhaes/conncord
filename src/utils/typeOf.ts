/**
 * Like `typeof` but returns **null** if the value is **null**.
 * And **array** if the object is an array.
 *
 * @example
 *
 * typeof null // "object"
 * typeOf(null) // "null"
 * typeOf(undefined) // "undefined"
 * typeOf([]) // "array"
 *
 * @param value Object to get it's type
 * @returns the type in string.
 * @internal
 */
export function typeOf(value: any) {
  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}

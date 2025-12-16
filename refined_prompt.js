/**
 * Converts a string to dot.case format
 * @param {string} str - The input string
 * @returns {string} The string in dot.case format
 * @example
 * toDotCase('helloWorld') // 'hello.world'
 * toDotCase('HelloWorld') // 'hello.world'
 * toDotCase('hello_world') // 'hello.world'
 * toDotCase('hello-world') // 'hello.world'
 */
/**
 * Converts a string to dot-case notation.
 * 
 * Transforms various string formats (camelCase, PascalCase, snake_case, kebab-case, etc.)
 * into a standardized dot-separated format with lowercase letters.
 * 
 * @param {string} str - The input string to convert to dot-case
 * @returns {string} The converted string in dot-case format, or an empty string if input is not a string
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('helloWorld');
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('HelloWorld');
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('hello_world');
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('hello-world');
 * 
 * @example
 * // Returns ''
 * toDotCase(123);
 * 
 * @description
 * The function performs the following transformations in order:
 * 1. Inserts dots before uppercase letters (handles camelCase and PascalCase)
 * 2. Replaces underscores, hyphens, and whitespace with dots
 * 3. Converts all characters to lowercase
 * 4. Removes any duplicate consecutive dots
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    // Insert a dot before uppercase letters (for camelCase and PascalCase)
    .replace(/([a-z])([A-Z])/g, '$1.$2')
    // Replace underscores and hyphens with dots
    .replace(/[-_\s]+/g, '.')
    // Convert to lowercase
    .toLowerCase()
    // Remove any duplicate dots
    .replace(/\.+/g, '.');
}

module.exports = toDotCase;
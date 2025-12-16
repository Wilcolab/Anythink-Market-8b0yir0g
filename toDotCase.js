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

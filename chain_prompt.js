/**
 * Converts a string to kebab-case format
 * 
 * Handles multiple input formats:
 * - camelCase: myVariableName → my-variable-name
 * - PascalCase: MyVariableName → my-variable-name
 * - snake_case: my_variable_name → my-variable-name
 * - SCREAMING_SNAKE_CASE: MY_VARIABLE_NAME → my-variable-name
 * - Mixed spaces and special chars: my variable name → my-variable-name
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The converted kebab-case string
 * 
 * @example
 * toKebabCase('myVariableName');        // 'my-variable-name'
 * toKebabCase('MyVariableName');        // 'my-variable-name'
 * toKebabCase('my_variable_name');      // 'my-variable-name'
 * toKebabCase('MY_VARIABLE_NAME');      // 'my-variable-name'
 * toKebabCase('my variable name');      // 'my-variable-name'
 * toKebabCase('myVariableName-test');   // 'my-variable-name-test'
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    return str
        // Insert hyphen before uppercase letters in camelCase/PascalCase
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Handle multiple consecutive hyphens
        .replace(/-+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Usage examples
console.log(toKebabCase('myVariableName'));
console.log(toKebabCase('MyVariableName'));
console.log(toKebabCase('my_variable_name'));
console.log(toKebabCase('MY_VARIABLE_NAME'));

module.exports = toKebabCase;
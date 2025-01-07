module.exports = {
    extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        'prettier/prettier': 'off',
    },
};

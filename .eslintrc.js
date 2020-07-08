module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'no-shadow': ['error', { 'allow': ['state'] }],
        'react/jsx-indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/alt-text': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        '@typescript-eslint/no-unused-vars': [
            "error", { "argsIgnorePattern": "^_" },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    }
};

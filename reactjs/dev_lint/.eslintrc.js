module.exports = {
    'parser': 'babel-eslint',
    'extends': ['airbnb', 'react-app'],
    'plugins': ['react', 'jsx-a11y', 'import'],
    'env': {
      'browser': true,
      'es6': true
    },
    'rules': {
        "indent": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/prefer-stateless-function": "off",
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true, 
                "optionalDependencies": false, 
                "peerDependencies": false
            }
        ],
        'linebreak-style': 0,
        'react/jsx-filename-extension': [1, {
            "extensions": [".js", ".jsx"]
        }],
        'quotes': ['error', 'single', {
            'allowTemplateLiterals': true
        }],
    }
};
module.exports = {
    'extends': 'airbnb',
    "parser": "babel-eslint",
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'react/prefer-stateless-function': 'off',
      'import/prefer-default-export': 'off',
      'react/no-access-state-in-setstate': 'off',
      'import/no-extraneous-dependencies': 'off',
      'arrow-body-style': 'off',
    },
    "settings": {
      "import/resolver": {
        "babel-module": {}
      }
    }
  };
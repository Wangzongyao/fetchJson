module.exports = {
    extends: "airbnb",
    rules: {
        "semi": ["error", "never"],
        "singleQuote": true,
        "indent": ["error", 4],
        "linebreak-style": ["off", "unix"],
        "import/no-named-as-default": ["off"],
        "import/no-named-as-default-member": ["off"],
        "import/no-unresolved": [2, { ignore: ['@commons'] }],
        "max-len": ["error", { "code": 150 }],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/webpack.*.js"] }]
    },
    "globals": {
        "localStorage": true,
        "window": true,
        "document": true,
        "fetch": true
    },
}
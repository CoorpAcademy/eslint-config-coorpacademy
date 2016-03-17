"use strict";

module.exports = {
	parserOptions: {
		sourceType: "script"
	},
	extends: "eslint:recommended",
	rules: {
		"no-unused-vars": [2, { "vars": "all", "args": "none" }],
		"keyword-spacing": [2, {
			"overrides": {
				"catch": { "after": true },
				"do": { "after": true },
				"else": { "after": true },
				"for": { "after": true },
				"if": { "after": true },
				"switch": { "after": true },
				"try": { "after": true },
				"while": { "after": true },
				"default": { "after": false }
			}
		}],
		"space-before-function-paren": [2, "never"],
		"space-before-blocks": [2, "always"],
		"no-empty": 2,
		"space-in-parens": [2, "never"],
		"array-bracket-spacing": [2, "never"],
		"comma-style": [2, "last"],
		"operator-linebreak": [2, "after"],
		"space-unary-ops": [2, { "words": false, "nonwords": false }],
		"space-infix-ops": 2,
		"padded-blocks": [2, "never"],
		"no-with": 2,
		"no-multi-str": 2,
		"linebreak-style": [2, "unix"],
		"quotes": [2, "single", "avoid-escape"],
		"no-mixed-spaces-and-tabs": 2,
		"comma-dangle": [2, "never"],
		"eol-last": 2,
		"max-len": [2, 120],
		// TBD
		// "wrap-iife": 2,
		// "new-cap": 2,
		// "curly": [2, "multi-line", "consistent"],
		// "key-spacing": [2, { "afterColon": true }],
		// "spaced-comment": [2, "always", { "exceptions": ["*"] }],
		// "indent": [2, 4, { "SwitchCase": 1 }],
		// "strict": [2, "global"],
		// "no-use-before-define": 2,
		"eqeqeq": 2,
		"no-eq-null": 2,
		"guard-for-in": 2,
		"wrap-iife": [2, "any"],
		"max-depth": [2, 4],
		"no-caller": 2,
		"no-new": 2,
		"no-undef": 2,
		"no-plusplus": 0,
		"no-bitwise": 0,
		"max-params": 0,
	}
};

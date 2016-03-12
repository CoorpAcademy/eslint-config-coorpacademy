'use strict';

module.exports = {
	env: {
		es6: true
	},
	plugins: [
		'ava'
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	rules: {
		'ava/max-asserts': [0, 5],
		'ava/no-cb-test': 0,
		'ava/no-identical-title': 2,
		'ava/no-invalid-end': 2,
		'ava/no-only-test': 2,
		'ava/no-skip-assert': 2,
		'ava/no-skip-test': 2,
		'ava/no-todo-test': 1,
		'ava/prefer-power-assert': 0,
		'ava/test-ended': 2,
		'ava/test-title': [2, 'always'],
		'ava/use-t': 2,
		'ava/use-test': 2
	}
};

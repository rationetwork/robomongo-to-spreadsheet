/**
 * Created by chrischeshire on 23/05/2017.
 */

'use strict';

const fs = require('fs');

fs.readFile('./input', (err, contents) => {
	contents = contents.toString();

	contents = '[' + contents.replace(/}\s*\/\* [0-9]*? \*\//g, '},').replace(/\/\* [0-9]*? \*\//g, '') + ']';

	contents = JSON.parse(contents);

	const rows = [];

	rows.push(...Object.keys(contents).map(function (key) {
		const row = contents[key];

		if (Number(key) === 0)
			rows.push(Object.keys(row).join('\t'));

		const valArr = Object.keys(row).map(key => row[key]);

		return valArr.join('\t');
	}));

	console.log(rows.join('\n'));
});
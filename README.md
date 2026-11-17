# sem3-marks-tools-aditya

A small beginner-friendly npm package with three functions for working with marks.

## Install

```bash
npm install sem3-marks-tools-aditya
```

## Example

```js
const marksTools = require('sem3-marks-tools-aditya');

console.log(marksTools.percentage(45, 50)); // 90
console.log(marksTools.average([80, 70, 90])); // 80
console.log(marksTools.getGrade(90)); // A
```

## Functions

- `percentage(marks, totalMarks)` returns a percentage.
- `average(marks)` returns the average of an array of marks.
- `getGrade(percent)` returns A, B, C, D, or F using simple percentage ranges.

## Run the checks

```bash
npm test
```

## License

MIT

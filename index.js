function percentage(marks, totalMarks) {
  if (totalMarks <= 0) {
    throw new Error('Total marks must be greater than zero');
  }

  return (marks / totalMarks) * 100;
}

function average(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    throw new Error('Give at least one mark');
  }

  const total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  return total / marks.length;
}

function getGrade(percent) {
  if (percent >= 90) return 'A';
  if (percent >= 75) return 'B';
  if (percent >= 60) return 'C';
  if (percent >= 40) return 'D';
  return 'F';
}

module.exports = {
  percentage: percentage,
  average: average,
  getGrade: getGrade
};

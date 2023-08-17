function solution(score) {
  let average = [];
  let answer = [];
  for (el of score) {
    average.push(el[0] + el[1]);
  }
  let a = new Array(...average);
  a = a.sort((a, b) => b - a);
  answer = average.map((el) => {
    return a.indexOf(el) + 1;
  });

  return answer;

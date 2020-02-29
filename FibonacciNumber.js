/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0 || N == 1) {
         return N;
     }
     return fib(N - 1) + fib(N - 2);
 };

 function solutionTwo(n) {
    return  Math.round(
        (Math.pow((1 + Math.sqrt(5)) / 2, n) -
          Math.pow((1 - Math.sqrt(5)) / 2, n)) /
         Math.sqrt(5)
      );  
 };
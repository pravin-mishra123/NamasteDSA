// Recursion 101

//- Recursion - Functions Calls itself to solve smaller versions of the same problem

// Two Parts of Recursion
//1- Base Case -  Stop condition (When to stop calling itself) - imp
//2- Recursive Case - Part where function calls itself

// Real Life Examples
//1- Quesue of People
//2- Comment Thread
//3- Organisational Hierarchies


// What is a function call inside a function it self
// example 1
// function fun(){
//     console.log("Recurion call");
//     fun();
// }

// fun()

// function call itself in infinite times till call stack exuast

// example-2
// function fun(num){
// // Base Case - it should be always on top of the Program
//     if(num==0) return;
//     console.log(num);
//     num = num-1;
// // Recusrsive Case
//     fun(num)
// }

// fun(2)

// When bases case true then it return it and functon will stop calling itself.
//imp - Always base case should be written on the top of the program.


// Q1- Write function to print n----to---1 using recursion

// function print(n){
//     if(n < 1) return;
//     console.log(n);
//     print(--n);
// }
// let a = 5;
// print(a);

// print(--n) == (n = n-1) then print(n) => this is equivalent to --n

// Q2 - Write a function to print 1 --- to n using recursion

// function print(n){
//     if(n > 10) return;
//     console.log(n);
//     print(++n);
// }
// let a = 1;
// print(a);

// print(++n) == (n = n+1), then print(n) => this is equivalent to --n

//   - Common Mistakes
//     - Missing base case => Stack Overflow
//     - Not Simplyfying the input => Never Reach the base case
//     - Too Deep Recursion => Large Input
//     - Keeping in mind the Time Complexity

//   - When to use Recursion ?
//     - Problem can be broken into sub problems
//     - Trees & Graph
//     - Backtacking, DP, Divide & Conquer  

//----------------------------------------------------------------


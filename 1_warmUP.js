// Write a function  to search element in an array and return of index . if element not found then return -1
//  * corner case:
//    - if array is empty then return false
//    - if Array contain string, bool or other types then also it should false;

// function searchElement(arr,ele){
        // Input must be an array
//     if(!Array.isArray(arr))return false;

        //Array must not be empty
//     if(arr.length === 0) return false
//     for(let i = 0; i < arr.length; i++){

        //  Validate the entire array first
//         if(typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return "array contain array only"
//     }

        // Now search for the element
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === ele) return i
//     }
//     return -1
// }
// let arr = [2,5]
// console.log(searchElement(arr,6))



// write a function that returns the negative numbers counts from the given array

// function countNegative(num){

//     if(!Array.isArray(num)) return false;

//     if(num.length === 0) return false;

//     let count = 0;

//     for(let i = 0; i < num.length; i++){
//         if(typeof num[i] !== "number" || !Number.isFinite(num[i])) return false
        
//     }
//     for(let i = 0; i < num.length; i++){
//         if(num[i] < 0){
//             count++;
//         }
//     }
//     return count
// }
// let arr = [-2,-3,-4]
// console.log(countNegative(arr))


// write a function to find out the count of duplicate element in an array

// function duplicateCount(){

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i])
//     }
// }

// let arr = [4,6,3,4]
// let res = duplicateCount(arr);
// console.log(res);


// write a function that returns the largest number in an array

// function largestNumber(arr){
//     let largest = -Infinity; // aar[0]
//     for(let i =0; i< arr.length; i++){
//         if(arr[i] > largest ){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let arr = [20,3,2,40,5,8,17]
// // let arr = [0,-4,-2,-1]
// let result = largestNumber(arr)
// console.log(result)


// find the smallest number in an array

// function smallestNumber(arr){
//     if(!Array.isArray(arr)) return false;
//     if(arr.length === 0) return false;

//     let smallest = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }

console.log(smallestNumber([8,3,4]))

// let arr = [-2,20,3,2,40,5,8,17,-1]
// // let arr = [0,-4,-2,-1]
// let result = smallestNumber(arr)
// console.log(result)


// Write a function to find the second largest number in an array

// function secondLargest(arr){

//     if(!Array.isArray(arr)) return "it is not aray"

//     if(arr.length  < 2) return false;
//     let firstLargest = -Infinity;
//     let secondLargest = Infinity;

//     for(let i = 0; i<arr.length; i++){

//         if(typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return "array should contain number ony"
//         if(arr[i] > firstLargest){
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         }else if(arr[i] > secondLargest && arr[i] !== firstLargest){
//             secondLargest = arr[i];
//         }

//     }

//     if(secondLargest === -Infinity) return "at least two different elemnet"
//     return secondLargest;
// }

// let arr  = ["1",1,3,true,{}]
// console.log(secondLargest(arr))

// loop in loop

// for(let i = 0; i <3; i++){
//     for(let j = 0; j <3; j++){
//         console.log(i + " " + j)
//     }
// }

// for(let i = 0; i <3; i++){
//     for(let j = 0; j <i; j++){
//         console.log(i + " " + j)
//     }
// }

// for(let i = 0; i <3; i++){
//     for(let j = 0; j <=i; j++){
//         console.log(i + " " + j)
//     }
// }

// for(let i = 0; i <3; i++){
//     for(let j = i; j >0; j--){
//         console.log(i + " " + j)
//     }
// }

// for(let i = 0; i <3; i++){
//     for(let j = i; j >=0; j--){
//         console.log(i + " " + j)
//     }
// }

// for(let i = 3; i >0; i--){
//     for(let j = 0; j <i; j++){
//         console.log(i + " " + j)
//     }
// }


// Warm-up > Star Pattern
// * * * *
// * * * *
// * * * *
// * * * *
// let n = 4;

// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < n; j++){
//         row = row + "  *"
//     }
//     console.log(row)
// }


// *
// * *
// * * *
// * * * *

// for(let i =0; i<4; i++){
//     let row = "";
//     for(let j = 0; j < i + 1; j++){
//         row = row + "* "
//     }
//     console.log(row)
// }


// * * * *
// * * *
// * *
// *

// for(let i =0; i<4; i++){
//     let row = "";
//     for(let j = 4; j > i ; j--){
//         row = row + "* "
//     }
//     console.log(row)
// }


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let n = 5;

// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j < i+1 ; j++){
//         row = row + (i+1)
//     }
//     console.log(row)
// }

// 1 2,3,4,5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j < n-i ; j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }


// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *


// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j < n-(i+1) ; j++){
//         row = row + " "
//     }
//     for(let k = 0; k < i+1; k++){
//         row = row+"*"
//     }
//     console.log(row)
// }


// 1
// 01
// 010
// 1010
// 10101

// for(let i = 0; i < n; i++){
//     let row = ""
//     let toggle = 1
//     for(let j = 0; j < i+1 ; j++){
//         row = row + toggle;
//         if(toggle==1){
//             toggle =0
//         }else{
//             toggle =1
//         }
//     }
//     console.log(row)
// }


// 1
// 01
// 010
// 1010
// 10101


//   let toggle = 1
// for(let i = 0; i < n; i++){
//     let row = ""
  
//     for(let j = 0; j < i+1 ; j++){
//         row = row + toggle;
//         if(toggle==1){
//             toggle =0
//         }else{
//             toggle =1
//         }
//     }
//     console.log(row)
// }



// write a function that returns the count of digin in number.
// handle corner cases
//   - if num = 0 only return 1
//    - if my number is negative
//    - Input should be integer data type only
//    - Input should not be -Infinity,Infinity


// function countDigit(num){
//     if (typeof num !== "number" || !Number.isFinite(num)) {
//         return false;
//     }

//     if (!Number.isInteger(num)) {
//         return false;
//     }

//     if(num===0) return 1 

//     num = Math.abs(num)

//     let count = 0;
  
//     while(num > 0){
//        num = Math.floor(num/10)
//        count++
//     }
//     return count;
// }

// let num = 12
// console.log(countDigit(num))

// let num = 22;
// let result = countNumber(num)
// console.log(result);


// write a function to find the number is palindrom or not ?

// function palindromNumber(x){
//     if (x < 0) return false;
//     let xCopy = x;
//     let rev = 0;

//     while ( x > 0){
//         let rem = x % 10;
//         rev = (10 * rev) + rem;
//         x = Math.floor(x / 10); 
//     }
//     // if(rev == xCopy){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     return rev === xCopy;
// }

// let num = 121;
// let result = palindromNumber(num);
// console.log(result)


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// function reverseInteger(x){
//     let xCopy = x;
//     x = Math.abs(x);
//     let rev = 0;

//     while(x > 0){
//         let last = x % 10;
//         rev = (10*rev) + last;
//         x = Math.floor(x/10);
//     }

//     let limit = 2**31;
//     if(rev < -limit || rev > limit) return 0

//     return (xCopy < 0) ? -rev : rev;
// }

// let int = 120;
// console.log(reverseInteger(int))

// Practice Similar Questions 

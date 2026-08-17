* Hare Ka Sahara Baba Shyam Hamara

# Questions on each video
* practice this questions without seeing solutions

------------------------------------------------------------------------

# Warm-Up
## Loops-2 
 1. Write a function  to search element in an array and return of index . if element not found then return -1

 * Input : // let arr = [1,4,6,9]; // search 6
   Output : 2
 * Input : // let arr = [1,4,6,9]; // search 10
   Output : -1

 * corner case:
   - If input is not an array then return false
   - if array is empty then return false
   - if Array contain string, bool or other types then also it should false;

 2. Write a function that returns the negative numbers count from the given array

   Write a function that returns the positive numbers count from the given array

 * corner case:
   - If input is not an array then return false
   - if array is empty then return false
   - if Array contain string, bool or other types then also it should false;

 * Input: let arr = [2,-9,17,0,1,-10,-4,-8];
   Output: 4

 3. Write a function that returns the largest number in an array;

 * corner case:
   - If input is not an array then return false
   - if array is empty then return false
   - if Array contain string, bool or other types then also it should false;

 * Input : let arr = [20,3,2,40,5,8,17]
   Output : 40

 * Input : let arr = [0,-4,-2,-1]
   Output : 0

 - Notes : "difference between -Infinity and Infinity in Javascript"

 4. Write a function that returns the smallest number in an array;

 * corner case:
   - If input is not an array then return false
   - if array is empty then return false
   - if Array contain string, bool or other types then also it should false;
    
 * Input: arr = [-1,2,4,5] 
   Output : -1

## Second Largest Number
 1. Write a function to find the second largest number in an array
    * corner case need to handle
        - What if my array is empty
        - What if my array have 1 element
        - What if array have negative elements only
        - What is my array have duplicates
        - what if my array have same element (let arr = [4,4]) then return "array should have two diferent element
        - What is data types is different than array - arr = {}, arr = true
        - What if array have different data type element - string, bool

## Loop in Loop
 1. output based question (dry run on pen and paper only)
    for(let i = 0; i <3; i++){
     for(let j = 0; j <3; j++){
        console.log(i + " " + j)
     }
    }
 2. output based question (dry run on pen and paper only)
    for(let i = 0; i <3; i++){
     for(let j = 0; j <i; j++){
        console.log(i + " " + j)
     }
    }
 3. output based question (dry run on pen and paper only)
    for(let i = 0; i <3; i++){
     for(let j = 0; j <=i; j++){
        console.log(i + " " + j)
     }
    }
 4. output based question (dry run on pen and paper only)
    for(let i = 0; i <3; i++){
     for(let j = i; j >0; j--){
        console.log(i + " " + j)
     }
    }
 5. output based question (dry run on pen and paper only)
    for(let i = 0; i <3; i++){
     for(let j = i; j >=0; j--){
        console.log(i + " " + j)
     }
    }
 6. output based question (dry run on pen and paper only)
    for(let i = 3; i >0; i--){
     for(let j = 0; j < i; j++){
        console.log(i + " " + j)
     }
    }

## Star Pattern
 1. write code for this pattern  
    * * * * *
    * * * * *
    * * * * *
    * * * * * 
 2. Write code for this pattern
    * 
    * * 
    * * *
    * * * *
 3. Write Code for this Pattern 
    * * * *
    * * *
    * * 
    * 
 4. Write code for this pattern
    * 
    * * 
    * * *
    * * * *
    * * *
    * * 
    * 
 5. Write code for this pattern
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 6. Write code for this pattern
    1 2,3,4,5
    1 2 3 4
    1 2 3
    1 2
    1
 7. Write code for this pattern (imp)
            *  
          * *
        * * *
      * * * *
    * * * * *
 8. Write code for this pattern
    1
    01
    010
    1010
    10101
 9. Write code for this pattern
    1
    01
    010
    1010
    10101

## Count Digit 
 1. write a function that returns the count of digin in number.

 * Corner case
   - if num = 0 only return 1 
   - if my number is negative
   - Input should be integer data type only else return false
   - Input should not be -Infinity,Infinity return false
        
 * Input : num = 259 // 3
 * Input : num = 0 // 1
 * Input : num = -245 // 3

 - Notes : "What is Math.floor(), Math.round(), Math.ceil(), Math.abs()"

## Palindrome 
 1. Given an integer x, return true if x is a palindrome, and false otherwise.
 
 - Leetcode Link : https://leetcode.com/problems/palindrome-number/description/
 * corner case :
  - if input type is not number then return false
  - single value then return true
  - negative number return false
  - decimal number return false

 * Input: x = 121
   Output: true
   Explanation: 121 reads as 121 from left to right and from right to left.

 * Input: x = -121
   Output: false
   Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

 * Input: x = 10
   Output: false
   Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/palindrome-linked-list/description/
   - https://leetcode.com/problems/find-palindrome-with-fixed-length/description/
   - https://leetcode.com/problems/strictly-palindromic-number/description/
   - https://leetcode.com/problems/count-symmetric-integers/description/
   - https://leetcode.com/problems/find-the-count-of-good-integers/description/
   - https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/description/

    
## Reverse Integer 
 1. Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 - leetcode Link : https://leetcode.com/problems/reverse-integer/description/

 * Input: x = 123
   Output: 321

 * Input: x = -123
   Output: -321

 * Input: x = 120
   Output: 21

 * Notes : " Practce Similar Questions" without seeing the hint and solutions
 
   - https://leetcode.com/problems/string-to-integer-atoi/description/
   - https://leetcode.com/problems/reverse-bits/description/
   - https://leetcode.com/problems/a-number-after-a-double-reversal/description/
   - https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/

# Time/Space Complexity
## Time and space complexity practice using the hand written notes only as much as can
 1. While revision of time and space compexity then follow the namste video and some website 
  * https://www.geeksforgeeks.org/dsa/time-complexity-and-space-complexity/
  * https://medium.com/@pnandhiniofficial/ time-and-space-complexity-a-beginners-guide-88d617d29d01
  * https://www.scribd.com/document/842201998/Time-and-Space-Complexity#google_vignette
  * https://takeuforward.org/time-complexity/time-and-space-complexity-strivers-a2z-dsa-course

  - "if you don't understand then rewathch"
  * https://namastedev.com/learn/namaste-dsa/time-space-complexity 

# Arrays - Easy/Medium 
## Remove Duplicates
 1. Given an integer array nums sorted in non-decreasing order, remove the duplicates        in-place such that each unique element appears only once. The relative order of the elements  should be kept the same.

 Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

 The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

  - Leetcode Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

 * Input: nums = [1,1,2]
   Output: 2, nums = [1,2,_]
   Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
   Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
   Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/remove-element/description/
   - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
   - https://leetcode.com/problems/apply-operations-to-an-array/description/
   - https://leetcode.com/problems/sum-of-distances/description/
 
## Remove Element
 1. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order  of the elements may be changed. Then return the number of elements in nums which are not equal to val.

 Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

 Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

 Return k.
  - Leetcode Link : https://leetcode.com/problems/remove-element/description/

 * Input: nums = [3,2,2,3], val = 3
   Output: 2, nums = [2,2,_,_]
   Explanation: Your function should return k = 2, with the first two elements of nums being 2.
   It does not matter what you leave beyond the returned k (hence they are underscores).

 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
   Output: 5, nums = [0,1,4,0,3,_,_,_]
   Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
   Note that the five elements can be returned in any order.
   It does not matter what you leave beyond the returned k (hence they are underscores).

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ -  done
   - https://leetcode.com/problems/remove-linked-list-elements/description/
   - https://leetcode.com/problems/move-zeroes/description/

## Reverse String
 1. Write a function that reverses a string. The input string is given as an array of characters s.

   You must do this by modifying the input array in-place with O(1) extra memory.

 - Leetcode Link : https://leetcode.com/problems/reverse-string/description/

 * Input: s = ["h","e","l","l","o"]
   Output: ["o","l","l","e","h"]

 * Input: s = ["H","a","n","n","a","h"]
   Output: ["h","a","n","n","a","H"]

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/reverse-vowels-of-a-string/description/
   - https://leetcode.com/problems/reverse-string-ii/description/

## Best Time to Buy and Sell Stocks
 1. You are given an array prices where prices[i] is the price of a given stock on the ith day.

   You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

   Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 
 - Leetcode Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

 * Input: prices = [7,1,5,3,6,4]
   Output: 5
   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
   Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

 * Input: prices = [7,6,4,3,1]
   Output: 0
   Explanation: In this case, no transactions are done and the max profit = 0.

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/maximum-subarray/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
   - https://leetcode.com/problems/sum-of-beauty-in-the-array/description/
   - https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/
   - https://leetcode.com/problems/maximum-profit-from-trading-stocks/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/description/

## Merge Sorted Arrays (Very Very IMP)
 1. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and  n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 
 - Leetcode Link : https://leetcode.com/problems/merge-sorted-array/description/

 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
   Output: [1,2,2,3,5,6]
   Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
   The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
   Output: [1]
   Explanation: The arrays we are merging are [1] and [].
   The result of the merge is [1].

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/merge-two-sorted-lists/description/
   - https://leetcode.com/problems/squares-of-a-sorted-array/description/
   - https://leetcode.com/problems/interval-list-intersections/description/
   - https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/description/

## Move Zeros (Imp)
 1. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
 
 - Leetcode Link : https://leetcode.com/problems/move-zeroes/description/

 * Input: nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]


 * Input: nums = [0]
   Output: [0]

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/remove-element/description/
   - https://leetcode.com/problems/apply-operations-to-an-array/description/

## Max Consecutive Ones (Imp)

 1. Given a binary array nums, return the maximum number of consecutive 1's in the array.

    Note that you must do this in-place without making a copy of the array.
 
 - Leetcode Link : https://leetcode.com/problems/max-consecutive-ones/description/

 * Input: nums = [1,1,0,1,1,1]
   Output: 3
   Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


 * Input: nums = [1,0,1,1,0,1]
   Output: 2

 * Notes : " Practce Similar Questions" without seeing the hint and solutions

   - https://leetcode.com/problems/maximum-subarray/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
   - https://leetcode.com/problems/sum-of-beauty-in-the-array/description/
   - https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/
   - https://leetcode.com/problems/maximum-profit-from-trading-stocks/description/
   - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/description/
   





# Recursion - Easy/Medium ?

# Searching & Sorting - Easy/Medium ?


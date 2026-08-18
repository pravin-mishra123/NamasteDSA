// 1. write a function to find the unique elements from sorted array.

// function removeDuplicates(arr){
//     let x = 0; // arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[x]){
//             x = x+1; // Move to next position
//             arr[x] = arr[i] // update the value of the position
//         }
//     }
//     return x+1;
// }

// let arr = [0,0,1,1,1,2,2,3,3,4]

// console.log(removeDuplicates(arr))



// Practice Similar questions
// - https://leetcode.com/problems/remove-element/description/
// - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
// - https://leetcode.com/problems/apply-operations-to-an-array/description/
// - https://leetcode.com/problems/sum-of-distances/description/

// ---------------------------------------------------------
// 2. Remove Element

// function removeElements(arr,val){

//     let x = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !==val){
//             arr[x] = arr[i];
//             x = x+1
//         }
//     }
//     return x
// }


// let arr = [0,1,2,2,3,0,4,2]
// console.log(removeElements(arr,2))

// Practice Similar questions
// - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ - done
// - https://leetcode.com/problems/remove-linked-list-elements/description/
// - https://leetcode.com/problems/move-zeroes/description/

//---------------------------------------------------------------
// 3. Reverse String

// function reverseString(s){
//     let len  = s.length;
//     let halfLen  = Math.floor(len/2);
//     for(let i = 0; i < halfLen; i++){

//         // swapping (s[i], s[len-1-i]);

//         let temp = s[i];
//         s[i] = s[len-1-i];
//         s[len-1-i] = temp;

//         // I can use this for swaping 
//         // [s[i], s[len-1-i]] = [s[len-1-i], s[i]]
//     }
//     return s
// }

// let arr = ["P","R","A","V","I","N"];
// console.log(reverseString(arr))

// Practice Similar questions
// - https://leetcode.com/problems/reverse-vowels-of-a-string/description/
// - https://leetcode.com/problems/reverse-string-ii/description/


// Without modify original array
// function reverseString(s){
//     let rev = [];

//     for(let i = s.length-1; i >=0; i--){
//         rev.push(s[i])
//     }
//     return rev
// }
// let arr = ["P","R","A","V","I","N","A"];
// console.log(reverseString(arr))

//----------------------------------------------------------------
// 4. Best time to buy and sell stocks

// function bestProfit(prices){

//     let min = prices[0];
//     let maxProfit = 0;
//     for(let i = 1; i < prices.length; i++){
//         if(prices[i] - min > maxProfit){
//             maxProfit = prices[i]-min;
//         }
//         if(prices[i] < min){
//             min  = prices[i]
//         }
//     }
//     return maxProfit;
// }

// let arr = [7,1,5,3,6,4];
// console.log(bestProfit(arr));

// Practice Similar questions
// - https://leetcode.com/problems/maximum-subarray/description/
// - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
// - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
// - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
// - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
// - https://leetcode.com/problems/sum-of-beauty-in-the-array/description/
// - https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/
// - https://leetcode.com/problems/maximum-profit-from-trading-stocks/description/
// - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/description/


//------------------------------------------------------------
// 5. Merge Sorted Array;

// 1. bruite force approch

// var merge = function(nums1, m, nums2, n) {
//     let nums1Copy = nums1.slice(0, m);

//     nums1Copy = nums1Copy.concat(nums2);

//     nums1Copy.sort((a, b) => a - b);

//     for (let i = 0; i < nums1Copy.length; i++) {
//         nums1[i] = nums1Copy[i];
//     }
   
// };

//  Time complexity (m+n log (m+n))

// 2. two pointer approch


// function mergeSortedArray(nums1, m, nums2,n){
//     let nums1Copy = nums1.slice(0,m);
//     let p1 = 0;
//     let p2 = 0;

//     for(let i = 0; i < m+n;i++){
//         if(p2 >=n || (p1 < m && nums1Copy[p1] < nums2[p2])){
//             // this condition is very very important

//             // console.log(nums1Copy[p1], +" "+nums2[p2],+ " "+nums1[i])
//             nums1[i] = nums1Copy[p1];
//             p1++
//         }else{
//             nums1[i] = nums2[p2];
//             p2++
//         }
//     }
//     return nums1

// }

// let arr1 = [1,2,3,0,0,0];
// let arr2 = [2,5,6]
// console.log(mergeSortedArray(arr1,3,arr2,3))
// time complexity =>(log (m+n))

// 3. Without extra space -> solve using reverse order

// function mergerSortedArray(nums1,m,nums2,n){
//     let p1 =  m-1;
//     let p2 = n-1

//     for(let i = m+n-1; i >=0; i--){
        
//         if(p2 < 0) break

//         if(p1 >=0 && nums1[p1] > nums2[p2]){
//             nums1[i] = nums1[p1];
//             p1--;
//         }else{
//             nums1[i] = nums2[p2];
//             p2--;
//         }
//     }
//     return nums1
// }

// let nums1 = [1,2,3,0,0,0];
// let nums2 = [2,5,6];
// console.log((mergerSortedArray(nums1,3,nums2,3)))

// Practice Similar Questions
// - https://leetcode.com/problems/merge-two-sorted-lists/description/
// - https://leetcode.com/problems/squares-of-a-sorted-array/description/
// - https://leetcode.com/problems/interval-list-intersections/description/
// - https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/description/

//-----------------------------------------------------------
// 6. Move Zeros
// two pointer approch

// function moveZeros(nums){
//     let p1 = 0;

//     for(let i = 0; i< nums.length; i++){
//         if(nums[i] !== 0 ){
//             [nums[p1], nums[i]] = [nums[i],nums[p1]]
//             p1++
//         }
//     }
//     return nums
// }

// let arr = [0,1,0,2,13,3,3]

// console.log(moveZeros(arr))


// function moveZeros(nums){
//     let p1 = 0;

//     for(let i  = 0; i < nums.length; i++){
//         if(arr[i] !== 0 ){
//             nums[p1] = nums[i]; // shift current value to the p1 position
//             p1++; // update the next position
//         }
//     }

//     // fill all the remaining element to the zero
//     for(let i = p1; i < nums.length; i++){
//         nums[i] = 0;
//     }

//     return nums;
// }


// let arr = [0,0,0,0];
// console.log(moveZeros(arr))

//-----------------------------------------------------------
// 7. Max Consecutive Ones

// function maxConsecutive(nums){
//     let currentCount = 0
//     let maxCount = 0

//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] ===1){
//             currentCount++
//         }else{
//             // updating maxcount between current and maxcount
//              maxCount = Math.max(currentCount,maxCount)
//              currentCount = 0
//         }
//     }
//     // returning max value between current and maxcount which one is grater
//     return Math.max(currentCount,maxCount);

// }
// console.log(maxConsecutive([1,1,0,1,1,1]))

// Practice similar questions
// - https://leetcode.com/problems/max-consecutive-ones-ii/description/
// - https://leetcode.com/problems/max-consecutive-ones-iii/description/
// - https://leetcode.com/problems/consecutive-characters/description/
// - https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/
// - https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/description/
// - https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/description/

//-------------------------------------------------------------------------------

// 8.Missing Number
// function missingNumber(nums){
//     let n = nums.length;
//     let totalSum = n * (n + 1) / 2;
//     let partialSum = 0;

//     for(let i = 0; i < nums.length; i++){
//         partialSum = partialSum + nums[i]
//     }

//     return totalSum - partialSum;
    
// }

// console.log(missingNumber([4,0,1,2,5]))

// Practice Similar questions
// - https://leetcode.com/problems/first-missing-positive/description/
// - https://leetcode.com/problems/single-number/description/
// - https://leetcode.com/problems/find-the-duplicate-number/description/
// - https://leetcode.com/problems/couples-holding-hands/description/
// - https://leetcode.com/problems/find-unique-binary-string/description/
// - https://leetcode.com/problems/find-the-largest-almost-missing-integer/description/

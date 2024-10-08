// Exercise:1 You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:Input: jewels = "aA", stones = "aAAbbbb" Output: 3
// Example 2:Input: jewels = "z", stones = "ZZ" Output: 0

const { set } = require("mongoose")

function numJewelsInStone(jewels,stones){
  let count=0
  let arrStones=stones.split("")
  let arrJewel=jewels.split("")
  for(let i=0;i<arrJewel.length;i++){
    for(let j=0;j<arrStones.length;j++){
      if(arrJewel[i]===arrStones[j]){
        count++
      }
      else{
        count
      }
    }

  }
  return(count)
}
console.log(numJewelsInStone("aA","aAAbbbb"))
console.log(numJewelsInStone("z","ZZ"))

// Exercise:2 You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
// Given the string command, return the Goal Parser's interpretation of command.
// Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:
// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
function goalParser(command){
return command.replaceAll("()","o").replaceAll("(al)","al")
}

console.log(goalParser("G()()()()(al)"))

// Exercise: 3 A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
// Example 1:
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
// Example 2:
// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words. 
// In this example, the second and third sentences (underlined) have the same number of words.
function maxNumberOfWords(sentences){
  let count=0
  for(let i=0;i<sentences.length;i++){
    let sentence=sentences[i]
    let words=sentence.split(" ")
    let wordsCount=words.length
    if(wordsCount>count){
      count=wordsCount
    }
  }
  return count
}
console.log(maxNumberOfWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

// Exercise: 4 Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.
// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
function balancedString(s){
  let l=0
  let r=0
  let count=0
  for(let i=0;i<s.length;i++){
    if(s[i]==='R'){
      r++
    }else{
      l++
    }
    if(l===r){
      count++
    }

  }
  return count
}
console.log(balancedString("RLRRLLRLRL"))

// Exercise:5 You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
// Example 1:Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

function shuffleString(s,indices){ 
  let newArr=[]
  for(let i=0;i<indices.length;i++){
    newArr[indices[i]]=s[i]
  }
  return newArr.join("")
  }
  console.log(shuffleString("codeleet",[4,5,6,7,0,2,1,3]))

// Exercise 6:You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
function countMatches(items,ruleKey,ruleValue){
  let count =0
  let indexValue
  if(ruleKey ==="type"){
    indexValue=0
  }else if(ruleKey ==="color"){
    indexValue=1
  }else{
    indexValue=2
  }
  items.forEach(item => {
    if(item[indexValue]===ruleValue){
      count++
    }
  });
  return count
}
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"))

// Exercise:7 Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function firstOccurence(needle,haystack){
  let indexOfFirst = haystack.indexOf(needle)
  return indexOfFirst
}
console.log(firstOccurence("sad","sadbutsad"))
console.log(firstOccurence("leetcode","leeto"))

// Exercise :7 Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

function createCounter(n){
  return function counter(){
    let count=n
    n=n+1 
    console.log(count)
  }

}
 
 const counter = createCounter(10)
 counter() // 10
  counter() // 11
  counter() // 12

// Exercise :8    Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
// console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis))}
console.log(sleep(100))

// Exercise:9Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.
// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.


Array.prototype.last  =function(){
  if(this.length>0){
    return this[this.length-1]
}else{
    return -1
}
}
const arr=[]
console.log(arr.last())


// Exercise 10: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// // For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

function squareRoot(x){
  if(x<2){
    return  x
}
for(let i=2;i<=x;i++){
    if(i*i===x){
        return i
    }else if((i*i)>x){
        return i-1
    }
}
}
console.log(squareRoot(4))
console.log(squareRoot(8))

// Exercise 11 : Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.
// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]
function getConcat(nums){
  let ans=[]
  for(let i=0;i<nums.length;i++){
    ans.push(nums[i])
  }
  ans.push(...nums)
  return ans
}
console.log(getConcat([1,2,1]))

// Exercise:12 Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

function permutation(nums){
  let ans=[]
  for(let i=0;i<nums.length;i++){
    ans.push(nums[nums[i]])
  }
  return ans
}
console.log(permutation([5,0,1,2,3,4]))
console.log(permutation([0,2,1,5,3,4]))

// Exercise:12 You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.
// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
function findWordsContaining(words,x){
  let index=[]
  for(let i=0;i<words.length;i++){
    if(words[i].includes(x)){
      index.push(i)
    }
  }
  return index
  }

  console.log(findWordsContaining(["leet","code"],"e"))
  console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"))

//   Exercise : 13 You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

//   A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
//   Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
function maximumWealth(accounts){
  let total=[]
  let sum=0
  for(let i =0;i<accounts.length;i++){
    for(j=0;j<accounts[i].length;j++){
      
      sum +=accounts[i][j]
    }
    total.push(sum)
    sum=0
  }
  total = total.sort((a,b) => a-b)

return total[total.length-1]
}
console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))

// Exercise 14: There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

// Example 1:

// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:

// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.
function numberOfEmployeesWhoMetTarget(hours,target){
  let count=0
  for(let i =0;i<hours.length;i++){
    if(hours[i]>=target){
      count++
    }
  }
  return count
}
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2],6))
console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2))

// Exercise:15 Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

// Example 1:

// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
// - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
// Example 2:

// Input: nums = [-6,2,5,-2,-7,-1,3], target = -2
// Output: 10
// Explanation: There are 10 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = -4 < target
// - (0, 3) since 0 < 3 and nums[0] + nums[3] = -8 < target
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = -13 < target
// - (0, 5) since 0 < 5 and nums[0] + nums[5] = -7 < target
// - (0, 6) since 0 < 6 and nums[0] + nums[6] = -3 < target
// - (1, 4) since 1 < 4 and nums[1] + nums[4] = -5 < target
// - (3, 4) since 3 < 4 and nums[3] + nums[4] = -9 < target
// - (3, 5) since 3 < 5 and nums[3] + nums[5] = -3 < target
// - (4, 5) since 4 < 5 and nums[4] + nums[5] = -8 < target
// - (4, 6) since 4 < 6 and nums[4] + nums[6] = -4 < target

function countPairs(nums,target){
  let count=0
  for(let i = 0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
      if((i<j)&&(nums[i]+nums[j]< target)){
        count ++
      }
    }
  }
  return count
}
console.log(countPairs([-1,1,2,3,1],2))
console.log(countPairs([-6,2,5,-2,-7,-1,3],-2))

// Exercise:16 Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
function runningSum(nums){
  let runningSum=[]
  runningSum.unshift(nums[0])
  for(let i=1;i<nums.length;i++){
    runningSum[i] =runningSum[i-1]+nums[i]
  }
  return runningSum
}

console.log(runningSum([1,2,3,4]))

// Exercise : 17 Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
function smallerNumbersThanCurrent(nums){
  let smallNumsArr=[]
  let sum=0
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
      if(nums[j]<nums[i]){
        sum = sum +1
      }
      
    }
    smallNumsArr.push(sum)
    sum=0
  }
  return smallNumsArr
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))

// Exercise:18 Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
function leftRightDifference(nums){
let leftArr=[]
let rightArr=[]
let answer=[]
leftArr[0]=0
let leftSum=0
let rightSum=0
for(let i=0;i<nums.length-1;i++){
  leftSum =leftSum+nums[i]
  leftArr.push(leftSum)
}
for(let j=0;j<nums.length;j++){
  for(k=j+1;k<nums.length;k++){
    rightSum = rightSum +nums[k]
  }
    rightArr.push(rightSum)
    rightSum=0
  }
for(let p=0;p<nums.length;p++){
  answer[p]=Math.abs(leftArr[p]-rightArr[p])
}
console.log(answer)
}

leftRightDifference([10,4,8,3])
leftRightDifference([1])

// Exercise 19:Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.
// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// Example 2:

// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]
// Example 3:

// Input: nums = [1], index = [0]
// Output: [1]
// function createTargetArray(nums,index){
//   let target=[]
//   for(let i=0;i<nums.length;i++){
//     target.splice(index[i],0,nums[i])
//   }
//   console.log(target)
// }


function createTargetArray(nums,index){
  let target=[]
  nums.forEach((num,idx) => {
    target.splice(index[idx],0,num)
    
  });
  console.log(target)
}
createTargetArray([0,1,2,3,4],[0,1,2,2,1])

// Exercise 20:Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true, word2 = ["abcddefg"]

function arrayStringsAreEqual(word1,word2){
  let word1Sum=""
  let word2Sum =""
  for(let i=0;i<word1.length;i++){
    word1Sum +=word1[i]
    }
    for(let j=0;j<word2.length;j++){
      word2Sum +=word2[j]
      }
  let isEqual=word1Sum===word2Sum ? true : false
  return isEqual
}

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))
// Exercise:21 Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

 

// Example 1:

// Input: n = 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:

// Input: n = 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
function divisorGame(n){
  return n%2==0 ? true : false
}
console.log(divisorGame(2))
console.log(divisorGame(3))


// Example :22 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
function missingNumber(nums){
let n
for(let i=0;i<=nums.length;i++){
if(nums.includes(i)===false){
  n=i
}
}
return n  
}


console.log(missingNumber([0,1]))
console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

// Exercise:23 A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:

// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".
// Example 3:

// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"

function truncateSentence(s,k){
let sentenceArr=s.split(" ")
let outputArr=[]
for(let i=0;i<k;i++){
outputArr[i]=sentenceArr[i]
}
return outputArr.join(" ")
}
console.log(truncateSentence("Hello how are you Contestant",4))
console.log(truncateSentence("What is the solution to this problem",4))
console.log(truncateSentence("chopper is not a tanuki",5))

// Exercise:24 You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.
// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

function differenceOfSum(nums){
  let sumNums=0
  let sumDigits=0
  nums.forEach(element => {
    sumNums +=element
  })
  let digits=nums.join("").split("").map(Number)
  digits.forEach(digit => {
    sumDigits+=digit
  });
  return sumNums - sumDigits
}

console.log(differenceOfSum([1,15,6,3]))
console.log(differenceOfSum([1,2,3,4]))

// Exercise:25 You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.
// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
// Example 2:

// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
function arithmeticTriplets(nums,diff){
  let count=0
  for(let i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
      for(k=j+1;k<nums.length;k++){
        if((nums[j]-nums[i])==diff && (nums[k]-nums[j])==diff){
          count++
        }
      }
    }
  }
  return count
}
console.log(arithmeticTriplets([0,1,4,6,7,10],3))
console.log(arithmeticTriplets([4,5,6,7,8,9],2))

// Exercise: 26 Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]
function countKDifference(nums,k){
  let count =0
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(Math.abs(nums[j]-nums[i])==k){
        count ++
      }
    }
  
  }
  return count
}
console.log(countKDifference([1,2,2,1],1))
console.log(countKDifference([1,3],1))
console.log(countKDifference([3,2,1,5,4],2))

// Exercise: 27 Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66
function sumOddLengthSubarrays(arr){
  let add=0
  for(let i =0;i<arr.length;i++){
    for(let j=i;j<arr.length;j+=2){
        for(k=i;k<=j;k++){
          add+=arr[k]
          }
    }
    
  }
  return add
  }

console.log(sumOddLengthSubarrays([1,4,2,5,3]))
console.log(sumOddLengthSubarrays([1,2]))
console.log(sumOddLengthSubarrays([10,11,12]))
// Exercise:28 The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.
// Example 1:
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.
// Example 2:
// Input: nums = [4,2,5,9,7,4,8]
// Output: 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
// The product difference is (9 * 8) - (2 * 4) = 64.
function maxProductDifference(nums){
let sortArr=nums.sort((a,b)=>a-b)
return ((nums[nums.length-1]*nums[nums.length-2])-(nums[0]*nums[1])) 
}
console.log(maxProductDifference([5,6,2,7,4]))
console.log(maxProductDifference([4,2,5,9,7,4,8]))

// Exercise:29 Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.
// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively. 
// The acronym formed by concatenating these characters is "aa". 
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy". 
// Hence, s = "ngguoy" is the acronym.

function isAcronym(words,s){
if(words.length!=s.length){
  return false
}
for(let i=0;i<words.length;i++){
  if(words[i][0]!=s[i]){
    return false
  }
}
return true
}
console.log(isAcronym(["alice","bob","charlie"],"abc"))
// console.log(isAcronym(["an","apple"],"a"))
// console.log(isAcronym(["never","gonna","give","up","on","you"],"ngguoy"))
console.log(isAcronym(["dvn","acafe"],"dp"))

// Exercise:30 International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

 // Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

// Input: words = ["a"]
// Output: 1
// function uniqueMorseRepresentations(words,s){
//   if(words.length!=s.length){
//     return false
//   }
//   for(let i=0;i<words.length;i++){
//     if(words[i][0]!=s[i]){
//       return false
//     }
//   }
//   return true
// }
// uniqueMorseRepresentations(["gin","zen","gig","msg"],)
// Exercise:30 You are given positive integers n and m.

// Define two integers, num1 and num2, as follows:

// num1: The sum of all integers in the range [1, n] that are not divisible by m.
// num2: The sum of all integers in the range [1, n] that are divisible by m.
// Return the integer num1 - num2.

 

// Example 1:

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.
// Example 2:

// Input: n = 5, m = 6
// Output: 15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// - Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// We return 15 - 0 = 15 as the answer.
// Example 3:

// Input: n = 5, m = 1
// Output: -15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
// - Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
// We return 0 - 15 = -15 as the answer.

function differenceOfSums(n,m){
  let num1=0
  let num2=0
  for(let i=1;i<=n;i++){
    if(i%m !=0){
      num1 +=i
    }else{
      num2 +=i
    }
  
  }

  return num1-num2
}
console.log(differenceOfSums(10,3))
// Exercise :31 Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

 

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
function countDigits(num){
  let count=0
  let str=num.toString().split("")
  for(let i=0;i<str.length;i++){
    if(num%str[i]==0){
      count++
    }
  }
  return count
}
console.log(countDigits(7))
console.log(countDigits(121))
console.log(countDigits(1248))

// Exercise:32Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
function isSameAfterReversals(num){
  let arr=num.toString().split("")
  if(num==0){
    return true
  }
  if(arr[arr.length-1]==0){
    return false
  }else{
    return true
  }

}
console.log(isSameAfterReversals(526))
console.log(isSameAfterReversals(1800))
console.log(isSameAfterReversals(0))

// Exercise:33Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
function reverse(x){
  let rev=0
for(;x>0;x=x/10){
    let rem=x%10
    rev = rev*10+rem
  
  }
  return rev
}
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))

// Exercise :34 There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

 

// Example 1:

// Input: seats = [3,1,5], students = [2,7,4]
// Output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.
// Example 2:

// Input: seats = [4,1,5,9], students = [1,3,2,6]
// Output: 7
// Explanation: The students are moved as follows:
// - The first student is not moved.
// - The second student is moved from from position 3 to position 4 using 1 move.
// - The third student is moved from from position 2 to position 5 using 3 moves.
// - The fourth student is moved from from position 6 to position 9 using 3 moves.
// In total, 0 + 1 + 3 + 3 = 7 moves were used.
// Example 3:

// Input: seats = [2,2,6,6], students = [1,3,2,6]
// Output: 4
// Explanation: Note that there are two seats at position 2 and two seats at position 6.
// The students are moved as follows:
// - The first student is moved from from position 1 to position 2 using 1 move.
// - The second student is moved from from position 3 to position 6 using 3 moves.
// - The third student is not moved.
// - The fourth student is not moved.
// In total, 1 + 3 + 0 + 0 = 4 moves were used.
function minMovesToSeat(seats,students){
  seats.sort((a,b) =>a-b)
  students.sort((a,b)=>a-b)
  // console.log(seats.length)
  // console.log(students.length)
  // let n=seats.length
  let moves=0
  for(let i=0;i<seats.length;i++){
    moves +=Math.abs(seats[i]-students[i])
  }
  return moves
}

// console.log(minMovesToSeat([2,2,6,6],[1,3,2,6]))
// console.log(minMovesToSeat([4,1,5,9],[1,3,2,6]))
// console.log(minMovesToSeat([3,1,5],[2,7,4]))
console.log(minMovesToSeat([3,20,17,2,12,15,17,4,15,20],[10,13,14,15,5,2,3,14,3,18]))

// Exercise:35 Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
// Example 3:

// Input: nums = [3,7]
// Output: 12

function maxProduct(nums){

  nums.sort((a,b)=>a-b)
  return(nums[nums.length-2]-1)*(nums[nums.length-1]-1)
   
}
console.log(maxProduct([3,4,5,2]))
console.log(maxProduct([1,5,4,5]))
console.log(maxProduct([3,7]))

// Exercise 36:You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

function dominanIndex(nums){
  let max=0
  let idx=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
      max=nums[i]
      idx=i
    }
  }
  for(let j=0;j<nums.length;j++){
    if(max>=(nums[j]+[nums[j]])){
      return idx
    }
  }
  return -1
  }



console.log(dominanIndex([3,6,1,0]))
console.log(dominanIndex([1,2,3,4]))
console.log(dominanIndex([0,0,0,1]))

// Exercise:37 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums){
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i=i+2){
    if(nums[i]!==nums[i+1]){
      return nums[i]
      }
    
  }
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))

// Exercise :38 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
function isPalindrome(s){
  let str=s.replace(/[^A-Z0-9]/ig, "").toLowerCase()

  for(let i=0;i<str.length;i++){
    if(str[i]!=str[str.length-i-1]){
      return false
    }
  }
  return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
// isPalindrome("race a car")

// Exercise:39 Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
// function findDisappearedNumbers(nums){
//   let newArr=[]
//   for(let i=0;i<nums.length;i++){
//     if((i+1)!=nums[i]){
//       newArr.push(i+1)
//     }
//   }
//   return newArr
// }
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// Exercise 39 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.
// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
 

// Constraints:

// 1 <= n <= 231 - 1
function arrangeCoins(n){
  let sum =0
  for (let i=0;i<=n;i++){
    sum=sum+i
    if(sum===n){
      return i
    }
    if(sum>n){
      return i-1
    }
  }
}
console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
// Exercise:40 You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.
function findTheDifference(s,t){
  let sArr=s.split("").sort()
  let tArr=t.split("").sort()
for(let i=0;i<tArr.length;i++){
  if(i>sArr.length-1){
    return tArr[i]
  }else if(sArr[i]!==tArr[i]){
    return tArr[i]
  }
}
}

console.log(findTheDifference("abcd","abcde"))
console.log(findTheDifference("","y"))

// Exercise : 41 Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 

// Constraints:

// 0 <= s.length <= 300
// s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
// The only space character in s is ' '.

function countSegments(s){
  let count=0
    let arr=s.split(" ")
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==''){
        count ++
      }
    }
  return count
}

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("Hello"))
console.log(countSegments(""))

// Exercise:42 You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
// Now, first Bob will append the removed element in the array arr, and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.

 

// Example 1:

// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
// Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
// At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
// Example 2:

// Input: nums = [2,5]
// Output: [5,2]
// Explanation: In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// nums.length % 2 == 0

function numberGame(nums){
  let alice=[]
  let bob=[]
  let gamePlay=[]
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i=i+2){
    alice.push(nums[i])
    bob.push(nums[i+1])
  }
  for(let j=0;j<alice.length;j++){
    gamePlay.push(bob[j])
    gamePlay.push(alice[j])
  }
  return gamePlay
}

console.log(numberGame([5,4,2,3]))
console.log(numberGame([2,5]))

// Exercise:43 Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
function findMaxConsecutiveOnes(nums){
  let count =0
  let newArr=[]
  for(let i =0;i<nums.length;i++){
    if(nums[i]===1){
      count=count+1
    }else if(nums[i]===0){
      count=0
    }
    newArr.push(count)
  }
  newArr.sort((a,b)=>a-b)
  return newArr[newArr.length-1]
}
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))

// Exercise :44 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

function moveZeroes(nums){
  let size=nums.length
  for(let i=0;i<size;i++){
    if(nums[i]===0){
      nums.splice(i,1)
      nums.push(0)
      
      i--
      size--
    }
  }
  return nums
}
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0,1]))
console.log(moveZeroes([0,0,1]))

// Exercise:46 Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

function firstUnique(s){
for(let i=0;i<s.length;i++){
  if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
    return i
  }
  }
  return -1
}

console.log(firstUnique("leetcode"))
console.log(firstUnique("loveleetcode"))
console.log(firstUnique("aabb"))

// Exercise :47 Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
function majorityElement(nums){
  const majorityObj={}
  let majority=0
  let majorityKey=""
  for (let num of nums){
    majorityObj[num] =majorityObj[num] ? majorityObj[num]+1 :1
  }
  for (let ele in majorityObj){
    if(majorityObj[ele] >majority){
      majority=majorityObj[ele]
      majorityKey=ele
    }
  }
  return majorityKey
}
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

// Exercise :48 Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

function wordPattern(pattern,s){
  let sArr=s.split(" ")
  let map= new Map()
  if(sArr.length !=pattern.length){
    return false
  }
  if(new Set(sArr).size!=new Set(pattern).size){
    return false
  }
  for(let i=0;i<pattern.length;i++){
    if(map.has(pattern[i])&&map.get(pattern[i])!=sArr[i]){
      return false
    }
    map.set(pattern[i],sArr[i])
  }
  return true
}
console.log(wordPattern( "abba","dog cat cat dog"))
console.log(wordPattern("abba","dog cat cat fish"))
console.log(wordPattern("aaaa","dog cat cat dog"))

// Example 49:You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.
function sortPeople(names,heights){
  let sortArr=[]
  let newArr=[]
  for(let i=0;i<heights.length;i++){
    let obj={
      name :names[i],
      heights : heights[i]
    }
    sortArr.push(obj)
  }
  sortArr.sort((a,b) => b.heights-a.heights)
  for(let j=0;j<sortArr.length;j++){
    newArr[j]=sortArr[j].name
  }
  return newArr
}

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))
console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]))

// Exercise : 50 You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"
// function destCity(paths){
//   let destination=paths[paths.length-1]
//   return destination[destination.length-1]
// }

// console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))

// Exercise : 50 You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 21
// Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4. 
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.  
// Example 2:

// Input: nums = [2,7,1,19,18,3]
// Output: 63
// Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6. 
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63. 
 

// Constraints:

// 1 <= nums.length == n <= 50
// 1 <= nums[i] <= 50
function sumOfSquares(nums){
  let sum =0
  let idx=1
  nums.forEach((num) => {
    if(nums.length%idx==0){
      sum = sum + (num*num)
    }
    idx++
  })
  return sum
}
console.log(sumOfSquares([1,2,3,4]))
console.log(sumOfSquares([2,7,1,19,18,3]))

// Exercise : 51 Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

function firstPalindrome(words){
  for(let i=0;i<words.length;i++){
    let word=words[i].split('').reverse().join('')
    if(word===words[i]){
      return word
    }
  
  }
  return ''
}
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
console.log(firstPalindrome(["notapalindrome","racecar"]))
console.log(firstPalindrome(["def","ghi"]))

// Exercise 52:Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// function groupAnagrams(strs){
//   let anagrams=[]
//   strs.forEach(element => {
    
//   });

// }
// Exercise :52 Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

function findDifference(nums1,nums2){
let answer=[[],[]]
nums1=[...new Set(nums1)]
nums2=[... new Set(nums2)]
for (let val of nums1){
  if(!nums2.includes((val))){
    answer[0].push(val)
  }
}
for (let val of nums2){
  if(!nums1.includes((val))){
    answer[1].push(val)
  }
} 
return answer
} 
console.log(findDifference([1,2,3],[2,4,6]))
console.log(findDifference([1,2,3,3],[1,1,2,2]))

// Exercise : 53 Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
function uniqueOccurrences(arr){
  let map= new Map()
  let set=new Set()
  for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
      map.set(arr[i],map.get(arr[i])+1)
    }else{
      map.set(arr[i],1)
    }
  }
  for(let val of map.values()){
    set.add(val)
  }
    if(map.size===set.size){
    return true
  }else{
    return false
  }
}
console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))

// Exercise : 54 You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

function sumOfUnique(nums){
  let map=new Map()
  let sum=0
  for(let i=0;i<nums.length;i++){
    if(map.has(nums[i])){
      map.set(nums[i],map.get(nums[i])+1)
    }else{
      map.set(nums[i],1)
    }
  }
  for (let [key,value] of map){
    if(value===1){
      sum = sum + key
    }
  }
  return sum
}
console.log(sumOfUnique([1,2,3,2]))
console.log(sumOfUnique([1,1,1,1,1]))

// Exercise:55 Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
function findNumbers(nums){
  let count=0
  for(let i=0;i<nums.length;i++){
    let str=String(nums[i]).length
      if(str%2===0){
      count++
    }
  }
  return count
}
console.log(findNumbers([12,345,2,6,7896]))
// findNumbers([12,345,2,6,7896])

// Exercise:56 Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

 

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
// Example 3:

// Input: nums = [2,1,3]
// Output: 2
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer. 
function findNonMinOrMax(nums){
  nums.sort((a,b)=>a-b)
  let min=nums[0]
  let max=nums[nums.length-1]
  for(let i=0;i<nums.length;i++){
    if(nums[i]!=min && nums[i]!=max){
      return nums[i]
    }
  }
  return -1
}

console.log(findNonMinOrMax([3,2,1,4]))
console.log(findNonMinOrMax([1,2]))

// Exercise:57 Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"

function toLowerCase(s){
  let toLowerCaseStr=""
  for(let i=0;i<s.length;i++){
    let code=s.charCodeAt(i)
    if(code>64 && code <97){
      code=code+32
    }
    let lowerCase=String.fromCharCode(code)
    toLowerCaseStr=toLowerCaseStr.concat(lowerCase)
  }
  return toLowerCaseStr
}

console.log(toLowerCase("Hello"))

// Exercise:58A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

function checkIfPangram(sentence){
  let set=new Set()
  for(let i=0;i<sentence.length;i++){
    set.add(sentence[i])
  }
  if(set.size==26){
    return true
  }else{
  return false
  }
}
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))


// Exercise 69 :Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

// Return the final string that will be present on your laptop screen.

function solution(s){
  // get the parameter s as input (0 indexed String)
  //  create an empty string str
  // iterate each character in s string
  //check the charater is (i) or not
  //if the charater is not i means store it in str string
  // else if the character is (i) reverse the str string
let str=[]
for(let i = 0;i<s.length;i++){
  if(s[i]==='i'){
    str.reverse()
    continue
  }
  else{
    str.push(s[i])
  }
}
return str.join("")

}

console.log(solution("pointer"))
console.log(solution("coincidence"))


// Exercise : 70 Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
function reverseWords(s){
  let newArr=[]
  let temp=""
    let sArr=s.split(" ")
  for(let i=0;i<sArr.length;i++){
    for(let j=sArr[i].length-1;j>=0;j--){
      temp +=sArr[i][j]
    }
    newArr.push(temp)
    temp=""
  }

  return newArr.join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords('Mr Ding'))


// Exercise : 71 You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.

// Return an array that consists of indices of peaks in the given array in any order.

// Notes:

// A peak is defined as an element that is strictly greater than its neighboring elements.
// The first and last elements of the array are not a peak.
 

// Example 1:

// Input: mountain = [2,4,4]
// Output: []
// Explanation: mountain[0] and mountain[2] can not be a peak because they are first and last elements of the array.
// mountain[1] also can not be a peak because it is not strictly greater than mountain[2].
// So the answer is [].
// Example 2:

// Input: mountain = [1,4,3,8,5]
// Output: [1,3]
// Explanation: mountain[0] and mountain[4] can not be a peak because they are first and last elements of the array.
// mountain[2] also can not be a peak because it is not strictly greater than mountain[3] and mountain[1].
// But mountain [1] and mountain[3] are strictly greater than their neighboring elements.
// So the answer is [1,3].

function findPeaks(mountain){
  let peaks=[]
  for(let i=1;i<mountain.length-1;i++){
    if((mountain[i]>mountain[i-1]) && (mountain[i]>mountain[i+1])){
      peaks.push(i)
    }
  }
  return peaks

}

console.log(findPeaks([1,4,3,8,5]))

// Exercise:72 You are given two 0-indexed integer arrays nums and divisors.

// The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

// Return the integer divisors[i] with the maximum divisibility score. If there is more than one integer with the maximum score, return the minimum of them.

 

// Example 1:

// Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
// Since divisors[2] has the maximum divisibility score, we return it.
// Example 2:

// Input: nums = [20,14,21,10], divisors = [5,7,5]
// Output: 5
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
// The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
// The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
// Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).
// Example 3:

// Input: nums = [12], divisors = [10,16]
// Output: 10
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 10.
// The divisibility score of divisors[1] is 0 since no number in nums is divisible by 16.
// Since divisors[0] and divisors[1] both have the maximum divisibility score, we return the minimum of them (i.e., divisors[0]).
 
function maxDivScore(nums,divisors){
  let maxScore={}
  let count=0
  for(let i=0;i<divisors.length;i++){
      // console.log(divisors[i])
    for(let j=0;j<nums.length;j++){
      // console.log(nums[j])
      if(nums[j] % divisors[i] ===0){
        count=count+1
        
      }
    }
    maxScore[divisors[i]]=count
    }
    count =0
    console.log(maxScore)
  }
  // maxScore[divisors[i]]=count
 
// }

maxDivScore([20,14,21,10],[5,7,5])


// Exercise 73:Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s){
  const pairs={
    '(':')',
    '{':'}',
    '[':']'

  }
  if(s.length%2!=0){
    return false
  }
  let stack=[]
  
  for( let c of s){
      if(pairs[c]){
      stack.push(pairs[c])
    }else if(stack.pop()!=c){
      return false
    }
  }
  return stack.length===0
}

console.log(isValid("()[]{}"))
console.log(isValid('(}]'))

// Exercise : 74 Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
function containsNearByDup(nums,k){
  let map=new Map()
  for(let i =0;i<nums.length;i++){
    if(map.has(nums[i])){
      if(Math.abs(i-map.get(nums[i]))<=k){
        return true
      }
    }
    map.set(nums[i],i)
  }
  return false
}

console.log(containsNearByDup([1,2,3,1],3))

// Exercise : 75 Sorting the Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

function sortSentence(s){
  let sArr=s.split(" ")
sArr.sort((a,b)=>a[a.length-1]-b[b.length-1])
  let senArr=[]
  for(let i=0;i<sArr.length;i++){
    senArr[i]=sArr[i].replace(/.$/, '')
  }
  return senArr.join(" ")
}

sortSentence("is2 sentence4 This1 a3")
sortSentence("Myself2 Me1 I4 and3")

// Exercise : 76 Minimum Average of Smallest and Largest Elements
// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

 

// Example 1:

// Input: nums = [7,8,3,4,15,13,4,1]

// Output: 5.5

// Explanation:

// step	nums	averages
// 0	[7,8,3,4,15,13,4,1]	[]
// 1	[7,8,3,4,13,4]	[8]
// 2	[7,8,4,4]	[8,8]
// 3	[7,4]	[8,8,6]
// 4	[]	[8,8,6,5.5]
// The smallest element of averages, 5.5, is returned.
// Example 2:

// Input: nums = [1,9,8,3,10,5]

// Output: 5.5

// Explanation:

// step	nums	averages
// 0	[1,9,8,3,10,5]	[]
// 1	[9,8,3,5]	[5.5]
// 2	[8,5]	[5.5,6]
// 3	[]	[5.5,6,6.5]
// Example 3:

// Input: nums = [1,2,3,7,8,9]

// Output: 5.0

// Explanation:

// step	nums	averages
// 0	[1,2,3,7,8,9]	[]
// 1	[2,3,7,8]	[5]
// 2	[3,7]	[5,5]
// 3	[]	[5,5,5]

function minimumAverage(nums){
let avgArr=[]
nums.sort((a,b)=>a-b)
let n=nums.length

for(let j=0;j<n/2;j++){
  let output=(nums[j]+nums[n-1-j])/2
  avgArr[j]=output
}
avgArr.sort((a,b)=>a-b)
return avgArr[0]



}

minimumAverage([7,8,3,4,15,13,4,1])
minimumAverage([1,2,3,7,8,9])


// Exercise:77 905. Sort Array By Parity
// Easy
// Topics
// Companies
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

function sortArrayByParity(nums){
  let numsArr1=[]
  let numsArr2=[]
  let n=nums.length
for(let i=0;i<n-1;i++){
  for(let j=0;j<n-i-1;j++){
    if(nums[j]>nums[j+1]){
      let temp=nums[j]
      nums[j]=nums[j+1]
      nums[j+1]=temp
      
    }
  }
}
for(let k=0;k<n;k++){
  if(nums[k]%2===0){
    numsArr1.push(nums[k])
  }else{
    numsArr2.push(nums[k])
  }
}
return [...numsArr1,...numsArr2]

}


console.log(sortArrayByParity([3,1,2,4]))

// Exercise 78:1436. Destination City
// Attempted
// Easy
// Topics
// Companies
// Hint
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

function destCity(paths){
const source=new Set()
let destination=[]
for(const [src,dest] of paths){
  source.add(src)
  destination.push(dest)
}
for (const dest of destination){
  if(!source.has(dest)){
    return dest
  }
}
}

console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))

// Exercise 79:3190. Find Minimum Operations to Make All Elements Divisible by Three
// Easy
// Topics
// Companies
// Hint
// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

 

// Example 1:

// Input: nums = [1,2,3,4]

// Output: 3

// Explanation:

// All array elements can be made divisible by 3 using 3 operations:

// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.
// Example 2:

// Input: nums = [3,6,9]

// Output: 0

 

// Constraints:

// 1 <= nums.length <= 50
// 1 <= nums[i] <= 50

function minimumOperations(nums){
  let count=0
  for(let num in nums){
    if(num%3!==0){
      count++
    }
  }
  return count
}

console.log(minimumOperations([1,2,3,4]))

// Exercise:80 3162. Find the Number of Good Pairs I
// Easy
// Topics
// Companies
// Hint
// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

 

// Example 1:

// Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1

// Output: 5

// Explanation:

// The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
// Example 2:

// Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3

// Output: 2

// Explanation:

// The 2 good pairs are (3, 0) and (3, 1).

function numberOfPairs(nums1,nums2,k){
  let count=0
  let n=nums1.length
  let m=nums2.length
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(nums1[i]%(nums2[j]*k)===0){
        count++
      }
    }
  }
  return count
}

console.log(numberOfPairs([1,2,4,12],[2,4],3))
console.log(numberOfPairs([1,3,4],[1,3,4],1))

// Exercise:81 3065. Minimum Operations to Exceed Threshold Value I
// Easy
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums, and an integer k.

// In one operation, you can remove one occurrence of the smallest element of nums.

// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

 

// Example 1:

// Input: nums = [2,11,10,1,3], k = 10
// Output: 3
// Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
// After two operations, nums becomes equal to [11, 10, 3].
// After three operations, nums becomes equal to [11, 10].
// At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
// It can be shown that 3 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
// Example 2:

// Input: nums = [1,1,2,4,9], k = 1
// Output: 0
// Explanation: All elements of the array are greater than or equal to 1 so we do not need to apply any operations on nums.
// Example 3:

// Input: nums = [1,1,2,4,9], k = 9
// Output: 4
// Explanation: only a single element of nums is greater than or equal to 9 so we need to apply the operations 4 times on nums.

function minOperations(nums,k){
  let count =0
  for(let num of nums){
    if(num<k){
      count++
    }
  }
  return count
}

console.log(minOperations([1,1,2,4,9],1))
console.log(minOperations([2,11,10,1,3],10))

// exercise:82 3131  You are given two arrays of equal length, nums1 and nums2.

// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

// As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

// Return the integer x.

 

// Example 1:

// Input: nums1 = [2,6,4], nums2 = [9,7,5]

// Output: 3

// Explanation:

// The integer added to each element of nums1 is 3.

// Example 2:

// Input: nums1 = [10], nums2 = [5]

// Output: -5

// Explanation:

// The integer added to each element of nums1 is -5.

// Example 3:

// Input: nums1 = [1,1,1,1], nums2 = [1,1,1,1]

// Output: 0

// Explanation:

// The integer added to each element of nums1 is 0.

 

// Constraints:

// 1 <= nums1.length == nums2.length <= 100
// 0 <= nums1[i], nums2[i] <= 1000
// The test cases are generated in a way that there is an integer x such that nums1 can become equal to nums2 by adding x to each element of nums1.

function addedInteger(nums1,nums2){
  let minNum1=nums1.sort((a,b)=>a-b)
  let minNum2=nums2.sort((a,b)=>a-b)
  return minNum2[0]-minNum1[0]
}

console.log(addedInteger([2,6,4],[9,7,5]))

// Exercise:83 2744. Find Maximum Number of String Pairs
// Easy
// Topics
// Companies
// Hint
// You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

 

// Example 1:

// Input: words = ["cd","ac","dc","ca","zz"]
// Output: 2
// Explanation: In this example, we can form 2 pair of strings in the following way:
// - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
// - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
// It can be proven that 2 is the maximum number of pairs that can be formed.
// Example 2:

// Input: words = ["ab","ba","cc"]
// Output: 1
// Explanation: In this example, we can form 1 pair of strings in the following way:
// - We pair the 0th string with the 1st string, as the reversed string of words[1] is "ab" and is equal to words[0].
// It can be proven that 1 is the maximum number of pairs that can be formed.
// Example 3:

// Input: words = ["aa","ab"]
// Output: 0
// Explanation: In this example, we are unable to form any pair of strings.
function maximumNumberOfStringPairs(words){
  let count =0
  let n=words.length
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      if(words[i]===words[j].split("").reverse().join("")){
        count ++
      }
    }
  }
  return count
}

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))
console.log(maximumNumberOfStringPairs(["aa","ab"]))

// Exercise:83 You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

 

// Example 1:

// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
// Example 2:

// Input: details = ["1313579440F2036","2921522980M5644"]
// Output: 0
// Explanation: None of the passengers are older than 60.
 

// Constraints:

// 1 <= details.length <= 100
// details[i].length == 15
// details[i] consists of digits from '0' to '9'.
// details[i][10] is either 'M' or 'F' or 'O'.
// The phone numbers and seat numbers of the passengers are distinct.

function countSeniors(details){
  let count=0
  console.log("Hello")
  for(let i=0;i<details.length;i++){
    let value=parseInt(details[i][11]+details[i][12])
    if(value>60){
      count++
    }
  }
  return count
}

// console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]))
// console.log(countSeniors(["3991316911M8713","6/725249886O4741","5473888009F5845","4984061663O0864"]))
console.log(countSeniors(["5612624052M0130","5378802576M6424","5447619845F0171","2941701174O9078"]))

// Exercise:84 2956. Find Common Elements Between Two Arrays
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

// answer1 : the number of indices i such that nums1[i] exists in nums2.
// answer2 : the number of indices i such that nums2[i] exists in nums1.
// Return [answer1,answer2].

 

// Example 1:

// Input: nums1 = [2,3,2], nums2 = [1,2]

// Output: [2,1]

// Explanation:



// Example 2:

// Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]

// Output: [3,4]

// Explanation:

// The elements at indices 1, 2, and 3 in nums1 exist in nums2 as well. So answer1 is 3.

// The elements at indices 0, 1, 3, and 4 in nums2 exist in nums1. So answer2 is 4.

// Example 3:

// Input: nums1 = [3,4,2,3], nums2 = [1,5]

// Output: [0,0]

// Explanation:

// No numbers are common between nums1 and nums2, so answer is [0,0].

function findIntersectionValues(nums1,nums2){
let answer1=0
let answer2=0
let n = nums1.length
let m = nums2.length
for(let i=0;i<n;i++){
  if(nums2.includes(nums1[i])){
    answer1++
  }
}
for(let j=0;j<m;j++){
  if(nums1.includes(nums2[j])){
    answer2++
  }
}

return [answer1,answer2]
}

console.log(findIntersectionValues([3,4,2,3],[1,5]))
console.log(findIntersectionValues([4,3,2,3,1],[2,2,5,2,3,6]))

// Exercise:85 1534. Count Good Triplets
// Easy
// Topics
// Companies
// Hint
// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

 

// Example 1:

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// Example 2:

// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.


function countGoodTriplets(arr, a, b, c){
  let count = 0
  let n=arr.length
  for(let i=0;i<n;i++){
    for(let j =i+1;j<n;j++){
      for(let k=j+1;k<n;k++){
        if(Math.abs(arr[i] - arr[j]) <= a &&
        Math.abs(arr[j] - arr[k]) <= b
        && Math.abs(arr[i] - arr[k]) <= c){
          count ++
        }
      }
    }
  }
  
  
  return count;
}

// console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3))
console.log(countGoodTriplets([1,1,2,2,3],0,0,1))

// Exercise :86 151. Reverse Words in a String
// Medium
// Topics
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

function reverseWords(s){
let sArr=s.replace(/\s{2,}/g, ' ').trim().split(" ")
let n=sArr.length-1
for(let i=0;i<n/2;i++){
  let temp=sArr[i]
  sArr[i]=sArr[n-i]
  sArr[n-i]=temp
}
return sArr.join(" ")
}

console.log(reverseWords("the sky is blue"))

// Exercise:87 :345. Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

function reverseVowels(s){
  let sArr=s.split("")
  let start=0
  let end=sArr.length-1
  let vowels=['a','e','i','o','u']

  while(start<end){
    if(vowels.includes(sArr[start].toLowerCase()) && vowels.includes(sArr[end].toLowerCase())){
      let temp=sArr[start]
      sArr[start]=sArr[end]
      sArr[end]=temp
      start++
      end--
    }
    if(!vowels.includes(sArr[start].toLowerCase()))start++
    if(!vowels.includes(sArr[end].toLowerCase()))end--
  }
  return sArr.join("")

  
}


console.log(reverseVowels("leetcode"))

// Exercise:88 1768. Merge Strings Alternately
// Easy
// Topics
// Companies
// Hint
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

function mergeAlternately(words1,words2){
  let mergedString=""
  for(let i=0;i<words1.length || i<words2.length;i++){
    if(i<words1.length){
      mergedString +=words1[i]
    }
    if(i<words2.length){
      mergedString +=words2[i]
    }
  }
  return mergedString
}

console.log(mergeAlternately("abc","pqr"))

// Exercise:89 For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

function gcdOfStrings(str1,str2){
  let n=str1.length
  let m=str2.length
  let gcdStr=""
  let result=Math.min(n,m)
  while(result>0){
    if(n%result==0 && m%result==0){
      let subStr = str1.substring(0, result);
            
      if (str1 === subStr.repeat(n / result) && str2 === subStr.repeat(m / result)) {
          return subStr
    }
    
  }
  result--
}
  return gcdStr

}
// console.log(gcdOfStrings("ABABAB","ABAB"))

console.log(gcdOfStrings("ABCDEF","ABC"))

// Exercise:90 
// 1431. Kids With the Greatest Number of Candies
// Solved
// Easy
// Topics
// Companies
// Hint
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

 

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
 

// Constraints:

// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

function kidsWithCandies(candies, extraCandies){
  let result=[]
  let max=Math.max(...candies)

  for(let i=0;i<candies.length;i++){
    if(candies[i]+extraCandies>=max){
      result[i]=true
    }
    else{
      result[i]=false
    }
  }
  return result
}

console.log(kidsWithCandies([4,2,1,1,2],1))
console.log(kidsWithCandies([2,3,5,1,3],3))

// Exercise:91 1668. Maximum Repeating Substring
// Easy
// Topics
// Companies
// Hint
// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

 

// Example 1:

// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".
// Example 2:

// Input: sequence = "ababc", word = "ba"
// Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
// Example 3:

// Input: sequence = "ababc", word = "ac"
// Output: 0
// Explanation: "ac" is not a substring in "ababc". 
 

// Constraints:

// 1 <= sequence.length <= 100
// 1 <= word.length <= 100
// sequence and word contains only lowercase English letters.

function maxRepeating(sequence, word){
  let count=0
  let repeat=word
  while(true){
    if(sequence.includes(repeat)){
      count++
      repeat +=word
    }
    else{
      break
    }
  }

  return count
}

console.log(maxRepeating("ababc","ab"))
console.log(maxRepeating("ababc","ba"))
console.log(maxRepeating("ababc","ac"))

// Exercise:92 605. Can Place Flowers
// Easy
// Topics
// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

function canPlaceFlowers(flowerbed, n){

  for(let i=0;i<flowerbed.length;i++){
    if((flowerbed[i]==0) && (i==0 || flowerbed[i-1]==0) && (i==flowerbed.length-1 || flowerbed[i+1]==0)){
      flowerbed[i]=1
      n--
      i++
    }

  }

  return n<=0
}

// console.log(canPlaceFlowers([1,0,0,0,1],1))
// console.log(canPlaceFlowers([1,0,0,0,1],2))
console.log(canPlaceFlowers([1,0,0,0,0,0,1],2))


// Exercise:93 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

function productExceptSelf(nums){
  let n=nums.length
  if(n===1){
    return
  }
  let prefix=[]
  let suffix=[]
  let answer=[]
  prefix[0]=1
  for(let i=1;i<n;i++){
    prefix[i]=prefix[i-1]*nums[i-1]
  }
  suffix[n-1]=1
  for(let i=n-2;i>=0;i--){
    suffix[i]=suffix[i+1]*nums[i+1]
  }
  for(let i=0;i<n;i++){
    answer[i]=prefix[i]*suffix[i]
  }
  return answer
}

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))

// Exercise:94 334. Increasing Triplet Subsequence
// Medium
// Topics
// Companies
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

function increasingTriplet(nums){
let first=Infinity
let second=Infinity
for(let num of nums){
  if(num<=first){
    first=num
  }
  else if(num<=second){
    second=num
  }else{
    return true
  }
}
return false
}


// console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
// console.log(increasingTriplet([2,1,5,0,4,6]))

// Exercie:95 443. String Compression
// Medium
// Topics
// Companies
// Hint
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.


function compress(chars){
  let s=""
  let count=1
  let n=chars.length
  for(let i=0;i<n;i++){
    while(i<n-1 && chars[i]==chars[i+1]){
      count++
      i++
    }
    s+=chars[i]
    if(count>1){
      s+=count
    }
    count=1
}
for(let i=0;i<s.length;i++){
  chars[i]=s[i]
}
console.log(chars)
return s.length
}
  
console.log(compress(["a","a","b","b","c","c","c"]))


// Exercise:96 476. Number Complement
// Easy
// Topics
// Companies
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

 

// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

// Constraints:

// 1 <= num < 231

function findComplement(num){
  let numBits=num.toString(2).length
  let power=(1<<numBits)-1
  return num^power
}


console.log(findComplement(5))
console.log(findComplement(1))

// Exercise:97 Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

function isSubsequence(s,t){
  if(s.length>t.length){
    return false
  }
  let i=0
  let j=0
  while(i<s.length && j<t.length){
    if(s[i]==t[j]){
      i++
      
    }
    j++
  }
  if(i==s.length){
    return true
  }else{
    return false
  }
}

console.log(isSubsequence( "abc","ahbgdc"))
console.log(isSubsequence("axc","ahbgdc"))

// Exercise:98:592. Fraction Addition and Subtraction
// Medium
// Topics
// Companies
// Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

// The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

 

// Example 1:

// Input: expression = "-1/2+1/2"
// Output: "0/1"
// Example 2:

// Input: expression = "-1/2+1/2+1/3"
// Output: "1/3"
// Example 3:

// Input: expression = "1/3-1/2"
// Output: "-1/6"
 

// Constraints:

// The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
// Each fraction (input and output) has the format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
// The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
// The number of given fractions will be in the range [1, 10].
// The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

function fractionAddition(expression){
  // 1.parse the fraction
  //2.calculate the LCD for (common denominator)
  //
  let fractions=expression.match(/[+-]?\d+\/\d+/g)

  let numeSum=0
  let denom=1

  //here to find the denominator
  for(let fraction of fractions){
    let [numerator,denominator]=fraction.split('/').map(Number)
  denom=lcm(denom,denominator)
  }

//here to find the numerator
  for(let fraction of fractions){
    let [numerator,denominator]=fraction.split('/').map(Number)
    numeSum += numerator*(denom/denominator)
  }

  let result=gcd(Math.abs(numeSum), denom)
  numeSum /=result
  denom /=result
return `${numeSum}/${denom}`
}

function lcm(a,b){
  return Math.abs(a*b)/gcd(a,b)

}
function gcd(a,b){
  return b===0 ? a : gcd(b,a%b)
}

console.log(fractionAddition("-1/2+1/2+1/3"))



// Exercise:99 590. N-ary Tree Postorder Traversal
// Easy
// Topics
// Companies
// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

 

// Example 1:


// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]
// Example 2:


// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

function buildTree(input) {
  if (input.length === 0) return null;

  const root = new Node(input[0]);
  const queue = [root];
  let index = 2; // Start after the root and the first null

  while (index < input.length) {
    const parent = queue.shift();

    while (index < input.length && input[index] !== null) {
      const child = new Node(input[index]);
      parent.children.push(child);
      queue.push(child);
      index++;
    }

    index++; // Skip the null
  }

  return root; // Return the root of the tree
}

function postorder(root) {
  if (root === null) {
    return [];
  }

  let result = [];

  function traverse(node) {
    if (!node || !Array.isArray(node.children)) {
      return; // Check to ensure node is valid and children is an array
    }

    for (let child of node.children) {
      traverse(child);
    }

    result.push(node.val); // Push the node value after all children have been processed
  }

  traverse(root);
  return result;
}
const input = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14];
const root = buildTree(input);
console.log(postorder(root))


// Exercise : 100 
// 2695. Array Wrapper
// Easy
// Companies
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

// Example 1:

// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10
// Example 2:

// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"
// Example 3:

// Input: nums = [[],[]], operation = "Add"
// Output: 0
// Explanation:
// const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([]);
// obj1 + obj2; // 0
 

// Constraints:

// 0 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// Note: nums is the array passed to the constructor

class ArrayWrapper{
  constructor(nums){
    this.nums=nums
  }
  valueOf(){
    let nums=this.nums
    let sum=0
    for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums[i].length;j++){
        sum=sum+nums[i][j]
      }
    }
    return sum
  }
  stringOf(){
    let str=this.nums
    s.push(str.toString())
    

  }
  
}

let nums=[[1,2],[3,4]]
let obj1=new ArrayWrapper(nums)
let operation="Add"
if(operation=="Add"){
  console.log(obj1.valueOf())
}else if(operation=="String"){
  console.log(obj1.toString())
}


// Exercise:101 1684. Count the Number of Consistent Strings
// Easy
// Topics
// Companies
// Hint
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.

function countConsistentStrings(allowed,words){
  let consistent=0
  for(let i=0;i<words.length;i++){
    let isConsistent=true
    for(let j=0;j<words[i].length;j++){
      if(!allowed.includes(words[i][j])){
        isConsistent = false
        break
      }
    }
    if(isConsistent === true){
      consistent += 1
    }
  }
  

  return consistent
}

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))

console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]))

// Exercise:102:2491. Divide Players Into Teams of Equal Skill
// Medium
// Topics
// Companies
// Hint

// You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

// The chemistry of a team is equal to the product of the skills of the players on that team.

// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

 

// Example 1:

// Input: skill = [3,2,5,1,3,4]
// Output: 22
// Explanation: 
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

// Example 2:

// Input: skill = [3,4]
// Output: 12
// Explanation: 
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.

// Example 3:

// Input: skill = [1,1,2,3]
// Output: -1
// Explanation: 
// There is no way to divide the players into teams such that the total skill of each team is equal.

 

// Constraints:

//     2 <= skill.length <= 105
//     skill.length is even.
//     1 <= skill[i] <= 1000

function dividePlayers(skill){
  if(skill.length%2 !=0){
    return -1
  }
  skill.sort((a,b)=>a-b)

  let n=skill.length
  let target=skill[0]+skill[n-1]
  let sum=0
  for(let i=0;i<n/2;i++){
    let current=skill[n-i-1]+skill[i]
    if(current===target){
      sum += skill[n-i-1]*skill[i]
    }else{
      return -1
    }
  }
  return sum

}

console.log(dividePlayers([4,2,3,3]))
console.log(dividePlayers([3,2,5,1,3,4]))
console.log(dividePlayers([1,3,4]))

/* Exercise:103
1813. Sentence Similarity III
Medium
Topics
Companies
Hint

You are given two strings sentence1 and sentence2, each representing a sentence composed of words. A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of only uppercase and lowercase English characters.

Two sentences s1 and s2 are considered similar if it is possible to insert an arbitrary sentence (possibly empty) inside one of these sentences such that the two sentences become equal. Note that the inserted sentence must be separated from existing words by spaces.

For example,

    s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by inserting "my name is" between "Hello" and "Jane" in s1.
    s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although there is a sentence "s are" inserted into s1, it is not separated from "Frog" by a space.

Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.

 

Example 1:

Input: sentence1 = "My name is Haley", sentence2 = "My Haley"

Output: true

Explanation:

sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".

Example 2:

Input: sentence1 = "of", sentence2 = "A lot of words"

Output: false

Explanation:

No single sentence can be inserted inside one of the sentences to make it equal to the other.

Example 3:

Input: sentence1 = "Eating right now", sentence2 = "Eating"

Output: true

Explanation:

sentence2 can be turned to sentence1 by inserting "right now" at the end of the sentence.

 

Constraints:

    1 <= sentence1.length, sentence2.length <= 100
    sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.
    The words in sentence1 and sentence2 are separated by a single space.



*/

function areSentencesSimilar(sentence1, sentence2) {
  let n=sentence1.split(" ")
  let m=sentence2.split(" ")
  let startCount=0
  let endCount=0
  for(let i=0;i<Math.min(n.length, m.length);i++){
    if(n[i]===m[i]){
      startCount++
    }else{
      break
    }
  }
  for(let i=0;i<Math.min(n.length, m.length);i++){
    if(n[n.length-1-i]===m[m.length-1-i]){
      endCount++
    }else{
      break
    }
  }
  if(startCount + endCount >= n.length || startCount + endCount >= m.length){
    return true
  }
  return false
}

console.log(areSentencesSimilar( "of","A lot of words"))
console.log(areSentencesSimilar("Eating right now","Eating"))
console.log(areSentencesSimilar("My name is Haley","My Haley"))


/* 
Exercise:104
2696. Minimum String Length After Removing Substrings
Solved
Easy
Topics
Companies
Hint

You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

 

Example 1:

Input: s = "ABFCACDB"
Output: 2
Explanation: We can do the following operations:
- Remove the substring "ABFCACDB", so s = "FCACDB".
- Remove the substring "FCACDB", so s = "FCAB".
- Remove the substring "FCAB", so s = "FC".
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.

Example 2:

Input: s = "ACBBD"
Output: 5
Explanation: We cannot do any operations on the string so the length remains the same.


*/

function minLength(s){
  while(s.includes('AB') || s.includes('CD')){
    if(s.includes('AB')){
        s=s.replace('AB','')
    }
    if(s.includes('CD')){
        s=s.replace('CD','')
    }
}
return s.length
}

console.log(minLength("ACBBD"))
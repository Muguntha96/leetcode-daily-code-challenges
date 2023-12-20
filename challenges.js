// Exercise:1 You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:Input: jewels = "aA", stones = "aAAbbbb" Output: 3
// Example 2:Input: jewels = "z", stones = "ZZ" Output: 0

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
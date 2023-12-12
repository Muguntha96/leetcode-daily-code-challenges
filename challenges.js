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
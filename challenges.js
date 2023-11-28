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
  
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


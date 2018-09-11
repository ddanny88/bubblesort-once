
// VOWEL COUNT


/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.*/



function countVowels(str){
    let count = 0;
    let vList = "aeiou";
 
    for (let i = 0; i < str.length; i++){
      if (vList.indexOf(str[i]) !== -1){
        count +=1;
      }
    }
    return count;
 }
 
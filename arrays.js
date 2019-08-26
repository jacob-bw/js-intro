console.log('Arrays');

//challenge
//Write a function that takes an array and an index and prints out that value

const indexAndPrint = (arr, index) => {
    console.log(arr[index])
}

const myArray = [0, 1, 2, 3, "fart", "box", "skeleton", false];

indexAndPrint(myArray, 5);

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const findGreg = () => {
    const doesIncludeGreg - arr.includes('Greg');
    if (arr === 'Greg') {
        console.log("Greg Found")
    } else {
        console.log("he's not here")
    }
}

console.log(findGreg(['a', 'b', 'Greg']));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

// const palindrome = () => {
//    if (reverse(palindrome) = palindrome) {
//        console.log("true, it's a palindrome");
//   } else {
//       console.log("nope. Just a normal backwards setence");
//   }
//}


// function reverseString(palindrome){
//    let palindrome = "";
//    str.split("").forEach(char => palindrome = char + revSrring);
//        return palindrome;}


const isItAPalindrome = (str) => {
    const arrayFromString = str.split('');
    const reversedArray = arrayFromString.reverse();
    const opposite = reversedArray.join();

//const opposite = str.split('').reverse().join('');

    if (str === opposite) {
        return true;
    } else {
        return false;
    }
}



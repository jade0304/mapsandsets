new Set([1,1,2,2,3,4])
// {1, 1, 2, 2, 3, 4}


[...new Set("referee")].join("")
//"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
return "aeiou".includes(char);
}
function vowelCount(str){ 
const vowelMap = new Map();
for (char of str) {
    let lowerCasedChar = char.toLowerCase();
    if (vowelMap.has(lowerCasedChar)) {
        vowelMap.set(lowerCasedChar, vowelMap.get(lowerCasedChar) +1);
    } else {
        vowelMap.set(lowerCasedChar, 1);
    }
}
}
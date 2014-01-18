function FirstCharacterCapitalized(s){var p='substr';return s&&s[p]?s[p](0,1).toUpperCase()+s[p](1):s};
/*
console.log(FirstCharacterCapitalized(['ee']));
console.log(FirstCharacterCapitalized(0));
console.log(FirstCharacterCapitalized("aaa"));
*/

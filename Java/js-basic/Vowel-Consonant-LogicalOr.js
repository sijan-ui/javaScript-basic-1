// Vowel / Consonant

var letter = prompt("Enter the Letter: ");
//letter = letter.toLowerCase(); //user all letter is convert lowerCase

/* // IF ELSE
if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u' || letter=='A' || letter=='E' || letter=='I' || letter=='O' || letter=='U')
    document.write(letter + " is letter vowel.");
else
document.write(letter + " is letter Consonant.");
*/

//Switch
letter = letter.toLowerCase();
switch (letter) {
  case "a":
    document.write("A is Vowel");
    break;
  case "e":
    document.write("E is Vowel");
    break;
  case "i":
    document.write("I is Vowel");
    break;
  case "o":
    document.write("O is Vowel");
    break;
  case "u":
    document.write("U is Vowel");
    break;
  default:
    document.write(letter.toUpperCase() + " is consonant");
}

// Short
/*
switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write("Vowel");
    break;
  default:
    document.write("Consonant");
}
*/
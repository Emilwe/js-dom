

function ispalindrome(string) {
    const length = string.length;
   
    for (let i = 0; i < length / 2; i++) {
       if(string[i] !== string[length - 1 - i]) {
           return (string)+ " is not a palindrome";
       }
    }
    return (string)+" is a palindrome";
   }
   
   const string = prompt ("Skriv inn et ord: ");
   const value = ispalindrome(string);
   console.log(value);
   document.getElementById("out").innerHTML=(value);
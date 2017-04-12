var siblingName = prompt("What is your sibling name");

var yourName = prompt(" What is your name ");

var siblingYear = prompt("which year your sibling was born");

var yourBirthyear = prompt("what is your birthyear");

var yearsOlder;
if(yourBirthyear > siblingYear)
  {
    yearsOlder = yourBirthyear - siblingYear;
    alert(siblingName + " is " + yearsOlder + " years older than " + yourName); 
  }
else
  {
    yearsOlder = siblingYear - yourBirthyear;
    alert(yourName + " is " + yearsOlder + " years older than " + siblingName); 
  }

//alert(" number of years you are older than your sibling is " + yearsOlder);



